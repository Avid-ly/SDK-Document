以下是PSSDK的API列表，方便您查询和使用

# PSSDK

此类是PSSDK的入口

|  方法   | 描述  |
|  ----  | ----  |
| `public static void requestAuthStatus(string pid, string playerId,Action<PSSDKAuthModel> success, Action<string> fail)`| 请求用户隐私授权方法|

<br>

# AuthCollectionStatus

此类是PSSDK声明的授权状态枚举

|  变量   | 描述  |
|  ----  | ----  |
| UNKNOW | 未知 |
| AGREE  | 同意	  |
| DISAGREE  | 拒绝  |
# AuthSharingStatus

此类是PSSDK声明的分享状态枚举

|  变量| 描述  |
|  ----  | ----  |
| UNKNOW | 未知 |
| AGREE  | 同意	  |
| DISAGREE  | 拒绝  |