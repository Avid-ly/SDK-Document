以下是CSSDK的API列表，方便您查询和使用

# CSSDKApi

此类是CSSDK的入口，包含初始化等方法

|  方法   | 描述  |
|  ----  | ----  |
| public static void init (string productId)   | SDK初始化方法 |
| public static void show () | 展示客服与反馈 |
| public static void haveNewMessage (Action<bool,string> callback) | 检查是否有未读新消息 |
| public static void addExtraParam (Dictionary<string, string> dic)   | 追加额外透传参数 |
| public static string getVersion () | 获取SDK版本号 |

<br>



