
# 1 介绍

为了使您能够聚焦游戏或App本身的逻辑，减少花费在隐私相关模块的时间，我们为您提供了方便快捷的请求用户授权隐私权限的功能，此功能包含多个主流的隐私模式，以及详细的说描述，帮助您快速完成隐私政策的处理。

# 2 前提条件

- 确保您安装了Android Studio 3.2 或更高版本
- 确保您使用真实的Android设备，而不是模拟器进行开发和测试
- 确保您能访问诸如Facebook，Google等网址
- 确保您的发行地区为全球，包括欧盟和南美


# 3 向用户请求隐私授权

向用户请求隐私授权主要分为以下流程：

- 向用户请求授权
- 处理返回的授权信息

## 3.1 向用户请求授权

为您提供了方便快捷的请求用户授权隐私权限的功能，此功能包含多个主流的隐私模式，以及详细的说描述，帮助您快速完成隐私政策的处理。

```java
public static void requestPrivacyAuthorization(Activity activity, String productId, String playerId, RequestPrivacyAuthorizationCallBack callBack) 
```

参数说明

|参数名|说明|
|:----  |-----   |
| activity |当前使用的应用上下文|
| productId |产品ID，我们为您的游戏或App分配的唯一应用标识|
| playerId |游戏的用户系统中用户唯一标识 |
| callBack | 结果回调 |


### 3.1.1 示例

```java
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

### 3.1.2 生成gameId(可选)
gameId应该是游戏账号系统中对应此玩家的唯一标识，如果您的游戏没有账号系统，可以使用如下的代码生成UUID作为玩家id，建议将此id保存到本地，每次使用此id作为gamerid用于获得授权信息和更新授权信息。

```java
 String uuid = UUID.randomUUID().toString().replaceAll("-","");
```

## 3.2 处理返回的授权信息

### 3.2.1 回调Model介绍

```java
// 是否进行过授权操作
public enum PrivacyAuthorizationStatus {
    PrivacyAuthorizationStatusNotDetermined,  // 未请求过授权
    PrivacyAuthorizationStatusDetermined;    // 请求过授权
}
```
```java
//收集状态
public enum PrivacyCollectionStatus {
    PrivacyCollectionStatusUnknow ,            // 未知
    PrivacyCollectionStatusDenied,            // 不同意收集
    PrivacyCollectionStatusAuthorized;         // 同意收集
}
```

```java
// 分享状态
public enum PrivacyShareStatus {
    PrivacySharingStatusUnknow ,            // 未知
    PrivacySharingStatusDenied,            // 不同意分享
    PrivacySharingStatusAuthorized;         // 同意分享
}
```

# 4.测试模式

## 4.1 API介绍

> 请在requestPrivacyAuthorization之前调用

```groovy
public static void setDebugable(boolean debugable)
```



恭喜您，到此您已经完成了PSSDK的使用，如您有任何问题，可以参考文档后续的常见问题。

</br>

# 5 常见问题

- PSSDK都包含哪些隐私政策
- 授权状态都有哪些
- 是否需要每次启动App都进行请求隐私政策
- 请求授权的时机

> <span id="request_faq_1">PSSDK都包含哪些主流的隐私政策</span>

PSSDK目前包含主流的隐私政策，包括

- CCPA
- GDPR
- LGPD

此外，我们也会持续更新支持的隐私政策。

> <span id="request_faq_2">授权状态都有哪些</span>

授权状态目前分为三种类型，分别是

- 未知
- 不同意分享
- 同意分享

其中未知表示尚未向用户请求过授权。不同意表示您不可以使用用户的隐私信息。


> <span id="request_faq_3">是否需要每次启动App都进行请求隐私政策</span>

不用每次都启动App都进行请求隐私政策，您可以缓存用户授权结果。


> <span id="request_faq_6">请求授权的时机</span>

因许多第三方SDK初始化都会使用和用户有关的信息，故建议您尽量在App启动后尽快请求用户的授权。