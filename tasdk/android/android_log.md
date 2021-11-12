# 1. 概述
统计包扩展多种打点 API，以满足不同业务的打点需求。

&ensp;
# 2. 无参数事件

```java
void log(String key);
```

参数说明

|参数名|说明|
|:----  |-----   |
|key |自定义统计事件名称，字符长度限制在 128 以内。  |


调用示例：
```java
ALYAnalysis.log("game_start");
```
&ensp;
# 3. 单参数事件
```java
void log(String key, String value);
```
参数说明

|参数名|说明|
|:----  |-----   |
|key |自定义统计事件名称，字符长度限制在 128 以内。   |
|value | 统计事件的内容，字符长度限制在 32K 以内。  |

调用示例：
```java
ALYAnalysis.log("game_resume", "duration:30000");
```
&ensp;
# 4. 多参数事件
```java
void log(String key, Map<String, String> value);
```

参数说明

|参数名|说明|
|:----  |-----   |
|key |自定义统计事件名称，字符长度限制在 128 以内。   |
|value | 统计事件内容，内容格式为 Key-Value 形式的 Map，转换后的字符长度限制在 32K 以内。  |


调用示例：

```java
HashMap<String, String> map = new HashMap<>();
map.put("name", "Jack.Lin");
map.put("level", "35");
map.put("star", "4");
ALYAnalysis.log("game_level_pass", map);
```
&ensp;
# 5. 计数事件
```java
void count(String key);
```

参数说明

|参数名|说明|
|:----  |-----   |
|key |自定义统计事件名称，字符长度限制在 128 以内。  |

调用示例：
```java
ALYAnalysis.count("game_level_pass");
```