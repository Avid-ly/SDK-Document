以下是MSSDK的API列表，方便您查询和使用

# MSSDK

此类是MSSDK的入口，包含初始化，广告调用等方法

|  方法   | 描述  |
|  ----  | ----  |
| public static void initSdk (Action<string> completed)| 带有回调的SDK初始化方法 |
| public static bool isRewardReady ()  | 此方法用来判断是否可以播放激励视频 |
|public static void setRewardCallback(Action<string, string> didOpen, Action<string, string> didClick, Action<string, string> didClose, Action<string, string> didReward) | 此方法用来设置激励视频回调 |
| public static void showRewardAd (string cpAdUnitID)| 此方法用来展示激励视频 |
|public static bool isInterstitialReady (string cpAdUnitID)| 此方法用来判断是否可以播放插屏 |
| public static void setInterstitialCallback (Action<string, string> didOpen, Action<string, string> didClick, Action<string, string> didClose)  | 此方法用来设置插屏广告回调 |
| public static void showInterstitialAd (string cpAdUnitID)  | 此方法用来展示插屏广告 |
| public static void showBannerAd (string cpAdUnitID, double x, double y, double width, double height)   | 此方法用来获取横幅广告视图 |
| public static void grantConsent () | 此方法用来授权GDPR |
| public static void revokeConsent () | 此方法用来拒绝授权GDPR |
|public static void openLog (bool open) | 此方法用来开启Debug模式，打印日志 |

<br>

  
