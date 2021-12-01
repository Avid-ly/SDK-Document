# 1、设置横幅广告代理

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

# 2、展示横幅广告
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

# 3、移除横幅广告

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
