以下是MSSDK的API列表，方便您查询和使用

# MSSDK

此类是MSSDK的入口，包含初始化，广告调用等方法

|  方法   | 描述  |
|  ----  | ----  |
| + (void)initSDK;  | SDK初始化方法 |
| + (void)initSDKCompletion:(void(^)(void))completionBlock;  | 带有回调的SDK初始化方法 |
| + (BOOL)hasRewardAdAvailable;  | 此方法用来判断是否可以播放激励视频 |
| + (void)setRewardDelegate:(id<MSRewardedVideoDelegate>)rewardDelegate;  | 此方法用来设置激励视频回调 |
| + (void)presentRewardVideoAdForAdUnitID:(NSString *)adUnitID fromViewController:(UIViewController *)viewController;  | 此方法用来展示激励视频 |
| + (BOOL)hasInterstitialAdAvailable;  | 此方法用来判断是否可以播放插屏 |
| + (void)setInterstitialDelegate:(id<MSInterstitialDelegate>)interstitialDelegate;  | 此方法用来设置插屏广告回调 |
| + (void)presentInterstitialForAdUnitID:(NSString *)adUnitID fromViewController:(UIViewController *)viewController;  | 此方法用来展示插屏广告 |
| + (UIView *)initBannerView;  | 此方法用来获取横幅广告视图 |
| + (void)grantConsent;  | 此方法用来授权GDPR |
| + (void)revokeConsent;  | 此方法用来取消授权GDPR |
| + (void)openLog:(BOOL)open;  | 此方法用来开启Debug模式，打印日志 |

<br>

# MSSDKVersion

此类是MSSDK版本号

|  方法   | 描述  |
|  ----  | ----  |
| MSSDKVERSIONSTRING | SDK版本号 |
| MSSDKVERSION  | SDK版本号缩写  |
| MSSDKBuild  | SDK编译版本号  |

<!--### + (void)initSDK;

SDK初始化方法

### + (void)initSDKCompletion:(void(^)(void))completionBlock;

带有回调的SDK初始化方法

### + (BOOL)hasRewardAdAvailable;

此方法用来判断是否可以播放激励视频

### + (void)setRewardDelegate:(id<MSRewardedVideoDelegate>)rewardDelegate;

此方法用来设置激励视频回调

### + (void)presentRewardVideoAdForAdUnitID:(NSString *)adUnitID fromViewController:(UIViewController *)viewController;

此方法用来展示激励视频

### + (BOOL)hasInterstitialAdAvailable;

此方法用来判断是否可以播放插屏

### + (void)setInterstitialDelegate:(id<MSInterstitialDelegate>)interstitialDelegate;

此方法用来设置插屏广告回调

### + (void)presentInterstitialForAdUnitID:(NSString *)adUnitID fromViewController:(UIViewController *)viewController;

此方法用来展示插屏广告

### + (UIView *)initBannerView;

此方法用来获取横幅广告视图

### + (void)grantConsent;

此方法用来授权GDPR

### + (void)revokeConsent;

此方法用来取消授权GDPR

### + (void)openLog:(BOOL)open;

此方法用来开启Debug模式，打印日志-->

