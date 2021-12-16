
# 1. Facebook 支付上报

```javascript
JSTASDK.pay(String playerId, 'fb_instant', Object paymentInfo)
```
</br>

参数说明

|参数名  |是否必须  |类型  |说明  |
|:----  |-----  |-----  |-----  |
|playerId  |是  |字符串  |游戏用户 ID  |
|paymentInfo  |是  |JS 对象  |支付信息，用于校验支付信息的真伪  |
|paymentInfo.payment_id  |有  |字符串  |支付的订单 id  |
|paymentInfo.goodsid  |是  |字符串  |支付的商品 id  |
|paymentInfo.isTest  |是  |整型  |是否是测试订单</br>1 表示测试订单</br>0 表示正常订单  |
|paymentInfo.productVersion  |有  |字符串  |产品版本  |
|paymentInfo.requestId  |是  |字符串  |开发者服务器生成的编号，与订单相关联  |
|paymentInfo.fbAccountId  |是  |字符串  |账户id  |
|paymentInfo.fbAccountName  |是  |字符串  |账户名称  |
|paymentInfo.signedRequest  |是  |字符串  |已编码的订单请求信息  |
</br>

调用示例

```javascript
JSTASDK.pay('12724087', 'fb_instant', {
        'payment_id': 1549639735166612,
        'goodsid': 821650043,
        'isTest':0,
        'productVersion':'',
        'requestId':'',
        'fbAccountId':'',
        'fbAccountName':'',
        'signedRequest':'',
    });
```


<br></br>

# 2. Facebook 支付上报（附加额外参数）

```javascript
JSTASDK.pay(String playerId, 'fb_instant', Object paymentInfo, Object extra)
```
</br>

参数说明

|参数名  |是否必须  |类型  |说明  |
|:----  |-----  |-----  |-----  |
|playerId  |是  |字符串  |游戏用户 ID  |
|paymentInfo  |是  |JS 对象  |支付信息，用于校验支付信息的真伪  |
|paymentInfo.payment_id  |有  |字符串  |支付的订单 id  |
|paymentInfo.goodsid  |是  |字符串  |支付的商品 id  |
|paymentInfo.isTest  |是  |整型  |是否是测试订单</br>1 表示测试订单</br>0 表示正常订单  |
|paymentInfo.productVersion  |有  |字符串  |产品版本  |
|paymentInfo.requestId  |是  |字符串  |开发者服务器生成的编号，与订单相关联  |
|paymentInfo.fbAccountId  |是  |字符串  |账户id  |
|paymentInfo.fbAccountName  |是  |字符串  |账户名称  |
|paymentInfo.signedRequest  |是  |字符串  |已编码的订单请求信息  |
|extra  |是  |----  |额外信息，可自行设置  |
</br>

调用示例

```javascript
JSTASDK.pay('12724087', 'fb_instant', {
        'payment_id': 1549639735166612,
        'goodsid': 821650043,
        'isTest':0,
        'productVersion':'',
        'requestId':'',
        'fbAccountId':'',
        'fbAccountName':'',
        'signedRequest':'',
    }, {
        'test':''
    });
```


<br></br>

# 3. Facebook 支付上报（附加游戏服务器）

```javascript
JSTASDK.logPaymentWithServer(String playerId, String playerServer, 'fb_instant', Object paymentInfo)
```
</br>

参数说明

|参数名  |是否必须  |类型  |说明  |
|:----  |-----  |-----  |-----  |
|playerId  |是  |字符串  |游戏用户 ID  |
|playerServer  |是  |字符串  |游戏服务器或者分区标识  |
|paymentInfo  |是  |JS 对象  |支付信息，用于校验支付信息的真伪  |
|paymentInfo.payment_id  |有  |字符串  |支付的订单 id  |
|paymentInfo.goodsid  |是  |字符串  |支付的商品 id  |
|paymentInfo.isTest  |是  |整型  |是否是测试订单</br>1 表示测试订单</br>0 表示正常订单  |
|paymentInfo.productVersion  |有  |字符串  |产品版本  |
|paymentInfo.requestId  |是  |字符串  |开发者服务器生成的编号，与订单相关联  |
|paymentInfo.fbAccountId  |是  |字符串  |账户id  |
|paymentInfo.fbAccountName  |是  |字符串  |账户名称  |
|paymentInfo.signedRequest  |是  |字符串  |已编码的订单请求信息  |
</br>

调用示例

```javascript
JSTASDK.logPaymentWithServer('12724087','12345','fb_instant', {
        'payment_id': 1549639735166612,
        'goodsid': 821650043,
        'isTest':0,
        'productVersion':'',
        'requestId':'',
        'fbAccountId':'',
        'fbAccountName':'',
        'signedRequest':'',
    });
```


<br></br>

# 4. Facebook 支付上报（附加游戏服务器和额外参数）

```javascript
JSTASDK.logReportWithServerAndExtraMap(String playerId, String playerServer, 'fb_instant', Object paymentInfo, Object extra)
```
</br>

参数说明

|参数名  |是否必须  |类型  |说明  |
|:----  |-----  |-----  |-----  |
|playerId  |是  |字符串  |游戏用户 ID  |
|playerServer  |是  |字符串  |游戏服务器或者分区标识  |
|paymentInfo  |是  |JS 对象  |支付信息，用于校验支付信息的真伪  |
|paymentInfo.payment_id  |有  |字符串  |支付的订单 id  |
|paymentInfo.goodsid  |是  |字符串  |支付的商品 id  |
|paymentInfo.isTest  |是  |整型  |是否是测试订单</br>1 表示测试订单</br>0 表示正常订单  |
|paymentInfo.productVersion  |有  |字符串  |产品版本  |
|paymentInfo.requestId  |是  |字符串  |开发者服务器生成的编号，与订单相关联  |
|paymentInfo.fbAccountId  |是  |字符串  |账户id  |
|paymentInfo.fbAccountName  |是  |字符串  |账户名称  |
|paymentInfo.signedRequest  |是  |字符串  |已编码的订单请求信息  |
|extra  |是  |----  |额外信息，可自行设置  |
</br>

调用示例

```javascript
JSTASDK.logPaymentWithServer('12724087','12345','fb_instant', {
        'payment_id': 1549639735166612,
        'goodsid': 821650043,
        'isTest':0,
        'productVersion':'',
        'requestId':'',
        'fbAccountId':'',
        'fbAccountName':'',
        'signedRequest':'',
    }, {
        'test':''
    });
```


<br></br>