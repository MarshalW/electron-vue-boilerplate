# electron vue boilerplate

electron vue 样板项目。

主要特点：

- 使用最新的 electron-forge 版本（目前还是 beta 版本）
- 集成 vue 主要库（包括 vuex 和 vue-router）
- 加载本地库，比如 sqlite3
- 使用`plugin-webpack`，实现 HMR
- 目前只支持 macOS（未在其他环境下使用）

## 如何使用

下载项目：

```
git clone https://github.com/MarshalW/electron-vue-boilerplate.git your-project-name
```

修改项目名称/目录名称。

启动开发环境：

```
npm start
```

打包生成 app 目录：

```
npm run package
```

构建可分发包：

```
npm run make
```

## 版本历史
