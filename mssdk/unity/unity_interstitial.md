# 1 插屏广告介绍

插屏广告是全屏广告，它会覆盖整个应用界面，直到用户将其关闭。这些广告通常会在应用流程的自然过渡点（例如，活动之间或游戏关卡之间的暂停时段）展示。当应用展示插页式广告时，用户可以点按广告前往其目标页面，也可以关闭广告回到应用界面。

<center>

![](../image/3.gif)

</center>

<br>

# 2 前提条件

在您的应用中集成插屏广告之前，您必须：

- 按照我们的步骤将 MSSDK 集成到您的项目中。
- 请务必在加载广告之前初始化 MSSDK

<br>

# 3 使用插屏广告

使用激励广告的主要步骤如下所示：

1. 设置插屏广告代理
2. 判断广告是否填充
3. 播放插屏广告




## 3.1 设置插屏广告代理

方法如下

```csharp
/*
 * 设置插屏广告回调
 * @param didOpen 广告展示的回调方法
 * @param didClick 广告点击的回调方法
 * @param didClose 广告关闭的回调方法
 */
public static void setInterstitialCallback (Action<string, string> didOpen, Action<string, string> didClick, Action<string, string> didClose)
```

示例

```csharp
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

## 3.2 判断广告是否填充

方法如下

```csharp
/*
 * 判断插屏广告是否填充成功，此方法可用于检查广告是否可以展示
 * @param cpAdUnitID: 插屏广告位标识符
 * 返回结果为bool值
 * 
 */
public static bool isInterstitialReady (string cpAdUnitID)
```

示例

```csharp
public void onBtnClick_isInterstitialReady () {
	bool b = MSSDK.isInterstitialReady("sdada");
	Debug.Log ("===> isInterstitialReady at: " + b);
}
```

<br>

## 3.3 播放插屏广告

方法如下

```csharp
/*
 * 用于展示插屏广告
 * @param cpAdUnitID: 插屏广告位标识符
 * 用于替换showIntersitialAd()
 */
public static void showInterstitialAd (string cpAdUnitID)
```

示例

```csharp
public void onBtnClick_showInterstitial () {
	Debug.Log ("===> call onBtnClick_showInterstitial");
	MSSDK.showInterstitialAd("sdada");
}
```


到此，您已经成功将插屏广告集成到您的游戏或App里，如有问题，请参考下边的常见问题


<br>

# 4 常见问题

- 何时关闭和恢复游戏背景音乐与逻辑
- 如何判断广告生命周期结束
- 如何获得广告加载成功的回调
- 如何判断是否给玩家发放奖励
- 能在广告关闭回调中直接展示广告吗
- 广告播放时能进行横竖屏切换吗

> <span id="unity_reward_faq1">何时关闭和恢复游戏背景音乐与逻辑</span>

建议在调用`showRewardAd`时关闭背景音乐，暂停游戏逻辑；在收到`onRewardDidClose`回调时恢复背景音乐，开始游戏逻辑。

> <span id="unity_reward_faq2">如何判断广告生命周期结束</span>

当收到`onRewardDidClose`回调时，意味着本次广告展示结束

> <span id="unity_reward_faq3">如何获得广告加载成功的回调</span>

MSSDK使用自动加载广告的模式，无需开发者持有广告对象、调用加载方法和记录广告加载结果，大大减少开发者的负担，使开发者能将精力聚焦游戏逻辑。如您想获得广告加载成功的回调，可自行定时监控循环`isRewardReady`方法即可，循环间隔由您自行控制，建议不要太短，5s以上为宜。

> <span id=unity_"reward_faq4">如何判断是否给玩家发放奖励</span>

当收到`onRewardDidReward`回调时说明玩家或用户已满足发放奖励回调，则可以给玩家发放奖励。如未触发此回调，说明未满足发放奖励的条件。

> <span id="unity_reward_faq5">能在广告关闭回调中直接展示广告吗</span>

不建议这样做。因为有些平台如admob，需要一定的时间间隔来渲染下一个广告。在广告关闭回调中立刻播放admob的广告会造成广告无法正常展示的情况。

> <span id="reward_faq6">广告播放时能进行横竖屏切换吗</span>

不建议这样做。有些平台在横屏状态下加载的横屏素材是无法在竖屏状态下展示的，可能会造成无法展示或者游戏闪退等不可控现象。



