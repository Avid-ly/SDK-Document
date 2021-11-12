# 1. 概述

如游戏需要上报游戏时长，请使用以下 API 完成相应在线时长的上报。
&ensp;
# 2. 初始化上报信息

```java
void initDurationReport(String serverName, String serverZone, String uId, String ggId);
```

参数说明

|参数名|说明|
|:----  |-----   |
|serverName |游戏服务器,可以为空  |
|serverZone |玩家所在区服，可以为空 |
|uId |游戏用户 ID，请传入使用的 player ID（请确认与登录上报的 playerId 保持一致）,不可为空  |
|ggId |登录sdk中的用户ID,可以为空 |

# 3. 游戏生命周期回调
>请在TASDK初始化之后调用

请在游戏活跃时(前台)调用下面的方法,请不要频繁调用

```java
void becomeActive();
```

>请在TASDK初始化之后调用

游戏不活跃(后台)调用下面的方法,请不要频繁调用

```java
void resignActive();
```

调用示例：
```csharp
void OnApplicationPause(bool paused)
 {
        if (paused)
        {
        //程序进入后台时执行
	UPTraceApi.resignActive();
        }
        else
        {
         //程序从后台进入前台时
	UPTraceApi.becomeActive();
         }
    }
```