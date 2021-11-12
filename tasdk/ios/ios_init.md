
# 1. 引用 SDK

在需使用的类中导入`TraceAnalysis.h`：

```objective-c
#import  <TraceAnalysisSDK/TraceAnalysis.h>
```
&ensp;
# 2. 初始化 API
## 2.1 初始化时机

建议在`AppDelegate`的`- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions`方法中尽早初始化统计 SDK。



## 2.2 初始化方法

- 方法：
```objective-c
[TraceAnalysis initWithProductId:@"your productId" ChannelId:@"your channelId" AppID:@"your app id"];
```

参数说明

|参数名|说明|
|:----  |-----   |
|productId |分配的产品编号。   |
|channelId | 渠道编号。  |
|appId | 为空或 "id" + Apple ID。<br>注意：AppID 非空时需填入 ID，如：id1128308845。</br>  |


调用示例：
```objective-c
[TraceAnalysis initWithProductId:@"999999" ChannelId:@"32407" AppID:@""];
```
