# 1. 前提条件
- iOS 平台，使用cocoaPods安装
- 最新的TASDK unity plugin
- 已添加Unity Plugin

# 2. 目录结构
成功导入 Unity 插件后，检查 `Assets` 目录项下是否存在 `SDKPackage-TASDK` 和`ExternalDependencyManager`。
# 3.导出xcode工程
unityPackage中包含EDM4U插件及对应的cocoaPods依赖文件 **TASDKDependencies.xml**,导出xcode工程后插件将自动下载sdk依赖</br>
安装完成之后，应使用`.xcworkspace`打开项目，而不是`.xcodeproj`

