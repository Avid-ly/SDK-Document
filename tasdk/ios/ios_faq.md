# 1、 常见参数的说明和获取方式

> idfa广告标识符

获取方式

```
#import <AdSupport/AdSupport.h>

NSString *idfa = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
```

提示：需要在用户授权ATT或LAT的情况下才能够获取到

<br>

> idfv应用开发商标识符

获取方式

```
NSString *idfv = [UIDevice currentDevice].identifierForVendor.UUIDString;
```

> 统计包token

获取方式

```
NSString *token = [TraceAnalysis staToken];
```

> 统计包openId

获取方式

```
NSString *openId = [TraceAnalysis getOpenId];
```

> appsFlyerUID

AppsFlyer's internal id(unique for your app)

获取方式

```
NSString *appsFlyerUID = [[AppsFlyerTracker sharedTracker] getAppsFlyerUID];
```