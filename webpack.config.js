const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // ... other webpack configuration
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // Generate a static HTML report
      reportFilename: 'report.html', // Optional: Customize report filename
      openAnalyzer: false, // Optional: Prevent automatic opening in browser
    })
  ]
};