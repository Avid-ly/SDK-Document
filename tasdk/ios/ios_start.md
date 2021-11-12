
# 1. 导入 SDK 包

将 `TraceAnalysisSDK.framework` 导入至工程中，并勾选如下配置

![](http://doc.gamehaus.com/uploads/201807/5b3c81f77d038_5b3c81f7.png)

&ensp;

# 2. 添加系统framework
- 在工程中添加以下系统库
- libsqlite3.dylib

   如下图所示:
   
   ![](http://doc.gamehaus.com/uploads/201905/5ceb982ea61e9_5ceb982e.png)

&ensp;

# 3. 工程配置
- 在 `info.plist` 中添加以下节点，以兼容 http 模式：

```xml
 <key>NSAppTransportSecurity </key>
 <dict>
     <key>NSAllowsArbitraryLoads </key>
     <true/>
 </dict>
```

- 在 TARGETS > Build Setting > Linking > Other Linker Flags 中添加 `-ObjC`：

  ![](http://doc.gamehaus.com/uploads/201807/5b3c85c61e5f1_5b3c85c6.png)
  
- 开启 Keychain Sharing（iOS 10 以上需开启）：
  ![](http://doc.gamehaus.com/uploads/201807/5b3c860d2db60_5b3c860d.jpeg)

&ensp;

# 4. 兼容性

|兼容项|兼容说明|
|:----  |-----   |
|语言兼容性 | &bull;&ensp;objective-c 正常使用。<br>&bull;&ensp;swift 需创建桥接。</br>   |
|bitcode 兼容 | 支持 bitcode.  |
|设备兼容性 | &bull;&ensp;模拟器。<br>&bull;&ensp;iphone6 及以上机型。</br>  |
|CPU 兼容性 |  &bull;&ensp;i386<br>&bull;&ensp;armv7</br>&bull;&ensp;x86_64<br>&bull;&ensp;arm64</br>  |
|iOS 版本兼容性 | iOS 10.0 以上  |
