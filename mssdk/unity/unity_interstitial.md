# 1、设置插屏广告代理

方法如下

```
/*
 * 设置插屏广告回调
 * @param didOpen 广告展示的回调方法
 * @param didClick 广告点击的回调方法
 * @param didClose 广告关闭的回调方法
 */
public static void setInterstitialCallback (Action<string, string> didOpen, Action<string, string> didClick, Action<string, string> didClose)
```

示例

```
MSSDK.setInterstitialCallback(	new System.Action<string, string>(onInterstitialDidOpen),
								new System.Action<string, string>(onInterstitialDidClcik),
								new System.Action<string, string>(onInterstitialDidClose));
```

```
// interstitial callback
private void onInterstitialDidOpen(string cpAdUnitID, string message) {
	Debug.Log ("===> onInterstitialDidOpen Callback at: " + cpAdUnitID);
}

private void onInterstitialDidClcik(string cpAdUnitID, string message) {
	Debug.Log ("===> onInterstitialDidClcik Callback at: " + cpAdUnitID);
}

private void onInterstitialDidClose(string cpAdUnitID, string message) {
	Debug.Log ("===> onInterstitialDidClose Callback at: " + cpAdUnitID);
}
```

<br>

# 2、判断是否可以播放插屏广告

方法如下

```
/*
 * 判断插屏广告是否填充成功，此方法可用于检查广告是否可以展示
 * @param cpAdUnitID: 插屏广告位标识符
 * 返回结果为bool值
 * 
 */
public static bool isInterstitialReady (string cpAdUnitID)
```

示例

```
public void onBtnClick_isInterstitialReady () {
	bool b = MSSDK.isInterstitialReady("sdada");
	Debug.Log ("===> isInterstitialReady at: " + b);
}
```

<br>

# 3、播放插屏广告

方法如下

```
/*
 * 用于展示插屏广告
 * @param cpAdUnitID: 插屏广告位标识符
 * 用于替换showIntersitialAd()
 */
public static void showInterstitialAd (string cpAdUnitID)
```

示例

```
public void onBtnClick_showInterstitial () {
	Debug.Log ("===> call onBtnClick_showInterstitial");
	MSSDK.showInterstitialAd("sdada");
}
```

在播放之前需要完成代理的设置

<br>
