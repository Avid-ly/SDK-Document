以下是PSSDK的API列表，方便您查询和使用

# PSSDK

此类是PSSDK的入口

|  方法   | 描述  |
|  ----  | ----  |
| `+ (void)requestPrivacyAuthorizationWithProductId:(NSString *)productId playerId:(NSString *)playerId vc:(UIViewController *)vc orientation:(PSOrientationType)orientation succeed:(void(^)(PSPrivacyAuthorizationModel *model))succeedCallback error:(void(^)(NSError *error))errorCallback;`| 请求用户隐私授权方法|

<br>

# PSPrivacyAuthorizationModel

此类是PSSDK声明的授权模型类

|  方法   | 描述  |
|  ----  | ----  |
| PSPrivacyAuthorizationError | 异常枚举 |
| PSOrientationType  | 屏幕方向枚举  |
| PSPrivacyAuthorizationStatus  | 请求授权状态枚举  |
| PSPrivacyPolicyType  | 隐私政策枚举  |
| PSPrivacyCollectionStatus  | 收集状态枚举  |
| PSPrivacySharingStatus  | 分享状态枚举  |
| authorizationStatus  | 授权状态  |
| privacyPolicyType  | 隐私政策  |
| privacyPolicy  | 隐私政策字符  |
| privacyPolicy  | 收集状态  |
| sharingStatus  | 分享状态  |

<br>

# PSSDKVersion

此类是PSSDK版本号

| 参数名 |  说明 |
| ---- |  ---- |
| PSSDKVERSION | SDK版本号 |
| PSSDKVersion | SDK版本号缩写 |
| PSSDKBuild | SDK编译版本号 |


