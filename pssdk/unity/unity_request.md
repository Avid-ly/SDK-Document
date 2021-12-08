# 介绍

为了使您能够聚焦游戏或App本身的逻辑，减少花费在隐私相关模块的时间，我们为您提供了方便快捷的请求用户授权隐私权限的功能，此功能包含多个主流的隐私模式，以及详细的说描述，帮助您快速完成隐私政策的处理。

# 1 前提条件

- 确保您导入了最新的PSSDK Unity Package
- 确保您完成了项目设置


# 2 向用户请求隐私授权

向用户请求隐私授权主要分为以下流程：

- 向用户请求授权
- 处理返回的授权信息

##  2.1 向用户请求授权

### 2.1.1 API介绍
>调用请求授权后，SDK将对未记录过请求的用户自动弹窗并返回授权结果

```java
/*
* 初始化
* @param productId		产品id
* @param playerId		玩家id(必填)
 *@param success		成功回调
 *@param fail			失败回调
*/
public static void requestAuthStatus(string pid, string playerId,Action<PSSDKAuthModel> success, Action<string> fail)

```

### 2.1.2 调用示例

```java
public void onRequestAuthClick()
{
    PSSDKApi.requestAuthStatus(inputFieldPid.text, inputFieldPlayerId.text,
        new System.Action<PSSDKAuthModel>(onRequsetAuthSuccess),
        new System.Action<string>(onRequsetAuthFail)
        );
}


public void onRequsetAuthSuccess(PSSDKAuthModel authModel)
{
    Debug.Log("pssdk  onRequsetAuthSuccess PrivacyPolicy=" + authModel.PrivacyPolicy + " AuthCollectionStatus1=" + authModel.AuthCollectionStatus1
        + " AuthSharingStatus1=" + authModel.AuthSharingStatus1  );
}

public void onRequsetAuthFail(string message)
{
    Debug.Log("pssdk onRequsetAuthFail :" +message);
}
```

# 3. 返回参数说明

## 3.1 授权成功返回 PSSDKAuthModel：

``` java 
private AuthCollectionStatus authCollectionStatus; //收集状态

private AuthSharingStatus authSharingStatus; //分享状态

private string privacyPolicy;//隐私政策名称
```

## 3.2 授权状态参数说明：

```java
//收集状态
public enum AuthCollectionStatus
{
    UNKNOW, //未知
    AGREE,//同意
    DISAGREE //拒绝
}
	
//分享状态
public enum AuthSharingStatus
{
    UNKNOW, //未知
    AGREE,//同意
    DISAGREE //拒绝
}
```

## 3.3 授权失败</br>

授权失败SDK将会返回string类型失败信息

恭喜您，到此您已经完成了PSSDK的使用，如您有任何问题，可以参考文档后续的常见问题。

# 4.常见问题

- 如何判断是否弹窗请求授权
- PSSDK都包含哪些隐私政策
- 授权状态都有哪些
- 是否需要每次启动App都进行请求隐私政策
- 碰到异常应如何处理
- 弹窗或文案渲染有问题是什么原因
- 请求授权的时机

> <span id="pssdk_unity_faq">如何判断是否弹窗请求授权</span>

只需在玩家进入游戏前，调用PSSDKApi.requestAuthStatus，SDK内部将会根据设备位置及国家判断是否需要授权并弹窗请求，开发者无需关心弹窗过程，只需接收请求回调并向其他SDK传递结果即可

> <span id="pssdk_unity_faq_1">PSSDK都包含哪些主流的隐私政策</span>

PSSDK目前包含主流的隐私政策，包括

- CCPA
- GDPR
- LGPD

此外，我们也会持续更新支持的隐私政策。

> <span id="pssdk_unity_faq_2">授权状态都有哪些</span>

授权状态目前分为三种类型，分别是

- 未知
- 不同意分享
- 同意分享

其中未知表示尚未向用户请求过授权。不同意表示您不可以使用用户的隐私信息。


> <span id="pssdk_unity_faq_3">是否需要每次启动App都进行请求隐私政策</span>

不用每次都启动App都进行请求隐私政策，您可以缓存用户授权结果。

> <span id="pssdk_unity_faq_4">碰到异常应如何处理</span>

在失败回调中，我们为您提供了PSPrivacyAuthorizationError错误码枚举，您可以根据错误码自行处理，或咨询我们的技术支持。

> <span id="pssdk_unity_faq_5">弹窗或文案渲染有问题是什么原因</span>

请确保您传入的设备屏幕方向正确，如不正确，可能会造成渲染异常。

> <span id="pssdk_unity_faq_6">请求授权的时机</span>

因许多第三方SDK初始化都会使用和用户有关的信息，故建议您尽量在App启动后尽快请求用户的授权。





