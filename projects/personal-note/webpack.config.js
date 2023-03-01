const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const shareAll = mf.shareAll;
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['~shared', '~libs']
);

module.exports = {
  output: {
    uniqueName: "personalNote",
    publicPath: "auto",
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: "personalNote",
        filename: "remoteEntry.js",
        exposes: {
            './Module': './projects/personal-note/src/app/personal-note/personal-note.module.ts'
        },        
        
        shared: {
          ...shareAll({
            singleton: true,
            strictVersion: false,
            requiredVersion: 'auto',
            eager: true
          }),
          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin()
  ],
};
