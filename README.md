# Lib

部署方式：

```
yarn deploy
```

## 版本差異

來自 branch

## CLI

同步 types

```bash
npx nextgen-front-lib sync-request-types [output dir]
```

## migration v2 to v3

有生命週期的 Hooks: 用 `use` 開頭，並放在 composables 資料夾
無生命週期的 Hooks: 用 `gen` 開頭，並放在 mixins 資料夾

self.data -> genData
createStateManager -> genStateManager

隔離 store
移除 ig auth
移除 sso
移除 static-route
移除 文字驗證的 comfirm
i18n 的應用模式改變
model list -> utils server-data