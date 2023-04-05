const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const Dotenv = require('dotenv-webpack');

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
    new Dotenv({
      path: ".env"
    }),
    new ModuleFederationPlugin({
        // For hosts (please adjust)
        remotes: {
          "companyProfile": "companyProfile@" + process.env.COMPANY_PROFILE,
          "employmentDetail": "employmentProfile@" + process.env.EMPLOYMENT_DETAIL,
          "personalDetail": "personalDetail@" + process.env.PERSONAL_DETAIL,
          "personalNote": "personalNote@" + process.env.PERSONAL_NOTE
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
