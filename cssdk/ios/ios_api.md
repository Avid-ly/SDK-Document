以下是AASDK的API列表，方便您查询和使用

# CServiceSDK

此类是CSSDK的入口，包含初始化等方法

|  方法   | 描述  |
|  ----  | ----  |
| + (BOOL)initSDK:(NSString *)pdtId;  | SDK初始化方法 |
| + (BOOL)show:(UIViewController *)vc;  | 展示客服与反馈 |
| + (void)haveNewMessage:(void (^)(BOOL haveNewMessage))completionBlock;  | 检查是否有未读新消息 |
| + (void)addExtraParam:(NSDictionary *)param;  | 追加额外透传参数 |
| + (NSString *)getVersion;  | 获取SDK版本号 |

<br>

# CServiceSDKVersion

此类是CSSDK版本号

|  方法   | 描述  |
|  ----  | ----  |
| CSSDKVERSION | SDK版本号 |
| CSSDK_SERVICE_VERSION | SDK版本号缩写 |
| CSSDK_BUILD  | SDK编译版本号  |


