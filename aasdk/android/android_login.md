# 1 前提条件
在您使用AASDK进行登录之前，您必须：

- 按照我们的步骤将 AASDK 集成到您的项目中。
- 按照我们的步骤将集成库和支持库集成到您的项目中。
- 完成SDK初始化


&ensp;

# 2. 登录


请在`主 Activity`中合适位置调用此方法。

```java
public static void accountLogin(Context context);
```

示例：

```java
AASdk.accountLogin(MainActivity.this);
```
# 3. 用户登录与控制显示

请在`主 Activity`中合适位置调用此方法,此方法用于控制显示自动登录动画是否显示，默认是false，不显示。

```java
public static void accountLogin(Context context.boolean isVisble);
```

示例：

```java

// 默认隐藏自动登录的动画,若想要显示自动登录动画请设置为true
AASdk.accountLogin(MainActivity.this,true);
```

&ensp;

# 4. 获取登录回调

## 4.1 获取登录回调（GGID 和登录类型）
> &bull;&ensp;GGID：用户的登录标识<br>
> &bull;&ensp;mode：用户登录类型</br>

```java
public interface setAAUGgidCallback {
    void onGameGuestIdLoginSuccess(String ggid,int mode);

    void onGameGuestIdLoginFailed(int code, String msg);
}
```

示例：

```java
AASdk.setAAUGgidCallback(new AASGgidCallback() {
    @Override
    public void onGameGuestIdLoginSuccess(String ggid, int mode) {
        String messge = "MainActivity onLoginSuccess: " + ggid;
        Log.i(TAG, "onGameGuestIdLoginSuccess: " + messge);
    }

    @Override
    public void onGameGuestIdLoginFailed(int code, String msg) {
        String messge = "MainActivity onLoginFail: " + msg;
        Log.i(TAG, "onGameGuestIdLoginFailed: " + messge);
    }
});
```

## 4.2 获取登录回调（token 和登录类型）
> &bull;&ensp;token：用户的登录标识<br>
> &bull;&ensp;mode：用户登录类型</br>

```java
public interface setAAUTokenCallback {
    void onUserTokenLoginSuccess(String token,int mode);

    void onUserTokenLoginFailed(int code, String msg);
}
```

示例：

```java
AASdk.setAAUTokenCallback(new AASTokenCallback() {
    @Override
    public void onUserTokenLoginSuccess(String token, int mode) {
        String messge = "MainActivity onLoginSuccess: " + token;
        Log.i(TAG, "onUserTokenLoginSuccess: " + messge);
    }

    @Override
    public void onUserTokenLoginFailed(int code, String msg) {
        String messge = "MainActivity onLoginFail: " + msg;
        Log.i(TAG, "onUserTokenLoginFailed: " + messge);
    }
});
```

&ensp;

# 5. 获取 token

登录 Facebook 成功、进入用户中心后，获取 token。

```java
    public static void getFacebookLoginedToken();
```

示例：

```java
   String fbToken=AASdk.getFacebookLoginedToken();
```
&ensp;
# 6. 获取 GGID

登录 Facebook 成功、进入用户中心后，获取 GGID。

`GGID`是账户 SDK（AccountSdk）中用于唯一标示用户的标志。

```java
    public static void getLoginedGGid();
```

示例：

```java
   String ggid=AASdk.getLoginedGGid();
```
# 7.隐藏与显示Google play 登录入口
> 请在accountLogin前使用

```java
   public static void setGPLoginVisible(boolean isVisible)
```

示例：

```java
   AASdk.setGPLoginVisible(false);
```

恭喜您，已经完成了登录相关操作，接下来让我们去设置[用户中心](/aasdk/android/android_usercenter.md)吧


<br/>

# 使用问题

- 如何获取用户的登录方式
- 如何获取用户的标识
- 如何判断用户切换了账户
- 我需要缓存用户数据吗

> <span id="login_fap_1">如何获取用户的登录方式</span>

首先您需要获取登录回调，在登录成功回调中model属性即为用户的登录方式，详细内容请查看API概览

> <span id="login_fap_2">如何获取用户的标识</span>

GGID为用户唯一标识，您可以调用getLoginedGGid()方法，获取用户唯一标识。当GGID为空值时，标识当前用户未登录。

> <span id="login_fap_3">如何判断用户切换了账户</span>

首先您需要获取登录回调，在登录成功回调中mode属性为登陆类型，您需要自行记录上一次的类型与本次回调的类型做对比，如不一致， 代表用户切换了账号

> <span id="login_fap_4">我需要缓存用户数据吗</span>

如您需要使用GGID来做业务逻辑，建议您缓存GGID