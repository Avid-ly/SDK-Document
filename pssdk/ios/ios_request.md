
# 介绍

为了使您能够聚焦游戏或App本身的逻辑，减少花费在隐私相关模块的时间，我们为您提供了方便快捷的请求用户授权隐私权限的功能，此功能包含多个主流的隐私模式，以及详细的说描述，帮助您快速完成隐私政策的处理。

# 1 前提条件

- 确保您安装了最新的 Xcode12 或更高版本
- 确保您的项目定位到 iOS 10.0 或更高版本
- 确保您完成了项目设置


# 2 向用户请求隐私授权

向用户请求隐私授权主要分为以下流程：

- 向用户请求授权
- 处理返回的授权信息

## 2.1 API介绍

为您提供了方便快捷的请求用户授权隐私权限的功能，此功能包含多个主流的隐私模式，以及详细的说描述，帮助您快速完成隐私政策的处理。

```
/// 请求授权
/// @param productId        产品ID
/// @param playerId         玩家ID
/// @param vc               根视图
/// @param orientation      屏幕方向
/// @param succeedCallback  成功回调
/// @param errorCallback    失败回调
+ (void)requestPrivacyAuthorizationWithProductId:(NSString *)productId
                                        playerId:(NSString *)playerId
                                              vc:(UIViewController *)vc
                                     orientation:(PSOrientationType)orientation
                                         succeed:(void(^)(PSPrivacyAuthorizationModel *model))succeedCallback
                                           error:(void(^)(NSError *error))errorCallback;
```

参数说明

|参数名|说明|
|:----  |-----   |
| productId |产品ID，我们为您的游戏或App分配的唯一应用标识|
| playerId |游戏的用户系统中用户唯一标识 |
| vc |用来展示弹窗的根视图，如未nil或不正确，会导致弹窗无法展示  |
| orientation | 游戏或App当前屏幕方向，授权弹窗会依据此参数来渲染说明文案，请正确传入 |
| succeedCallback | 成功回调 |
| errorCallback | 失败回调 |


## 2.2 示例

```
[PSSDK requestPrivacyAuthorizationWithProductId:yourProductId playerId:yourPlayerId vc:self orientation:PSOrientationTypeAuto succeed:^(PSPrivacyAuthorizationModel *model) {
    NSLog(@"%@",model)
} error:^(NSError *error) {
    NSLog(@"%@",error);
}];
```

<br>

## 2.3 处理返回的授权信息

### 2.3.1 回调Model介绍

```
// 异常枚举
typedef NS_ENUM(NSUInteger, PSPrivacyAuthorizationError) {
    PSPrivacyAuthorizationErrorUnknow = 0,          // 未知
    PSPrivacyAuthorizationErrorProductId = 10001,   // ProductId异常
    PSPrivacyAuthorizationErrorNetwork = 10002,     // 网络异常
    PSPrivacyAuthorizationErrorRootVC = 10003,      // 根视图异常
    PSPrivacyAuthorizationErrorPlayerId = 10004,    // PlayerId异常
};

// 屏幕方向枚举
typedef NS_ENUM(NSUInteger, PSOrientationType) {
    PSOrientationTypeAuto = 0,                      // 自动
    PSOrientationTypePortrait = 1,                  // 竖屏
    PSOrientationTypeLandscape = 2,                 // 横屏
};

// 请求授权状态枚举
typedef NS_ENUM(NSUInteger, PSPrivacyAuthorizationStatus) {
    PSPrivacyAuthorizationStatusNotDetermined = 0,  // 未请求过授权
    PSPrivacyAuthorizationStatusDetermined = 1      // 已请求过授权
};

// 隐私政策枚举
typedef NS_ENUM(NSUInteger, PSPrivacyPolicyType) {
    PSPrivacyPolicyTypeUnknow = 0,                  // 未知
    PSPrivacyPolicyTypeCCPA = 1,                    // CCPA
    PSPrivacyPolicyTypeGDPR = 2,                    // GDPR
    PSPrivacyPolicyTypeLGPD = 3                     // LGPD
};

// 收集状态枚举
typedef NS_ENUM(NSUInteger, PSPrivacyCollectionStatus) {
    PSPrivacyCollectionStatusUnknow = 0,            // 未知
    PSPrivacyCollectionStatusDenied = 1,            // 不同意收集
    PSPrivacyCollectionStatusAuthorized = 2         // 同意收集
};

// 分享状态枚举
typedef NS_ENUM(NSUInteger, PSPrivacySharingStatus) {
    PSPrivacySharingStatusUnknow = 0,               // 未知
    PSPrivacySharingStatusDenied = 1,               // 不同意分享
    PSPrivacySharingStatusAuthorized = 2            // 同意分享
};

@interface PSPrivacyAuthorizationModel : NSObject

@property (nonatomic) PSPrivacyAuthorizationStatus authorizationStatus; // 授权状态
@property (nonatomic) PSPrivacyPolicyType privacyPolicyType;            // 隐私政策
@property (nonatomic) NSString *privacyPolicy;                          // 隐私政策字符
@property (nonatomic) PSPrivacyCollectionStatus collectionStatus;       // 收集状态
@property (nonatomic) PSPrivacySharingStatus sharingStatus;             // 分享状态

@end
```

### 2.3.2 参数介绍

- `authorizationStatus`为授权状态，枚举类型
- `privacyPolicy`为隐私政策，字符类型
- `collectionStatus`为收集状态，枚举类型
- `sharingStatus`为分享状态，枚举类型

</br>

恭喜您，到此您已经完成了PSSDK的使用，如您有任何问题，可以参考文档后续的常见问题。

</br>

# 3 常见问题

- PSSDK都包含哪些隐私政策
- 授权状态都有哪些
- 是否需要每次启动App都进行请求隐私政策
- 碰到异常应如何处理
- 弹窗或文案渲染有问题是什么原因
- 请求授权的时机

> <span id="request_faq_1">PSSDK都包含哪些主流的隐私政策</span>

PSSDK目前包含主流的隐私政策，包括

- CCPA
- GDPR
- LGPD

此外，我们也会持续更新支持的隐私政策。

> <span id="request_faq_2">授权状态都有哪些</span>

授权状态目前分为三种类型，分别是

- 未知
- 不同意分享
- 同意分享

其中未知表示尚未向用户请求过授权。不同意表示您不可以使用用户的隐私信息。


> <span id="request_faq_3">是否需要每次启动App都进行请求隐私政策</span>

不用每次都启动App都进行请求隐私政策，您可以缓存用户授权结果。

> <span id="request_faq_4">碰到异常应如何处理</span>

在失败回调中，我们为您提供了PSPrivacyAuthorizationError错误码枚举，您可以根据错误码自行处理，或咨询我们的技术支持。

> <span id="request_faq_5">弹窗或文案渲染有问题是什么原因</span>

请确保您传入的设备屏幕方向正确，如不正确，可能会造成渲染异常。

> <span id="request_faq_6">请求授权的时机</span>

因许多第三方SDK初始化都会使用和用户有关的信息，故建议您尽量在App启动后尽快请求用户的授权。