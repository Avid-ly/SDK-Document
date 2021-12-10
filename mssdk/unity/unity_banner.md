# 1 横幅广告介绍

横幅广告会占据应用布局中的一处位置，要么是设备屏幕的顶部，要么是底部。这类广告会在用户与应用互动时停留在屏幕上，并且可在一段时间后自动刷新。

<center>

![](../image/6.gif)

</center>

<br>

# 2 前提条件

在您的应用中集成激励广告之前，您必须：

- 按照我们的步骤将 MSSDK 集成到您的项目中。
- 请务必在加载广告之前初始化 MSSDK

<br>

# 3 使用横幅广告

使用激励广告的主要步骤如下所示：

1. 设置横幅广告代理
2. 展示横幅广告
3. 移除横幅广告

## 3.2 设置横幅广告代理

方法如下

```csharp
/*
 * 设置横幅广告回调[仅限于IOS]
 * @param didShow 广告展示的回调方法
 * @param didClick 广告点击的回调方法
 */
public static void setBannerCallback (Action<string, string> didShow, Action<string, string> didClick)
```

示例

```csharp
MSSDK.setBannerCallback(new System.Action<string, string>(onBannerDidShow),
						new System.Action<string, string>(onBannerDidClcik));
```

```csharp
// banner
private void onBannerDidShow(string cpAdUnitID, string message) {
	Debug.Log ("===> onBannerDidShow Callback at: " + cpAdUnitID);
}

private void onBannerDidClcik(string cpAdUnitID, string message) {
	Debug.Log ("===> onBannerDidClcik Callback at: " + cpAdUnitID);
}
```

可根据对应的广告事件回调，来处理接下来的游戏逻辑；

其中广告事件的回调顺序为：

1. 获取展示的根视图
2. 加载成功 or 加载失败（由于广告会自定刷新，所以这两个回调会回调多次）
3. 用户点击横幅广告视图，展示全屏视图
4. 点击广告离开当前app（当用户或玩家点击全屏视图之后才会触发，如用户未点击则不触发）
5. 用户关闭全屏视图

## 3.2 展示横幅广告
### IOS
方法如下

```csharp
/*
 * 用于展示Banner广告
 * @param cpAdUnitID: 插屏广告位标识符
 * @param x: 起始位横坐标
 * @param y: 起始位纵坐标
 * @param width: 宽度
 * @param height: 高度
 * 
 */
public static void showBannerAd (string cpAdUnitID, double x, double y, double width, double height)
```

示例

```csharpcsharp
public void onBtnClick_showBanner () {
	double x = 0;
	double y = UnityEngine.Screen.height/2-50;
	double width = UnityEngine.Screen.width/2;
	double height = 50;
	MSSDK.showBannerAd("sss" , x, y, width, height);
	Debug.Log ("===> call onBtnClick_showBanner" + " x:" + x + " y:" + y + " width:" + width + " height:" + height);
	}
```

### Android
与Ios不同，android仅提供了两种位置进行显示
方法如下

```csharp
/*
 * 用于在顶部展示Banner广告
 * @param cpAdUnitID: 插屏广告位标识符 * 
 */
public static void showAndroidBannerAdAtTop (string cpAdUnitID)

/*
 * 用于在底部展示Banner广告
 * @param cpAdUnitID: 插屏广告位标识符 * 
 */
public static void showAndroidBannerAdAtBottom (string cpAdUnitID)
```

示例

```csharp
public void onBtnClick_showTopBanner () {
	MSSDK.showAndroidBannerAdAtTop("sss");
}

public void onBtnClick_showBottomBanner () {
	MSSDK.showAndroidBannerAdAtBottom("sss");
}
```






## 3.3 移除横幅广告

方法如下

```csharp
/*
 * 根据广告位，删除Banner广告
 * @param cpAdUnitID: 插屏广告位标识符
 */
public static void removeBannerAd (string cpAdUnitID)
```

示例

```csharp
public void onBtnClick_removeBanner () {
	Debug.Log ("===> call onBtnClick_removeBanner");
	MSSDK.removeBannerAd("sss");
}
```
到此，您已经成功将横幅广告集成到您的游戏或App里，如有问题，请参考下边的常见问题
# 4 常见问题

- 何时关闭和恢复游戏背景音乐与逻辑
- 如何更新横幅广告
- 如何设置横幅广告的大小

> <span id="unity_banner_faq1">何时关闭和恢复游戏背景音乐与逻辑</span>

建议在调用`showRewardAd`时关闭背景音乐，暂停游戏逻辑；在收到`onRewardDidClose`回调时将控制器交换给游戏，恢复背景音乐，开始游戏逻辑。

> <span id="unity_banner_faq2">如何更新横幅广告</span>

横幅广告会一直显示在页面上，且会定时自动刷新，股不需要开发者主动进行刷新操作

> <span id="unity_banner_faq3">如何设置合适的横幅广告的大小</span>

建议横幅广告的宽度与设备宽度保持一直，横幅广告在横向会自动居中显示；横幅广告的高度，在iPhone上建议设置为50，在iPad上，建议设置为90。
