# 1 支付上报介绍

由于支付环节在游戏或应用中至关重要，因此我们单独提供了支付事件上报方法，以便快速统计支付事件。

其中支付分为

- Apple IAP
- 第三方支付

对此我们分别提供了对应的支付上报方法

附：[Apple内购介绍](https://developer.apple.com/in-app-purchase)

# 2 前提条件

在您的应用中集成登录上报之前，您必须：

- 按照我们的步骤将TASDK集成到您的项目中。
- 完成项目设置
- 请务必在上报之前初始化TASDK

# 3 支付上报

## 3.1 Apple IAP 内购

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


## 3.2 第三方支付平台上报


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

到此，您已经完成了支付上报的集成。如您对支付上报有疑问，请参考本页最后的常见问题。

接下来，您可以根据自己的需求，选取对应的功能并集成到项目里：

- [在线用户时长上报](/tasdk/ios/ios_duration_report.md)
- [用户标签](/tasdk/ios/ios_tag.md)


# 4 常见问题

- 游戏没有没有用户系统，游戏用户ID如何处理
- 支付单据获取的时机
- 支付单据必须进行base64编码吗

> <span id="iap_faq_1">游戏没有没有用户系统，游戏用户ID如何处理</span>

如果您的游戏没有用户系统，游戏用户ID（playerId）可以用idfa或统计包Token，统计包OpenId等能识别用户的唯一标识代替。

> <span id="iap_faq_1">支付单据获取的时机</span>

支付单据可以在`-(void)paymentQueue:(SKPaymentQueue *)queue updatedTransactions:(NSArray *)transaction`方法调用的时候，即支付完成的回调中，来获取支付单据。

> <span id="iap_faq_1">支付单据必须进行base64编码吗</span>

Apple示例代码需要单据进行base64编码才能发送到Apple服务器校验单据的合法性。