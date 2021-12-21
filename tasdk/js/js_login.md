# 1. 概述
由于登录环节在游戏中至关重要，因此我们单独提供了登录事件方法，以便快速统计登录事件。

<br></br>

# 2. 游客登录上报
如果您使用了游客登录，可以使用如下方法进行登录上报。

```javascript
JSTASDK.login(String platformFlag, String playerId);
```
</br>

参数说明

|参数名  |说明  |
|:----  |-----  |
|platformFlag  |登录方式，游客登录请传入`guest`  |
|playerId |游戏用户 ID  |
</br>

调用示例

```javascript
JSTASDK.login('guest', '11111');
```


<br></br>

# 3. Facebook 登录上报
如果您使用了 Facebook 登录，可以使用如下方法进行登录上报。

```javascript
JSTASDK.login('facebook', String playerId, String platformUserToken);
```
</br>

参数说明

|参数名  |是否必须|说明  |
|:----  |:---- |-----  |
|platformFlag  |是|登录方式，Facebook 登录请传入`facebook`  |
|playerId  |是|游戏用户 ID  |
|platformUserToken  |是|游戏用户登陆Facebook账号后，`facebook返回的授权accessToken` <a href="https://developers.facebook.com/docs/facebook-login/web" target="_blank">官方文档链接</a> |
</br>

调用示例

```javascript
JSTASDK.login('facebook', 'yourplayerId', 'yourplatformUserToken');
```


<br></br>

# 4. 通用登录上报
如果您使用了除 guest 和 Facebook 以外的登录方式，我们还为您提供了通用登录上报的方法。

```javascript
JSTASDK.login(String platformFlag, String playerId, String platformUserToken);
```
</br>

参数说明

|参数名  |是否必须  |类型  |说明  |
|:----  |-----  |-----  |-----  |
|platformFlag  |是  |字符串  |登录方式</br> &bull;&ensp;<b>facebook</b>： 通过 Facebook 登录<br>&bull;&ensp;<b>guest</b>： 游客登录</br><font color="red"> 如使用其他登录方式，请事先与我们沟通参数内容与编码规则，以免上报服务器时解析失败</font>|
|playerId  |是  |字符串  |游戏用户 ID  |
|platformUserToken  |是  |字符串  |登录方式对应的校验凭证</br><font color="red">使用 Facebook 登录时此参数不可为空，其他登录方式请事先与我们沟通确认  |
</br>

调用示例

```javascript
JSTASDK.login('xxx', 'yourplayerId', 'yourplatformUserToken');
```


<br></br>





