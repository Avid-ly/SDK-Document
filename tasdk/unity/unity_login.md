由于登录环节在游戏或应用中至关重要，因此我们单独提供了登录事件方法，以便快速统计登录事件。

如游戏中包含 Facebook 等登录功能，需将登录结果同步至统计服务器以便分析用户数据。请使用以下 API 完成相应登录上报。

<br>

名词解释
------------

- 有关 playerid 定义

<br>

> - 如游戏中同时包含帐号 ID 和角色 ID，则 playerId 参数取“帐号 ID”值。</br>
> - 如游戏中只包含角色 ID（或游戏 ID），则 playerId 参数取“角色 ID（或游戏 ID）”值。<br>
> - 如包含 AASDK，则 playerId 参数不能取 ggid（原则上 playerid 只能取游戏中标识玩家的 ID 值）。</br>

<br>

登录方式
------------

- 使用AASDK进行登录   [AASDK接入文档参考](/aasdk/)
- 未使用AASDK进行登录

如果使用AASDK进行登录，请参考[使用AASDK登录上报](/tasdk/unity/unity_login2.md)文档

如果未使用AASDK进行登录，请参考[未使用AASDK登录上报](/tasdk/unity/unity_login1.md)文档


