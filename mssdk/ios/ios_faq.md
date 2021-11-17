# 编译问题

请根据编译报错的关键字来检索并处理问题

- 遇到`bitcode bundle could not be generated because`
- 遇到`Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50`
- 遇到`"_vDSP_mmul"、"_vDSP_dotpr"、"_vDSP_vclip"`
- 遇到`"std::xxx"、"_cxa_throw"`

> 遇到`bitcode bundle could not be generated because`

当编译或打包遇到如下错误的时候

`
bitcode bundle could not be generated because 'xxx/FBSDKCoreKit.framework/FBSDKCoreKit(Permission.o)' was built without full bitcode. All object files and libraries for bitcode must be generated from Xcode Archive or Install build file 'xxx/FBSDKCoreKit.framework/FBSDKCoreKit' for architecture armv7
`

说明接入了Facebook高版本，同时开启了Bitcode

解决方案：

`TARGETS` --> `ProductName` --> `Build Settings` --> `Enable Bitcode` 置为`NO`


> 遇到`Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50`

当编译或打包遇到如下错误的时候

`Undefined symbol:__swift_FORCE_LOAD_$_swiftCompatibilityDynamicReplacements`
`Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50`

说明接入了Facebook高版本，但没有添加Swift依赖

解决方案：

创建桥接文件

- 选中工程,点击`New File` ->`iOS`-> `Swift File`;
- 点击Next,为桥接文件命名;
- 点击Create;
- 在`Build Setting` -> `SWIFT_OBJC_BRIDGING_HEADER`添加桥接文件路径，路径的格式为：`$(SRCROOT)/Bridging-Header.h`  如果你建立在工程里面的文件夹里了，需要在中间写上文件夹的名字，如：`$(SRCROOT)/文件夹名/Bridging-Header.h`
- 编译一下，路径填写不对编译会报错


> 遇到`"_vDSP_mmul"、"_vDSP_dotpr"、"_vDSP_vclip"`

当编译或打包遇到`"_vDSP_mmul"、"_vDSP_dotpr"、"_vDSP_vclip"` 说明缺少`Accelerate.framework`

解决方案：

在`TAGETS` --> `ProductName` --> `Build Phases` --> `Link Binary With Libraries`中添加`Accelerate.framework`即可

> 遇到`"std::xxx"、"_cxa_throw"`

当编译或打包遇到`"std::xxx"、"_cxa_throw"` 说明缺少`libc++.tbd`

解决方案：

在`TAGETS` --> `ProductName` --> `Build Phases` --> `Link Binary With Libraries`中添加`libc++.tbd`即可

<br>

# 使用问题

## 激励视频

- 何时关闭和恢复游戏背景音乐与逻辑
- 如何判断广告生命周期结束
- 如何获得广告加载成功的回调
- 如何判断是否给玩家发放奖励
- 能在广告关闭回调中直接展示广告吗
- 广告播放时能进行横竖屏切换吗

> 何时关闭和恢复游戏背景音乐与逻辑

建议在调用`presentRewardVideoAdForAdUnitID`时关闭背景音乐，暂停游戏逻辑；在收到`MSRewardVideoAdDidClose`回调时恢复背景音乐，开始游戏逻辑。

> 如何判断广告生命周期结束

当收到`MSRewardVideoAdDidClose`回调时，意味着本次广告展示结束

> 如何获得广告加载成功的回调

MSSDK使用自动加载广告的模式，无需开发者持有广告对象、调用加载方法和记录广告加载结果，大大减少开发者的负担，使开发者能将精力聚焦游戏逻辑。如您想获得广告加载成功的回调，可自行定时监控循环`hasRewardAdAvailable`方法即可，循环间隔由您自行控制，建议不要太短，5s以上为宜。

> 如何判断是否给玩家发放奖励

当收到`MSRewardVideoAdDidRewardUserWithReward`回调时说明玩家或用户已满足发放奖励回调，则可以给玩家发放奖励。如未触发此回调，说明未满足发放奖励的条件。

> 能在广告关闭回调中直接展示广告吗

不建议这样做。因为有些平台如admob，需要一定的时间间隔来渲染下一个广告。在广告关闭回调中立刻播放admob的广告会造成广告无法正常展示的情况。

> 广告播放时能进行横竖屏切换吗

不建议这样做。有些平台在横屏状态下加载的横屏素材是无法在竖屏状态下展示的，可能会造成无法展示或者游戏闪退等不可控现象。

## 插屏广告

- 何时关闭和恢复游戏背景音乐与逻辑
- 如何判断广告生命周期结束
- 如何获得广告加载成功的回调
- 能在广告关闭回调中直接展示广告吗
- 广告播放时能进行横竖屏切换吗

> 何时关闭和恢复游戏背景音乐与逻辑

建议在调用`presentRewardVideoAdForAdUnitID`时关闭背景音乐，暂停游戏逻辑；在收到`MSRewardVideoAdDidClose`回调时恢复背景音乐，开始游戏逻辑。

> 如何判断广告生命周期结束

当收到`MSRewardVideoAdDidClose`回调时，意味着本次广告展示结束

> 如何获得广告加载成功的回调

MSSDK使用自动加载广告的模式，无需开发者持有广告对象、调用加载方法和记录广告加载结果，大大减少开发者的负担，使开发者能将精力聚焦游戏逻辑。如您想获得广告加载成功的回调，可自行定时监控循环`hasRewardAdAvailable`方法即可，循环间隔由您自行控制，建议不要太短，5s以上为宜。

> 能在广告关闭回调中直接展示广告吗

不建议这样做。因为有些平台如admob，需要一定的时间间隔来渲染下一个广告。在广告关闭回调中立刻播放admob的广告会造成广告无法正常展示的情况。

> 广告播放时能进行横竖屏切换吗

不建议这样做。有些平台在横屏状态下加载的横屏素材是无法在竖屏状态下展示的，可能会造成无法展示或者游戏闪退等不可控现象。


## 横幅广告

- 何时关闭和恢复游戏背景音乐与逻辑
- 如何更新横幅广告
- 如何设置横幅广告的大小

> 何时关闭和恢复游戏背景音乐与逻辑

建议在调用`willPresentModalViewForAd`时关闭背景音乐，暂停游戏逻辑；在收到`didDismissModalViewForAd`回调时将控制器交换给游戏，恢复背景音乐，开始游戏逻辑。

> 如何更新横幅广告

横幅广告会一直显示在页面上，且会定时自动刷新，股不需要开发者主动进行刷新操作

> 如何设置合适的横幅广告的大小

建议横幅广告的宽度与设备宽度保持一直，横幅广告在横向会自动居中显示；横幅广告的高度，在iPhone上建议设置为50，在iPad上，建议设置为90。