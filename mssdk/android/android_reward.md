# 广告对象初始化
使用如下方式初始化视频广告

    MsRewardVideoAd mVideoAd = MsRewardVideoAd.getInstance(Activity);

# 广告加载监听
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
# 广告是否准备就绪
监听插屏广告加载成功后，可以使用`isReady()` 来判断广告是否就绪

**请不要重复调用此方法，此方法应在展示时作为判断条件使用，不应作为是否加载成功广告的判断条件，广告加载与否请使用LoadCallBack**

```java
public void isReady()
```

# 显示视频广告
根据您的业务逻辑，在您希望显示视频广告的时机，调用`isReady()`方法判断是否有可播放的视频广告，来决定您是否显示播放视频广告的按钮，然后调用`show("广告位")`方法显示视频广告，在`show("广告位")`方法中，传入可以帮助您区分视频广告入口的参数

**【注意】在播放之前需要调用`isReady()`方法判断当前是否有视频广告可以播放，`show("广告位")`在不同的激励视频广告点传入可以代表当前广告点的参数，用于后期分析各广告点广告的数据情况，<font color=red>不同的广告点请不要传入相同的参数</font>**

> 以下【广告位】可由接入方自定义。不同广告使用场景请尽量保持【广告位】的独立性，方便未来区分不同广告展示的收益来源。  


    if (mVideoAd != null && mVideoAd.isReady()) {
        mVideoAd.show("广告位");
    }

# 回调接口
广告可以通过`setVideoAdListener`方法设置回调接口，原则上您只需要关心`onVideoAdReward`和`onVideoAdDontReward`两个回调方法，来决定您是否需要向用户发送奖励

**【注意】`onVideoAdReward`回调和`onVideoAdClose`出现顺序不一定**

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
