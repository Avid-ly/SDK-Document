# 1. 游客登录上报
如通过游客方式登录，需调用此方法上报：
```csharp
/**
 @param playerId 游戏用户ID
 */
void guestLogin(string playerId);
```

调用示例：
```csharp
UPTraceApi.guestLogin ("guest_1234");
```

&ensp;

# 2. Facebook 登录上报
如通过 Facebook 方式登录，需要调用此方法上报：
```csharp
/**
 @param playerId  游戏用户ID
 @param openId    openId (此参数已废弃，默认传空字符串)
 @param openToken openToken（此参数为必要参数，不能为空）
 */
void facebookLogin(string playerId, string openId, string openToken);
```
调用示例：
```csharp
UPTraceApi.facebookLogin ("facebook_user_id", "", "facebook_token");
```

&ensp;




# 3.通用登录上报（支持 Android 与 iOS）

```
public static string LoginTypeGuest 		= "guest";
public static string LoginTypeAas 		= "aas";
public static string LoginTypeFacebook 		= "facebook";
public static string LoginTypeGoogleplay 	= "googleplay";
public static string LoginTypeTwitter 		= "twitter";
public static string LoginTypeInstagram 	= "instagram";
public static string LoginTypeGamecenter 	= "gamecenter";
public static string LoginTypeUlt 		= "ult";
public static string LoginTypeApple 		= "apple";
public static string LoginTypeOther 		= "other";

/**
 * 通用登录上报(Android与Ios均支持)
 * loginType：第三方sdk的类型标识，从上述字段中选择，未定义的登录方式请使用LoginTypeOther参数
 * playerId：玩家ID。
 * loginToken：登录成功后，第三方sdk返回的可用于服务端签名检验的参数
 * extension：扩展透传参数，默认传null
 */
public static void logCommonLogin(string loginType, string playerId, string loginToken, Dictionary<string, string> extension);
```


#4. 华为登录上报（支持 Android）
有关华为 SDK 登录接口详情，请参考[此处](https://developer.huawei.com/consumer/cn/service/hms/catalog/HuaweiJointOperation.html?page=hmssdk_jointOper_api_reference_c9)。

**方法一：** 无需对登录结果进行验签时，请调用此方法。
```csharp
/**
appId：游戏的应用 ID，在创建应用后由华为开发者联盟为应用分配的唯一标识。
cpId：商户 ID，即华为开发者联盟分配给开发者的“支付 ID”。
gameServerId：游戏用户 ID，一般由游戏服务器自己生成。
playerId：玩家 ID，原始值取自华为 login 接口返回的 playerId 参数。
*/
public static void huaWeiLoginNonAuth(string appId, string cpId, string gameServerId, string playerId)
```

**方法二：** 需根据登录结果进行登录验签时，请调用此方法。
```csharp
/**
@param appId：游戏的应用 ID，在创建应用后由华为开发者联盟为应用分配的唯一标识。
@param cpId：商户 ID，即华为开发者联盟分配给开发者的“支付 ID”。
@param gameServerId：游戏用户 ID，一般由游戏服务器自动生成。
@param playerId：玩家 ID，原始值取自华为 login 接口返回的 playerId 参数。
@param playerSSign：登录签名，原始值取自华为 login 接口返回的 gameAuthSign 参数。
@param playerLevel：玩家等级，原始值取自华为 login 接口返回的 playerLevel 参数。
@param ts：时间戳，原始值取自华为 login 接口返回的 ts 参数。
@param displayName：用户昵称，只有 isAuth 为 1 时才返回。
*/
public static void huaweiLogin(string appId, string cpId, string gameServerId, string playerId, string playerSSign, string playerLevel, string ts, string displayName)；
```

&ensp;
