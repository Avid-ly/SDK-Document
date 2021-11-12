
1、AASDK介绍
---
AASDK是提供给用户的账户登录SDK，旨在帮助用户在其游戏中快速接入用户登录功能。 [AASDK接入文档参考](/aasdk/)

&ensp;

2、使用AASDK进行登录的，可使用此方法进行登录上报。
---

方法如下

```objective-c
extern NSString *const TraceAnalysisLoginTypeGuest;
extern NSString *const TraceAnalysisLoginTypeAas;
extern NSString *const TraceAnalysisLoginTypeFacebook;
extern NSString *const TraceAnalysisLoginTypeGoogleplay;
extern NSString *const TraceAnalysisLoginTypeTwitter;
extern NSString *const TraceAnalysisLoginTypeInstagram;
extern NSString *const TraceAnalysisLoginTypeGamecenter;
extern NSString *const TraceAnalysisLoginTypeUlt;
extern NSString *const TraceAnalysisLoginTypeApple;
extern NSString *const TraceAnalysisLoginTypeOther;

/*
 AAS登录上报
 @param loginType   登录方式
 @param playerId    游戏用户ID
 @param loginToken  登录凭证
 @param ggid        AASAccountSDK中的ggid
 @param extension   扩展参数
 
 说明：
 1、loginType参数值只能从上述定义的extern字符串中选择，未支持的登录方式请使用TraceAnalysisLoginTypeOther
 2、playerId参数为游戏的用户系统中用户唯一标识
 3、loginToken为登录方式对应的校验凭证，可以传返回的signedRequest
 4、ggid参数为AASAccount登录完成后返回的ggid字段，必填
 5、extension为扩展参数，可扩展一些透传参数，选填，默认填nil
 */
+ (void)logAASLoginWithType:(NSString *)loginType
                   playerId:(NSString *)playerId
                 loginToken:(NSString *)loginToken
                       ggid:(NSString *)ggid
                  extension:(NSDictionary <NSString *, NSString *> *)extension;
```

其中参数解明如下

参数说明

|参数名|说明|
|:----  |-----   |
|loginType |登录方式，如guest，fb，  只能从上述定义的extern字符串中选择，未支持的登录方式请使用TraceAnalysisLoginTypeOther|
|playerId |游戏的用户系统中用户唯一标识 |
|loginToken |登录方式对应的校验凭证，可以传AASDK返回的signedRequest  |
|ggid |AASDK登录完成后返回的ggid字段，必填 |
|extension |扩展参数，可扩展一些透传参数，选填，默认填nil |

<br>

3、从AASDK获取登录上报所需参数
---

3.1、loginType

可以从AASDK登录成功后返回的`AASAccountLoginModel`对象中的`loginMode`参数获取，映射方式为：

```
回调中model参数的loginMode字段为登录方式，与loginType对照如下

/*
 loginMode 字段解释，可参见AASEnumDefine.h中枚举
 1  -->  TraceAnalysisLoginTypeGuest 
 2  -->  TraceAnalysisLoginTypeAas 
 3  -->  TraceAnalysisLoginTypeFacebook 
 4  -->  TraceAnalysisLoginTypeGoogleplay 
 6  -->  TraceAnalysisLoginTypeTwitter 
 8  -->  TraceAnalysisLoginTypeInstagram 
 9  -->  TraceAnalysisLoginTypeGamecenter 
 10 -->  TraceAnalysisLoginTypeUlt 
 11 -->  TraceAnalysisLoginTypeApple 
 */
 ```

3.2、loginToken 

可以从AASDK登录成功后返回的`AASAccountLoginModel`对象中的`signedRequest`参数获取

3.3、ggid 

可以从AASDK登录成功后返回的`AASAccountLoginModel`对象中的`gameGuestId`参数获取

<br>

4、最佳实践
---

```
- (void)login {
    
    [AASAccountSDK setLoginCallback:^(AASAccountLoginModel * _Nonnull model) {
        NSLog(@"AASAccountSDK login gameGuestId:%@，loginMode:%d",model.gameGuestId,model.loginMode);
        
        [self logLoginWithModel:model];
        
    } errorCallback:^(NSError * _Nonnull error) {
        dispatch_async(dispatch_get_main_queue(), ^{
            [self->_loginButton setTitle:[NSString stringWithFormat:@"error:%i",(int)error.code] forState:UIControlStateNormal];
        });
        NSLog(@"AASAccountSDK login error:%@",error);
    }];
    [AASAccountSDK login];
}

- (void)logLoginWithModel:(AASAccountLoginModel *)model {
    
    NSString *loginType;
    if (model.loginMode == 1) {
        loginType = TraceAnalysisLoginTypeGuest;
    }
    else if (model.loginMode == 2) {
        loginType = TraceAnalysisLoginTypeAas;
    }
    else if (model.loginMode == 3) {
        loginType = TraceAnalysisLoginTypeFacebook;
    }
    else if (model.loginMode == 4) {
        loginType = TraceAnalysisLoginTypeGoogleplay;
    }
    else if (model.loginMode == 6) {
        loginType = TraceAnalysisLoginTypeTwitter;
    }
    else if (model.loginMode == 8) {
        loginType = TraceAnalysisLoginTypeInstagram;
    }
    else if (model.loginMode == 9) {
        loginType = TraceAnalysisLoginTypeGamecenter;
    }
    else if (model.loginMode == 10) {
        loginType = TraceAnalysisLoginTypeUlt;
    }
    else if (model.loginMode == 11) {
        loginType = TraceAnalysisLoginTypeApple;
    }
    else {
        loginType = TraceAnalysisLoginTypeOther;
    }
    
    NSString *playerId = `your player id`;
    NSString *loginToken = model.signedRequest;
    NSString *ggid = model.gameGuestId;
    
    [TraceAnalysis logAASLoginWithType:loginType playerId:playerId loginToken:loginToken ggid:ggid extension:nil];
}
```

