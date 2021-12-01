# 1 登录事件上报介绍

由于登录环节在游戏或应用中至关重要，因此我们单独提供了登录事件方法，以便快速统计登录事件。

# 2 前提条件

在您的应用中集成登录上报之前，您必须：

- 按照我们的步骤将TASDK集成到您的项目中。
- 完成项目设置
- 请务必在登录上报之前初始化TASDK
- 确保您未使用AASDK，如使用AASDK，请参考[使用AASDK登录上报](/tasdk/ios/ios_login2.md)

# 3 登录上报

如果您未使用AASDK登录，而是自行接入的登录，我们为您提供了以下登录上报方法：

- 游客登录 上报
- Facebook登录 上报
- 通用登录 上报

## 3.1 游客登录 上报

如果您使用了游客登录，可以快捷的使用如下方法进行登录上报

```objective-c
/**
 @param playerId 游戏用户 ID
 */
+ (void)guestLoginWithGameId:(NSString *)playerId;
```

调用示例：

```objective-c
[TraceAnalysis guestLoginWithGameId:@"yourPlayerId"];
```

## 3.2 Facebook登录 上报

如果您使用了Facebook登录，可以快捷的使用如下方法进行登录上报

```
/**
 Facebook登录 上报
 
 @param playerId  游戏用户ID
 @param openId    openId，参数已废弃，请传空值
 @param openToken openToken
 */
+ (void)facebookLoginWithGameId:(NSString *)playerId
                         OpenId:(NSString *)openId
                      OpenToken:(NSString *)openToken;
```

调用示例：

```objective-c
[TraceAnalysis facebookLoginWithGameId:@"yourPlayerId" OpenId:@"" OpenToken:@"your open token"];
```

>[!tip]
`注意：OpenId参数已废弃，请传空值`


<br>

## 3.3 通用登录 上报

如果您使用了除guest和facebook以外的登录方式，我们还为您提供了通用登录上报的方法


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
 通用登录上报
 @param loginType   登录方式
 @param playerId    游戏用户ID
 @param loginToken  登录凭证
 @param extension   扩展参数
 
 说明：
 1、loginType参数值只能从上述定义的extern字符串中选择，未支持的登录方式请使用TraceAnalysisLoginTypeOther
 2、playerId参数为游戏的用户系统中用户唯一标识
 3、loginToken为登录方式对应的校验凭证
 |--3.1）当登录方式为TraceAnalysisLoginTypeGuest时，此值可不传
 |--3.2）当登录方式为TraceAnalysisLoginTypeFacebook时，此值传facebook返回的openToken
 |--3.3）当登录方式为TraceAnalysisLoginTypeTwitter时，此值传twitter返回的信息拼接成的json字符串，格式：{"twitterId":"xx","twitterUserName":"xx","twitterAuthToken":"xx"}
 |--3.4）当登录方式为TraceAnalysisLoginTypeGamecenter时，此值传GameCenter返回的teamPlayerID或playerID
 |--3.5）当登录方式为TraceAnalysisLoginTypeApple时，此值传apple返回的identityToken字符串
 |--3.6）当登录方式为TraceAnalysisLoginTypeOther时，此值传对应的登录方式返回的能校验用户合法性的对应参数
 4、extension为扩展参数，可扩展一些透传参数，选填，默认填nil
 */
+ (void)logCommonLoginWithType:(NSString *)loginType
                      playerId:(NSString *)playerId
                    loginToken:(NSString *)loginToken
                     extension:(NSDictionary <NSString *, NSString *> *)extension;
```

其中参数解明如下

参数说明

|参数名|说明|
|:----  |-----   |
|loginType |登录方式，如guest，fb，  只能从上述定义的extern字符串中选择，未支持的登录方式请使用TraceAnalysisLoginTypeOther|
|playerId |游戏的用户系统中用户唯一标识 |
|loginToken |登录方式对应的校验凭证  |
|extension |扩展参数，可扩展一些透传参数，选填，默认填nil |

<br>

调用此方法时，

为确保服务器能正确识别并接受各参数，请仔细阅读方法注释，以免参数错误照成服务器解析失败。

如上述定义的extern字符串中没有您使用的登录方式，请事先与我们沟通参数内容与编码规则，否则上报服务器时将解析失败。


到此，您已经完成了登录上报的集成。

接下来，您可以根据自己的需求，选取对应的功能并集成到项目里：

- [支付上报](/tasdk/ios/ios_iap.md)
- [在线用户时长上报](/tasdk/ios/ios_duration_report.md)
- [用户标签](/tasdk/ios/ios_tag.md)