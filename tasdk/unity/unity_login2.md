# 1 登录事件上报介绍

由于登录环节在游戏或应用中至关重要，因此我们单独提供了登录事件方法，以便快速统计登录事件。

# 2 前提条件

在您的应用中集成登录上报之前，您必须：

- 按照我们的步骤将TASDK集成到您的项目中。
- 完成项目设置
- 请务必在登录上报之前初始化TASDK
- 确保您使用了AASDK进行登录，如未使用AASDK，请参考[未使用AASDK登录上报](/tasdk/unity/unity_login1.md)

# 3 AASDK介绍

AASDK是提供给用户的账户登录SDK，旨在帮助用户在其游戏中快速接入用户登录功能。 [AASDK接入文档参考](/aasdk/)

# 4.使用AASDK进行登录的，可使用此方法进行登录上报。
---

方法如下

```
public static string LoginTypeGuest 		= "guest";
public static string LoginTypeAas 		= "aas";
public static string LoginTypeFacebook 		= "facebook";
public static string LoginTypeGoogleplay 	= "googleplay";
public static string LoginTypeTwitter 		= "twitter";
public static string LoginTypeInstagram 	= "instagram";
public static string LoginTypeGamecenter 	= "gamecenter";
public static string LoginTypeUlt 		= "ult";
public static string LoginTypeApple 		= "apple";
public static string LoginTypeOther 		= "other";

/*
 AASDK登录上报
 @param loginType   登录方式
 @param playerId    游戏用户ID
 @param loginToken  登录凭证
 @param ggid        AASDK账户体系用户的唯一标识
 @param extension   扩展参数
 
 说明：
 1、loginType参数值只能从上述定义的extern字符串中选择，未支持的登录方式请使用TraceAnalysisLoginTypeOther
 2、playerId参数为游戏的用户系统中用户唯一标识
 3、loginToken为登录方式对应的校验凭证
 |--3.1）当登录方式为LoginTypeGuest时，此值可不传
 |--3.2）当登录方式为LoginTypeFacebook时，此值传facebook返回的openToken
 |--3.3）当登录方式为LoginTypeTwitter时，此值传twitter返回的信息拼接成的json字符串，格式：{"twitterId":"xx","twitterUserName":"xx","twitterAuthToken":"xx"}
 |--3.4）当登录方式为LoginTypeGamecenter时，此值传GameCenter返回的teamPlayerID或playerID
 |--3.5）当登录方式为LoginTypeApple时，此值传apple返回的identityToken字符串
 |--3.6）当登录方式为LoginTypeOther时，此值传对应的登录方式返回的能校验用户合法性的对应参数
 4、extension为扩展参数，可扩展一些透传参数，选填，默认填nil
 */
public static void logAASLogin(string loginType, string playerId, string loginToken, string ggid, Dictionary<string, string> extension)
```

调用示例(与aasdk一起使用)：
```csharp
/*
 loginMode 字段转换关系
 1  -->  guest
 2  -->  aas
 3  -->  facebook
 4  -->  googleplay
 5  -->  twitter
 6  -->  instagram 
 7  -->  gamecenter
 8 -->  ult
 9 -->  apple
 10 -->  other
 */

using AASDK;
using UPTraceApi;

AASDKApi.getAAUGgidData(new System.Action(onAAUGgidLoginSuccess),new System.Action(onAAUGgidLoginFail));

private void onAAUGgidLoginSuccess(string ggid,string loginMode)
{
    string loginType="";
    if(loginMode=="1")
    {
        loginType="guest";
        UPTraceApi.logLogin (loginType, "player_001","assdk_token",ggid,null);
    }
    if(loginMode=="2"){
        loginType="aas";
        UPTraceApi.logAASLogin (loginType, "player_001","assdk_token",ggid,null);
    }
    //... 其他的判断
}
```

&ensp;

到此，您已经完成了登录上报的集成。
接下来，您可以根据自己的需求，选取对应的功能并集成到项目里：

- [支付上报](/tasdk/unity/unity_iap.md)
- [在线用户时长上报](/tasdk/unity/unity_duration_report.md)
- [用户标签](/tasdk/unity/unity_tag.md)