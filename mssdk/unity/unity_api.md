以下是MSSDK的API列表，方便您查询和使用

# MSSDK

此类是MSSDK的入口，包含初始化，广告调用等方法

## 1.带有回调的SDK初始化方法

```c#
public static void initSdk (Action<string> completed)
```

| 参数      | 说明       |
| --------- | ---------- |
| completed | 初始化回调 |



## 2.判断是否可以播放激励视频

```c#
public static bool isRewardReady ()
```



## 3.设置激励视频回调

```c#
public static void setRewardCallback(Action<string, string> didOpen, Action<string, string> didClick, Action<string, string> didClose, Action<string, string> didReward)
```

| 参数      | 说明         |
| --------- | ------------ |
| didOpen   | 广告展示回调 |
| didClick  | 广告点击回调 |
| didClose  | 广告关闭回调 |
| didReward | 广告奖励回调 |



## 4.展示激励视频

```c#
public static void showRewardAd (string cpAdUnitID)
```

| 参数       | 说明                                     |
| ---------- | ---------------------------------------- |
| cpAdUnitID | 开发者自定义广告位ID，用来区分广告位收入 |



## 5.判断是否可以播放插屏

```c#
public static bool isInterstitialReady (string cpAdUnitID)
```

| 参数       | 说明                                     |
| ---------- | ---------------------------------------- |
| cpAdUnitID | 开发者自定义广告位ID，用来区分广告位收入 |

## 6.设置插屏广告回调

```c#
public static void setInterstitialCallback (Action<string, string> didOpen, Action<string, string> didClick, Action<string, string> didClose) 
```

| 参数     | 说明         |
| -------- | ------------ |
| didOpen  | 广告展示回调 |
| didClick | 广告点击回调 |
| didClose | 广告关闭回调 |

## 7.获取横幅广告视图

```c#
public static void showBannerAd (string cpAdUnitID, double x, double y, double width, double height)
```

| 参数       | 说明                                     |
| ---------- | ---------------------------------------- |
| cpAdUnitID | 开发者自定义广告位ID，用来区分广告位收入 |
| x          | 起始位横坐标                             |
| y          | 起始位纵坐标                             |
| width      | 宽度                                     |
| height     | 高度                                     |



## 8.同意用户隐私授权

```c#
public static void grantConsent ()
```

## 9.拒绝用户隐私授权

```c#
public static void revokeConsent ()
```

## 10.设置DEBUG日志

```c#
public static void openLog (bool open)
```

| 参数 | 说明              |
| ---- | ----------------- |
| open | 是否打开DEBUG日志 |

<br>

  
