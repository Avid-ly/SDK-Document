# 广告对象初始化

使用如下方式初始化插屏广告

    MsInterstitialAd mInterstitialAd = new MsInterstitialAd(this, "广告位");


# 广告加载监听
监听插屏广告加载结果，如果长时间未加载成功，会产生onLoadFailed()的回调。
```java
public void setLoadCallBack(MsInterstitialLoadCallback callback)
```

示例代码：

```java
MsInterstitialAd mInterstitialAdAAA = new MsInterstitialAd(Activity.this, "inter_aaa");
final MsInterstitialLoadCallback callback = new MsInterstitialLoadCallback() {
        @Override
        public void onLoadSuccessed(String placement) {
            Log.i(TAG, "InterstitialAd " + placement + " onLoadSuccessed:");

            if (placement.equals("inter_aaa")) {
                // inter_aaa位的插屏广告加载成功，可以展示
            }
        }

        @Override
        public void onLoadFailed(String placement) {
            Log.i(TAG, "InterstitialAd " + placement + " onLoadFailed:");
            if (placement.equals("inter_aaa")) {
                // inter_aaa位的插屏广告加载失败
            }
        }
    };

// 设置回调接口
mInterstitialAdAAA.setLoadCallBack(callback);
```

# 广告是否准备就绪
监听插屏广告加载成功后，可以使用`isReady()` 来判断广告是否就绪

**请不要重复调用此方法，此方法应在展示时作为判断条件使用，不应作为是否加载成功广告的判断条件，广告加载与否请使用LoadCallBack**

```java
public void isReady()
```



# 显示插屏广告
根据您的业务逻辑，在您希望显示插屏广告的时机，调用show方法显示插屏广告

**请注意在显示之前需要调用`isReady()`方法判断当前是否有广告可以显示**

    if (mInterstitialAd != null && mInterstitialAd.isReady()) {
        mInterstitialAd.show();
    }



# 回调接口
插屏广告可以通过`setInterstitialAdListener`方法设置回调接口，您的业务中如果没有需要针对相应回调的特殊处理，可以不使用回调。

    mInterstitialAd.setInterstitialAdListener(new MsInterstitialAdListener() {
        @Override
        public void onClicked() {
            // 此处为广告点击的回调
        }

        @Override
        public void onClosed() {
            // 此处为广告关闭的回调
        }

        @Override
        public void onDisplayed() {
            // 此处为广告展示的回调
        }
        @Override
        public void onShowFailed(String reason) {
          // 此处为广告展示失败的回调
        }
    });
	
