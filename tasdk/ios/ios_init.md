# 1 前提条件

在您初始化TASDK之前，您必须：

- 按照我们的步骤将 TASDK 集成到您的项目中。
- 完成项目设置

# 2 SDK初始化

TASDK初始化的主要不在如下所示：

- 引入头文件
- 根据项目找到合适的初始化时机
- 调用初始化方法

## 2.1 引入头文件

在需使用的类中导入头文件

```objective-c
#import  <TraceAnalysisSDK/TraceAnalysis.h>
```

## 2.2 根据项目找到合适的初始化时机

!> 请尽量将TASDK的初始化时机提前，可以提升统计数据的准确性和及时性

一般建议在`AppDelegate`的`- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions`方法中尽早初始化统计 SDK。


## 2.3 调用初始化方法

```objective-c
[TraceAnalysis initWithProductId:@"your productId" ChannelId:@"your channelId" AppID:@"your app id"];
```

其中参数说明如下，对应的参数请联系相关人员获取。

|参数名|说明|
|:----  |-----   |
|productId |分配的产品编号。   |
|channelId | 渠道编号。  |
|appId | 为空或 "id" + Apple ID。<br>注意：AppID 非空时需填入 ID，如：id1128308845。</br>  |

调用示例：

```objective-c
[TraceAnalysis initWithProductId:@"999999" ChannelId:@"32407" AppID:@""];
```

<br>

到此，您已经完成了SDK的初始化。


接下来，您可以根据自己的需求，选取对应的功能并集成到项目里：

- [事件打点](/tasdk/ios/ios_log.md)
- [登录上报（未使用AASDK）](/tasdk/ios/ios_login1.md)
- [登录上报（使用AASDK）](/tasdk/ios/ios_login2.md)
- [支付上报](/tasdk/ios/ios_iap.md)
- [在线用户时长上报](/tasdk/ios/ios_duration_report.md)
- [用户标签](/tasdk/ios/ios_tag.md)

此外，在开发的过程中，如果您有获取TASDK一些参数的需求，可以参考下边的常见问题

# 3 常见参数的说明和获取方式

> <span id="init_faq_1">idfa广告标识符<span>

获取方式

```
#import <AdSupport/AdSupport.h>

NSString *idfa = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
```

提示：需要在用户授权ATT或LAT的情况下才能够获取到

<br>

> <span id="init_faq_2">idfv应用开发商标识符<span>

获取方式

```
NSString *idfv = [UIDevice currentDevice].identifierForVendor.UUIDString;
```

> <span id="init_faq_3">统计包token<span>

获取方式

```
NSString *token = [TraceAnalysis staToken];
```

> <span id="init_faq_4">统计包openId<span>

获取方式

```
NSString *openId = [TraceAnalysis getOpenId];
```

> <span id="init_faq_5">appsFlyerUID<span>

AppsFlyer's internal id(unique for your app)

获取方式

```
NSString *appsFlyerUID = [[AppsFlyerTracker sharedTracker] getAppsFlyerUID];
```