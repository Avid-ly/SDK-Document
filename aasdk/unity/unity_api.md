# 1. 引用 SDK
在 *.cs 文件中，引用有关AASDK 的命名空间。
```csharp
using AASDK;
```

# 2. 初始化 AASDK
```csharp
void initSDK (string productId）
```
参数说明：

|参数名|说明|
|:----  |-----   |
|productId |产品 ID，须正确指定且不能为空。   |

调用示例：

```csharp
private const string PRODUCTID = "999999";
AASDKApi.initSDK (PRODUCTID);
```

# 3. 用户登录
```csharp
void accountLogin (）
```

调用示例：

```csharp
AASDKApi.accountLogin();
```

# 4. 进入用户中心
```csharp
void showUserManagerUI (）
```

调用示例：

```csharp
AASDKApi.showUserManagerUI();
```
# 5.  获取 Facebook Token
```csharp
void getFacebookLoginedToken (）
```

调用示例：

```csharp
AASDKApi.getFacebookLoginedToken();
```

# 6.  获取玩家GGID
```csharp
void getLoginedGGid (）
```

调用示例：

```csharp
AASDKApi.getLoginedGGid();
```

# 7. 获取登录回调(GGID)
>请在accountLogin之前调用

```csharp
  getAAUGgidData (Action<string,string> success, Action<string> fail)
```
参数说明：

|参数名|说明|
|:----  |-----   |
|success |用户登录成功回调，包含ggid和mode   |
|fail | 用户登录失败回调，包含登录失败的原因  |

调用示例：

```csharp
 AASDKApi.getAAUGgidData(
			new System.Action<string,string>(onAAUGgidLoginSuccess),
			new System.Action<string>(onAAUGgidLoginFail)
		);
		
	 private void onAAUGgidLoginSuccess(string ggid,string mode)
	{
        Debug.Log ("===> onAAUGgidLoginSuccess Callback at: " + ggid+" mode:"+mode);
	}

	private void onAAUGgidLoginFail(string error)
	{
        Debug.Log ("===> onAAUGgidLoginFail Callback at: " + error);
	}
```

# 8. 获取登录回调(Token)
>请在accountLogin之前调用

```csharp
  getAAUTokenData (Action<string,string> success, Action<string> fail)
```
参数说明：

|参数名|说明|
|:----  |-----   |
|success |用户登录成功回调，包含token和mode   |
|fail | 用户登录失败回调，包含登录失败的原因  |

调用示例：

```csharp
 AASDKApi.getAAUTokenData(
			new System.Action<string,string>(onAAUTokenLoginSuccess),
			new System.Action<string>(onAAUTokenLoginFail)
		);
		
    private void onAAUTokenLoginSuccess(string token,string mode)
    {
        Debug.Log("===> onAAUTokenLoginSuccess Callback at: " + token+" mode :"+mode);
    }

    private void onAAUTokenLoginFail(string error)
    {
        Debug.Log("===> onAAUTokenLoginFail Callback at: " + error);
    }
```

# 9. 隐藏与显示Google Play登录入口
>请在accountLogin之前调用

```csharp
  setGPLoginVisible(bool isVisible)
```
参数说明：

|参数名|说明|
|:----  |-----   |
|isVisible |true为显示登录入口，false为隐藏登录入口   |

调用示例：

```csharp
 AASDKApi.setGPLoginVisible(true);
```

# 10. 隐藏与显示自动登录动画
>请在accountLogin之前调用

```csharp
  setReloginViewVisible(bool isVisible)
```
参数说明：

|参数名|说明|
|:----  |-----   |
|isVisible |true为显示登录动画，false为隐藏登录动画   |

调用示例：

```csharp
// 默认是隐藏登录动画的，如果要显示请设置为true
 AASDKApi.setReloginViewVisible(true);
```


