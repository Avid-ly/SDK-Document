# 1. 初始化 SDK

请在`主 Activity`中尽早初始化 SDK，并根据游戏传入对应的`productId`参数，同时调用判断注册登录成功与否的回调。

```java
public static void initSdk(String productId, AccountCallback callback));
```

示例：

```java
AASdk.initSdk(this, BuildConfig.productId);
```

&ensp;

# 2. 用户登录

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

# 5. 进入用户中心

```java
    public static void showUserManagerUI(Context context);
```

示例：

```java
    AASdk.showUserManagerUI(MainActivity.this);
```
&ensp;
# 6. 获取 token

登录 Facebook 成功、进入用户中心后，获取 token。

```java
    public static void getFacebookLoginedToken();
```

示例：

```java
   String fbToken=AASdk.getFacebookLoginedToken();
```
&ensp;
# 7. 获取 GGID

登录 Facebook 成功、进入用户中心后，获取 GGID。

`GGID`是账户 SDK（AccountSdk）中用于唯一标示用户的标志。

```java
    public static void getLoginedGGid();
```

示例：

```java
   String ggid=AASdk.getLoginedGGid();
```
# 8.隐藏与显示Google play 登录入口
> 请在accountLogin前使用

```java
   public static void setGPLoginVisible(boolean isVisible)
```

示例：

```java
   AASdk.setGPLoginVisible(false);
```
