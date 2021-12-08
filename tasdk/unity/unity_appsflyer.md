# 1 概述

如果使用的AppsFlyer，为了使AppsFlyer的数据和TASDK的数据打通共享，需要将TASDK的userId和AppsFlyer的UID互相绑定。

# 2 前提条件

您必须：

- 按照我们的步骤将TASDK集成到您的项目中。
- 完成项目设置。
- 请务必首先完成初始化TASDK。
- 接入AppsFlyer的SDK，并完成初始化。

# 3 绑定
>以下API务必在TASDK与AppsflyerSDK初始化后调用，并保证获取的afId和openId不为空
# 1. 将AppsFlyer的UID传递给统计包

如果使用AppsFlyer，需要在统计包初始化成功后调用setAFId，可在初始化回调中或初始化后的某个时机调用；</br>
API：
```csharp
// 将afid赋值给统计包
UPTraceApi.setAFId(afid);
```
调用示例：
```csharp
UPTraceApi.enalbeDebugMode(true);
UPTraceApi.initTraceSDKWithCallback(PRODUCTID, CHANNELID, initSuccessCallback, initFailCallback);

public void initSuccessCallback(string msg) {
	Debug.Log("tasdk initSuccessCallback ");
	//获取 afid
	String afid= AppsFlyer.getAppsFlyerId(); 
	// 将afid赋值给统计包，请保证afid不为null或空字符串
	 UPTraceApi.setAFId(afid);
}
public void initFailCallback(string message)
{
	Debug.Log("tasdk initFailCallback ,message =" + message);
}
```

# 2. 将统计包的openId上传给AppsFlyer

如果使用的AppsFlyer，需要将统计包的openId上传给AppsFlyer，
> 请在TASDK初始化完成后调用，初始化完成的标志初始化回调成功


API：
```csharp
// 将openId赋值给AppsFlyer
AppsFlyer.setCustomerUserId(openId);
```
调用示例：
```csharp
// 获取openId
string openId=UPTraceApi.getOpenId();

// 将openId赋值给AppsFlyer
AppsFlyer.setCustomerUserId(openId);
```

