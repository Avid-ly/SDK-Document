# SDK初始化
在要使用的类中引入头文件

```
#import <MSSDK/MSSDK.h>
```

其中初始化方法如下

```
#pragma mark - init

// 无初始化结果
+ (void)initSDK;

// 有初始化结果
+ (void)initSDKCompletion:(void(^)(void))completionBlock;
```

# 开启 debug
为方便您的接入调试，您可以在开发期间通过以下方法开启调试log，并且需要在正式发布时将其关闭
```java
#pragma mark - Debug

+ (void)openLog:(BOOL)open;
```