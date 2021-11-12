#### **接口路径**
`http://c-sta.haloapps.com/s2s`
<br></br>

#### **请求方式**
`POST`
<br></br>

#### **请求参数**

| 字段    | 说明         | 类型          | 备注                                                         | 必填 |
| ------- | ------------ | ------------- | ------------------------------------------------------------ | ---- |
| uid     | 用户 ID      | 字符串        | 用户的标识信息（需要客户端调用TASDK获取后传上来）            | 是   |
| pid     | 产品 ID      | 数值          | 产品 ID标识（请联系项目经理）                                | 是   |
| pkg     | 产品包名     | 字符串        | 安卓是包名，IOS是appid                                       | 是   |
| sts     | 客户端时间戳 | 数值（8 bit） | 客户端的事件发生时间                                         | 是   |
| ip      | IP 地址      | 字符串        | 客户端的 IP 信息                                             | 是   |
| version | 产品版本     | 字符串        | 事件发生时的产品版本号                                       | 是   |
| uuid    | 请求 ID      | 字符串        | 请求时生成的唯一随机 ID，用来验证是否重复请求                | 是   |
| ua      | 用户浏览器   | 字符串        | 必须通过[urlencode](https://tools.ietf.org/html/rfc3986#section-2.1)编码，且要求是`UTF-8`字符集 | 是   |
| net     | 网络类型     | 数值          | 0:未知, 1:wifi, 2:2G, 3:3G, 4:4G, 5:5G                       | 是   |

`uid`获取方式
 - 安卓客户端调用 TASDK 接口（初始化完成后）：`ALYAnalysis.getUserId()`
 - IOS 客户端调用 TASDK 接口（初始化完成后）：`NSString *uid = [TraceAnalysis staToken];`
<br></br>

#### **接口请求体**
要求数据格式使用`json`

| 字段    | 说明    | 类型   | 备注                                   | 必填 |
| ------- | ------- | ------ | -------------------------------------- | ---- |
| sta_key | 统计key | 字符串 | 按照打点需求文档来（请联系项目经理要） | 是   |
| sta_val | 键值对  | 字符串 | 按照打点需求文档来（请联系项目经理要） | 否   |
<br></br>

#### **请求案例**

```shell
# --- 0 ---
curl -X POST 'http://c-sta.haloapps.com/s2s?uid=b2813e88aa724fb296b2e8b3b94c193d&pid=600207&pkg=com.newclassic.doublerich&sts=1616198399691&ip=107.242.113.63&version=4008&uuid=963b360da48ca18f334a0db3a8492c04&ua=Mozilla%2F5.0%20(iPhone%3B%20CPU%20iPhone%20OS%2014_4_1%20like%20Mac%20OS%20X)%20AppleWebKit%2F605.1.15%20(KHTML%2C%20like%20Gecko)%20Mobile%2F15E148&net=4' -d '{"sta_key":"T0G", "sta_val":{"A":"19136203010","R":"281","C":"3600000000","S":"955623","L":6241,"E":"MegaWinDialog(Clone)","M":0,"U":780527540,"G":"BrightCherry","O":0}}'

# --- 1 ---
curl -X POST 'http://c-sta.haloapps.com/s2s?uid=b0eaffc9b34744b1805a2405824b72e7&pid=600107&pkg=com.huge.slots.casino.vegas.android.avidly&sts=1616198398907&ip=99.252.124.161&version=4006&uuid=0031312c78b167e05a5c8582b8355c43&ua=Mozilla%2F5.0%20(Linux%3B%20Android%2010%3B%20SM-A715W%20Build%2FQP1A.190711.020%3B%20wv)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Version%2F4.0%20Chrome%2F89.0.4389.90%20Mobile%20Safari%2F537.36&net=1' -d '{"sta_key":"T0G", "sta_val":{"A":"638642014362","C":2625000000,"U":10134867,"E":"common_win","G":10099,"I":"coins","M":1,"O":0}}'

```

