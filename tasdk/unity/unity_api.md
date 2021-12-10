以下是TASDK的API列表，方便您查询和使用

# UPTraceApi

UPTraceApi是TASDK的入口类，包含了初始化，打点，登录上报，支付上报等功能，具体API参考如下：

# 1.SDK初始化
```C#
public static void initTraceSDKWithCallback(string productId, string channelId, Action<string> success, Action<string> fail)
```
|参数|描述|
|---|---|
|productId|产品Id|
|channelId|渠道Id，该参数可填"32400"|
|success|初始化成功回调|
|fail|初始化失败回调，string为失败原因|


# 2.禁止使用隐私信息
```C#
public static void disableAccessPrivacyInformation()
```
# 3.事件打点
```C#
public static void traceString(string key, string value)
```
|参数|描述|
|---|---|
|key|事件Key|
|value|事件Value|
 # 4.计数打点
```C#
public static void countKey(string key)
```
|参数|描述|
|---|---|
|key|计数事件Key|
 # 5.游客登录上报
```C#
public static void guestLogin(string playerId)
```
|参数|描述|
|---|---|
|playerId|游客玩家Id|
 # 6.Facebook登录上报
```C#
public static void facebookLogin(string playerId, string openId, string openToken)
```
|参数|描述|
|---|---|
|playerId|玩家Id|
|openId|此参数已废弃，请传入空字符串|
|openToken|facebook登录返回的token|
# 7.通用登录上报
```C#
public static void logCommonLogin(string loginType, string playerId, string loginToken, Dictionary<string, string> extension)
```
|参数|描述|
|---|---|
|loginType|登录类型|
|playerId|玩家Id|
|loginToken|登录token|
|extension|扩展参数|

loginType参数有以下可选值，可直接引用登录类型，如UpTraceApi.LoginTypeGuest

|变量|字符串|描述|
|---|---|---|
|LoginTypeGuest|guest|游客登录|
|LoginTypeAas|aas|AASDK登录|
|LoginTypeFacebook|facebook|facebook登录|
|LoginTypeGoogleplay|googleplay|GP登录|
|LoginTypeInstagram|instagram|ins登录|
|LoginTypeGamecenter|gamecenter|Gamecenter登录|
|LoginTypeUlt|ult|ult登录|
|LoginTypeApple|apple|苹果登录|
|LoginTypeOther|other|其他登录类型|

loginToken参数说明

|loginType|loginToken|
|---|---|
|LoginTypeGuest|空字符串|
|LoginTypeFacebook|facebook登录返回的token|
|LoginTypeTwitter|twitter返回的信息拼接成的json字符串，格式：{"twitterId":"xx","twitterUserName":"xx","twitterAuthToken":"xx"}|
|LoginTypeGamecenter|GameCenter返回的teamPlayerID或playerID|
|LoginTypeApple|apple返回的identityToken字符串|
|LoginTypeOther|对应的登录方式返回的能校验用户合法性的对应参数|

# 8.AASDK登录上报，适用于使用AASDK登录后的上报
```C#
public static void logAASLogin(string loginType, string playerId, string loginToken, string ggid, Dictionary<string, string> extension)
```
|参数|描述|
|---|---|
|loginType|登录类型|
|playerId|玩家Id|
|ggid|AASDK登录返回的ggid|
|loginToken|登录token|
|extension|扩展参数|

loginType参数有以下可选值，可直接引用登录类型，如UpTraceApi.LoginTypeGuest

|变量|字符串|描述|
|---|---|---|
|LoginTypeGuest|guest|游客|
|LoginTypeAas|aas|AASDK登录|
|LoginTypeFacebook|facebook|facebook登录|
|LoginTypeGoogleplay|googleplay|GP登录|
|LoginTypeInstagram|instagram|ins登录|
|LoginTypeGamecenter|gamecenter|Gamecenter登录|
|LoginTypeUlt|ult|ult登录|
|LoginTypeApple|apple|苹果登录|
|LoginTypeOther|other|其他登录类型|

 # 6.iOS非Appstore内购支付上报
```C#
public static void traceThirdpartyZFLogReportForIos(string playerId, string thirdparty, string receiptDataString)
```
|参数|描述|
|---|---|
|playerId|玩家Id|
|thirdparty|为第三方支付平台名称如 mycard 和 bluepay 等|
|receiptDataString|支付单据|
 # 7.iOS非Appstore内购支付上报(带区服)
