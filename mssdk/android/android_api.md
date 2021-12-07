以下是MSSDK的API列表，方便您查询和使用

# MSSDK

此类是MSSDK的入口，包含初始化，设置生命周期回调等方法

|  方法   | 描述  |
|  ----  | ----  |
| init(Activity context,MsSdkInitializationListener Listener) | SDK初始化方法 |
| setDebuggable(boolean isOpened)  | 此方法用来开启Debug模式，打印日志|
| onCreate()|生命周期回调|
| onStart()|生命周期回调|
| onStop()|生命周期回调|
| onDestroy()|生命周期回调|
| onPause()|生命周期回调|
| onResume()|生命周期回调|
| onRestart()|生命周期回调|
| onBackPressed()|生命周期回调|
| setAccessPrivacyInfoStatus()|设置授权信息|

# PrivacyManager
此类是MSSDK授权信息管理类

|  变量   | 描述  |
|  ----  | ----  |
| AccessPrivacyNameEnum | 授权名称（GDPR,CPPA,COPPA） |
| AccessPrivacyInfoStatusEnum| 授权结果(accepted,denied,unknow)|


# MsGameEasyBannerWrapper
此类是MSSDK的banner快速集成类，用于展示快速集成样式的banner广告

|  方法   | 描述  |
|  ----  | ----  |
|void initGameBannerWithActivity(Activity gameActivity);| 初始化banner广告 |
|void addBannerCallbackAtADPlaceId(String cpPlaceId, MsBannerAdListener callback) | 此方法用来设置广告回调 |
|void showTopBannerAtADPlaceId(String cpPlaceId)  | 展示广告(上方) |
|void showBottomBannerAtADPlaceId(String cpPlaceId)| 展示广告(下方) |
|void removeGameBannerAtADPlaceId(String cpPlaceId)| 移除广告 |
|void hideTopBanner()  | 隐藏广告(上方) |
|void hideBottomBanner() | 隐藏广告(下方) |


# MsBannerAd
此类是MSSDK的banner自定义集成类，用于展示自定义集成样式的banner广告

|  方法   | 描述  |
|  ----  | ----  |
|void setMsBannerAdListener( MsBannerAdListener listener)| 此方法用来设置广告回调 |

# MsInterstitialAd
此类是MSSDK的插屏广告实现类，用于展示插屏广告

|  方法   | 描述  |
|  ----  | ----  |
|void setLoadCallBack(MsInterstitialLoadCallback callback)| 此方法用来设置广告回调 |
|boolean isReady() | 此方法用来判断是否可以播放广告 |
|void show()| 展示广告|
|void setInterstitialAdListener(MsInterstitialAdListener listener)| 设置广告展示回调|




# MsRewardVideoAd
此类是MSSDK的激励视频实现类，用于展示激励视频广告

|  方法   | 描述  |
|  ----  | ----  |
|void setLoadCallBack(MsRewardVideoLoadCallback callback)| 此方法用来设置广告回调 |
|boolean isReady() | 此方法用来判断是否可以播放广告 |
|void show(String placementId)| 展示广告|
|void setInterstitialAdListener(MsRewardVideoAdListener listener)| 设置广告展示回调|


