
# 1. 概述
引入 JS 脚本完成后，可在需统计事件的位置调用我们的统计方法。如：用户登录、内购、订阅、通关等事件。

我们目前支持 4 种类型的事件统计，分别为：无参数事件、单参数事件、多参数事件、计数事件。

<br></br>

# 2. 无参数事件
用于记录事件，但事件中无额外信息，如：应用打开等。

```javascript
JSTASDK.send(String key)
```
</br>

参数说明

|参数名  |说明  |
|:----  |-----  |
|key  |自定义统计事件名称，字符长度限制在128以内  |
</br>

调用示例

```javascript
JSTASDK.send('app_open');
```


<br></br>

# 3. 单参数事件
用于记录事件，但事件中的参数为简单参数，如整型、字符串等。常用场景包括：过关、进入界面、订阅消息等。

```javascript
JSTASDK.send(String key, Mixed value)
```
</br>

参数说明

|参数名  |说明  |
|:----  |-----  |
|key  |自定义统计事件名称，字符长度限制在128以内  |
|value  |整型、字符串 ，字符长度限制在128以内  |
</br>

调用示例

```javascript
// 过关
JSTASDK.send('level', 1);

// 进入界面
JSTASDK.send('activity', 'main');
```


<br></br>

# 4. 多参数事件
用于记录事件，但事件中的参数为复杂参数，如对象。常用场景包括：添加好友、道具交易等。

```javascript
JSTASDK.send(String key, Object value)
```
> `object value` 中的 `value` 必须是 key-value 形式的 JS 对象。

</br>

参数说明

|参数名  |说明  |
|:----  |-----  |
|key  |自定义统计事件名称，字符长度限制在128以内  |
|value  |自定义 key-value 键值对  |
</br>

调用示例

```javascript
// 添加好友
JSTASDK.send('add-friend', { playerId: 'AAA', name: 'BBB' });

// 道具交易
JSTASDK.send('exchange-tool', { toolId: 'AAA', playerId: 'AAA', toPlayerId: 'BBB', name: 'BBB' });
```


<br></br>

# 5. 计数事件
用于计数事件，统计事件发生的次数。常用场景包括：闯关次数等。

```javascript
JSTASDK.count(String key)
```

</br>

参数说明

|参数名  |说明  |
|:----  |-----  |
|key  |自定义统计事件名称，字符长度限制在128以内  |
</br>

调用示例

```javascript
JSTASDK.count('game-enter')
```




