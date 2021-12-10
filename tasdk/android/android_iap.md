
# 1 支付上报介绍

由于支付环节在游戏或应用中至关重要，因此我们单独提供了支付事件上报方法，以便快速统计支付事件。

其中支付分为

- [谷歌支付](https://developer.android.google.cn/google/play/billing/getting-ready "链接")
- [华为支付](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/introduction-0000001050033062 "链接")
- [亚马逊支付](https://github.com/amzn/amazon-pay-sdk-java?ld=NSGoogle "链接")


对此我们分别提供了对应的支付上报方法


# 2 前提条件

在您的应用中集成登录上报之前，您必须：

- 按照我们的步骤将TASDK集成到您的项目中。
- 请务必在上报之前初始化TASDK


# 3. 支付上报

```java
 void logReport((String playerId, String iabPurchaseOriginalJson, String iabPurchaseSignature)
```

参数说明

|参数名|说明|
|:----  |-----   |
|playerId | 游戏用户 ID，请传入使用的 player ID（请确认与登录上报的 playerId 保持一致）。  |
|iabPurchaseOriginalJson |  Purchase.getOriginalJson()<br>&bull;&ensp;Google 支付，传入在 onPurchasesUpdated(BillingResult billingResult, List<Purchase> purchases) 中返回的原始数据。</br><br>&bull;&ensp;Amazon 支付传入 json 格式：{“receiptId”:”amazonReceiptId”,”userId”:”amazonUserId”}<br>示例：</br>{“receiptId”:”mINy5VRd1mk2z-WBtTqw9sdf1GWhnuVx07kzTBMR600=:2:11”,”userId”:”LRyD0FfW_3zeOlfJyxpVll-Z1rKn6dSf9xs12fFg0=”}<br>- `UserId`：代表应用商店中使用的不同亚马逊用户 ID（`purchaseResponse > userData > userId`）。</br>- `ReceiptId`：购买的唯一 ID（`purchaseResponse > receipt > receiptId`<br>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;或`purchaseUpdatesResponse > receipts > receipt > receiptId`）。</br>&bull;&ensp;Huawei 支付返回purchaseResultInfo 中PurchaseData的原始数据。<br>&bull;&ensp;BluePay 支付传入返回的原始 json 数据。</br>&bull;&ensp;MyCard 支付传入返回的原始 json 数据。|
| iabPurchaseSignature|   Purchase.getSignature()<br>&bull;&ensp;Google 支付请务必传入 Google 返回的原始数据。</br>&bull;&ensp;Amazon 支付传入 "amazon"。</br>&bull;&ensp;Huawei 支付请务必传入 purchaseResultInfo中的Signature原始数据。</br>&bull;&ensp;MyCard 支付传入 "mycard"。<br>&bull;&ensp;BluePay 支付传入 "bluepay"。|
关于支付，可以参考

调用示例：
```java
// 以google billing为例
    private PurchasesUpdatedListener purchasesUpdatedListener = new PurchasesUpdatedListener() {
        @Override
        public void onPurchasesUpdated(BillingResult billingResult, List<Purchase> purchases) {
            if (billingResult.getResponseCode() == BillingClient.BillingResponseCode.OK
                    && purchases != null) {
                for (Purchase purchase : purchases) {
                    ZFLogReport.logReport("user001",purchase.getOriginalJson(),purchase.getSignature());
                }
            } else if (billingResult.getResponseCode() == BillingClient.BillingResponseCode.USER_CANCELED) {
                // Handle an error caused by a user cancelling the purchase flow.
            } else {
                // Handle any other error codes.
            }
        }
    };
```
```java
// 以华为IAP为例
     @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == 6666) {
            if (data == null) {
                Log.e("onActivityResult", "data is null");
                return;
            }
            PurchaseResultInfo purchaseResultInfo = Iap.getIapClient(this).parsePurchaseResultInfoFromIntent(data);
            switch (purchaseResultInfo.getReturnCode()) {
                case OrderStatusCode.ORDER_STATE_CANCEL:
                    // User cancel payment.
                    Log.e("onActivityResult", "User cancel payment.");
                    break;
                case OrderStatusCode.ORDER_STATE_FAILED:
                case OrderStatusCode.ORDER_PRODUCT_OWNED:
                    // Checking if there exists undelivered products.
                    Log.e("onActivityResult", "Checking if there exists undelivered products.");
                    //queryPurchases(MainActivity.this);
                    break;
                case OrderStatusCode.ORDER_STATE_SUCCESS:
                    // pay success.
                    String inAppPurchaseData = purchaseResultInfo.getInAppPurchaseData();
                    String inAppPurchaseDataSignature = purchaseResultInfo.getInAppDataSignature();
                    ZFLogReport.logReport("user001",inAppPurchaseData,inAppPurchaseDataSignature);
                    // Delivering a Consumable Product
                    break;
                default:
                    break;
            }
            return;
        }
    }
```


&ensp;
# 4. 支付上报（附加额外参数）

```java
void logReport(String playerId, String iabPurchaseOriginalJson, String iabPurchaseSignature, HashMap<String, String> extraMap);
```


参数说明

|参数名|说明|
|:----  |-----   |
|playerId | 游戏用户 ID，请传入使用的 player ID（请确认与登录上报的 playerId 保持一致）。  |
|iabPurchaseOriginalJson |  同上面 3.支付上报 中参数一致。|
| iabPurchaseSignature|  同上面 3.支付上报 中参数一致。|
| extraMap|  其他扩展参数，可以为 null；仅当使用 AASDK 时，key-value 参照以下格式定义：<br>&bull;&ensp;alyPlayerId: 新用户登录系统的 GGID，无游戏接入可为空。</br>&bull;&ensp;region: 角色所在区，没有可以为空。<br>&bull;&ensp;server: 角色所在服，没有可以为空。</br>&bull;&ensp;roleId: 游戏角色 ID，没有可以为空。|


关于支付，可以参考

- [谷歌支付](https://developer.android.google.cn/google/play/billing/getting-ready "链接")
- [华为支付](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/introduction-0000001050033062 "链接")
- [亚马逊支付](https://github.com/amzn/amazon-pay-sdk-java?ld=NSGoogle "链接")

&ensp;
# 5. 支付上报（附加游戏服务器）
如上报支付数据时需区分游戏的服务器分区，可使用与 logPaymentWithServer() 相同的方法。
```java
 void logReportWithServer(String playerId, String playerServer, String iabPurchaseOriginalJson, String iabPurchaseSignature);
```


参数说明

|参数名|说明|
|:----  |-----   |
|playerId |与 logPayment 方法相同。   |
|playerServer | 游戏服务器或者分区标识。  |
|iabPurchaseOriginalJson |  与 logPayment 方法相同。  |
|iabPurchaseSignature | 与 logPayment 方法相同。  |


调用示例：

```java
ZFLogReport.logPaymentWithServer(playerId, playerServer, iabPurchaseOriginalJson, iabPurchaseSignature);
```
&ensp;
# 6. 支付上报（附加游戏服务器和额外参数）

```java
void logReportWithServerAndExtraMap(String playerId, String playerServer, String iabPurchaseOriginalJson, String iabPurchaseSignature, HashMap<String, String> extraMap);
```

参数说明

|参数名|说明|
|:----  |-----   |
|playerId |与 logReportWithExtraMap 方法相同。   |
|playerServer | 游戏服务器或者分区标识。  |
|iabPurchaseOriginalJson |  与 logReportWithExtraMap 方法相同。  |
|iabPurchaseSignature | 与 logReportWithExtraMap 方法相同。  |
|extraMap | 与 logReportWithExtraMap 方法相同。  |


调用示例：

```java
ZFLogReport.logReportWithServerAndExtraMap(playerId, playerServer, iabPurchaseOriginalJson, iabPurchaseSignature, null);
```

# 7. Demo
- [谷歌支付](https://github.com/wawo00/GoogleBilling_Android.git "链接")
- [华为支付](https://github.com/wawo00/HuaweiPay_Android/tree/master "链接")




到此，您已经完成了支付上报的集成。

接下来，您可以根据自己的需求，选取对应的功能并集成到项目里：

- [在线用户时长上报](/tasdk/android/android_duration_report.md)
- [用户标签](/tasdk/android/android_tag.md)
