# 1 插屏广告介绍

插屏广告是全屏广告，它会覆盖整个应用界面，直到用户将其关闭。这些广告通常会在应用流程的自然过渡点（例如，活动之间或游戏关卡之间的暂停时段）展示。当应用展示插页式广告时，用户可以点按广告前往其目标页面，也可以关闭广告回到应用界面。

<center>

![](../image/3.gif)

</center>

<br>

# 2 前提条件

在您的应用中集成插屏广告之前，您必须：

- 确保您安装了Android Studio 3.2 或更高版本
- 确保您使用真实的Android设备，而不是模拟器进行开发和测试
- 确保您能访问诸如Facebook，Google等网址
- 按照步骤将 MSSDK 集成到您的项目中。
- 请务必在加载广告之前初始化 MSSDK

<br>

# 3 使用插屏广告

使用广告的主要步骤如下所示：

1. 初始化广告对象
2. 注册广告加载回调
3. 判断广告是否填充
4. 展示广告
5. 处理广告事件


## 3.1 广告对象初始化

使用如下方式初始化插屏广告

    MsInterstitialAd mInterstitialAd = new MsInterstitialAd(this, "广告位");


## 3.2 注册广告加载回调
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
             // 插屏广告加载成功
        }

        @Override
        public void onLoadFailed(String placement) {
            Log.i(TAG, "InterstitialAd " + placement + " onLoadFailed:");
            // inter_aaa位的插屏广告加载失败
        }
    };

// 设置回调接口
mInterstitialAdAAA.setLoadCallBack(callback);
```

## 3.3 判断广告是否填充
监听插屏广告加载成功后，可以使用`isReady()` 来判断广告是否就绪

>请不要重复调用此方法，此方法应在展示时作为判断条件使用，不应作为是否加载成功广告的判断条件，广告加载与否请使用LoadCallBack**

```java
public boolean isReady()
```



## 3.4 显示广告
根据您的业务逻辑，在您希望显示插屏广告的时机，调用show方法显示插屏广告

```java
public void show()
```

使用示例
>请注意在显示之前需要调用`isReady()`方法判断当前是否有广告可以显示

```java

    if (mInterstitialAd != null && mInterstitialAd.isReady()) {
        mInterstitialAd.show();
    }
```



## 3.5 处理广告事件
插屏广告可以通过`setInterstitialAdListener`方法设置回调接口，您的业务中如果没有需要针对相应回调的特殊处理，可以不使用回调。
```java
public void setInterstitialAdListener(MsInterstitialAdListener listener)
```

使用示例

```java

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
	
```
