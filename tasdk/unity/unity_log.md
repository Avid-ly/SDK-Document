# 1 事件打点介绍

事件打点是一种常用的数据采集方法，方便产品/运营系统性的统计分析复杂的用户数据。

事件打点根据参数的类型可分为以下几种

- 无参数事件打点
- 单参数事件打点
- 多参数事件打点
- 计数事件打点

# 2 前提条件

在您的应用中集成事件打点之前，您必须：

- 按照我们的步骤将TASDK集成到您的项目中。
- 完成项目设置
- 请务必在事件打点之前初始化TASDK


# 3.使用事件打点
## 3.1 无参数事件

```csharp
void traceKey(string key);
```

参数说明：

|参数名|说明|
|:----  |-----   |
|key |打点事件 ID，不能为空，字符长度在 128 个字节内有效。   |

&ensp;

## 3.2 单参数事件

```csharp
void traceString(string key, string value);
```

参数说明：

|参数名|说明|
|:----  |-----   |
|key |打点事件 ID，不能为空，字符长度在 128 个字节内有效。   |
|value | 事件值，字符串类型。  |

&ensp;

##  3.3 多参数事件

```csharp
void traceDictionary(string key, Dictionary&lt;string, string> dic);
```

参数说明：

|参数名|说明|
|:----  |-----   |
|key |打点事件 ID，不能为空，字符长度在 128 个字节内有效。   |
|dic | string 类型的打点参数，以 Dictionary 类型存储。  |

&ensp;

##  3.4 计数事件
用于记录事件的次数场景。

```csharp
void countKey(string key);
```

参数说明：

|参数名|说明|
|:----  |-----   |
|key |打点事件 ID。   |

调用示例

```csharp
Dictionary&lt;string, string> dic = new Dictionary&lt;string, string> ();
dic.Add ("appid", "com.test.demo");
dic.Add ("name", "player-001");
dic.Add ("level", "1");
UPTraceApi.traceDictionary ("KEY_PLAYER_DIC", dic);
UPTraceApi.traceString ("KEY_PLAYER_STRING", "Hello, this is a testing data.");
UPTraceApi.traceKey ("KEY_PLAYER_ONLY");
UPTraceApi.countKey ("KEY_PLAYER_ONLY");
```
到此，您已经完成了事件打点的集成。

接下来，您可以根据自己的需求，选取对应的功能并集成到项目里：

- [登录上报（未使用AASDK）](/tasdk/unity/unity_login1.md)
- [登录上报（使用AASDK）](/tasdk/unity/unity_login2.md)
- [支付上报](/tasdk/unity/unity_iap.md)
- [在线用户时长上报](/tasdk/unity/unity_duration_report.md)
- [用户标签](/tasdk/unity/unity_tag.md)
