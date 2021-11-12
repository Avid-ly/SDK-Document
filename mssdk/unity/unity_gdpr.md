# 同意GDPR条约
请在初始化SDK之后调用。

方法如下

```
/*
 * 同意使用隐私信息
 */
public static void grantConsent ()
```

示例

```
public void onBtnClick_grantConsent() {
	Debug.Log ("===> call onBtnClick_grantConsent");
	MSSDK.grantConsent();
}
```

# 拒绝GDPR条约

方法如下

```
/*
 * 拒绝使用隐私信息
 */
public static void revokeConsent
```

示例

```
public void onBtnClick_revokeConsent() {
	Debug.Log ("===> call onBtnClick_revokeConsent");
	MSSDK.revokeConsent();
}
```