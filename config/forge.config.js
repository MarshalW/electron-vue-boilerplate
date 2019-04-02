const copyNodeModules = require("copy-node-modules");
const globby = require("globby");
const srcDir = "./";

module.exports = {
  hooks: {
    postPackage: async () => {
      const paths = await globby(["./out/**/app/package.json"]);
      let dstDir = null;

      // 根据app/package.json定位package的目录
      paths.forEach(name => {
        dstDir = name.substring(0, name.length - "package.json".length);
      });

      await (function() {
        return new Promise((resolve, reject) => {
          copyNodeModules(
            srcDir,
            dstDir,
            { devDependencies: false },
            (err, results) => {
              if (err) {
                reject(err);
              }
              resolve(results);
            }
          );
        });
      })();
    }
  },
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./config/webpack.main.config.js",
        renderer: {
          config: "./config/webpack.renderer.config.js",
          entryPoints: [
            {
              html: "./src/index.html",
              js: "./src/renderer/main.js",
              name: "main_window"
            }
          ]
        }
      }
    ]
  ],
  packagerConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "electron_vue_boilerplate"
      }
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"]
    },
    {
      name: "@electron-forge/maker-deb",
      config: {}
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {}
    }
  ]
};