```C#
public static void traceThirdpartyZFLogReportWithServerForIos(string playerId, string gameAccountServer, string thirdparty, string receiptDataString)
```
|参数|描述|
|---|---|
|playerId|玩家Id|
|gameAccountServer|玩家区服|
|thirdparty|为第三方支付平台名称如 mycard 和 bluepay 等|
|receiptDataString|支付单据|
 # 8.iOS Appstore内购支付上报 
```C#
public static void traceZFLogReportWithPlayerIdForIos(string playerId, string receiptDataString, bool isbase64)
```
|参数|描述|
|---|---|
|playerId|玩家Id|
|isbase64|是否为64编码后，Apple默认返回单据base64编码|
|receiptDataString|支付单据，Apple默认返回单据base64编码，无需再次转码|

 # 9.iOS Appstore内购支付上报 (带区服)
```C#
public static void traceZFLogReportWithServerForIos(string playerId, string gameAccountServer, string receiptDataString, bool isbase64)
```
|参数|描述|
|---|---|
|playerId|玩家Id|
|gameAccountServer|玩家区服|
|isbase64|是否为64编码后，Apple默认返回单据base64编码|
|receiptDataString|支付单据，Apple默认返回单据base64编码，无需再次转码|

|API|描述|
|:--------------|--------------------|

  # 10.iOS Appstore内购支付上报 (带区服+额外参数)
```C#
public static void traceZFLogReportWithServerForIos(string playerId, string gameAccountServer, string receiptDataString, bool isbase64, Dictionary<string, string> dic)
```
|参数|描述|
|---|---|
|playerId|玩家Id|
|gameAccountServer|玩家区服|
|isbase64|是否为64编码后，Apple默认返回单据base64编码|
|receiptDataString|支付单据，Apple默认返回单据base64编码，无需再次转码|
|dic|额外参数|
  # 11.Android GP支付上报
