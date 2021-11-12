# 常见问题

## 1. Facebook高版本依赖Swift

当xcode编译或打包遇到如下错误的时候

> [!ATTENTION]
> Undefined symbol:__swift_FORCE_LOAD_$_swiftCompatibilityDynamicReplacements
> 
> Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50

说明接入了Facebook高版本，但没有添加Swift依赖

解决方案：

> [!NOTE]
> 创建桥接文件

- 选中工程,点击`New File` ->`iOS`-> `Swift File`;
- 点击Next,为桥接文件命名;
- 点击Create;

注意：Unity2019.3以上版本创建Swift文件时，需要勾选 UnityFramework

![](http://doc.gamehaus.com/uploads/202104/6085090081ab5_60850900.png)

- 在`Build Setting` -> `SWIFT_OBJC_BRIDGING_HEADER`添加桥接文件路径，路径的格式为：`$(SRCROOT)/Bridging-Header.h`  如果你建立在工程里面的文件夹里了，需要在中间写上文件夹的名字，如：`$(SRCROOT)/文件夹名/Bridging-Header.h`
- 编译一下，路径填写不对编译会报错


## 2.UnityFramework.h引用问题

> [!attention]
> 出现在Unity2019.3 版本导出xcode后打包时，入口文件main.mm中的`#include <UnityFramework/UnityFramework.h>`引用错误

解决方案

> [!note]
> main.mm中的`#include <UnityFramework/UnityFramework.h>`改为
`#import "UnityFramework.h"`


## 3.AppsFlyer Unity插件导致Facebook登录没有回调的问题

解决方案

[修复Unity IDE中同时接入AF+FB导致FB登录完成回调不响应的问题](https://github.com/Avid-ly/AASDK-UnityPackage/blob/master/%E4%BF%AE%E5%A4%8DAF%2BFB%E5%AF%BC%E8%87%B4FB%E7%99%BB%E5%BD%95%E5%AE%8C%E6%88%90%E5%9B%9E%E8%B0%83%E4%B8%8D%E5%93%8D%E5%BA%94%E7%9A%84%E9%97%AE%E9%A2%98.md)