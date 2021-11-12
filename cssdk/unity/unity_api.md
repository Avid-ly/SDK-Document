# 初始化CSSDK

方法如下

```
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

# 展示客服页面

方法如下

```
/*
* 展示客服页面
*/
public static void show ()
```
示例

```
CSSDKApi.show();
```

# 查询是否有新消息

方法如下

```
/*
* 查询是否有新消息
* @param callBack	回调 true表示存在，false表示不存在或者存在问题，msg中存在详细信息
*/
public static void haveNewMessage (Action &lt;bool,msg> callBack)
```
示例

```
public void onHaveNewMessageClick() {
	CSSDKApi.haveNewMessage(new System.Action &lt;bool,string>(onHaveNewMessageCallback));

	showLogMsg("onHaveNewMessageClick press  ");
    }

private void onHaveNewMessageCallback(bool result,string msg) {
	showLogMsg("onHaveNewMessageCallback  "+"result: "+result+" msg : "+msg);
}
```

# 追加透传参数（如有需要可以使用）

方法如下

```
/*
* 追加透传参数（如有需要可以使用）
* paramJson		需要额外上传的数据
*/
public static void addExtraParam (Dictionary<string, string> dic)
```
示例

```
 Dictionary<string, string> dic = new Dictionary<string, string>();
 dic.Add("hotfixversion", "1.0.0.21");
 CSSDKApi.addExtraParam(dic);
```

# 获取SDK版本号

###仅适用于ios

方法如下

```
/*
* 获取SDK版本号
* return	SDK版本号
*/
public static string getVersion ()
```
示例

```
string sdkVersion = CSSDKApi.getVersion();
```
