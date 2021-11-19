# 1 前提条件

在您初始化CSSDK之前，您必须：

- 按照我们的步骤将 CSSDK 集成到您的项目中。
- 完成项目设置
- 完成SDK初始化


# 2 展示客服与反馈页面

在需要展示的页面添加如下引用

```
#import <CServiceSDK/CServiceSDK.h>
```

然后在主线程中调用

```
// 显示客服页面
[CServiceSDK show:self];
```

其中self为您当前的根视图控制器

# 3 查询是否有未读新消息

在需要展示的页面添加如下引用

```
#import <CServiceSDK/CServiceSDK.h>
```

然后在主线程中调用

```
// 查询是否有新消息
[CServiceSDK haveNewMessage:^(BOOL haveNewMessage) {
    
    // 回到主线程处理
    dispatch_async(dispatch_get_main_queue(), ^{
        if (haveNewMessage) {
        	// 当前有未读新消息
        }
    });
}];
```

# 4 追加额外参数

为了满足开发者传递透传参数的需求，SDK为您提供了追加额外参数的方法

在需要展示的页面添加如下引用

```
#import <CServiceSDK/CServiceSDK.h>
```

然后调用追加额外参数的方法

```
// 追加透传参数
NSDictionary *dic = [[NSDictionary alloc] initWithObjectsAndKeys:@"0.212.31", @"hot_version", nil];
[CServiceSDK addExtraParam:dic];
```

!> 建议您在SDK初始化之前调用

