!>
`GDPR《一般数据保护法案》`是欧盟出台的数据保护方案，如果您的产品会面向欧盟用户，我们提供如下方案确保`MSSDK`遵守`GDPR`规范。发行区域包含欧盟或涵盖欧盟用户的开发者必须处理此逻辑。

建议您在SDK初始化之前处理GDPR。
>开发者需要自行实现弹窗请求授权或接入PSSDK处理弹窗事件，并将授权结果传入以下对应的API
# 1.同意GDPR条约

如果用户**同意**授权，请调用以下方法传入结果

```csharp
/*
 * 同意使用隐私信息
 */
public static void grantConsent ()
```

示例

```csharp
public void onBtnClick_grantConsent() {
	Debug.Log ("===> call onBtnClick_grantConsent");
	MSSDK.grantConsent();
}
```

# 2.拒绝GDPR条约

如果用户**拒绝**授权，请调用以下方法传入结果

```csharp
/*
 * 拒绝使用隐私信息
 */
public static void revokeConsent
```

示例

```csharp
public void onBtnClick_revokeConsent() {
	Debug.Log ("===> call onBtnClick_revokeConsent");
	MSSDK.revokeConsent();
}
```
