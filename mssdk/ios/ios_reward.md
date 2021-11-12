# 引入头文件
在要使用的类中引入头文件

```
#import <MSSDK/MSSDK.h>
```

# 1、设置激励视频代理

```
[MSSDK setRewardDelegate:self];
```

<br>

# 2、判断是否可以播放激励视频

```
BOOL b = [MSSDK hasRewardAdAvailable];
```

<br>

# 3、播放激励视频

```
[MSSDK presentRewardVideoAdForAdUnitID:@"YourAdUnitID" fromViewController:self];
```

在播放之前需要完成代理的设置

<br>

# 4、代理激励视频回调

```
#pragma mark - MSRewardedVideoDelegate

- (void)MSRewardVideoAdDidOpen {
    NSLog(@"MSSDK MSRewardVideoAdDidOpen");
}

- (void)MSRewardVideoAdDidCilck {
    NSLog(@"MSSDK MSRewardVideoAdDidCilck");
}

- (void)MSRewardVideoAdDidRewardUserWithReward {
    NSLog(@"MSSDK MSRewardVideoAdDidRewardUserWithReward");
}

- (void)MSRewardVideoAdDidClose {
    NSLog(@"MSSDK MSRewardVideoAdDidClose");
}
```