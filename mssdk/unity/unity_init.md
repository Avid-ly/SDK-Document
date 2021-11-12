# 导入UnityPackage


[下载](https://github.com/Avid-ly/Avidly-iOS-MSSDK-UnityPackage.git)UnityPackage，然后导入到Unity工程中

<br>

# SDK初始化

其中初始化方法如下

```
/*
 * 初始化聚合广告
 * 即使多次调用，此方法也仅会初始化一次 
 */
public static void initSdk (Action<string> completed)
```

示例

```
public void onBtnClick_InitSDK() {
	Debug.Log ("===> call onBtnClick_InitSDK");
	MSSDK.initSdk(new System.Action<string>(InitSDKCompleted));
}

// init callback
private void InitSDKCompleted(string str) {
	Debug.Log ("===> InitSDKCompleted Callback at: " + str);
}

```

# 开启 debug
为方便您的接入调试，您可以在开发期间通过以下方法开启调试log，并且需要在正式发布时将其关闭

```
/*
 * 开启日志
 * @param oepn: 是否开启日志 true开启
 */
public static void openLog (bool open)
```

示例

```
public void onBtnClick_openLog() {
	Debug.Log ("===> call onBtnClick_openLog");
    MSSDK.openLog(true);
}
```