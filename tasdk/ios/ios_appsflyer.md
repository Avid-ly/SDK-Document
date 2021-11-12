# 1、将统计包的openId上传给AppsFlyer

如果使用的AppsFlyer，需要将统计包的openId上传给AppsFlyer，具体示例如下：

```objective-c
// openId
NSString *openId = [TraceAnalysis getOpenId];

// 将openId赋值给AppsFlyer
[AppsFlyerLib shared].customerUserID = openId;
```

# 2、将AppsFlyer的UID上传给统计包

如果您使用了AppsFlyer，需要将appsFlyerUID上传给统计包，具体示例如下：

```objective-c
// 获取appsFlyerUID
NSString *appsFlyerUID = [[AppsFlyerLib shared] getAppsFlyerUID];

// 将appsFlyerUID上传给统计包
[TraceAnalysis setAppsFlyerId:appsFlyerUID];
```

