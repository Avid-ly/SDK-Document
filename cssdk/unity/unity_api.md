以下是CSSDK的API列表，方便您查询和使用

# CSSDKApi

此类是CSSDK的入口，包含初始化等方法
## 1.SDK初始化方法
```C#
public static void init (string productId)
```
|  参数   | 描述  |
|  ----  | ----  |
|  productId  | 产品PID  |


## 2.展示客服与反馈
```C#
public static void show ()
```

## 3.检查是否有未读新消息
```C#
public static void haveNewMessage (Action<bool,string> callback)
```
|  参数   | 描述  |
|  ----  | ----  |
|  callback  | 消息回调  |

## 4.追加额外透传参数
```C#
public static void addExtraParam (Dictionary<string, string> dic)
```
|  参数   | 描述  |
|  ----  | ----  |
|  dic  | 透传参数  |
## 5.获取SDK版本号
```C#
public static string getVersion ()
```

<br>



