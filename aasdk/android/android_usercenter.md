# 1 前提条件
在您使用用户中心之前，您必须：

- 按照我们的步骤将 AASDK 集成到您的项目中。
- 按照我们的步骤将集成库和支持库集成到您的项目中。
- 完成SDK初始化
- 完成登录操作

&ensp;


# 2. 用户中心

用户中心主要有以下几个功能

- 展示用户的个人信息
- 切换账号
- 绑定其他第三方账号
- 联系我们
- 常见的FAQ


## 2.1 展示用户中心页面

```java
    public static void showUserManagerUI(Context context);
```

示例：

```java
    AASdk.showUserManagerUI(MainActivity.this);
```
&ensp;

恭喜您，到此已经完成了AASDK的所有操作。
