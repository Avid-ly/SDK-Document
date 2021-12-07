以下是TASDK的API列表，方便您查询和使用

# TraceAnalysis

TraceAnalysis是TASDK的入口类，包含了初始化，打点，登录上报，支付上报等功能，具体API参考如下：

|API|描述|
|:--------------|--------------------|
|` public static void initTraceSDKWithCallback(string productId, string channelId, Action<string> success, Action<string> fail)`|SDK初始化|通过该API，初始化SDK|在app启动的时候调用|
|`public static void disableAccessPrivacyInformation()`|禁止使用隐私信息|将用户拒绝隐私授权同步给SDK|当用户明确拒绝授权使用隐私时调用|
|`public static void traceString(string key, string value)`|keyValue打点|通过该API，可以实现事件打点|当需要事件打点时调用|
|` public static void countKey(string key)`|计数打点|累积事件计算打点|当需要统计某个事件发生的次数时使用|
|`public static void guestLogin(string playerId)`|游客登录上报|统计游客登录事件|游客登录成功后调用|
|`public static void facebookLogin(string playerId, string openId, string openToken)`|Facebook登录上报|统计Facebook登录事件|Facebook登录成功后调用|
|`public static void logCommonLogin(string loginType, string playerId, string loginToken, Dictionary<string, string> extension)`|通用登录上报|通用的统计登录事件方法|登录成功后调用|
|`public static void logAASLogin(string loginType, string playerId, string loginToken, string ggid, Dictionary<string, string> extension)`|AAS登录上报|统计AASDK登录事件|AASDK返回登录成功后调用|
|`public static void traceThirdpartyZFLogReportForIos(string playerId, string thirdparty, string receiptDataString)`|iOS非Appstore内购支付上报|统计内购事件|内购支付成功后调用|
|`public static void traceThirdpartyZFLogReportWithServerForIos(string playerId, string gameAccountServer, string thirdparty, string receiptDataString)`|iOS非Appstore内购支付上报 (带区服)|统计内购事件（带区服参数）|内购支付成功后调用|
|`public static void traceZFLogReportWithPlayerIdForIos(string playerId, string receiptDataString, bool isbase64)`|iOS支付上报|初始化在线时长上报功能|在需要统计在线时长的时候调用|
|`public static void traceZFLogReportWithPlayerIdForIos(string playerId, string receiptDataString, bool isbase64, Dictionary<string, string> dic)`|iOS支付上报带参数|初始化在线时长上报功能|在需要统计在线时长的时候调用|
|`public static void traceZFLogReportWithServerForIos(string playerId, string gameAccountServer, string receiptDataString, bool isbase64)`|iOS支付上报（带区服）|初始化在线时长上报功能|在需要统计在线时长的时候调用|
|`public static void traceZFLogReportWithServerForIos(string playerId, string gameAccountServer, string receiptDataString, bool isbase64, Dictionary<string, string> dic)`|iOS支付上报（带参数+区服）|初始化在线时长上报功能|在需要统计在线时长的时候调用|
|`public static void traceZFLogReportForAndroid(string gameAccountId, string iabPurchaseOriginalJson, string iabPurchaseSignature)`|Android支付上报|初始化在线时长上报功能|在需要统计在线时长的时候调用|
|`public static void traceZFLogReportForAndroid(string gameAccountId, string iabPurchaseOriginalJson, string iabPurchaseSignature, Dictionary<string, string> dic)`|Android支付上报（带参数）|初始化在线时长上报功能|在需要统计在线时长的时候调用|
|`public static void traceZFLogReportWithServerForAndroid(string gameAccountId, string gameAccountServer, string iabPurchaseOriginalJson,string iabPurchaseSignature) `|Android支付上报（带 区服）|初始化在线时长上报功能|在需要统计在线时长的时候调用|
|` public static void traceZFLogReportWithServerForAndroid(string gameAccountId, string gameAccountServer, string iabPurchaseOriginalJson,string iabPurchaseSignature, Dictionary<string, string> dic) `|Android支付上报（带 区服+参数）|初始化在线时长上报功能|在需要统计在线时长的时候调用|
|` public static void twitterLogin(string playerId, string twitterId, string twitterUserName, string twitterAuthToken) `|Twitter登录上报|初始化在线时长上报功能|在需要统计在线时长的时候调用|
|`public static void becomeActive()`|在线时长上报-回到前台|在线时长上报回调前台事件|在初始化在线时长上报功能后，当app回到前台时调用|
|`public static void resignActive()`|在线时长上报-回到后台|在线时长上报回调后台事件|在初始化在线时长上报功能后，当app回到后台时调用|
|`public static void getConversionData(string afConversionData, Action<string> success, Action<string> fail)`|推广用户标签|获取推广用户的标签|在需要推广用户的标签时调用|
|`public static void setAFId(string afid)`|设置appsFlyerId|将appsFlyerId同步给SDK|在AppsFlyerSDK初始化后，当能获取到appsFlyerId值时调用|
|`public static void getPayUserLayer(Action<string> success, Action<string> fail)`|付费用户标签|获取付费用户的标签|在需要付费用户的标签时调用|
|`public static void getUserAdLayer(Action<string> success, Action<string> fail)`|广告用户标签|获取广告用户的标签|在需要广告用户的标签时调用|
|`public static void setFirebaseId(string firebaseId)`|设置FirebaseId|获取广告用户的标签|在需要广告用户的标签时调用|
|`public static void showHelper(string pid, string channel)`|展示Android测试套件|获取广告用户的标签|在需要广告用户的标签时调用|
|`public static void logATTStatusForIos()`|设置iOS ATT状态|获取广告用户的标签|在需要广告用户的标签时调用|


</br>

 
