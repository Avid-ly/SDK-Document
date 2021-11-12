# 1. 概述
如游戏中使用[AASDK](/aasdk/)实现游戏的登录功能，需将登录结果同步至统计服务器以便分析用户数据。推荐使用以下 API 完成相应登录上报。


## 1.1  通用登录上报

```
    /**
     * 根据类型进行登录
     *
     * @param loginType  登录方式,未支持的设置为 unknow
     * @param playerId  用户userid
     * @param ggid       AASDK中的ggid
     * @param loginToken  AASDK中的token(选填)
     * @param extension   扩展参数
     */
public static void loginWithAASDK(final String loginType, final String playerId ,final String ggid,final String loginToken, Map<String, String> extension) 
```

调用示例(与AASDK一起使用)：
```csharp
/*
 loginMode 字段转换关系
 1  -->  guest
 2  -->  aas
 3  -->  facebook
 4  -->  googleplay
 6  -->  twitter
 8  -->  instagram 
 9  -->  gamecenter
 10 -->  ult
 11 -->  apple
 */



public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        ALYAnalysis.init(this, productId, channelId);
        setAAUGgidCallback();
        AASdk.initSdk(this, productId);
        AASdk.accountLogin(this,true);
    }

    /**
     * 用于获得ggid的回调
     */
    public void setAAUGgidCallback() {
        AASdk.setAAUGgidCallback(new AASGgidCallback() {
            @Override
            public void onGameGuestIdLoginSuccess(String ggid, int mode) {
                ALYLogin.loginWithAASDK(getLoginNameByLoginMode(mode),playerId ,ggid,"",null);
            }

            @Override
            public void onGameGuestIdLoginFailed(int code, String msg) {

            }
        });
    }

    private String getLoginNameByLoginMode(int mode){
        String loginName="";
        switch (mode){
            case 1:
                loginName="guest";
                break;
            case 2:
                loginName="aas";
                break;
            case 3:
                loginName="facebook";
                break;
            case 4:
                loginName="googleplay";
                break;
            case 6:
                loginName="twitter";
                break;
            case 8:
                loginName="instagram";
                break;
            default:
                loginName="unknow";
                break;
        }
        return loginName;
    }
}

```