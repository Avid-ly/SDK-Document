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
> 请在TASDK初始化完成后调用，初始化完成的标志是 getUserId方法获得了正确的返回值


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

