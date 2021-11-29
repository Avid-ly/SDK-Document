以下是AASDK的API列表，方便您查询和使用

# AASAccountSDK

此类是AASDK的入口，包含初始化，登录等方法

|  方法   | 描述  |
|  ----  | ----  |
| + (void)initSDK:(NSString *)productId;  | SDK初始化方法 |
| + (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions;  | 向SDK转发应用启动事件方法 |
| + (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation;  | 向SDK转发应用收到URL事件方法 |
| + (void)setLoginCallback:(void (^)(AASAccountLoginModel *model))succeedCallback errorCallback:(void (^)(NSError *error))errorCallback;  | 设置登录回调方法 |
| + (void)login;  | 登录方法 |
| + (void)loginWithVisible:(BOOL)visible;  | 此方法用来设置自动登录是否展示弹窗 |
| + (void)showUserCenter:(UIViewController *)vc;  | 此方法用来展示用户中心 |
| + (NSString *)getFacebookLoginedToken;  | 此方法用来获取Facebook登录的token |
| + (NSString *)getGGID;  | 此方法用来获取唯一用户标识 |

<br>

# AASAccountSDKVersion

此类是AASDK版本号

|  方法   | 描述  |
|  ----  | ----  |
| AASAccountSDK_Version | SDK版本号 |
| AASAccountSDK_Build  | SDK编译版本号  |


# AASAccountLoginModel


此类是AASDK登录完成回调给开发者的用户信息类

| 参数名 | 类型 | 说明 |
| ---- | ---- | ---- |
| gameGuestId | NSString | 用户唯一标识 |
| signedRequest | NSString | 验证token |
| loginMode | int | 登录方式 |


