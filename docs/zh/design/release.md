# 发布

### 环境变量

```typescript
type TARGET_BROWSER = "Chrome" | "Firefox";

type PUBLISH_TO_STORE = boolean;

type DIST_TYPE = "Beta" | "Release" | "All";
```

### PUBLISH_TO_STORE

1. 当 PUBLISH_TO_STORE != "true" 且 TARGET_BROWSER = "Firefox manifest 添加

```json
{
  "applications": {
    "gecko": {
      "id": "web-clipper@web-clipper"
    }
  }
}
```

### DIST_TYPE

1. 当 DIST_TYPE = "Beta" 时，跳过 Release 版本
2. 当 DIST_TYPE = "Release" 时，跳过 Beta 版本
3. 当 DIST_TYPE = "All" 时，全部构建
