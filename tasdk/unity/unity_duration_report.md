# 1. 概述

如游戏需要上报游戏时长，请使用以下 API 完成相应在线时长的上报。
&ensp;
# 2.前提条件

在您的应用中集成登录上报之前，您必须：

- 按照我们的步骤将TASDK集成到您的项目中。
- 完成项目设置
- 请务必在上报之前初始化TASDK

如游戏需要上报游戏时长，请使用以下 API 完成相应在线时长的上报。

使用前需要先**初始化SDK**


# 3. 初始化上报信息

```csharp
void initDurationReport(String serverName, String serverZone, String uId, String ggId);
```

参数说明

|参数名|说明|
|:----  |-----   |
|serverName |游戏服务器,可以为空  |
|serverZone |玩家所在区服，可以为空 |
|uId |游戏用户 ID，请传入使用的 player ID（请确认与登录上报的 playerId 保持一致）,不可为空  |
|ggId |登录sdk中的用户ID,可以为空 |

# 4. 游戏生命周期回调
>请在TASDK初始化之后调用

请在游戏活跃时(前台)调用下面的方法,请不要频繁调用

```csharp
void becomeActive();
```

>请在TASDK初始化之后调用

游戏不活跃(后台)调用下面的方法,请不要频繁调用

```csharp
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

到此，您已经完成了用户在线时长上报的集成。

接下来，您可以根据自己的需求，选取对应的功能并集成到项目里：

- [用户标签](/tasdk/unity/unity_tag.md)

