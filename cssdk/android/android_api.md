# 1. 引用 SDK

所有方法均以 **static** 定义在`CServiceSdk`类中，请将`CServiceSdk`引用至 Java 代码中。


![引用](http://doc.gamehaus.com/uploads/202001/5e0dc36a4483a_5e0dc36a.png "引用")
</br>
&ensp;
# <span id="jump2">2. 初始化 API</span>
## 2.1 初始化时机
建议在`Applicatiton`或`主 Activity`的`onCreate()`方法中初始化客服 SDK。

## 2.2 初始化方法

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

# 3. 反馈页面 API

## 3.1 调用时机

调用该 API 前，需确保**已初始化**“统计 SDK”和“客服 SDK”。

## 3.2 反馈问题 API

`
void feedback(Context context)
`
</br>

调用示例：

```java
public void feedback(View view) {
    CServiceSdk.feedback(MainActivity.this);
}
```

# 4. 是否有新消息

## 4.1 调用时机

调用该 API 前，需确保**已初始化**“统计 SDK”和“客服 SDK”。

## 4.2 是否有新消息

`
void setNewReplayCallback(CSSExistNewReplyCallback callback)
`
</br>

调用示例：
```java
CServiceSdk.setNewReplayCallback(new CSSExistNewReplyCallback() {
    @Override
    public void hasNewReplySuccess(boolean msg) {
        Log.i(TAG, "hasNewReplySuccess: "+msg);
    }

    @Override
    public void hasNewReplyFail(String error) {
        Log.i(TAG, "hasNewReplySuccess: "+error);
    }
});
```
# 5. 追加其他信息

## 5.1 调用时机

调用该 API 前，需确保**已初始化**“统计 SDK”,且在 CSSDK初始化之前调用

## 5.2 追加其他信息

```
void addExtraMsg(Map cpinfo)
```

> cpinfo用于传递额外信息，比如热更新时候的版本号(CSSConstant.CSSCONSTANT_HOTFIXVER)，如果不需要可以为空

调用示例：

```java
Map<String,String> cpInfo=new LinkedHashMap<>();
cpInfo.put(CSSConstant.CSSCONSTANT_HOTFIXVER,"1.0.021");
CServiceSdk.addExtraMsg(cpInfo);
```