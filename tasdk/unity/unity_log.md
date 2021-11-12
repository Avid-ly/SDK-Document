# 1. 无参数事件

```csharp
void traceKey(string key);
```

参数说明：

|参数名|说明|
|:----  |-----   |
|key |打点事件 ID，不能为空，字符长度在 128 个字节内有效。   |

&ensp;

# 2. 单参数事件

```csharp
void traceString(string key, string value);
```

参数说明：

|参数名|说明|
|:----  |-----   |
|key |打点事件 ID，不能为空，字符长度在 128 个字节内有效。   |
|value | 事件值，字符串类型。  |

&ensp;

# 3. 多参数事件

```csharp
void traceDictionary(string key, Dictionary&lt;string, string> dic);
```

参数说明：

|参数名|说明|
|:----  |-----   |
|key |打点事件 ID，不能为空，字符长度在 128 个字节内有效。   |
|dic | string 类型的打点参数，以 Dictionary 类型存储。  |

&ensp;

# 4. 计数事件
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


