# 1 前提条件
在您使用用户中心之前，您必须：

- 按照我们的步骤将 AASDK 集成到您的项目中。
- 完成项目设置
- 完成SDK初始化
- 完成登录操作


# 2 用户中心

用户中心主要有以下几个功能

- 展示用户的个人信息
- 切换账号
- 绑定其他第三方账号
- 联系我们
- 常见的FAQ

## 2.1 展示用户中心页面

在要使用的类中引入头文件

```
#import <AASAccount/AASAccountSDK.h>
```

接下来在主线程中调用展示方法

```
- (void)viewDidLoad {
    [super viewDidLoad];
    
    // 1、展示个人中心
    [AASAccountSDK showUserCenter:self];
}
```

其中self为您当前的根视图控制器


恭喜您，到此已经完成了AASDK的所有操作。

