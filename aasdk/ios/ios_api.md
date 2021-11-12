
# 1. 引用SDK

1）在 AppDelegate.m 添加如下引用

```
#import &lt;AASAccount/AASAccountSDK.h>
```

2）在 App 启动入口方法中初始化 SDK

```objective-c
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
	[AASAccountSDK application:application didFinishLaunchingWithOptions:launchOptions];  
	return YES;
}
```

3）在 AppDelegate.m 中添加唤醒第三方 App

```
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
	[AASAccountSDK application:application openURL:url sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey] annotation:options[UIApplicationOpenURLOptionsAnnotationKey]];
	return YES;
}
```

<br>

# 2. 初始化SDK

```
/**
* @ param productId：产品 ID
**/
+ (void)initSDK:(NSString *)productId
```

示例：

```
/* 
初始化 AccountSDK
@param productId 产品 ID，需联系项目经理获取
*/
[AASAccountSDK initSDK:@"123456"];
```

<br>

# 3. 设置登陆回调

```
/*
@param model 登录类型
model.gameGuestId 获取 gameGuestId
model.signedRequest 获取 token
*/
+ (void)setLoginCallback:(void (^)(AASAccountLoginModel *model))succeedCallback errorCallback:(void (^)(NSError *error))errorCallback;
```

回调中`AASAccountLoginModel`的属性列表如下

|参数名|说明|
|:----  |-----   |
|gameGuestId |AASDK中用户唯一标识   |
|signedRequest | 校验标识（非必有）  |
|loginMode |  登录方式  |


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

- 当接收到此回调时，说明发生了登录行为。
- 如本次回调中的gameGuestId与上次回调中的gameGuestId有变化，说明用户切换了账号

示例：
```
[AASAccountSDK setLoginCallback:^(AASAccountLoginModel * _Nonnull model) {

 	dispatch_async(dispatch_get_main_queue(), ^{
 		[self ->_loginButton setTitle:[NSString stringWithFormat:@"ID:%@",model.signedRequest] forState:UIControlStateNormal];
	});
	
} errorCallback:^(NSError * _Nonnull error) {

 	dispatch_async(dispatch_get_main_queue(), ^{
 		[self ->_loginButton setTitle:[NSString stringWithFormat:@"error:%i",(int)error.code] forState:UIControlStateNormal];
	});
	
}];
```

<br>

# 4. 调用登陆方法

```
+ (void)login;
```

示例：
```
[AASAccountSDK login];
```

<br>

# 5. 进入用户中心

```
-(void)showUserCenter:(UIViewController *)vc;
```

示例：

```
[AASAccountSDK showUserCenter:self];
```

<br>

# 6. 获取Facebook的token值

```
+ (NSString *)getFacebookLoginedToken;
```
示例：
```
NSString *string = [AASAccountSDK getFacebookLoginedToken];
```