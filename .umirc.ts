export default {
  npmClient: 'yarn',
  // vite:{}
  extraBabelIncludes:['demoModule'],
  cssLoaderModules:{
    auto:true,
  },
  // chainWebpack(memo, { env, webpack }) {
    // 设置 alias
      // memo.module
      // .rule('css')
      // .oneOf('normal')
      // .use('less')
      //   .loader('less-loader')
      //   .end()
      // .end()
      // .oneOf('normal1')
      // .use('cssloader')
      //   .loader('css-loader')
      //   .options({
      //     rules: {
      //       auto: true
      //     }
      //   })
      //   .end()

    // console.log(memo.toString(),'config.toString();')
  // },
};
