# 概述

随着对用户信息的保护，越来越多的国家和地区发布了相关的政策和法规，如

- 欧盟地区 GDPR
- 加利福尼亚州 CCPA
- 巴西 LGPD

如想详细了解上述政策和法规，请参阅更详细的[政策解读](/pssdk/other/policy.md)

如果游戏的发行地区有涉及相关隐私政策，当用户拒绝授权使用隐私信息，请调用以下接口通知SDK：

```objective-c
+ (void)disableAccessPrivacyInformation;
```

