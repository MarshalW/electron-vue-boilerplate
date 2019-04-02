const copyNodeModules = require("copy-node-modules");
const srcDir = "./";
const dstDir =
  "./out/electron-vue-boilerplate-darwin-x64/electron-vue-boilerplate.app/Contents/Resources/app";
//TODO 自动化

module.exports = {
  hooks: {
    postPackage: async () => {
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
