---
# 1. 前提条件
- Android 平台
- 最新的PSSDK unity plugin
- 已添加Unity Plugin

# 2. 目录结构
成功导入 Unity 插件后，检查 `Assets` 目录项下是否存在 `SDKPackage-PSSDK` 。

---

# 3.工程配置
## 3.1 混淆配置

&ensp;&ensp;&ensp;如项目开启混淆功能，请将 `proguard-project.txt` 文件的内容追加到当前项目使用的混淆配置文件中，避免程序出现崩溃异常（因混淆导致包名引用错误）。
 ## 3.2 下载依赖文件
 右键Assets目录，选择External Dependency Manager - Android Resolver - Force Resolve, 下载依赖的jar包

# 4. Demo
&ensp;&ensp;&ensp;有关PSSDK 的接入及使用，可查看 [Demo工程](https://github.com/Avid-ly/Unity-PSSDK_AndroidDemo)。

恭喜您，到此已经完成了所有的项目设置，接下来您可以下一个步骤，[请求授权](/pssdk/unity/unity_request.md)了
