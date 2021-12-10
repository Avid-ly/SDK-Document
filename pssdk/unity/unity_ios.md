# 1. 前提条件
- iOS 平台
- 最新的PSSDK unity plugin
- 已添加Unity Plugin

# 2. 目录结构
成功导入 Unity 插件后，检查 `Assets` 目录项下是否存在 `SDKPackage-PSSDK` 和`ExternalDependencyManager`。

# 3.导出xcode工程
unityPackage中包含EDM4U插件及对应的cocoaPods依赖文件 MSSDKDependencies.xml,导出xcode工程后插件将自动下载第三方广告sdk
安装完成之后，应使用`.xcworkspace`打开项目，而不是`.xcodeproj`

恭喜您，到此已经完成了所有的项目设置，接下来您可以下一个步骤，[请求授权](/pssdk/unity/unity_request.md)了
