
# 概述

如果游戏中需要获得用户标签，请使用以下 API 来进行获取。
- 推广用户标签
- 付费用户标签
- 广告用户标签
- Deeplink标签
- ABTest标签

&ensp;
# 1、推广用户标签


## 1.1 添加引用

<br>

1). 添加AppsFlyer

添加AppsFlyer到您的项目中，[AppsFlyer接入文档](https://support.appsflyer.com/hc/zh-cn/articles/207032066#%E9%9B%86%E6%88%90)

<br>

2). 引入TraceAnalysis
在需要调用的地方引用一下代码
```oc
#import <TraceAnalysisSDK/TraceAnalysis.h>;
```

&ensp;
## 1.2 获得推广用户标签
请使用以下方法调用

```oc
+ (void)getConversionData:(NSDictionary *)conversionInfo completion:(void (^)(NSError *error, NSString *campaign))completionBlock;
```


参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| conversionInfo                 | Appsflyer中返回的归因结果 |
| completionBlock                | 结果回调                  |
| error                          | 错误信息                  |
|campaign                        | 推广用户标签                 |

调用示例：

```java
[TraceAnalysis getConversionData:conversionInfo completion:^(NSError *error, NSString *campaign) {
    
    if (error) {
        // error
    }
    else {
        // succeed
    }
}];
```

&ensp;
## 1.3 最佳实践


```Objective-C
#import <TraceAnalysisSDK/TraceAnalysis.h>
#import <AppsFlyerLib/AppsFlyerTracker.h>

@interface AppDelegate () <AppsFlyerLibDelegate>

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
    [TraceAnalysis initWithProductId:@"999999" ChannelId:@"11111" AppID:@"22222" zone:0];

    [AppsFlyerLib shared].appsFlyerDevKey = @"xxxxxxxxxxxxx";
    [AppsFlyerLib shared].appleAppID = @"1111111111";
    [AppsFlyerLib shared].delegate = self;
    
    return YES;
}

- (void)applicationDidBecomeActive:(UIApplication *)application {

    [[AppsFlyerLib shared] start];
}

#pragma mark - AppsFlyerLibDelegate

- (void)onConversionDataSuccess:(NSDictionary *)conversionInfo {
    
    [TraceAnalysis getConversionData:conversionInfo completion:^(NSError *error, NSString *campaign) {
        
        if (error) {
            // error
        }
        else {
            // succeed
        }
    }];
}

- (void)onConversionDataFail:(NSError *)error {
    // error
}

@end
```

&ensp;
# 2、付费用户标签

&ensp;
## 2.1 添加引用

引入TraceAnalysis，在需要调用的地方引用一下代码
```oc
#import <TraceAnalysisSDK/TraceAnalysis.h>;
```

&ensp;
## 2.2 获得付费用户标签
请使用以下方法调用

```oc
+ (void)getPayUserLayerWithCmpletion:(void (^)(NSError *error, NSString *payUserLayer))completionBlock

```


参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| completionBlock                | 结果回调                  |
| error                          | 错误信息                  |
| payUserLayer                   | 付费用户标签                 |

调用示例：

```java
[TraceAnalysis getPayUserLayerWithCmpletion:^(NSError *error, NSString *payUserLayer) {
    if (error) {
        NSLog(@"error:%@",error);
    }
    else {
        NSLog(@"payUserLayer:%@",payUserLayer);
    }
}];
```
&ensp;

<br>

&ensp;
# 3、广告用户标签

&ensp;
## 3.1 添加引用

引入TraceAnalysis，在需要调用的地方引用一下代码
```oc
#import <TraceAnalysisSDK/TraceAnalysis.h>;
```

&ensp;
## 3.2 获得广告用户标签
请使用以下方法调用

```oc
+ (void)getAdUserLayerWithCmpletion:(void (^)(NSError *error, NSString *adUserLayer))completionBlock;
```


参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| completionBlock                | 结果回调                  |
| error                          | 错误信息                  |
| adUserLayer                    | 广告用户标签                 |

调用示例：

```java
[TraceAnalysis getAdUserLayerWithCmpletion:^(NSError *error, NSString *adUserLayer) {
        if (error) {
            NSLog(@"error:%@",error);
        }
        else {
            NSLog(@"adUserLayer:%@",adUserLayer);
        }
 }];
```
&ensp;

<br>

&ensp;
# 4、Deeplink标签

&ensp;
## 4.1 添加引用

引入TraceAnalysis，在需要调用的地方引用一下代码
```oc
#import <TraceAnalysisSDK/TraceAnalysis.h>;
```

&ensp;
## 4.2 获得Deeplink标签
请使用以下方法调用

