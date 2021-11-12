# 1. 概述
由于登录环节在游戏或应用中至关重要，因此我们单独提供了登录事件方法，以便快速统计登录事件。

如游戏中包含 Facebook 等登录功能，需将登录结果同步至统计服务器以便分析用户数据。请使用以下 API 完成相应登录上报。

> 有关 playerId 定义<br>
> &bull;&ensp;如游戏中同时包含帐号 ID 和角色 ID，则 playerId 参数取“帐号 ID”值。</br>
> &bull;&ensp;如游戏中只包含角色 ID（或游戏 ID），则 playerId 参数取“角色 ID（或游戏 ID）”值。<br>

&ensp;
# 2. 添加引用
所有方法都以 static 定义在`ALYLogin`类中，请将 **ALYLogin** 引用到 Java 代码中。
```java
import com.aly.account.ALYLogin;
```
&ensp;
# 3. 游客登录上报

```java
void guestLogin(String playerId);
```

参数说明

|参数名|说明|
|:----  |-----   |
|playerId |游戏用户 ID，请传入使用的 player ID。  |


调用示例：

```java
ALYLogin.guestLogin("playerId");
```

&ensp;
# 4. Facebook登录上报

```java
void facebookLogin(String playerId, String openId, String openToken);
```

参数说明

|参数名|说明|
|:----  |-----   |
|playerId |游戏用户 ID，请传入使用的 player ID。   |
|openId | Facebook open ID (此参数已废弃，默认传空)。  |
|openToken | Facebook token（此参数为必要参数，不能为空）。  |

调用示例：

```java
ALYLogin.facebookLogin("playerId", "openId", "openToken");
```
&ensp;

# 5. 华为登录上报
有关华为 SDK 登录接口详情，请参考[此处](https://developer.huawei.com/consumer/cn/service/hms/catalog/HuaweiJointOperation.html?page=hmssdk_jointOper_api_reference_c9)。

**方法一：** 无需对登录结果进行验签时，请调用此方法。
```java
/**
 @param appId：游戏的应用 ID，创建游戏后由华为开发者联盟为游戏分配的唯一标识。
 @param cpId：商户 ID，即华为开发者联盟分配给开发者的“支付 ID”。
 @param gameServerId：游戏用户 ID，与 guestLogin() 中的 playerId 参数相同。
 @param playerId：玩家 ID，原始值取自华为 login 接口返回的 playerId 参数。
 */
public static void huaWeiLoginNonAuth(String appId, String cpId, String gameServerId, String playerId);
```

**方法二：** 需根据登录结果进行登录验签时，请调用此方法。
```java
/**
 @param appId：游戏的应用 ID，创建游戏后由华为开发者联盟为游戏分配的唯一标识。
 @param cpId：商户 ID，即华为开发者联盟分配给开发者的“支付 ID”。
 @param gameServerId：游戏用户 ID，与 guestLogin() 中的 playerId 参数相同。
 @param playerId：玩家 ID，原始值取自华为 login 接口返回的 playerId 参数。
 @param playerSSign：登录签名，原始值取自华为 login 接口返回的 gameAuthSign 参数。
 @param playerLevel：玩家等级，原始值取自华为 login 接口返回的 playerLevel 参数。
 @param ts：时间戳，原始值取自华为 login 接口返回的 ts 参数。
 @param displayName：用户昵称，只有 isAuth 为 1 时才返回。
 */
public static void huaWeiLogin(String appId, String cpId, String gameServerId, String playerId,
                               String playerSSign, String playerLevel, String ts, String displayName);
```

&ensp;
# 6. 通用登录上报
> 仅当登录上报类型不在上述范围内时，可调用此方法完成登录上报。

调用此方法时，为确保我们服务器能正确识别并接受各参数，请事先与我们沟通参数内容与编码规则。
```java
/**
 @param type：预先定义的登录平台名称，仅包括'facebook','huawei',''googleplay","twitter","instagram","unknow"。
 @param playerId：游戏用户 ID，同guestLogin()中的playerId参数。
 @param openToken：扩展的登录凭证，具体取值因平台而异。
 */
public static void commonLogin(final String type, final String playerId, final String openToken)；
```