```C#
public static void traceZFLogReportForAndroid(string gameAccountId, string iabPurchaseOriginalJson, string iabPurchaseSignature)
```
|参数|描述|
|---|---|
| gameAccountId           | 游戏用户 ID，请传入使用的 player ID（请确认与登录上报的 playerId 保持一致）。 |
| iabPurchaseOriginalJson | Purchase.getOriginalJson() • Google 支付传入在 onConsumeFinished(Purchase, IabResult) 中返回的原始数据。 • MyCard 支付传入返回的原始 json 数据。 • BluePay 支付传入返回的原始 json 数据。 • Amazon 支付传入 json 格式：{“receiptId”:”yourReceiptId”,”userId”:”yourUserId”} 示例： {“receiptId”:”mINy5VRd1mk2z-WBtTqw9sdf1GWhnuVx07kzTBMR600=![2](https://github.githubassets.com/images/icons/emoji/2.png)11”,”userId”:”LRyD0FfW_3zeOlfJyxpVll-Z1rKn6dSf9xs12fFg0=”}。 |
| iabPurchaseSignature    | Purchase.getSignature() • Google 支付请务必传入 Google 返回的原始数据。 • MyCard 支付传入 mycard。 • BluePay 支付传入 bluepay。 • Amazon 支付传入 amazon。 |

# 12.Android GP支付上报（带参数）
```C#
public static void traceZFLogReportForAndroid(string gameAccountId, string iabPurchaseOriginalJson, string iabPurchaseSignature, Dictionary<string, string> dic)
```
|参数|描述|
|---|---|
| gameAccountId           | 游戏用户 ID，请传入使用的 player ID（请确认与登录上报的 playerId 保持一致）。 |
| iabPurchaseOriginalJson | Purchase.getOriginalJson() • Google 支付传入在 onConsumeFinished(Purchase, IabResult) 中返回的原始数据。 • MyCard 支付传入返回的原始 json 数据。 • BluePay 支付传入返回的原始 json 数据。 • Amazon 支付传入 json 格式：{“receiptId”:”yourReceiptId”,”userId”:”yourUserId”} 示例： {“receiptId”:”mINy5VRd1mk2z-WBtTqw9sdf1GWhnuVx07kzTBMR600=![2](https://github.githubassets.com/images/icons/emoji/2.png)11”,”userId”:”LRyD0FfW_3zeOlfJyxpVll-Z1rKn6dSf9xs12fFg0=”}。 |
| iabPurchaseSignature    | Purchase.getSignature() • Google 支付请务必传入 Google 返回的原始数据。 • MyCard 支付传入 mycard。 • BluePay 支付传入 bluepay。 • Amazon 支付传入 amazon。 |
| dic    | 额外参数 |

# 13.Android GP支付上报（带区服）
```C#
public static void traceZFLogReportWithServerForAndroid(string gameAccountId, string gameAccountServer, string iabPurchaseOriginalJson,string iabPurchaseSignature)
```
|参数|描述|
|---|---|
| gameAccountId           | 游戏用户 ID，请传入使用的 player ID（请确认与登录上报的 playerId 保持一致）。 |
| gameAccountServer           | 玩家区服 |
| iabPurchaseOriginalJson | Purchase.getOriginalJson() • Google 支付传入在 onConsumeFinished(Purchase, IabResult) 中返回的原始数据。 • MyCard 支付传入返回的原始 json 数据。 • BluePay 支付传入返回的原始 json 数据。 • Amazon 支付传入 json 格式：{“receiptId”:”yourReceiptId”,”userId”:”yourUserId”} 示例： {“receiptId”:”mINy5VRd1mk2z-WBtTqw9sdf1GWhnuVx07kzTBMR600=![2](https://github.githubassets.com/images/icons/emoji/2.png)11”,”userId”:”LRyD0FfW_3zeOlfJyxpVll-Z1rKn6dSf9xs12fFg0=”}。 |
| iabPurchaseSignature    | Purchase.getSignature() • Google 支付请务必传入 Google 返回的原始数据。 • MyCard 支付传入 mycard。 • BluePay 支付传入 bluepay。 • Amazon 支付传入 amazon。 |

# 14.Android GP支付上报（带区服+参数）
```C#
public static void traceZFLogReportWithServerForAndroid(string gameAccountId, string gameAccountServer, string iabPurchaseOriginalJson,string iabPurchaseSignature, Dictionary<string, string> dic)
```
|参数|描述|
|---|---|
| gameAccountId           | 游戏用户 ID，请传入使用的 player ID（请确认与登录上报的 playerId 保持一致）。 |
| gameAccountServer           | 玩家区服 |
| iabPurchaseOriginalJson | Purchase.getOriginalJson() • Google 支付传入在 onConsumeFinished(Purchase, IabResult) 中返回的原始数据。 • MyCard 支付传入返回的原始 json 数据。 • BluePay 支付传入返回的原始 json 数据。 • Amazon 支付传入 json 格式：{“receiptId”:”yourReceiptId”,”userId”:”yourUserId”} 示例： {“receiptId”:”mINy5VRd1mk2z-WBtTqw9sdf1GWhnuVx07kzTBMR600=![2](https://github.githubassets.com/images/icons/emoji/2.png)11”,”userId”:”LRyD0FfW_3zeOlfJyxpVll-Z1rKn6dSf9xs12fFg0=”}。 |
| iabPurchaseSignature    | Purchase.getSignature() • Google 支付请务必传入 Google 返回的原始数据。 • MyCard 支付传入 mycard。 • BluePay 支付传入 bluepay。 • Amazon 支付传入 amazon。 |
| dic    | 额外参数 |


 # 15.Twitter登录上报
```C#
public static void twitterLogin(string playerId, string twitterId, string twitterUserName, string twitterAuthToken) 
```
|参数|描述|
|---|---|
|playerId|玩家Id|
|twitterId|twitterId|
|twitterUserName|twitter用户名|
|twitterAuthToken|twitter登录返回的token|

 # 16.在线时长上报-回到前台
```C#
public static void becomeActive()
```
# 17.在线时长上报-回到后台
```C#
public static void resignActive()
```

 # 18.获取推广用户标签
```C#
public static void getConversionData(string afConversionData, Action<string> success, Action<string> fail)
```
|参数|描述|
|---|---|
|afConversionData|AppsFlyer返回的归因数据|
|success|成功回调|
|fail|失败回调|
 
 # 19.获取付费用户标签
```C#
public static void getPayUserLayer(Action<string> success, Action<string> fail)
```
|参数|描述|
|---|---|
|success|成功回调|
|fail|失败回调|
|API|描述|
|:--------------|--------------------|

# 19.获取广告用户标签
```C#
public static void getUserAdLayer(Action<string> success, Action<string> fail)
```
|参数|描述|
|---|---|
|success|成功回调|
|fail|失败回调|
# 20.设置FirebaseId
```C#
public static void setFirebaseId(string firebaseId)
```
|参数|描述|
|---|---|
|firebaseId|firebaseId|

# 21.上报iOS ATT状态
```C#
public static void logATTStatusForIos()
```

# 22.展示测试套件（仅Unity-Android）
```C#
public static void showHelper(string pid, string channel)
```
 |参数|描述|
|---|---|
|pid|产品Id|
|channel|渠道，请填写 "32400"|

# 23.设置DEBUG日志
```C#
public static void enalbeDebugMode(bool isOpen)
```
 |参数|描述|
|---|---|
|isOpen|是否打开DEBUG日志|

</br>

 
