
# 常见问题

### 1、 Facebook高版本不支持Bitcode

当编译或打包遇到如下错误的时候

> [!ATTENTION]
bitcode bundle could not be generated because 'xxx/FBSDKCoreKit.framework/FBSDKCoreKit(Permission.o)' was built without full bitcode. All object files and libraries for bitcode must be generated from Xcode Archive or Install build file 'xxx/FBSDKCoreKit.framework/FBSDKCoreKit' for architecture armv7

说明接入了Facebook高版本，同时开启了Bitcode

解决方案：

> [!NOTE]
`TARGETS` --> `ProductName` --> `Build Settings` --> `Enable Bitcode` 置为`NO`

### 2、 Facebook高版本依赖Swift

当编译或打包遇到如下错误的时候

> [!attention]
> Undefined symbol:__swift_FORCE_LOAD_$_swiftCompatibilityDynamicReplacements
>
> Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50

说明接入了Facebook高版本，但没有添加Swift依赖

解决方案：

> [!NOTE]
> 创建桥接文件
>
> - 选中工程,点击`New File` ->`iOS`-> `Swift File`;
> - 点击Next,为桥接文件命名;
> - 点击Create;
> - 在`Build Setting` -> `SWIFT_OBJC_BRIDGING_HEADER`添加桥接文件路径，路径的格式为：`$(SRCROOT)/Bridging-Header.h`  如果你建立在工程里面的文件夹里了，需要在中间写上文件夹的名字，如：`$(SRCROOT)/文件夹名/Bridging-Header.h`
> - 编译一下，路径填写不对编译会报错

### 3. 缺少Accelerate.framework

当编译或打包遇到

> [!attention]
> _vDSP_mmul
> 
> _vDSP_dotpr
> 
> _vDSP_vclip
> 等 


说明缺少Accelerate.framework
解决方案：

> [!NOTE]
在`TAGETS` --> `ProductName` --> `Build Phases` --> `Link Binary With Libraries`中添加`Accelerate.framework`即可


### 4、 缺少libc++.tbd

当编译或打包遇到

> [!attention]
> "std::xxx"
> 
> "_cxa_throw"
> 等 

说明缺少`libc++.tbd`

解决方案：

> [!NOTE]
在`TAGETS` --> `ProductName` --> `Build Phases` --> `Link Binary With Libraries`中添加`libc++.tbd`即可

### 5、 不想使用GameCenter登录

当游戏不想使用`GameCenter`登录时，可以隐藏此登录方式

解决方案：

> [!NOTE]
> 在info.plist中添加 以下节点，即可隐藏GameCenter登录

```objective-c
<key>AASDisableGameCenterLogin</key>
<true/>
```


### 6、 点击Sign In with Apple图片，无反应

原因是Xcode中没有添加`Sign In with Apple`登录功能

解决方案：

> [!NOTE]
在Xcode添加`Sign In with Apple`即可，同时在[Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources/certificates/list)后台中开启包名次功能
>
> Xcode添加路径：TARGETS --> Signing & Capabilitise --> Capability

```xml
<key>AASDisableGameCenterLogin</key>
<true/>
```
