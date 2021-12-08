# 1.前提条件
在您初始化MSSDK之前，您必须：

- 按照我们的步骤将 MSSDK 集成到您的项目中。
- 完成项目设置
- 初始化之前需要完成GDPR授权 [GDPR调用](/mssdk/unity/unity_gdpr)
  <br>

# 2.SDK初始化
初始化步骤：
- Android 
 直接初始化即可
 
- iOS14以下设备直接初始化
 
- iOS14以上设备
 
 1.调用苹果原生API请求ATT授权
 
 2.在授权结果回调中设置[Facebook广告追踪标志](/mssdk/unity/unity_ios?id=mssdk_unity_fb)
 
 3.在授权结果回调中初始化SDK,否则ATT弹窗异步执行时首次无法传递FacebookATT授权
 
 初始化API：

```csharp
/*
 * 初始化聚合广告
 * 即使多次调用，此方法也仅会初始化一次 
 */
public static void initSdk (Action<string> completed)
```

示例

```csharp
public void onBtnClick_InitSDK() {
	Debug.Log ("===> call onBtnClick_InitSDK");
	MSSDK.initSdk(new System.Action<string>(InitSDKCompleted));
}

// init callback
private void InitSDKCompleted(string str) {
	Debug.Log ("===> InitSDKCompleted Callback at: " + str);
}

```

# 3.开启 DEBUG
为方便您的接入调试，您可以在开发期间通过以下方法开启调试log，并且需要在正式发布时将其关闭

```csharp
/*
 * 开启日志
 * @param oepn: 是否开启日志 true开启
 */
public static void openLog (bool open)
```

示例

```csharp
public void onBtnClick_openLog() {
	Debug.Log ("===> call onBtnClick_openLog");
    MSSDK.openLog(true);
}
```
!> 其中Debug模式默认关闭，打开之后请在正式上线前关闭，或移除相关开启代码

到此，您已经完成了SDK的初始化。


接下来，您可以根据自己的需求，选取对应的广告方式并集成到项目里：

- [激励视频广告](/mssdk/unity/unity_reward.md)
- [插屏广告](/mssdk/unity/unity_interstitial.md)
- [横幅广告](/mssdk/unity/unity_banner.md)