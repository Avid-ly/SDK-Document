# 1. 引用 SDK
在 *.cs 文件中，引用有关统计 SDK 的命名空间。
```csharp
using UPTrace;
```
&ensp;
# 2. 初始化 SDK

```csharp
public static void initTraceSDKWithCallback(string productId, string channelId, Action<string> success, Action<string> fail)

```

参数说明：

|参数名|说明|
|:----  |-----   |
|productId |产品 ID，须正确指定且不能为空。   |
|channelId | 产品推广渠道 ，不可为空。默认可填 "32400"  |
|success  |初始化成功回调   |
|fail   |初始化失败回调   |
调用示例：

```csharp

private const string PRODUCTID = "999999";
private const string CHANNELID = "32400";


public void onInitWithCalllbackClick()
{
	if (inited)
	{
		return;
	}
	inited = true;
	UPTraceApi.enalbeDebugMode(true);
	UPTraceApi.initTraceSDKWithCallback(PRODUCTID, CHANNELID, initSuccessCallback, initFailCallback);
    }

public void initSuccessCallback(string msg) {
	Debug.Log("tasdk initSuccessCallback ");
}

public void initFailCallback(string message)
{
	Debug.Log("tasdk initFailCallback ,message =" + message);
}

```
&ensp;
# 3.特殊方法调用
根据 GP 和 GDPR 的政策要求，统计包增加如下方法以满足游戏对不同需求的支持。

# 3.1 初始化检查
判断统计 SDK 是否完成初始化（支持 Android 与 iOS）。

```csharp
bool isTraceSDKInited();
```

# 3.2 设置 CUSTOMER_ID (仅Android设备)
统计包中设置 customerId 参数，用于设置 AndroidId，此方法在发布 GooglePlay 以外的版本时才调用。

```java
void setCustomerIdForAndroid(string customerId);
```
> 请在 V3.1.1.5 以上版本中添加此方法，并在初始化 API 前调用。

```csharp

void Start(){
	UPTraceApi.setCustomerIdForAndroid(GetAndroidID());
	UPTraceApi.initTraceSDK(productId,channelId,UPTraceSDKZoneEnum.foregin);
}


private String GetAndroidID(){
	AndroidJavaClass up = new AndroidJavaClass ("com.unity3d.player.UnityPlayer");
	AndroidJavaObject currentActivity = up.GetStatic<AndroidJavaObject> ("currentActivity");
	AndroidJavaObject contentResolver = currentActivity.Call<AndroidJavaObject> ("getContentResolver");
	AndroidJavaClass secure = new AndroidJavaClass ("android.provider.Settings$Secure");
	string android_id = secure.CallStatic<string> ("getString", contentResolver, "android_id");
	return android_id;
}
```

# 3.3 获取openid
如需向 appsflyer 中设置 openid 参数，可使用如下方法获取。


```csharp
public static string getOpenIdForAndroid()
```
>请在 V3.1.1.5 以上版本中添加此方法，并在初始化 API 前调用。


# 3.4 获取userid

如需获得TASDK中的唯一标识，可使用如下方法获取。

 ```java
UPTraceApi.getUserId();
```
> 此方法第一次调用时候需要时间。




# 3.5  禁止获取设备信息
禁止统计包获取设备信息。

```csharp
/**
 * 欧盟用户且明确拒绝GDPR授权申请后调用此方法(Android与Ios均支持)
 * 可在初始化SDK之前调用
 */
public static void disableAccessPrivacyInformation()
```
>请在 V3.1.1.5 以上版本中添加此方法，并在初始化 API 前调用（如有 GDPR 授权功能，请在拒绝授权 GDPR 后调用）。

# 3.6 测试模式
用于打印上报的信息，请在发布环境中设置为false
>请在初始化之前调用

```csharp
public static void enalbeDebugMode(bool isOpen);
```
调用示例：

``` csharp
UPTraceApi.enalbeDebugMode(true);
```








