# 最佳实现

```
- (void)best {
    NSString *yourProductId = @"your product id";
    NSString *yourPlayerId = @"your player id";
    [PSSDK requestPrivacyAuthorizationWithProductId:yourProductId playerId:yourPlayerId vc:self orientation:PSOrientationTypeAuto succeed:^(PSPrivacyAuthorizationModel *model) {
        
        // 成功
        
    } error:^(NSError *error) {
        
        // 失败
        
    }];
}
```