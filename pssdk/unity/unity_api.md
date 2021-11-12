# 1. 向用户请求授权

### 1.1 API介绍

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

### 1.2 调用示例

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

# 2. 返回参数说明

### 2.1 授权成功返回 PSSDKAuthModel：

``` java 
private AuthCollectionStatus authCollectionStatus; //收集状态

private AuthSharingStatus authSharingStatus; //分享状态

private string privacyPolicy;//隐私政策名称
```

### 2.2 授权状态参数说明：

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

### 2.3 授权失败返回失败 string：</br>

授权失败返回string类型失败信息






