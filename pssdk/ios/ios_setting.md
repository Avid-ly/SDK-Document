为了使 SDK 集成到您的应用程序之后能够正常使用，必须执行几个快速步骤：

# 1 配置应用传输安全 (ATS)

随着 iOS 9 的发布，Apple 引入了 ATS，它要求应用程序通过 SSL 建立安全的网络连接，并通过其对 SSL 版本、加密密码和密钥长度的要求强制执行 HTTPS 连接。目前，强烈建议在您的应用程序中禁用 ATS。请注意，虽然我们的SDK完全支持 HTTPS，但我们的一些第三方SDK可能不支持。因此启用 ATS 可能会导致一些问题。

为了防止您的广告（和您的收入）受到 ATS 的影响，请通过将以下内容添加到您的 info.plist 来禁用它：

```
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```

<br>

# 2 配置隐私控制（可选）

在 iOS 10 中，Apple 通过限制对相机、照片库等功能的访问来扩展其隐私控制的范围。为了在利用这些服务的 SDK 中解锁丰富的沉浸式体验，请添加以下条目到您的应用程序列表：

```
<key>NSPhotoLibraryUsageDescription</key>
<string>Some ad content may require access to the photo library.</string>
<key>NSCameraUsageDescription</key>
<string>Some ad content may access camera to take picture.</string>
<key>NSMotionUsageDescription</key>
<string>Some ad content may require access to accelerometer for interactive ad experience.</string>
```

<br>

# 3 多语言设置

SDK支持多种语言本地化，如需使用，请添加对应的支持

在 Xcode 的`PROJECT > Info > Localizations`中，点击"+"添加语言。

> 目前支持：
>
> `简体中文（zh）`
>
> `英文（en）`

添加完成之后，SDK会自动读取对应的语言包进行本地化。

恭喜您，到此已经完成了所有的项目设置，接下来您可以下一个步骤，SDK[初始化](/pssdk/ios/ios_init)了

# 4 项目工程结构处理

SDK暂不支持SceneDelegate，如您的项目使用的是SceneDelegate结构，可能会遇弹窗无法展示，也没有回调的情况。为了使SDK能够正常使用，需要移除SceneDelegate。

## 4.1 移除SceneDelegate.h/.m文件

先直接删除SceneDelegate.h/.m文件,在AppDelegate.h添加

`@property (strong, nonatomic) UIWindow * window;`

属性，代码示例如下

```
#import <UIKit/UIKit.h>
@interface AppDelegate : UIResponder <UIApplicationDelegate>
@property (strong, nonatomic) UIWindow * window;
@end
```

## 4.2 移除UIScene代理

移除之前

```
#import "AppDelegate.h"
@interface AppDelegate ()
@end
@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    return YES;
}

#pragma mark - UISceneSession lifecycle
- (UISceneConfiguration *)application:(UIApplication *)application configurationForConnectingSceneSession:(UISceneSession *)connectingSceneSession options:(UISceneConnectionOptions *)options {
    // Called when a new scene session is being created.
    // Use this method to select a configuration to create the new scene with.
    return [[UISceneConfiguration alloc] initWithName:@"Default Configuration" sessionRole:connectingSceneSession.role];
}//移除
- (void)application:(UIApplication *)application didDiscardSceneSessions:(NSSet<UISceneSession *> *)sceneSessions {
    // Called when the user discards a scene session.
    // If any sessions were discarded while the application was not running, this will be called shortly after application:didFinishLaunchingWithOptions.
    // Use this method to release any resources that were specific to the discarded scenes, as they will not return.
}//移除
@end
```

移除之后

```
#import "AppDelegate.h"
@interface AppDelegate ()
@end
@implementation AppDelegate
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    return YES;
}
@end
```

## 4.3 移除Application Scene

最后在info.plist文件中移除Application Scene Manifest

具体您也可以[参考](https://www.jianshu.com/p/49c6770a94e0)

<br>

恭喜您，到此已经完成了所有的项目设置，接下来您可以下一个步骤，SDK[请求授权](/pssdk/ios/ios_request)了
