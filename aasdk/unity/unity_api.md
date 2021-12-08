以下是AASDK的API列表，方便您查询和使用

# AASDKApi

此类是AASDK的入口，包含初始化，登录等方法
## 1.SDK初始化方法

```C#
public static void initSDK(string productId)
```
|  参数   | 描述  |
|  ----  | ----  |
|  productId  | 产品Id  |
## 2.登录
```C#
public static void accountLogin()
```

## 3.设置自动登录是否展示弹窗
```C#
public static void accountLogin(bool isVisible)
```
|  参数   | 描述  |
|  ----  | ----  |
|  isVisible  | 自动登录是否展示弹窗  |

## 4.展示用户中心
```C#
public static void showUserManagerUI()
```
 ## 5.获取Facebook登录的token
```C#
public static string getFacebookLoginedToken()
```
 ## 6.获取唯一用户标识
```C#
public static string getLoginedGGid()
```


<br>

 

 
