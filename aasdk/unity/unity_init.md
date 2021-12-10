# 1 前提条件
在您使用AASDK进行登录之前，您必须：

- 按照我们的步骤将 AASDK 集成到您的项目中。

# 2. 引用 SDK
在 *.cs 文件中，引用有关AASDK 的命名空间。
```csharp
using AASDK;
```

# 3. 初始化 AASDK
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

恭喜您，到此已经完成了SDK的初始化操作，接下来您可以进行[登录](/aasdk/unity/unity_login.md)啦。