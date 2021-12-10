以下是PSSDK的API列表，方便您查询和使用

# requestPrivacyAuthorization


|  方法   | 描述  |
|  ----  | ----  |
| `public static void requestPrivacyAuthorization(Activity activity, String productId, String playerId, RequestPrivacyAuthorizationCallBack callBack) `| 请求用户隐私授权方法|

<br>

# PrivacyAuthorizationStatus

此类是PSSDK声明的授权历史枚举类

|  参数   | 描述  |
|  ----  | ----  |
| PrivacyAuthorizationStatusNotDetermined | 未请求过授权 |
| PrivacyAuthorizationStatusDetermined  | 请求过授权  |

<br>


# PrivacyCollectionStatus

此类是PSSDK声明的授权收集枚举类

|  参数   | 描述  |
|  ----  | ----  |
| PrivacyCollectionStatusUnknow | 未知 |
| PrivacyCollectionStatusDenied  | 不同意  |
| PrivacyCollectionStatusAuthorized  | 同意  |

<br>

# PrivacyShareStatus

此类是PSSDK声明的授权分享枚举类

|  参数   | 描述  |
|  ----  | ----  |
| PrivacySharingStatusUnknow | 未知 |
| PrivacySharingStatusDenied  | 不同意  |
| PrivacySharingStatusAuthorized  | 同意  |

<br>


# setDebugable
>打印相关的log信息，请在上线时设置为false

|  方法   | 描述  |
|  ----  | ----  |
| `public static void setDebugable(boolean debugable) `| 是否开启log打印|

<br>



