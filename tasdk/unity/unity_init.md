# 1.前提条件

在您初始化TASDK之前，您必须：

- 按照我们的步骤将 TASDK 集成到您的项目中。
- 完成项目设置

# 2. 引用 SDK
在 *.cs 文件中，引用有关统计 SDK 的命名空间。
```csharp
using UPTrace;
```
&ensp;
# 3. 初始化 SDK

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


# 4. Debug模式
用于打印上报的信息，请在发布环境中设置为false
>请在初始化之前调用

```csharp
public static void enalbeDebugMode(bool isOpen);
```
调用示例：

``` csharp
UPTraceApi.enalbeDebugMode(true);
```

# 5.设置 CUSTOMER_ID (仅Android设备)
统计包中设置 customerId 参数，用于设置 AndroidId，此方法在发布 **GooglePlay 以外**的版本时才调用。

```csharp
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





