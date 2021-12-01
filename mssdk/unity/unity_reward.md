# 1、设置激励视频代理

方法如下

```csharp
/*
 * 设置激励视频广告回调
 * @param didOpen 广告展示的回调方法
 * @param didClick 广告点击的回调方法
 * @param didClose 广告关闭的回调方法
 * @param didReward 广告发放奖励的回调方法 
 */
public static void setRewardCallback (Action<string, string> didOpen, Action<string, string> didClick, Action<string, string> didClose, Action<string, string> didReward)
```

示例

```csharp
MSSDK.setRewardCallback(new System.Action<string, string>(onRewardDidOpen),
						new System.Action<string, string>(onRewardDidClcik),
						new System.Action<string, string>(onRewardDidClose),
						new System.Action<string, string>(onRewardDidReward));
```

```csharp
// reward callback
private void onRewardDidOpen(string cpAdUnitID, string message) {
	Debug.Log ("===> onRewardDidOpen Callback at: " + cpAdUnitID);
}

private void onRewardDidClcik(string cpAdUnitID, string message) {
	Debug.Log ("===> onRewardDidClcik Callback at: " + cpAdUnitID);
}

private void onRewardDidClose(string cpAdUnitID, string message) {
	Debug.Log ("===> onRewardDidClose Callback at: " + cpAdUnitID);
}

private void onRewardDidReward(string cpAdUnitID, string message) {
	Debug.Log ("===> onRewardDidReward Callback at: " + cpAdUnitID);
}
```

<br>

# 2、判断是否可以播放激励视频

方法如下

```csharp
/*
 * 判断激励视屏广告是否填充成功，此方法可用于检查广告是否可以展示
 * 返回结果为bool值
 */
public static bool isRewardReady ()
```

示例

```csharp
public void onBtnClick_isRewardReady()  {
	bool b = MSSDK.isRewardReady();
	Debug.Log ("===> isRewardReady at: " + b);
}
```

<br>

# 3、播放激励视频

方法如下

```csharp
/*
 * 用于展示激励视屏广告
 * @param cpAdUnitID 用户自定义广告位，区分收益来源，不能为空，否则广告无法显示
 */
public static void showRewardAd (string cpAdUnitID)
```

示例

```csharp
public void onBtnClick_showReward() {
	Debug.Log ("===> call onBtnClick_showReward");
	MSSDK.showRewardAd("ssss");
}
```


**在播放之前需要完成代理的设置**