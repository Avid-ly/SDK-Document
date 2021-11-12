# 引入头文件
在要使用的类中引入头文件

```
#import <MSSDK/MSSDK.h>
```

和

```
#if __has_include(<MoPub/MoPub.h>)
    #import <MoPub/MoPub.h>
#elif __has_include(<MoPubSDKFramework/MoPub.h>)
    #import <MoPubSDKFramework/MoPub.h>
#else
    #import "MoPub.h"
#endif
```

# 1、获取横幅广告

声明全局的`MPAdView`对象，示例如下

```
@interface MSBannerDemoViewController () <MPAdViewDelegate>
{
    MPAdView *_bannerView;
}
```

获取横幅广告视图，示例如下

```
_bannerView = [MSSDK initBannerView];
```

设置横幅广告的大小，并加载在当前视图上

```
_bannerView.frame = CGRectMake(0, self.view.frame.size.height - 50, self.view.frame.size.width, 50);
[self.view addSubview:_bannerView];
```

# 2、设置横幅广告代理

设施横幅广告代理

```
_bannerView.delegate = self;
```

以及实现代理方法

```
#pragma mark - MPBannerDelegate

- (UIViewController *)viewControllerForPresentingModalView {
    return self;
}

- (void)adViewDidLoadAd:(MPAdView *)view adSize:(CGSize)adSize {
    NSLog(@"Banner adViewDidLoadAd");
}

- (void)adView:(MPAdView *)view didFailToLoadAdWithError:(NSError *)error {
    NSLog(@"Banner adView:didFailToLoadAdWithError");
}

- (void)willPresentModalViewForAd:(MPAdView *)view {
    NSLog(@"Banner willPresentModalViewForAd");
}

- (void)didDismissModalViewForAd:(MPAdView *)view {
    NSLog(@"Banner didDismissModalViewForAd");
}

- (void)willLeaveApplicationFromAd:(MPAdView *)view {
    NSLog(@"Banner willLeaveApplicationFromAd");
}
```

# 3、加载横幅广告

```
[_bannerView loadAdWithMaxAdSize:kMPPresetMaxAdSizeMatchFrame];
```

