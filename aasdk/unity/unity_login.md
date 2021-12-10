# 1 前提条件
在您使用AASDK进行登录之前，您必须：

- 按照我们的步骤将 AASDK 集成到您的项目中。
- 完成项目设置
- 完成SDK初始化


# 2. 用户登录
```csharp
using AASDK;
void accountLogin (）
```

调用示例：

```csharp
AASDKApi.accountLogin();
```

# 3. 获取登录回调(GGID)
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

# 4. 获取登录回调(Token)
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

# 5. 隐藏与显示Google Play登录入口
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

# 6. 隐藏与显示自动登录动画
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
# 7.  获取 Facebook Token
```csharp
void getFacebookLoginedToken (）
```

调用示例：

```csharp
AASDKApi.getFacebookLoginedToken();
```

# 8.  获取玩家GGID
```csharp
void getLoginedGGid (）
```

调用示例：

```csharp
AASDKApi.getLoginedGGid();
```

果您对登录流程有任何疑问，请参考文档最后的常见使用问题。

恭喜您，已经完成了登录相关操作，接下来让我们去设置[用户中心](/aasdk/unity/unity_user_center.md)吧

# 9.使用问题

- 如何获取用户的登录方式
- 如何获取用户的标识
- 如何判断用户切换了账户
- 我需要缓存用户数据吗
- AppsFlyer Unity插件导致Facebook登录没有回调的问题

> <span id="aasdk_unity_login_faq_1">如何获取用户的登录方式</span>

首先您需要获取登录回调，在登录成功回调中的第二个字符串mode字段即为用户的登录方式，详细登录方式对应如下：

| loginMode(string) | 登录方式   |
| -------------- | ---------- |
| 1              | guest      |
| 2              | aas        |
| 3              | facebook   |
| 4              | googleplay |
| 5              | twitter    |
| 6              | instagram  |
| 7              | gamecenter |
| 8              | ult        |
| 9              | apple      |
| 10             | other      |


> <span id="aasdk_unity_login_faq_2">如何获取用户的标识</span>

GGID为用户唯一标识，您可以调用`AASDKApi.getLoginedGGid();`方法，获取用户唯一标识。当GGID为空值时，标识当前用户未登录。

> <span id="aasdk_unity_login_faq_3">如何判断用户切换了账户</span>

首先您需要注册登录回调，在登录回调中ggid属性为用户唯一标识，您需要自行记录上一次的用户唯一标识与本次回调的唯一标识做对比，如不一致， 代表用户切换了账号

> <span id="aasdk_unity_login_faq_4">我需要缓存用户数据吗</span>

如您需要使用GGID来做业务逻辑，建议您缓存GGID


><span id="aasdk_unity_login_faq_5">AppsFlyer Unity插件导致Facebook登录没有回调的问题</span>

解决方案

[修复Unity IDE中同时接入AF+FB导致FB登录完成回调不响应的问题](https://github.com/Avid-ly/AASDK-UnityPackage/blob/master/%E4%BF%AE%E5%A4%8DAF%2BFB%E5%AF%BC%E8%87%B4FB%E7%99%BB%E5%BD%95%E5%AE%8C%E6%88%90%E5%9B%9E%E8%B0%83%E4%B8%8D%E5%93%8D%E5%BA%94%E7%9A%84%E9%97%AE%E9%A2%98.md)
