# 1. 前提条件
- iOS 平台
- 最新的AASDK unity plugin
- 已添加Unity Plugin

# 2. 目录结构
成功导入 Unity 插件后，检查 `Assets` 目录项下是否存在 `SDKPackage-AASDK` 和`ExternalDependencyManager`。
# 3.导出xcode工程
unityPackage中包含EDM4U插件及对应的cocoaPods依赖文件 AASDKDependencies.xml,导出xcode工程后插件将自动下载依赖
安装完成之后，应使用`.xcworkspace`打开项目，而不是`.xcodeproj`
# 4.常见编译问题
><span id="aasdk_unity_faq1">  Facebook高版本依赖Swift</span>
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

><span id="aasdk_unity_faq2"> UnityFramework.h引用问题</span>



> [!attention]
> 出现在Unity2019.3 版本导出xcode后打包时，入口文件main.mm中的`#include <UnityFramework/UnityFramework.h>`引用错误

解决方案

> [!note]
> main.mm中的`#include <UnityFramework/UnityFramework.h>`改为
`#import "UnityFramework.h"`

