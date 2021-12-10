以下是AASDK的API列表，方便您查询和使用

# CServiceSdk

1、SDK初始化方法
```java
void initSdk(Context context,String productid,initCallback callback)
```

|  参数   | 描述  |
|  ----  | ----  |
| context  | 全局上下文 |
| productid | 产品id（由我方提供） |
| callback  | 回调 onInitSuccess()成功 onInitFailed()失败|


</br>

2、展示客服与反馈
```java
void feedback(Context context)
```

|  参数   | 描述  |
|  ----  | ----  |
| context  | 全局上下文 |

</br>

3、检查是否有未读新消息

```java
void setNewReplayCallback(CSSExistNewReplyCallback callback)
```

|  参数   | 描述  |
|  ----  | ----  |
| callback  | 回调</br> hasNewReplySuccess()成功回调信息</br> hasNewReplyFail()失败回调信息|



</br>

4、追加额外透传参数

```java
void addExtraMsg(Map cpinfo)
```

|  参数   | 描述  |
|  ----  | ----  |
| cpinfo  | cpinfo用于传递额外信息，比如热更新时候的版本号(CSSConstant.CSSCONSTANT_HOTFIXVER)，如果不需要可以为空|


