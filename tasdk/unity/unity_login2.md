# 1.AASDK介绍
---
AASDK是提供给用户的账户登录SDK，旨在帮助用户在其游戏中快速接入用户登录功能。 [AASDK接入文档参考](/aasdk/)
&ensp;


# 2.使用AASDK进行登录的，可使用此方法进行登录上报。
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