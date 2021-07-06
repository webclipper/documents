# 远程配置

## 背景

希望 Web Clipper 在启动的时候，能够获取到最新的版本号，方便提示用户升级到最新版本。更新日志、隐私协议改动以后，旧版本的 Web Clipper 也能获取到新的地址。

### 配置的优先级

1. 开发时需要覆盖的配置
2. 调用接口获取的配置
3. 上一次接口获取的离线缓存
4. 源码里自带的配置

## 更新日志

### 1.30.0 版本之后

```typescript
interface WebClipperRemoteConfig {
  resource: {
    host: string;
    privacy: string;
    changelog: string;
  };
  yuque_oauth: {
    clientId: string;
    callback: string;
    scope: string;
  };
  onenote_oauth: {
    clientId: string;
    callback: string;
  };
  google_oauth: {
    clientId: string;
    callback: string;
  };
  github_oauth: {
    clientId: string;
    callback: string;
  };
}
```
