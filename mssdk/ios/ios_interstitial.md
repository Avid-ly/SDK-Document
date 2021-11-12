# 引入头文件
在要使用的类中引入头文件

```
#import <MSSDK/MSSDK.h>
```

# 1、设置插屏广告代理

```
[MSSDK setInterstitialDelegate:self];
```

<br>

# 2、判断是否可以播放插屏广告

```
BOOL b = [MSSDK hasInterstitialAdAvailable];
```

<br>

# 3、播放插屏广告

```
[MSSDK presentInterstitialForAdUnitID:@"YourAdUnitID" fromViewController:self];
```

在播放之前需要完成代理的设置

<br>

# 4、代理插屏广告回调

```
#pragma mark - MSInterstitialDelegate

- (void)MSInterstitialAdDidOpen {
    NSLog(@"MSSDK MSInterstitialAdDidOpen");
}

- (void)MSInterstitialAdDidCilck {
    NSLog(@"MSSDK MSInterstitialAdDidCilck");
}

- (void)MSInterstitialAdDidClose {
    NSLog(@"MSSDK MSInterstitialAdDidClose");
}
```