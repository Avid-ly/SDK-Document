
# 1 用户时长上报介绍

由于用户时长在游戏或应用中至关重要，因此我们单独提供了用户时长事件上报方法，以便快速统计用户时长。

# 2 前提条件

在您的应用中集成登录上报之前，您必须：

- 按照我们的步骤将TASDK集成到您的项目中。
- 请务必在上报之前初始化TASDK



# 3 初始化上报信息

>初始化建议在  `onCreate`方法中调用，且不能在子线程中调用，请不要多次调用

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
到此，您已经完成了用户在线时长上报的集成。

接下来，您可以根据自己的需求，选取对应的功能并集成到项目里：

- [用户标签](/tasdk/android/android_tag.md)
