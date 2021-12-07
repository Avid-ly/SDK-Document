# 1. 引用 SDK
在 *.cs 文件中，引用有关统计 SDK 的命名空间。
```csharp
using UPTrace;
```

# 2. 初始化检查
判断统计 SDK 是否完成初始化（支持 Android 与 iOS）。

```csharp
bool isTraceSDKInited();
```
# 3.统计包参数获取

# 3.1 获取openid
如需向 appsflyer 中设置 openid 参数，可使用如下方法获取。


```csharp
public static string getOpenIdForAndroid()
```
>请在 V3.1.1.5 以上版本中添加此方法，并在初始化 API 前调用。


# 3.2 获取userid

如需获得TASDK中的唯一标识，可使用如下方法获取。

 ```java
UPTraceApi.getUserId();
 ```
> 此方法第一次调用时候需要时间。





 







