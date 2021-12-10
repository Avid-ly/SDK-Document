以下是PSSDK的API列表，方便您查询和使用

# PSSDK

此类是PSSDK的入口
## 1.请求用户隐私授权
```C#
public static void requestAuthStatus(string pid, string playerId,Action<PSSDKAuthModel> success, Action<string> fail)
```
|  参数   | 描述  |
|  ----  | ----  |
|  pid  | 产品Id  |
|  playerId  | 玩家Id  |
|  success  | 请求成功回调  |
|  fail  | 请求失败回调  |

<br>

## 2. AuthCollectionStatus

此类是PSSDK声明的**授权状态**枚举

|  变量   | 描述  |
|  ----  | ----  |
| UNKNOW | 未知 |
| AGREE  | 同意	  |
| DISAGREE  | 拒绝  |
## 3. AuthSharingStatus

此类是PSSDK声明的**分享状态**枚举

|  变量| 描述  |
|  ----  | ----  |
| UNKNOW | 未知 |
| AGREE  | 同意	  |
| DISAGREE  | 拒绝  |