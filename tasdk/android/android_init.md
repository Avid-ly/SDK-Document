# 1 前提条件

在您初始化TASDK之前，您必须：

- 按照我们的步骤将 TASDK 集成到您的项目中。

# 2 SDK初始化

TASDK初始化的主要步骤如下所示：
- 引入包名
- 调用初始化方法

## 2.1 引入包名

在需使用的类中导入包名

```java
import com.aly.sdk.ALYAnalysis;
```

## 2.2 根据项目找到合适的初始化时机

!> 请尽量将TASDK的初始化时机提前，可以提升统计数据的准确性和及时性

一般建议在`Applicaion的onCreate`方法中尽早初始化统计 SDK。


## 2.3 调用初始化方法

```java

 void init(Context context, String productId, String channelId,TasdkinitializdListener listener);

```


其中参数说明如下，对应的参数请联系相关人员获取。

|参数名|说明|
|:----  |-----   |
|context |当前的应用上下文   |
|productId |分配的产品编号  |
|channelId | 渠道编号  |
|listener | 初始化结果回调 |

调用示例：

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


# 3. 特殊调用方法
根据 GDPR等政策要求，统计包增加如下方法以满足游戏对不同需求的支持。

## 3.1 设置 CUSTOMER_ID
!>统计包中设置 customerId 参数，用于设置 AndroidId，此方法在发布 GooglePlay 以外的市场时才调用。

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

!> 请在 V3.1.1.5 以上版本中添加此方法，并在初始化 API 后调用。

 ```java
String getOpenId(Context context);
```



## 3.3 获取userid

如需获得TASDK中的唯一标识，可使用如下方法获取。

!> 此方法第一次调用时候需要时间。

 ```java
ALYAnalysis.getUserId();
```



## 3.4 禁止获取设备信息

禁止统计包获取设备信息。

!> 请在初始化 API 前调用（如有 GDPR 授权功能，请在拒绝授权 GDPR 后调用）。

```java
void disableAccessPrivacyInformation();
```

## 3.5 Log打印开关

用于打印上报的信息

!> 请在初始化之前调用，请在发布环境中设置为false

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


<br>

到此，您已经完成了SDK的初始化。


接下来，您可以根据自己的需求，选取对应的功能并集成到项目里：

- [事件打点](/tasdk/android/android_log.md)
- [登录上报（未使用AASDK）](/tasdk/android/android_login1.md)
- [登录上报（使用AASDK）](/tasdk/android/android_login2.md)
- [支付上报](/tasdk/android/android_iap.md)
- [在线用户时长上报](/tasdk/android/android_duration_report.md)
- [用户标签](/tasdk/android/android_tag.md)