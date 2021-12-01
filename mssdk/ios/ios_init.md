# 1 前提条件

在您初始化MSSDK之前，您必须：

- 按照我们的步骤将 MSSDK 集成到您的项目中。
- 完成项目设置

# 2 SDK初始化

在要使用的类中引入头文件

```
#import <MSSDK/MSSDK.h>
```

其中初始化方法如下

```
#pragma mark - init

// 建议在此方法中初始化SDK，以下两种初始化方法根据需求任选其一即可
- (BOOL)application:(UIApplication *)application
didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
    // 初始化方法一
    [MSSDK initSDK];
    
    // 初始化方法二（有初始化结果）
    [MSSDK initSDKCompletion:^{
    }];
    
    return YES;
}
```

# 3 Debug模式

在接入过程中或后续的开发过程中，如果遇到问题想定位问题或想查看详细的日志，可以开启Debug模式

```
[MSSDK openLog:YES];
```

!> 其中Debug模式默认关闭，打开之后请在正式上线前关闭，或移除相关开启代码

到此，您已经完成了SDK的初始化。


接下来，您可以根据自己的需求，选取对应的广告方式并集成到项目里：

- [激励视频广告](/mssdk/ios/ios_reward.md)
- [插屏广告](/mssdk/ios/ios_interstitial.md)
- [横幅广告](/mssdk/ios/ios_banner.md)