# 1 前提条件

在您初始化CSSDK之前，您必须：

- 按照我们的步骤将 CSSDK 集成到您的项目中。
- 完成项目设置


# 2 初始化

CSSDK初始化的主要步骤如下所示：

- 调用初始化代码


## 2.1 调用初始化代码

在 AppDelegate.m 添加如下引用

```
#import <CServiceSDK/CServiceSDK.h>
```

接下来在 App 启动入口方法中初始化 SDK

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	
	 // 1、初始化CSSDK之前，请先初始化AASDK或TASDK

    // 2、调用CSSDK初始化代码
    [CServiceSDK initSDK:@"your product id"];
	return YES;
}
```

!> 初始化CSSDK之前，请先初始化AASDK或TASDK

恭喜您，到此已经完成了SDK的初始化操作。