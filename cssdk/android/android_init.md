
# 1. 前提条件
在您初始化cssdk之前，您必须：
- 按照我们的步骤将cssdk集成到您的项目中

</br>

# 2. 初始化 API

cssdk初始化的主要步骤如下所示：
- 调用初始化方法

## 2.1 初始化时机

- 建议在`Applicatiton`或`主 Activity`的`onCreate()`方法中初始化客服 SDK。

## 2.2 初始化方法
#### 2.2.1 引用 SDK

所有方法均以 **static** 定义在`CServiceSdk`类中，请将`CServiceSdk`引用至 Java 代码中。

```java
import com.css.sdk.cservice.CServiceSdk;
import com.css.sdk.cservice.InitCallback;
```

#### 2.2.2调用初始化方法
```
void initSdk(Context context,String productid,initCallback callback)
```


调用示例：

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    CServiceSdk.initSdk(MainActivity.this,"productid",new InitCallback() {
        @Override
        public void onInitSuccess() {

        }

        @Override
        public void onInitFailed(String errorMsg) {
 
        }
    });
}
```


!> 初始化CSSDK之前，请先初始化AASDK或TASDK

恭喜您，到此已经完成了SDK的初始化操作。


