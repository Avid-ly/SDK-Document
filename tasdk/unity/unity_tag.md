# 概述

如果游戏中需要获得用户标签，请使用以下 API 来进行获取。<br>

- 推广用户标签
- 付费用户标签
- 用户广告标签
- deeplink标签
- ABTest数据

&ensp;

#  1.推广用户标签

## 1.1 添加AppsFlyer引用


如果您已添加AppsFlyer到您的项目中，请忽略此步骤

请通过以下链接的内容引入appsflyer到您的工程中

[Appsflyer-unity 接入帮助](https://support.appsflyer.com/hc/en-us/articles/360007314277#introduction)

&ensp;
## 1.2 获得用户标签


```csharp
 static void getConversionData (string afConversionData, Action<string> success, Action<string> fail) 
```


参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| afConversionData                 | Appsflyer中返回的归因结果 |
| success | 成功结果回调                  |
| fail | 失败结果回调                  |

调用示例：

```java
public void onGetConversionDataClick(string conversionDataJson)
   {
       UPTraceApi.getConversionData(conversionDataJson,
           new System.Action<string>(onConversionDataSuccess),
           new System.Action<string>(onConversionDataFail)
       );
   }
   private void onConversionDataSuccess(string result)
   {
       Debug.Log("===> onConversionDataSuccess Callback at: " + result);
   }
   private void onConversionDataFail(string result)
   {
       Debug.Log("===> onConversionDataFail Callback at: " + result);
   }
```

&ensp;
#  2. 付费用户标签

## 2.1 获得用户标签


```csharp
/*
 * 获取付费用户标签
 */
public static void getPayUserLayer (Action<string> success, Action<string> fail)
```


参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| success | 成功结果回调                  |
| fail | 失败结果回调                  |

调用示例：

```csharp
public void onGetPayUserLayerClick() {

    Debug.Log ("===> call onGetPayUserLayerClick");

    UPTraceApi.getPayUserLayer(new System.Action<string>(onPayUserLayerSuccess), new System.Action<string>(onPayUserLayerFail));
}

private void onPayUserLayerSuccess(string payUserLayer) {
    Debug.Log ("===> onPayUserLayerSuccess Callback at: " + payUserLayer);
}

private void onPayUserLayerFail(string error) {
    Debug.Log ("===> onPayUserLayerFail Callback at: " + error);
}
```

#  3. 用户广告标签

## 3.1 获得用户广告标签


```csharp
/*
 * 获得用户广告标签
 */
public static void getUserAdLayer (Action<string> success, Action<string> fail)
```


参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| success | 成功结果回调                  |
| fail | 失败结果回调                  |

调用示例：

```csharp
public void onGetUserAdLayerClick() {
	UPTraceApi.getUserAdLayer(new System.Action<string>(onUserAdLayerSuccess),
		new System.Action<string>(onUserAdLayerFail)
	);
}

private void onUserAdLayerSuccess(string msg) {
    Debug.Log ("===> onUserAdLayerSuccess Callback at: " + msg);
}

private void onUserAdLayerFail(string error) {
    Debug.Log ("===> onUserAdLayerFail Callback at: " + error);
}
```

# 4.DeepLink标签

## 4.1 获得DeepLink标签
```csharp
/**
* 获取deep link 数据
 * 需传入af sdk didReceiveConversionData()回调中获取到的ConversionData，以及成功和失败的callback
 */
public static void getDeepLinkData(string afConversionData, Action<string> success, Action<string> fail)
```

参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| afConversionData  | AF返回的归因结果                  |
| success | 成功结果回调                  |
| fail | 失败结果回调                  |

调用示例：

```csharp
public void onGetDeepLinkData(string afconversionDataJson)
{
UPTraceApi.getDeepLinkData(afconversionDataJson,
new System.Action<string>(onDeepLinkDataSuccess),
new System.Action<string>(onDeepLinkDataFail)
);
}

private void onDeepLinkDataSuccess(string campaign)
{
Debug.Log("===> onDeepLinkDataSuccess Callback at: " + campaign);
}

private void onDeepLinkDataFail(string error)
{
Debug.Log("===> onDeepLinkDataFail Callback at: " + error);
}
```

# 5. ABTest标签

## 5.1 获得 ABTest标签
```csharp
 /*
 * 获取 AB Test数据 
*/
public static void getABTestData(Action<string> success, Action<string> fail)
```

参数说明

| 参数名                         | 说明                      |
| :----------------------------- | ------------------------- |
| success | 成功结果回调                  |
| fail | 失败结果回调                  |

调用示例：
```csharp
#region get ab test data

public void onGetABTestDataClick() {

Debug.Log ("===> call onGetABTestDataClick");

UPTraceApi.getABTestData(new System.Action<string>(onABTestDataSuccess),
new System.Action<string>(onABTestDataFail)
);
}

    private void onABTestDataSuccess(string payUserLayer)
{
Debug.Log("===> onABTestDataSuccess Callback at: " + payUserLayer);
}

private void onABTestDataFail(string error)
{
Debug.Log("===> onABTestDataFail Callback at: " + error);
}
#endregion
```

## 5.2 ABTest标签说明

`abTest`参数的类型为json字符串

下边将举例说明`abTest`参数的结构和意义

例如`abTest`的值为

```
{
  "pid": "600258",
  "token": "sfwfw",
  "ab": "A_a:A_a_a|B_b",
  "ab_info": {
    "A_a": "sta_Aa",
    "A_a_a": "sta_Aaa",
    "B_b": "sta_Bb"
  }
}
```

其中

`pid` : 产品ID

`token` : 用户token

`ab` :  对应用户所在的所有ab分组信息。

- 不同策略， 以 | 区分，同一个策略下，以 : 区分不同分层信息。

 - 比如上面示例，当前产品有两个策略，A 和 B，用户被分组 A_a 组以及B_b 组，并且用户还被分到 A_a 组下的A_a_a 组别 含义为针对A_a组别的用户进行了再一次的分组划分，此用户被分到了其中的 A_a_a  组别 

`ab_info` : 对应该用户所在的所有ab分组的配置信息。

- 上面示例即 A_a 组配置是 sta_Aa，sta_Aa 为约定下发配置信息，客户端/服务端 拿到相应的信息做好相应的hard code 来做映射，进行 / 下发相应游戏配置，
- 以上面示例来说：用户命中了3个组别 A_a   A_a_a   B_b A_a ： 约定配置信息为 sta_Aa , 客户端/ 服务端需要根据约定好的 sta_Aa 对应的配置信息来对游戏进行控制







