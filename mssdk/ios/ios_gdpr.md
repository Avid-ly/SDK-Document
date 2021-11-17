# GDPR介绍

!>
`GDPR《一般数据保护法案》`是欧盟出台的数据保护方案，如果您的产品会面向欧盟用户，我们提供如下方案确保`MSSDK`遵守`GDPR`规范。发行区域包含欧盟或涵盖欧盟用户的开发者必须处理此逻辑。

建议您在SDK初始化之前处理GDPR。

# 设置GDPR

在要使用的类中引入头文件

```
#import <MSSDK/MSSDK.h>
```

### 同意GDPR条约

调用以下方法，同意授权GDPR条约，建议在SDK初始化之前调用。

```
+ (void)grantConsent;
```

### 拒绝GDPR条约

调用以下方法，拒绝授权GDPR条约，建议在SDK初始化之前调用。

```
+ (void)revokeConsent;
```
