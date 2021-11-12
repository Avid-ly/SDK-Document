# 1. 引用 SDK

所有方法均以 **static** 定义在`CServiceSDK`类中，请将`CServiceSDK`引用至代码中。

```
/**
* @ param productId：产品 ID
**/
+ (BOOL)initSDK:(NSString *) pdtId;
```

调用示例：

```
/* 
初始化 CServiceSDK
@param productId 产品 ID，需要找项目经理获取
*/

BOOL succeed = [CServiceSDK initSDK:@"1000152"];
if (succeed) {
    NSLog(@"初始化成功");
} else {
    NSLog(@"初始化失败,请检查工程");
}
```

<br>

# 2. 展示客服页面 API

```
+ (BOOL)show:(UIViewController *)vc;
```

调用示例：

```
/**
* @ param vc：需传入 viewController
**/
[CServiceSDK show:self];
```

<br>

# 3. 查看是否有新消息

```
+ (void)haveNewMessage:(void (^)(BOOL haveNewMessage))completionBlock;
```

调用示例：

```
// 查询是否有新消息
[CServiceSDK haveNewMessage:^(BOOL haveNewMessage) {
    
    // 回到主线程处理
    dispatch_async(dispatch_get_main_queue(), ^{
        UIAlertController *alertController = [UIAlertController alertControllerWithTitle:@"" message:[NSString stringWithFormat:@"是否有新消息 %@",haveNewMessage?@"YES":@"NO"] preferredStyle:UIAlertControllerStyleAlert];
        [alertController addAction:[UIAlertAction actionWithTitle:@"ok" style:UIAlertActionStyleCancel handler:nil]];
        [self presentViewController:alertController animated:YES completion:nil];
    });
}];
```

<br>

# 4. 添加透传参数

可以添加自己的参数透传到服务端，如使用，需在初始化之前调用

```
+ (void)addExtraParam:(NSDictionary *)param
```

调用示例：

```
NSDictionary *dic = [[NSDictionary alloc] initWithObjectsAndKeys:@"0.212.31", @"hot_version", nil];
[CServiceSDK addExtraParam:dic];
```

<br>

# 5. 获取版本信息

```
+ (NSString *)getVersion;
```

调用示例：
```
NSString *ver =  [CServiceSDK getVersion];
NSLog(@"version is %@",ver);
```

