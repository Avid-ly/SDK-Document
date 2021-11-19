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

- 如何上报热更版本号

> 如何上报热更版本号

SDK为您提供了追加透传参数的方法，您可在透传参数中添加。