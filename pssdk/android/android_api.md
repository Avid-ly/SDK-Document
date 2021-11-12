
> [!note]
所有方法均以 **static** 定义在`PSSDK`类中，请将`PSSDK`引用至 Java 代码中。

# 1.获得隐私授权
## 1.1 API定义
```groovy
public static void requestPrivacyAuthorization(Activity activity, String productId, String playerId, RequestPrivacyAuthorizationCallBack callBack) 
```

## 1.2 使用实例

调用示例：
```groovy
 PSSDK.requestPrivacyAuthorization(this, productId, gamerId, new PSSDK.RequestPrivacyAuthorizationCallBack() {
    @Override
    public void onRequestSuccess(PrivacyAuthorizationResult privacyAuthorizationResult) {
        Log.i(TAG, "onRequestSuccess: " + privacyAuthorizationResult.toString());
        toast("onRequestSuccess: " + privacyAuthorizationResult.toString());

    }

    @Override
    public void onRequestFail(PrivacyAuthorizationException e) {
        Log.i(TAG, "onRequestFail: " + e.getErrorMessage());
        toast("onRequestFail: " + e.getErrorMessage());

    }
});
```

**如何获得gameid**：

gameId应该是游戏账号系统中对应此玩家的唯一标识，如果您的游戏没有账号系统，可以使用如下的代码生成UUID作为玩家id，建议将此id保存到本地，每次使用此id作为gamerid用于获得授权信息和更新授权信息。


## 1.3 返回参数定义

```groovy
// 是否进行过授权操作
public enum PrivacyAuthorizationStatus {
    PrivacyAuthorizationStatusNotDetermined,  // 未请求过授权
    PrivacyAuthorizationStatusDetermined;    // 请求过授权
}
```
```groovy
//收集状态
public enum PrivacyCollectionStatus {
    PrivacyCollectionStatusUnknow ,            // 未知
    PrivacyCollectionStatusDenied,            // 不同意收集
    PrivacyCollectionStatusAuthorized;         // 同意收集
}
```

```groovy
// 分享状态
public enum PrivacyShareStatus {
    PrivacySharingStatusUnknow ,            // 未知
    PrivacySharingStatusDenied,            // 不同意分享
    PrivacySharingStatusAuthorized;         // 同意分享
}
```

# 2.测试模式

## 2.1 API介绍

> 请在requestPrivacyAuthorization之前调用

```groovy
public static void setDebugable(boolean debugable)
```

## 2.2 使用实例

```groovy
// 开启测试模式
public static void setDebugable( true)
```