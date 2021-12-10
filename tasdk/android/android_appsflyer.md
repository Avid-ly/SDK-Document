# 1 概述

如果使用的AppsFlyer，为了使AppsFlyer的数据和TASDK的数据打通共享，需要将TASDK的openId和AppsFlyer的UID互相绑定。

# 2 前提条件

您必须：

- 按照步骤将TASDK集成到您的项目中。
- 已经初始化TASDK。
- 接入AppsFlyer的SDK，并完成初始化。


# 3 将AppsFlyer的UID传递给统计包

如果使用的AppsFlyer，需要AF的UID传递给统计包，具体示例如下：

```java
// AF的UID传递给统计包
ALYAnalysis.setAFId(String afId);
```
调用示例:
```java
//获取 afid
String afId=AppsFlyerLib.getInstance().getAppsFlyerUID(context);

// 将afid赋值给统计包
ALYAnalysis.init(getApplicationContext(), BuildConfig.PTDID, BuildConfig.CHANNALID, new ALYAnalysis.TasdkinitializdListener() {
            @Override
            public void onSuccess(String userid) {
            Log.i(TAG, "init success userId is   " + userid);
            ALYAnalysis.setAFId(afId);
            }

            @Override
            public void onFail(String errorMsg) {
                Log.i(TAG, "init error  " + errorMsg);
            }
        });
```

# 4 将统计包的openId上传给AppsFlyer

如果使用的AppsFlyer，需要将统计包的openId上传给AppsFlyer
> 请在TASDK初始化完成后调用

```java
// 统计包的openId上传给AppsFlyer
AppsFlyerLib.getInstance().setCustomerUserId(String openId);
```
调用示例:

```java
// 获取openId
String openId=ALYAnalysis.getOpenId();

// 将userId赋值给AppsFlyer
AppsFlyerLib.getInstance().setCustomerUserId(openId);
```

