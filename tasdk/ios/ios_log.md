
# 1. 事件打点
```objective-c
+ (void)logWithKey:(NSString *)key value:(id)value;
```

参数说明

|参数名|说明|
|:----  |-----   |
|key |事件 ID。   |
|value | 可为 nil、NSString 或数组与字典。  |

&ensp;

调用示例：

## 1.1 无参数事件
value 为 nil。
```objective-c
[TraceAnalysis logWithKey:@"your key" value:nil];
```

## 1.2 单参数事件
value 为 NSString。
```objective-c
[TraceAnalysis logWithKey:@"your key" value:@"your str value"]; 
```

## 1.3 多参数事件
value 为 NSDictionary，NSDictionary 的 &lt;key,value> 仅支持 &lt;NSString*, NSString*> 类型。
```objective-c
NSDictionary *dic = [NSDictionary dictionaryWithObjectsAndKeys:
                            @"Tom", @"name",
                            @"Man", @"sex",
                            @"18", @"age",
                            nil];
[TraceAnalysis logWithKey:@"your key" value: dic];
```

## 1.4 value 为 NSArray

value 为 NSArray&lt;NSString>。
```objective-c
  NSArray *arrA = [NSArray arrayWithObjects:@"arrValue1", @"arrValue2",nil];
  [TraceAnalysis logWithKey:@"your key" value: arrA];
```
value 为 NSArray&lt;NSDictionary>
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

# 2. 计数打点
```objective-c
+ (void)countWithKey:(NSString *)key;
```
调用示例：
```objective-c
[TraceAnalysis countWithKey:@"your key"];
```


