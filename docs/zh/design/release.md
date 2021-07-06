# 发布

## 环境变量

### 类型

```typescript
type TTargetBrowser = "Chrome" | "Firefox";
```

### Release Script 环境变量

```typescript
type TDistType = "Beta" | "Release";

interface IReleaseProcessEnv {
  TARGET_BROWSER?: TTargetBrowser;
  PUBLISH_TO_STORE?: "true";
  DIST_TYPE?: TDistType;
}
```

### Webpack 环境变量

```typescript
interface IWebpackProcessEnv {
  TARGET_BROWSER: TTargetBrowser;
  PUBLISH_TO_STORE?: "true";
  NODE_ENV: "development" | "production";
}
```

### 变量含义

#### PUBLISH_TO_STORE

1. 当 PUBLISH_TO_STORE != "true" 且 TARGET_BROWSER = "Firefox" 时 manifest 添加

```json
{
  "applications": {
    "gecko": {
      "id": "web-clipper@web-clipper"
    }
  }
}
```

#### DIST_TYPE

1. 当 DIST_TYPE = "Beta" 时，如果版本号**不是** pre-release, 直接构建失败。
2. 当 DIST_TYPE = "Release" 时，如果版本号**是** pre-release, 直接构建失败。
3. 当 DIST_TYPE = "All" 时，没有任何校验。