```oc
/**
 deeplink标签
 
 @param conversionInfo      AppsFlyer返回的conversionInfo
 @param completionBlock     完成回调
 */
+ (void)getDeeplink:(NSDictionary *)conversionInfo completion:(void (^)(NSError *error, NSString *deeplink))completionBlock;
```


参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| conversionInfo                 | Appsflyer中返回的归因结果 |
| completionBlock                | 结果回调                  |
| error                          | 错误信息                  |
| deeplink                       | Deeplink标签                 |

调用示例：

```java
[TraceAnalysis getDeeplink:conversionInfo completion:^(NSError *error, NSString *deeplink) {
        if (error) {
            NSLog(@"error:%@",error);
        }
        else {
            NSLog(@"deeplink:%@",deeplink);
        }
 }];
```
&ensp;

&ensp;
## 4.3 最佳实践


```Objective-C
#import <TraceAnalysisSDK/TraceAnalysis.h>
#import <AppsFlyerLib/AppsFlyerTracker.h>

@interface AppDelegate () <AppsFlyerTrackerDelegate>

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
    [TraceAnalysis initWithProductId:@"999999" ChannelId:@"11111" AppID:@"22222" zone:0];

    [AppsFlyerTracker sharedTracker].appsFlyerDevKey = @"xxxxxxxxxxxxx";
    [AppsFlyerTracker sharedTracker].appleAppID = @"1111111111";
    [AppsFlyerTracker sharedTracker].delegate = self;
    
    return YES;
}

- (void)applicationDidBecomeActive:(UIApplication *)application {

    [[AppsFlyerTracker sharedTracker] trackAppLaunch];
}

#pragma mark - AppsFlyerTrackerDelegate

- (void)onConversionDataSuccess:(NSDictionary *)conversionInfo {
    
    [TraceAnalysis getDeeplink:conversionInfo completion:^(NSError *error, NSString *deeplink) {
        
        if (error) {
            // error
        }
        else {
            // succeed
        }
    }];
}

- (void)onConversionDataFail:(NSError *)error {
    // error
}

@end
```

&ensp;

<br>

&ensp;
# 5、ABTest标签

&ensp;
## 5.1 添加引用

引入TraceAnalysis，在需要调用的地方引用一下代码
```oc
#import <TraceAnalysisSDK/TraceAnalysis.h>;
```

&ensp;
## 5.2 获得ABTest标签
请使用以下方法调用

`特别说明`：需要在[init初始化](http://doc.avidly.com/docs/show/244)之后立刻调用

```oc
/**
 ABTest
 
 @param completionBlock     完成回调
 */
+ (void)getABTestWithCmpletion:(void (^)(NSError *error, NSString *abTest))completionBlock;
```


参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| completionBlock                | 结果回调                  |
| error                          | 错误信息                  |
| abTest                         | abTest                 |

调用示例：

```java
[TraceAnalysis getABTestWithCmpletion:^(NSError *error, NSString *abTest) {
        if (error) {
            NSLog(@"error:%@",error);
        }
        else {
            NSLog(@"abTest:%@",abTest);
        }
 }];
```
&ensp;

## 5.3 ABTest标签说明

`abTest`参数的类型为json字符串

下边将举例说明`abTest`参数的结构和意义

例如`abTest`的值为

```
{
  "pid": "600258",
  "token": "sfwfw",
  "ab": "A_a:A_a_a|B_b",
  "ab_info": {
    "A_a": "sta_Aa",
    "A_a_a": "sta_Aaa",
    "B_b": "sta_Bb"
  }
}
```

其中

`pid` : 产品ID

`token` : 用户token

`ab` :  对应用户所在的所有ab分组信息。

- 不同策略， 以 | 区分，同一个策略下，以 : 区分不同分层信息。

 - 比如上面示例，当前产品有两个策略，A 和 B，用户被分组 A_a 组以及B_b 组，并且用户还被分到 A_a 组下的A_a_a 组别 含义为针对A_a组别的用户进行了再一次的分组划分，此用户被分到了其中的 A_a_a  组别 

`ab_info` : 对应该用户所在的所有ab分组的配置信息。

- 上面示例即 A_a 组配置是 sta_Aa，sta_Aa 为约定下发配置信息，客户端/服务端 拿到相应的信息做好相应的hard code 来做映射，进行 / 下发相应游戏配置，
- 以上面示例来说：用户命中了3个组别 A_a   A_a_a   B_b A_a ： 约定配置信息为 sta_Aa , 客户端/ 服务端需要根据约定好的 sta_Aa 对应的配置信息来对游戏进行控制