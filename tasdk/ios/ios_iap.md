由于支付环节在游戏或应用中至关重要，因此我们单独提供了支付事件上报方法，以便快速统计支付事件。

其中支付分为
- Apple IAP
- 第三方支付

对此我们分别提供了对应的支付上报方法

附：[Apple内购介绍](https://developer.apple.com/in-app-purchase)

<br>

# 1.Apple IAP 内购

---

应用内购买可用于销售各种内容，包括订阅，新功能和服务。应用内购买有四种类型。用户可以在iOS，iPadOS，macOS，watchOS和tvOS上进行应用内购买。

当您使用 Apple IAP , 请使用如下方法进行支付上报

```objective-c
+ (void)LogZFWithPlayerId:(NSString *)playerId receiptDataString:(NSString *)receiptDataString;
```

如需上报（区/服）参数，可调用以下方法：

```objective-c
+ (void)LogZFWithPlayerId:(NSString *)playerId gameAccountServer:(NSString *)gameAccountServer receiptDataString:(NSString *)receiptDataString;
```

> 注：以上方法 需在支付成功后调用
>
>即`-(void)paymentQueue:(SKPaymentQueue *)queue updatedTransactions:(NSArray *)transaction`中调用。

其中参数解明如下

参数说明：

|参数名|说明|
|:----  |-----   |
|playerId |游戏用户 ID，请传入使用的 player ID，用于后续对应。   |
|gameAccountServer | 游戏区/服 ID。  |
|receiptDataString |  支付凭证字符串（base64 编码）。  |


<br>

# 2.第三方支付平台上报

---

如您需使用 mycard、bluepay 等第三方支付平台功能，请调用我们的对应方法进行支付上报。

```objective-c
+ (void)ThirdpartyLogZFWithPlayerId:(NSString *)playerId thirdparty:(NSString *)thirdparty receiptDataString:(NSString *)receiptDataString;
```

如需上报（区/服）参数，可调用以下方法：

```objective-c
+ (void)ThirdpartyLogZFWithPlayerId:(NSString *)playerId gameAccountServer:(NSString *)gameAccountServer thirdparty:(NSString *)thirdparty receiptDataString:(NSString *)receiptDataString;
```

其中参数解明如下

参数说明：

|参数名|说明|
|:----  |-----   |
|playerId |游戏用户 ID，请传入使用的 player ID，用于后续对应。   |
|gameAccountServer | 游戏区/服 ID。  |
|thirdparty |  第三方支付平台名称 如 mycard、bluepay 等。  |
|receiptDataString |  第三方支付平台单据。  |

<br>
