
# 1 前提条件

- 确保您安装了Android Studio 3.2 或更高版本
- 确保您使用真实的Android设备，而不是模拟器进行开发和测试
- 确保您能访问诸如Facebook，Google等网址


# 2 SDK初始化
>请在主Activity中尽早初始化广告SDK。

```java
 MsSDK.init(Activity context,MsSdkInitializationListener Listener);
```
使用实例
```java
MsSDK.init(this, new MsSdkInitializationListener() {
    @Override
    public void onInitializationFinished() {
        Log.i(TAG, "onInitializationFinished: ");
        }
    }
});
```

# 3 开启 debug
>为方便您的接入调试，您可以在开发期间通过以下方法开启调试log，并且需要在正式发布时将其关闭
```java
MsSDK.setDebuggable(boolean isOpen);
```
# 4 注册生命周期回调
>为了正常加载和展示广告，请在游戏的主activity中注册相应回调。
```java
public  class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        MsSDK.onCreate(this);
    }

    @Override
    protected void onStart() {
        super.onStart();
        MsSDK.onStart(this);

    }

    @Override
    protected void onStop() {
        super.onStop();
        MsSDK.onStop(this);

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        MsSDK.onDestroy(this);
    }

    @Override
    protected void onPause() {
        super.onPause();
        MsSDK.onPause(this);
    }

    @Override
    protected void onResume() {
        super.onResume();
        MsSDK.onResume(this);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        MsSDK.onRestart(this);
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        MsSDK.onBackPressed(this);
    }
}
```
