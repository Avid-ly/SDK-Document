# 自定义横幅广告

## 广告对象初始化

请使用如下方式初始化广告对象

```java
mBannerAd = new MsBannerAd(this, "广告位");
```
	
>我们目前仅支持长条形的横幅广告。

## 显示横幅广告
以长条形广告为例，首先请在布局文件中准备好广告的父视图，例如：

```xml
<LinearLayout
    android:id="@+id/banner_container"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"/>
```

然后在代码中通过调用`getBannerView()`方法取得广告视图并加入到父视图中，在广告加载完成后即可在父视图中显示。

    banner_container = (LinearLayout) findViewById(R.id.banner_container);
    banner_container.addView(mBannerAd.getBannerView());

## 回调接口
横幅广告可以通过`setMsBannerAdListener`方法设置回调接口，您的业务中如果没有需要针对相应回调的特殊处理，可以不使用回调。

```
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