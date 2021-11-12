
Facebook使用设备的本地主机（127.0.0.1）缓存广告媒体文件。由于Android 9默认情况下会阻止明文流量，因此您必须在应用的清单中添加以下XML配置，以允许列出使用http的请求。

请按照如下流程引入安全配置文件

Step1:

在项目的res文件夹中新增文件夹，命名为  `network_security.xml` ，其中内容如下

```
<domain-config cleartextTrafficPermitted="true">
	<domain includeSubdomains="true">127.0.0.1</domain>
</domain-config>        
```
 
Step2:

在项目的manifest.xml中对其进行引用

```
<application android:networkSecurityConfig="@xml/network_security">
```

具体使用可以参考[Demo](https://github.com/Avid-ly/Avidly-Android-MSSDK-AndroidStudio/blob/master/app/src/main/AndroidManifest.xml "Demo")

详细信息您也可以通过阅读[Facebook官方文档](https://developers.facebook.com/docs/audience-network/android-network-security-config "Facebook官方文档")进行了解
