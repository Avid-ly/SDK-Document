# 1. 概述


如游戏中包含 Google 应用内支付（IAP）功能，需将支付结果同步至统计服务器以便分析用户数据。请使用以下 API 完成相应支付上报。

> 如支付接口包含 extramap，则：<br>
> &bull;&ensp;alyPlayerId：只能传 ggid</br>
> &bull;&ensp;roleId：传游戏中的角色 ID (或游戏 ID)


#  2.Android 支付上报 
```csharp
// Android 平台 API
void traceZFLogReportForAndroid(string playerId , string iabPurchaseOriginalJson, string iabPurchaseSignature);
```

- 如需上报（区/服）参数，可调用以下方法：

```csharp
// Android 平台 API
void traceZFLogReportWithServerForAndroid(string playerId , string gameAccountServer, string iabPurchaseOriginalJson, string iabPurchaseSignature,Dictionary <  string,string> etc );
```

参数说明

|参数名|说明|
|:----  |-----   |
|playerId | 游戏用户 ID，请传入使用的 player ID（请确认与登录上报的 playerId 保持一致）。  |
|iabPurchaseOriginalJson |  Purchase.getOriginalJson()<br>&bull;&ensp;Google 支付传入在 onConsumeFinished(Purchase, IabResult) 中返回的原始数据。</br>&bull;&ensp;MyCard 支付传入返回的原始 json 数据。<br>&bull;&ensp;BluePay 支付传入返回的原始 json 数据。</br>&bull;&ensp;Amazon 支付传入 json 格式：{“receiptId”:”yourReceiptId”,”userId”:”yourUserId”}<br>示例：</br>{“receiptId”:”mINy5VRd1mk2z-WBtTqw9sdf1GWhnuVx07kzTBMR600=:2:11”,”userId”:”LRyD0FfW_3zeOlfJyxpVll-Z1rKn6dSf9xs12fFg0=”}。|
| iabPurchaseSignature|  Purchase.getSignature()<br>&bull;&ensp;Google 支付请务必传入 Google 返回的原始数据。</br>&bull;&ensp;MyCard 支付传入 mycard。<br>&bull;&ensp;BluePay 支付传入 bluepay。</br>&bull;&ensp;Amazon 支付传入 amazon。|
| etc| <br>&bull;&ensp;传入额外信息  
&ensp;

# 3. iOS支付上报

## 3.1 Apple Store应用内支付
> 需在支付成功后调用 Apple IAP 上报，即`-(void)paymentQueue:(SKPaymentQueue *)queue updatedTransactions:(NSArray *)transaction`中调用。

- 如需使用 APP Store 的应用内支付（IAP）功能，请调用我们的对应方法进行支付上报。

```csharp
// iOS 平台 API
void traceZFLogReportWithPlayerIdForIos(string playerId, string receiptDataString, bool isbase64);
```
- 如需上报（区/服）参数，可调用以下方法：

```csharp
// iOS 平台 API
void traceZFLogReportWithServerForIos(string playerId, string gameAccountServer, string receiptDataString, bool isbase64);
```
参数说明：

|参数名|说明|
|:----  |-----   |
|playerId |游戏用户 ID，请传入使用的 player ID，用于后续对应。   |
|gameAccountServer | 游戏区/服 ID。  |
|receiptDataString |  支付凭证字符串。  |
|isbase64 | receiptDataString 是否已 base64 编码。  |

&ensp;

> &bull;&ensp;如获取的 receiptDataString 已是 base64 编码后的，则不需要再次转码，可直接传值！<br>
> &bull;&ensp;针对 iOS 支付，如获取到 {"Store":"AppleAppStore","TransactionID":"xxxxxx","Payload":"xxxxxxx"}，只需传入 Payload 后的xxxxxxx内容。</br>

 
## 3.2 iOS第三方平台支付上报

- 如需使用 mycard、bluepay 等第三方支付平台功能，请调用我们的对应方法进行支付上报。

```csharp
void traceThirdpartyZFLogReportForIos(string playerId, string thirdparty, string receiptDataString);
```
- 如需上报（区/服）参数，可调用以下方法：

```csharp
void traceThirdpartyZFLogReportWithServerForIos(string playerId, string gameAccountServer, 
     string thirdparty, string receiptDataString);
```
参数说明：

|参数名|说明|
|:----  |-----   |
|playerId |游戏用户 ID，请传入使用的 player ID，用于后续对应。   |
|gameAccountServer | 游戏区/服 ID。  |
|thirdparty |  为第三方支付平台名称如 mycard 和 bluepay 等。  |
|receiptDataString | 第三方支付平台单据。  |

调用示例：

```csharp
UPTraceApi.traceThirdpartyZFLogReportForIos ("playerId", "thirdparty", "receiptDataString");
UPTraceApi.traceThirdpartyZFLogReportWithServerForIos ("playerId", "www.tttt.ccc", "thirdparty", "receiptDataString");

UPTraceApi.traceZFLogReportForAndroid ("playerId", "iab", "signature");
UPTraceApi.traceZFLogReportWithServerForAndroid ("playerId", "www.tttt.ccc", "original", "signature");

UPTraceApi.traceZFLogReportWithPlayerIdForIos ("playerId", "iab", true);
UPTraceApi.traceZFLogReportWithServerForIos ("playerId", "www.tttt.ccc", "iab", false);
```