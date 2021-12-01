# 1 概述

如果使用的AppsFlyer，为了使AppsFlyer的数据和TASDK的数据打通共享，需要将TASDK的openId和AppsFlyer的UID互相绑定。

# 2 前提条件

您必须：

- 按照我们的步骤将TASDK集成到您的项目中。
- 完成项目设置。
- 请务必在登录上报之前初始化TASDK。
- 接入AppsFlyer的SDK，并完成初始化。

# 3 绑定

## 3.1 将统计包的openId上传给AppsFlyer

如果使用的AppsFlyer，需要将统计包的openId上传给AppsFlyer，具体示例如下：

```objective-c
// openId
NSString *openId = [TraceAnalysis getOpenId];

// 将openId赋值给AppsFlyer
[AppsFlyerLib shared].customerUserID = openId;
```

## 3.2 将AppsFlyer的UID上传给统计包

如果您使用了AppsFlyer，需要将appsFlyerUID上传给统计包，具体示例如下：

```objective-c
// 获取appsFlyerUID
NSString *appsFlyerUID = [[AppsFlyerLib shared] getAppsFlyerUID];

// 将appsFlyerUID上传给统计包
[TraceAnalysis setAppsFlyerId:appsFlyerUID];
```

