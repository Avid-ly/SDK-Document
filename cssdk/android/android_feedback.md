# 1. 前提条件
在您初始化cssdk之前，您必须：
- 按照我们的步骤将cssdk集成到您的项目中
- 完成sdk初始化

</br>

# 2. 反馈页面 API

## 2.1 调用时机

- 调用该 API 前，需确保**已初始化**“统计 SDK”和“客服 SDK”。

## 2.2 反馈问题 API

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
</br>

# 3. 是否有新消息

## 3.1 调用时机

- 调用该 API 前，需确保**已初始化**“统计 SDK”和“客服 SDK”。

## 3.2 是否有新消息

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
</br>

# 4. 追加其他信息

## 4.1 调用时机

- 调用该 API 前，需确保**已初始化**“统计 SDK”,且在 CSSDK初始化**之前**调用

## 4.2 追加其他信息

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