# 1 前提条件

在您初始化AASDK之前，您必须：

- 按照我们的步骤将 AASDK 集成到您的项目中。
- 完成项目设置


# 2 初始化

AASDK初始化的主要步骤如下所示：

- 调用初始化代码
- 处理应用的生命周期


## 2.1 调用初始化代码

在 AppDelegate.m 添加如下引用

```
#import &lt;AASAccount/AASAccountSDK.h>
```

接下来在 App 启动入口方法中初始化 SDK

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // 1、调用初始化代码
	[AASAccountSDK initSDK:@"your product id"];  
	return YES;
}
```

接下来您还必须将 应用的生命周期事件转发给SDK

## 2.2 处理应用的生命周期

因第三方登录会跳转到对应的APP进行，完成之后再将数据回调给游戏，故需要将生命周期事件转发给SDK，才能完成登录闭环。

首先需要将`didFinishLaunchingWithOptions`事件转发给SDK，示例代码如下


```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	// 1、调用初始化代码
	[AASAccountSDK initSDK:@"your product id"]; 

	// 2、转发应用启动事件
	[AASAccountSDK application:application didFinishLaunchingWithOptions:launchOptions];  
	return YES;
}
```

其次需要将`openURL`事件转发给SDK

```
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
   // 2、转发openURL事件
	[AASAccountSDK application:application openURL:url sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey] annotation:options[UIApplicationOpenURLOptionsAnnotationKey]];
	return YES;
}
```

恭喜您，到此已经完成了SDK的初始化操作，接下来您可以进行[登录](/aasdk/ios/ios_login.md)啦。

