# 1 事件打点介绍

事件打点是一种常用的数据采集方法，方便产品/运营系统性的统计分析复杂的用户数据。

事件打点根据参数的类型可分为以下几种

- 无参数事件打点
- 单参数事件打点
- 多参数事件打点
- 计数事件打点

# 2 前提条件

在您的应用中集成事件打点之前，您必须：

- 按照我们的步骤将TASDK集成到您的项目中。
- 完成项目设置
- 请务必在事件打点之前初始化TASDK

# 3 使用事件打点

在需使用的类中导入头文件

```objective-c
#import  <TraceAnalysisSDK/TraceAnalysis.h>
```

事件打点的方法如下，其中根据value的类型区分为`无参数事件打点`，`单参数事件打点`，`多参数事件打点`


```objective-c
+ (void)logWithKey:(NSString *)key value:(id)value;
```

参数说明

|参数名|说明|
|:----  |-----   |
|key |事件 ID。   |
|value | 可为 nil、NSString 或数组与字典。  |

## 3.1 无参数事件打点

无参数事件打点即打点时不需要上传额外参数，只需要统计事件是否发生。

无参数事件打点的value为nil，示例如下

```objective-c
[TraceAnalysis logWithKey:@"your key" value:nil];
```

## 3.2 单参数事件

单参数事件打点即打点时需要上传简单的字符类型的参数。

单参数事件打点的value 为 NSString，示例如下

```objective-c
[TraceAnalysis logWithKey:@"your key" value:@"your str value"]; 
```

## 3.3 多参数事件

多参数事件打点即打点的同时需要上传比较复杂的相关参数。

多参数打点又分为

- Map类型多参数
- Array类型多参数

### 3.3.1 Map类型多参数

map类型多参数 value 为 NSDictionary，其中NSDictionary 的 <key,value> 仅支持 <NSString*, NSString*> 类型。

示例如下：

```objective-c
NSDictionary *dic = [NSDictionary dictionaryWithObjectsAndKeys:
                            @"Tom", @"name",
                            @"Man", @"sex",
                            @"18", @"age",
                            nil];
[TraceAnalysis logWithKey:@"your key" value: dic];
```

### 3.3.2 Array类型多参数

value 为 NSArray<NSString>。
示例如下：

```objective-c
  NSArray *arrA = [NSArray arrayWithObjects:@"arrValue1", @"arrValue2",nil];
  [TraceAnalysis logWithKey:@"your key" value: arrA];
```

value 为 NSArray&lt;NSDictionary>
示例如下：

```objective-c
  NSDictionary *dic1 = [NSDictionary dictionaryWithObjectsAndKeys:
                            @"Tom", @"name",
                            @"Man", @"sex",
                            @"18", @"age",
                            nil];
  NSDictionary *dic2 = [NSDictionary dictionaryWithObjectsAndKeys:
                            @"Emily", @"name",
                            @"Woman", @"sex",
                            @"20", @"age",
                            nil];
  NSArray *arrB = [NSArray arrayWithObjects:dic1, dic2, nil];
  [TraceAnalysis logWithKey:@"your key" value:arrB];
```

## 3.4 计数事件打点

计数事件打点即打点时只关心事件发生的次数与频次，不需要上传额外参数。

其方法如下：

```objective-c
+ (void)countWithKey:(NSString *)key;
```

调用示例如下：

```objective-c
[TraceAnalysis countWithKey:@"your key"];
```

到此，您已经完成了事件打点的集成。

接下来，您可以根据自己的需求，选取对应的功能并集成到项目里：

- [登录上报（未使用AASDK）](/tasdk/ios/ios_login1.md)
- [登录上报（使用AASDK）](/tasdk/ios/ios_login2.md)
- [支付上报](/tasdk/ios/ios_iap.md)
- [在线用户时长上报](/tasdk/ios/ios_duration_report.md)
- [用户标签](/tasdk/ios/ios_tag.md)