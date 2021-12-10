### 以下是AASDK的API列表，方便您查询和使用



# AASdk

1、sdk初始化方法
```java
public static void initSdk(Context context,String productid);
```

|  参数   | 描述  | |
|  ----  | ----  | ----  |
| context  | 全局上下文 |必填|
| productId | 产品id（由我方提供） |必填|


&ensp;

2、 用户登录与控制显示

```java
public static void accountLogin(Context context,Boolean isVisible);
```

|  参数   | 描述  | |
|  ----  | ----  | ----  |
| context  | 全局上下文 |必填|
| isVisible | 控制显示自动登录动画是否显示，默认是false，不显示 |选填|



&ensp;

3、 进入用户中心

```java
    public static void showUserManagerUI(Context context);
```

|  参数   | 描述  | |
|  ----  | ----  | ----  |
| context  | 全局上下文 |必填|


&ensp;

3、 获取登录回调（GGid 和登录类型）

```java
public interface setAAUGgidCallback {
    void onGameGuestIdLoginSuccess(String ggid,int mode);

    void onGameGuestIdLoginFailed(int code, String msg);
}
```
|  参数   | 描述  |
|  ----  | ----  |
| ggid  | 用户的登录标识 |
| mode  | 用户登录类型 |
| code  | 登陆失败标识 |
| msg  | 登陆失败详细信息 |

&ensp;

4、 获取登录回调（token 和登录类型）


```java
public interface setAAUTokenCallback {
    void onUserTokenLoginSuccess(String token,int mode);

    void onUserTokenLoginFailed(int code, String msg);
}
```
|  参数   | 描述  |
|  ----  | ----  |
| token  | 用户的登录标识 |
| mode  | 用户登录类型 |
| code  | 登陆失败标识 |
| msg  | 登陆失败详细信息 |


&ensp;

5、 获取 token

登录 Facebook 成功、进入用户中心后，获取 token。

```java
    public static void getFacebookLoginedToken();
```

&ensp;

6、  获取 GGID

登录 Facebook 成功、进入用户中心后，获取 GGID。

`GGID`是账户 SDK（AccountSdk）中用于唯一标示用户的标志。

```java
    public static void getLoginedGGid();
```


&ensp;

7、 隐藏与显示Google play 登录入口


```java
   public static void setGPLoginVisible(boolean isVisible)
```
|  参数   | 描述  | |
|  ----  | ----  | ----  |
| isVisible  | true为显示，false为隐藏|必填|


