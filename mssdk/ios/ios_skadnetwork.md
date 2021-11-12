# 介绍

SKAdNetwork 是 Apple 开发的以隐私为中心的归因机制，让广告平台在不获取 IDFA 的前提下追踪用户的点击和安装行为，衡量广告的转化成效。开发者需要将每个广告平台的 SKAdNetworkIdentifier 配置在游戏的 `Info.plist` 文件中。本工具支持平台众多，添加快捷方便，能够获取各平台最新的 SKAdNetworkIdentifier，去重后写入项目的 `Info.plist` 中。
<br><br/>
# 下载
[SKAdNetwork ID 自动工具](https://github.com/guojunliu/homebrew-stskadnetwork "stskadnetwork")
<br><br/>
# 安装
需要提前安装Homebrew，然后在终端中运行以下代码

```
brew install guojunliu/stskadnetwork/stskadnetwork
```

# 使用

```
usage: stskadnetwork [-p] [-x <path>] [-t <path>]

    -p, --plist                      将SKAdNetworkId导出到当前路径下的Info.plist

    -x, --xml                        将SKAdNetworkId以XML格式导出到当前路径
    -t, --txt                        将SKAdNetworkId以TXT格式导出到当前路径
```
两种用法，建议使用第一种

**用法一**：直接写入项目Info.plist
cd到项目`Info.plist`同级目录

- `stskadnetwork -p`

**用法二**：导出去重合并之后的SKAdNetworkIdentifier
YourPath为文件导出的目的目录
- `stskadnetwork -x YourPath`
- `stskadnetwork -t YourPath`
<br>

# 支持
当前支持的广告平台：

| 广告平台 | iOS 14 兼容版本 | 参考文档 |
| ------------ | ------------ | ------------ |
| Facebook | 6.2.1 + | https://developers.facebook.com/docs/audience-network/guides/SKAdNetwork |
|Admob | 7.64.0 + | https://developers.google.com/admob/ios/ios14 |
| Unity Ads | 3.5.1 + | https://unityads.unity3d.com/help/ios/skadnetwork-ids |
| Vungle | 6.9.1 + | https://support.vungle.com/hc/en-us/articles/360002925791-Integrate-Vungle-SDK-for-iOS#step-1-add-the-vungle-framework-to-your-xcode-project-0-4 |
| IronSource | 7.1.0 + | https://developers.ironsrc.com/ironsource-mobile/ios/ios-14-network-support/ |
| Applovin | 6.15.1 + | https://dash.applovin.com/documentation/mediation/ios/getting-started/skadnetwork-info |
| Chartboost | 8.3.1 + | https://answers.chartboost.com/en-us/child_article/ios-14 |
| Adcolony | 4.4.0 + | https://support.adcolony.com/helpdesk/network-ids-for-skadnetwork-ios-only/ |
| InMobi | 9.1.0 + | https://support.inmobi.com/monetize/ios-guidelines/preparing-for-ios-14 |
| Pangle | 3.4.1.1 + | https://www.pangle.cn/union/media/union/download/detail?id=23&docId=5f4f56cda7af9a000e5f4e24&osType=ios |
| MoPub | 5.16.0 + | https://developers.mopub.com/publishers/ios/integrate/#step-4-optionally-configure-tracking-permission-alert-using-att-framework-for-ios-14 |
| Mintegral | 6.6.0 + | https://dev.mintegral.com/doc/index.html?file=sdk-m_sdk-ios&lang=cn |


