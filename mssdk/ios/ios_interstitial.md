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

1. 注册回调
2. 判断广告是否填充
3. 展示广告
4. 处理广告事件

## 3.1 注册回调

在要使用的类中引入头文件

```
#import <MSSDK/MSSDK.h>
```

在要使用的类的interface中声明`MSInterstitialDelegate`回调

```
@interface MSInterstitialDemoViewController () <MSInterstitialDelegate>
@end
```

注册回调：

```
- (void)viewDidLoad {
	[super viewDidLoad];
	[MSSDK setInterstitialDelegate:self];
}
```

## 3.2 判断广告是否填充

MSSDK使用自动加载广告的模式，无需开发者持有广告对象、调用加载方法和记录广告加载结果，大大减少开发者的负担，使开发者能将精力聚焦游戏逻辑。

当需要展示广告时，只需判断当前广告有填充，即可展示广告。当无填充时，本次无法展示广告。所以必须先判断广告有填充才能展示广告

```
BOOL b = [MSSDK hasInterstitialAdAvailable];
if (b) {
	// 广告已填充，可以展示广告
}
```

## 3.3 展示广告

```
[MSSDK presentInterstitialForAdUnitID:@"YourAdUnitID" fromViewController:self];
```

- 其中`YourAdUnitID` 替换为您的广告位，用于广告数据的区分
- 其中`self` 替换为您当前的视图控制器

!> 在播放之前需要完成代理的设置

<br>


## 3.4 处理广告事件

在刚才注册回调的类中声明以下方法：

```
// 广告打开
- (void)MSInterstitialAdDidOpen {
    NSLog(@"MSSDK MSInterstitialAdDidOpen");
}

// 广告点击
- (void)MSInterstitialAdDidCilck {
    NSLog(@"MSSDK MSInterstitialAdDidCilck");
}

// 广告关闭
- (void)MSInterstitialAdDidClose {
    NSLog(@"MSSDK MSInterstitialAdDidClose");
}
```

其中广告事件的回调顺序为：

1. 广告打开
2. 广告点击（当用户或玩家点击广告之后才会触发，如用户未点击广告则不触发）
3. 广告关闭

<br>


# 4 常见问题

- 何时关闭和恢复游戏背景音乐与逻辑
- 如何判断广告生命周期结束
- 如何获得广告加载成功的回调
- 能在广告关闭回调中直接展示广告吗
- 广告播放时能进行横竖屏切换吗

> <span id="inter_faq1">何时关闭和恢复游戏背景音乐与逻辑</span>

建议在调用`presentRewardVideoAdForAdUnitID`时关闭背景音乐，暂停游戏逻辑；在收到`MSRewardVideoAdDidClose`回调时恢复背景音乐，开始游戏逻辑。

> <span id="inter_faq2">如何判断广告生命周期结束</span>

当收到`MSRewardVideoAdDidClose`回调时，意味着本次广告展示结束

> <span id="inter_faq3">如何获得广告加载成功的回调</span>

MSSDK使用自动加载广告的模式，无需开发者持有广告对象、调用加载方法和记录广告加载结果，大大减少开发者的负担，使开发者能将精力聚焦游戏逻辑。如您想获得广告加载成功的回调，可自行定时监控循环`hasRewardAdAvailable`方法即可，循环间隔由您自行控制，建议不要太短，5s以上为宜。

> <span id="inter_faq4">能在广告关闭回调中直接展示广告吗</span>

不建议这样做。因为有些平台如admob，需要一定的时间间隔来渲染下一个广告。在广告关闭回调中立刻播放admob的广告会造成广告无法正常展示的情况。

> <span id="inter_faq5">广告播放时能进行横竖屏切换吗</span>

不建议这样做。有些平台在横屏状态下加载的横屏素材是无法在竖屏状态下展示的，可能会造成无法展示或者游戏闪退等不可控现象。