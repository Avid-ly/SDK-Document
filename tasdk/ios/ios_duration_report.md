
# 1 用户时长上报介绍

由于用户时长在游戏或应用中至关重要，因此我们单独提供了用户时长事件上报方法，以便快速统计用户时长。

# 2 前提条件

在您的应用中集成登录上报之前，您必须：

- 按照我们的步骤将TASDK集成到您的项目中。
- 完成项目设置
- 请务必在上报之前初始化TASDK

如游戏需要上报游戏时长，请使用以下 API 完成相应在线时长的上报。

使用前需要先初始化SDK

# 2 用户时长上报

用户时长的上报分为以下几个流程：

1. 添加引用
2. 初始化上报信息
3. 处理生命周期回调

## 2.1 添加引用

在需使用的类中导入`TraceAnalysis.h`：

```Objective-C
#import  <TraceAnalysisSDK/TraceAnalysis.h>
```

## 2.2 初始化上报信息

初始化方法介绍:

```Objective-C
+ (void)initDurationReportWithServerName:(NSString *)serverName serverZone:(NSString *)serverZone uid:(NSString *)uid ggid:(NSString *)ggid;
```

参数说明

|参数名|说明|
|:----  |-----   |
|serverName |游戏服务器,可以为空  |
|serverZone |玩家所在区服，可以为空 |
|uid |游戏用户 ID，请传入使用的 player ID（请确认与登录上报的 playerId 保持一致）,不可为空  |
|ggid |登录sdk中的用户ID,可以为空 |

!> 建议在TASDK初始化完成之后立刻进行 用户时长上报初始化

调用示例：

```Objective-C
[TraceAnalysis initDurationReportWithServerName:@"server01" serverZone:@"zone01" uid:@"uid001" ggid:@"ggid001"];
```

## 2.3 处理生命周期回调

为了能更准确的统计到用户在线时长，需要处理声明周期中`前后台切换`的回调

请在游戏主activity或AppDelegate中对应的生命周期回调方法中调用。

```Objective-C
+ (void)becomeActive;

+ (void)resignActive;
```

调用示例：

```Objective-C
// 回到前台
- (void)applicationDidBecomeActive:(UIApplication *)application {
    [TraceAnalysis becomeActive];
}

// 回到后台
- (void)applicationWillResignActive:(UIApplication *)application {
    [TraceAnalysis resignActive];
}
```

## 2.4 最佳实践

为了方便您理解整个逻辑，我们为您提供了 用户时长上报 整个模块的最佳实践代码供您参考：

```
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    [TraceAnalysis initWithProductId:@" product id" ChannelId:@"your channel id" AppID:@"id + your app id"];
    [TraceAnalysis initDurationReportWithServerName:@"your server name" serverZone:@"your server zone" uid:@"your uid" ggid:@"your ggid"];
    return YES;
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    [TraceAnalysis becomeActive];
}

- (void)applicationWillResignActive:(UIApplication *)application {
    [TraceAnalysis resignActive];
}
```


<br>

到此，您已经完成了用户在线时长上报的集成。

接下来，您可以根据自己的需求，选取对应的功能并集成到项目里：

- [用户标签](/tasdk/ios/ios_tag.md)