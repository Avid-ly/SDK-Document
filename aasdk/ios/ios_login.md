# 1 前提条件
在您使用AASDK进行登录之前，您必须：

- 按照我们的步骤将 AASDK 集成到您的项目中。
- 完成项目设置
- 完成SDK初始化


# 2 登录

AASDK登录的主要步骤如下所示：

- 注册登录与账户切换回调
- 判断当前登录状态
- 展示广告
- 处理回调

## 2.1 注册登录与账户切换回调

在要使用的类中引入头文件

```
#import <AASAccount/AASAccountSDK.h>
```

接下来在主线程中注册回调

```
- (void)viewDidLoad {
    [super viewDidLoad];
    
    // 1、设置SDK登录和切换账号回调
    [AASAccountSDK setLoginCallback:^(AASAccountLoginModel * _Nonnull model) {
        // NSLog("登录成功");
    } errorCallback:^(NSError * _Nonnull error) {
        // NSLog("登录失败");
    }];
}
```

## 2.2 判断当前登录状态

在完成回调的设置之后，需要先判断当前登录状态。防止在已登录的状态下重复登录。

可以采用查看GGID（AASDK中唯一用户标识）是否有值的方法来判断当前是否已登录，如果GGID有值，说明当前已经是登录状态，请不要重读登录。

```
- (void)viewDidLoad {
    [super viewDidLoad];
    
    // 1、设置SDK登录和切换账号回调
    [AASAccountSDK setLoginCallback:^(AASAccountLoginModel * _Nonnull model) {
        // NSLog("登录成功");
    } errorCallback:^(NSError * _Nonnull error) {
        // NSLog("登录失败");
    }];
    
    // 2、判断SDK是否为已登录状态
    NSString *userId = [AASAccountSDK getGGID];
    if (userId && ![userId isEqualToString:@""]) {  
       // 已登录状态
    }
    else {  
    	// 未登录状态
    }
}
```

## 2.3 登录

在判断完当前处于未登录的状态下，可以调用登录方法进行登录。

```
// 调用SDK登录，等待回调
[AASAccountSDK login];
```

登录方法请在主线程调用，示例代码如下

```
- (void)viewDidLoad {
    [super viewDidLoad];
    
    // 1、设置SDK登录和切换账号回调
    [AASAccountSDK setLoginCallback:^(AASAccountLoginModel * _Nonnull model) {
        // NSLog("登录成功");
    } errorCallback:^(NSError * _Nonnull error) {
        // NSLog("登录失败");
    }];
    
    // 2、判断SDK是否为已登录状态
    NSString *userId = [AASAccountSDK getGGID];
    if (userId && ![userId isEqualToString:@""]) {  
       // 已登录状态
    }
    else {  
    	// 未登录状态
    	// 3、调用SDK登录，等待回调
		[AASAccountSDK login];
    }
}
```

## 2.4 登录弹窗

对不同的情景，登录弹窗有不同的状态

- 当玩家是第一次登录时，会弹出登录弹框，引导玩家输入账号密码或跳转到第三方授权登录。
- 当玩家之前已经登录过，会读取本地数据自动登录。

在第二种情景中，针对不同的用户需要，如在自动登录中需要更换账号的需求，我们提供了可以控制自动登录弹窗显示与隐藏的登录方法，如下：

```
BOOL visible = YES;
[AASAccountSDK loginWithVisible:visible];
```

其中visible为false，表示自动登录不展示弹窗

## 2.5 处理登录回调

当调用登录方法之后，SDK会自动弹出登录窗口指引用户登录，用户登录完成之后，会将登录信息回调给开发者。您可以在回调中处理登录完成后的逻辑。

示例代码如下

```
- (void)viewDidLoad {
    [super viewDidLoad];
    
    // 登录页面启动
    
    // 1、设置SDK登录和切换账号回调
    [AASAccountSDK setLoginCallback:^(AASAccountLoginModel * _Nonnull model) {
        // TODD 4、处理登录成功回调
    } errorCallback:^(NSError * _Nonnull error) {
        // TODD 4、处理登录失败回调
    }];
    
    // 2、判断SDK是否为已登录状态
    NSString *userId = [AASAccountSDK getGGID];
    if (userId && ![userId isEqualToString:@""]) {  // 已登录状态
        
        // TODO 使用userId向游戏服务器登录
    }
    else {  // 未登录状态
        
        // 3、调用SDK登录，等待回调
        [AASAccountSDK login];
    }
}
```

其中回调参数为`AASAccountLoginModel`对象，此对象中存储了当前用户登录的信息，起属性如下：

| 参数名 | 类型 | 说明 |
| ---- | ---- | ---- |
| gameGuestId | NSString | 用户唯一标识 |
| signedRequest | NSString | 验证token |
| loginMode | int | 登录方式 |

其中`loginMode`字段为登录方式，对照如下

```
/*
 loginMode 字段解释，可参见AASEnumDefine.h中枚举
 1  -->  GUEST
 2  -->  AAS
 3  -->  FACEBOOK
 4  -->  GOOGLEPLAY
 6  -->  TWITTER
 8  -->  INSTAGRAM
 9  -->  GAMECENTER
 10 -->  ULT
 11 -->  APPLE
 */
```

> 特别说明：
> - 当接收到此回调时，说明发生了登录行为。
> - 如本次回调中的gameGuestId与上次回调中的gameGuestId有变化，说明用户切换了账号


恭喜您，已经完成了登录相关操作，接下来让我们去设置[用户中心](/aasdk/ios/ios_usercenter.md)吧

