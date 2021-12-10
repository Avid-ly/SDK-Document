# 1 前提条件

在您初始化AASDK之前，您必须：

- 按照我们的步骤将 AASDK 集成到您的项目中。
- 按照我们的步骤将集成库和支持库集成到您的项目中。


# 2. 初始化

AASDK初始化的主要步骤如下所示：

- 调用初始化代码

## 调用初始化代码

请在`主 Activity`中尽早初始化 SDK，并根据游戏传入对应的`productId`参数，同时调用判断注册登录成功与否的回调。

```java
public static void initSdk(String productId, AccountCallback callback));
```

示例：

```java
AASdk.initSdk(this, BuildConfig.productId);
```

&ensp;

恭喜您，到此已经完成了SDK的初始化操作，接下来您可以进行[登录](/aasdk/android/android_login.md)啦。