
# 1 激励视频广告介绍

所谓激励视频广告，指的是用户可以选择与之互动来换取应用内奖励的一种广告，激励广告是在赚取广告收入的同时保持用户参与您的应用程序的好方法。奖励通常以游戏内货币（金币、硬币、道具等）的形式出现，并在广告成功完成后分发给用户。本指南介绍了如何将 MSSDK 激励视频广告植入到 iOS 应用中


横屏状态下的激励视频示例：

<center>

![](../image/4.gif)

</center>

竖屏状态下的激励视频示例：

<center>

![](../image/7.gif)

</center>

<br>

# 2 前提条件

在您的应用中集成激励广告之前，您必须：

- 确保您安装了Android Studio 3.2 或更高版本
- 确保您使用真实的Android设备，而不是模拟器进行开发和测试
- 确保您能访问诸如Facebook，Google等网址
- 按照步骤将 MSSDK 集成到您的项目中。
- 请务必在加载广告之前初始化 MSSDK

<br>

# 3 使用激励视频广告

使用激励广告的主要步骤如下所示：
1. 初始化广告对象
2. 注册广告加载回调
3. 判断广告是否填充
4. 展示广告
5. 处理广告事件



## 3.1 广告对象初始化
>使用如下方式初始化视频广告，请在初始化成功之后调用

    MsRewardVideoAd mVideoAd = MsRewardVideoAd.getInstance(Activity);

## 3.2 注册广告加载回调
监听激励视屏加载结果，如果长时间未加载成功，会产生onLoadFailed()的回调。
```java
public void setLoadCallBack(MsRewardVideoLoadCallback callback)
```

示例代码：

```java
mVideoAd = MsRewardVideoAd.getInstance(VideoActivity.this);
mVideoAd.setLoadCallBack(new MsRewardVideoLoadCallback() {
        @Override
        public void onLoadFailed() {
            // code
            // 激励视屏加载失败，请等待加载成功
        }

        @Override
        public void onLoadSuccessed() {
            // code
            // 激励视屏加载成功，可以展示
        }
    });
```
## 3.3 判断广告是否填充
监听广告加载成功后，可以使用`isReady()` 来判断广告是否就绪

!> 请不要重复调用此方法，此方法应在展示时作为判断条件使用，不应作为是否加载成功广告的判断条件，广告加载与否请使用LoadCallBack

```java
public void isReady()
```

## 3.4 展示广告
根据您的业务逻辑，在您希望显示视频广告的时机，调用`isReady()`方法判断是否有可播放的视频广告，来决定您是否显示播放视频广告的按钮，然后调用`show("广告位")`方法显示视频广告，在`show("广告位")`方法中，传入可以帮助您区分视频广告入口的参数

>在播放之前需要调用`isReady()`方法判断当前是否有视频广告可以播放，`show("广告位")`在不同的激励视频广告点传入可以代表当前广告点的参数，用于后期分析各广告的数据情况，<font color=red>不同的广告点请不要传入相同的参数</font>**

```java
    if (mVideoAd != null && mVideoAd.isReady()) {
        mVideoAd.show("广告位");
    }else{
        // 广告没有准备就绪
    }
```

## 3.5 处理广告事件
广告可以通过`setVideoAdListener`方法设置回调接口，原则上您只需要关心`onVideoAdReward`和`onVideoAdDontReward`两个回调方法，来决定您是否需要向用户发送奖励

>`onVideoAdReward`回调和`onVideoAdClose`出现顺序不一定
```java
mVideoAd.setVideoAdListener(new MsRewardVideoAdListener() {
    @Override
    public void onVideoAdClicked() {
        // 此处为广告点击的回调
    }

    @Override
    public void onVideoAdClosed() {
        // 此处为广告关闭的回调
    }

    @Override
    public void onVideoAdDisplayed() {
        // 此处为广告展示的回调
    }

    @Override
    public void onVideoAdReward() {
        // 此处为广告可以发放奖励的回调
    }

    @Override
    public void onVideoAdDontReward(String reason) {
        // 此处为广告观看不符合条件，不发放奖励的回调，一般是因为观看视频时间短
    }
    @Override
    public void onVideoAdShowFailed(String reason){
       // 此处为广告播放失败
     }
});
```




