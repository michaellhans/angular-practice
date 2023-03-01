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
    uniqueName: "shell",
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
        // For hosts (please adjust)
        remotes: {
          "companyProfile": "companyProfile@http://localhost:4201/remoteEntry.js",
          "employmentDetail": "employmentProfile@http://localhost:4202/remoteEntry.js",
          "personalDetail": "personalDetail@http://localhost:4203/remoteEntry.js",
          "personalNote": "personalNote@http://localhost:4204/remoteEntry.js"
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
