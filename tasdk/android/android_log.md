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
- 请务必在事件打点之前初始化TASDK

# 3 使用事件打点

在需使用的类中导入头文件

```java
import com.aly.sdk.ALYAnalysis;
```
## 3.1 无参数事件

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

## 3.2 单参数事件
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
# 3.3 多参数事件
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

# 3.4 计数事件
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


到此，您已经完成了事件打点的集成。

接下来，您可以根据自己的需求，选取对应的功能并集成到项目里：

- [登录上报（未使用AASDK）](/tasdk/android/android_login1.md)
- [登录上报（使用AASDK）](/tasdk/android/android_login2.md)
- [支付上报](/tasdk/android/android_iap.md)
- [在线用户时长上报](/tasdk/android/android_duration_report.md)
- [用户标签](/tasdk/android/android_tag.md)