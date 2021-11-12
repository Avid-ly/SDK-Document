
# 1. 概述

如游戏需要上报游戏时长，请使用以下 API 完成相应在线时长的上报。
&ensp;
# 2. 添加引用

所有方法均以 static 定义在 `DurationReport` 类中，请将 **DurationReport** 引用至 Java 代码中。
```java
import com.aly.duration.DurationReport;
```
&ensp;
# 3. 初始化上报信息

初始化建议在  `onCreate`方法中调用，且不能在子线程中调用，也请不要多次调用

```java
void initReport(String serverName, String serverZone, String uId, String ggId);
```


参数说明

|参数名|说明|
|:----  |-----   |
|serverName |游戏服务器,可以为空  |
|serverZone |玩家所在区服，可以为空 |
|uId |游戏用户 ID，请传入使用的 player ID（请确认与登录上报的 playerId 保持一致）,不可为空  |
|ggId |登录sdk中的用户ID,可以为空 |

调用示例：

```java
DurationReport.initReport("server01","zone01","uid001","ggid001");;
```
&ensp;
# 4. 生命周期回调

请在游戏主activity中对应的生命周期回调方法中调用。

```java
void onAppResume();
void onAppPause();
```

调用示例：

```java
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        DurationReport.initReport("playerId001");
    }


    @Override
    protected void onResume() {
        super.onResume();
        DurationReport.onAppResume();
    }

       @Override
    protected void onPause() {
        super.onPause();
        DurationReport.onAppPause();
    }
```

