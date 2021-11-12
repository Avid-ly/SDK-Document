> [!note]
`GDPR《一般数据保护法案》`是欧盟出台的数据保护方案，如果您的产品会面向欧盟用户，我们提供如下方案确保`MSSDK`遵守`GDPR`规范。发行区域包含欧盟或涵盖欧盟用户的开发者必须处理此逻辑。

# GDPR 推荐用例

推荐根据自己游戏的画面风格自定义GDPR的授权弹框界面，保证产品体验最佳。
采用此方案时，仅需要在初始化之后将授权结果同步给MSSDK。

#### 同意GDPR条约

```java
MsSDK.setAccessPrivacyInfoStatus(this,PrivacyManager.AccessPrivacyNameEnum.GDPR,PrivacyManager.AccessPrivacyInfoStatusEnum.AccessPrivacyInfoStatusAccepted);
```

#### 拒绝GDPR条约

```java
MsSDK.setAccessPrivacyInfoStatus(this,PrivacyManager.AccessPrivacyNameEnum.GDPR,PrivacyManager.AccessPrivacyInfoStatusEnum.AccessPrivacyInfoStatusDenied);
```



