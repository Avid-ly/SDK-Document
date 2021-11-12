
# 1. 引用 SDK

所有方法均以 static 定义在`ALYAnalysis`类中，请将 **ALYAnalysis** 导入至 Java 代码中。
```java
import com.aly.sdk.ALYAnalysis;
```
&ensp;

# 2. 初始化 API
## 2.1 初始化时机

建议在`Applicatiton`或`主 Activity`的`onCreate()`方法中尽早初始化统计 SDK。

## 2.2 初始化方法
根据产品 ID 以及渠道 ID 初始化统计包。

```java
void init(Context context, String productId, String channelId,TasdkinitializdListener listener);
```
调用示例:
```java
ALYAnalysis.init(getApplicationContext(), BuildConfig.PTDID, BuildConfig.CHANNALID, new ALYAnalysis.TasdkinitializdListener() {
            @Override
            public void onSuccess(String userid) {
                Log.i(TAG, "init success userId is   " + userid);
            }

            @Override
            public void onFail(String errorMsg) {
                Log.i(TAG, "init error  " + errorMsg);
            }
        });
```

&ensp;

# 3. 特殊调用方法
根据 GDPR等政策要求，统计包增加如下方法以满足游戏对不同需求的支持。

## 3.1 设置 CUSTOMER_ID
统计包中设置 customerId 参数，用于设置 AndroidId，此方法在发布 GooglePlay 以外的版本时才调用。

```java
void setCustomerId(final String customerId);
```
> 请在 V3.1.1.5 以上版本中添加此方法，并在初始化 API 前调用。

调用示例:
```java
@Override
protected void onCreate(Bundle savedInstanceState) {
	 ALYAnalysis.setCustomerId(GetAndroid(MainAcivity.this));
	 ALYAnalysis.init(getApplicationContext(), "productId", "channelId");
}
	
public static String GetAndroid(Context context){
	final String androidId;androidId = android.provider.Settings.Secure.getString(context.getContentResolver(), android.provider.Settings.Secure.ANDROID_ID);
	return androidId;
}
```

## 3.2 获取 OPEN_ID

如需向 appsflyer 中设置 openid 参数，可使用如下方法获取。

 ```java
String getOpenId(Context context);
```
> 请在 V3.1.1.5 以上版本中添加此方法，并在初始化 API 前调用。


## 3.3 获取userid

如需获得TASDK中的唯一标识，可使用如下方法获取。

 ```java
ALYAnalysis.getUserId();
```
> 此方法第一次调用时候需要时间。




## 3.4 禁止获取设备信息

禁止统计包获取设备信息。

```java
void disableAccessPrivacyInformation();
```

> 请在 V3.1.1.5 以上版本中添加此方法，并在初始化 API 前调用（如有 GDPR 授权功能，请在拒绝授权 GDPR 后调用）。



## 3.5 测试模式

用于打印上报的信息，请在发布环境中设置为false
> 请在 初始化之前调用

```java
void enalbeDebugMode(booleam debuggable);
```

调用示例:

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
	ALYAnalysis.enalbeDebugMode(true);
}
```
