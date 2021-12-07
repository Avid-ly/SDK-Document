# 自定义横幅广告

# 1 横幅广告介绍

横幅广告会占据应用布局中的一处位置，要么是设备屏幕的顶部，要么是底部。这类广告会在用户与应用互动时停留在屏幕上，并且可在一段时间后自动刷新。

<center>

![](../image/6.gif)

</center>

<br>


# 2 前提条件
- 确保您安装了Android Studio 3.2 或更高版本
- 确保您使用真实的Android设备，而不是模拟器进行开发和测试
- 确保您能访问诸如Facebook，Google等网址
- 按照步骤将 MSSDK 集成到您的项目中。
- 请务必在加载广告之前初始化 MSSDK


# 3 使用横幅广告

使用激励广告的主要步骤如下所示：

1. 获取横幅广告
2. 注册回调


## 3.1 获取横幅广告

请使用如下方式初始化广告对象

```java
mBannerAd = new MsBannerAd(this, "广告位");
```
	
>我们目前仅支持长条形的横幅广告。

### 3.1.1 设置横幅广告载体
以长条形广告为例，首先请在布局文件中准备好广告的父视图，例如：

```xml
<LinearLayout
    android:id="@+id/banner_container"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"/>
```

然后在代码中通过调用`getBannerView()`方法取得广告视图并加入到父视图中，在广告加载完成后即可在父视图中显示。
```java
    banner_container = (LinearLayout) findViewById(R.id.banner_container);
    banner_container.addView(mBannerAd.getBannerView());
```


## 3.2 注册回调
横幅广告可以通过`setMsBannerAdListener`方法设置回调接口，您的业务中如果没有需要针对相应回调的特殊处理，可以不使用回调。

```java
    
    mBannerAd.setMsBannerAdListener(new MsBannerAdListener() {
    @Override
    public void onClicked() {
        // 此处为广告点击的回调
    }

    @Override
    public void onDisplayed() {
        // 此处为广告显示的回调
    }
});
```

