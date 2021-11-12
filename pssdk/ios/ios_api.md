
# 1. 向用户请求授权

### 1.1 API介绍

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


### 1.2 示例

```
[PSSDK requestPrivacyAuthorizationWithProductId:yourProductId playerId:yourPlayerId vc:self orientation:PSOrientationTypeAuto succeed:^(PSPrivacyAuthorizationModel *model) {
    NSLog(@"%@",model)
} error:^(NSError *error) {
    NSLog(@"%@",error);
}];
```

<br>

# 2. 回调Model介绍

### 2.1 API介绍

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

### 2.2 参数介绍

- `authorizationStatus`为授权状态，枚举类型
- `privacyPolicy`为隐私政策，字符类型
- `collectionStatus`为收集状态，枚举类型
- `sharingStatus`为分享状态，枚举类型

