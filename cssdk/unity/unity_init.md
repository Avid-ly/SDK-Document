# 1 前提条件

在您初始化CSSDK之前，您必须：

- 按照我们的步骤将 CSSDK 集成到您的项目中。
- 完成项目设置


# 2.初始化CSSDK

方法如下

```
using CSSDK;
/*
* 初始化
* @param productId	产品id
*/
public static void init (string productId) 
```
示例

```
CSSDKApi.init("productid");
```
!> 初始化CSSDK之前，请先初始化AASDK或TASDK

恭喜您，到此已经完成了SDK的初始化操作。
