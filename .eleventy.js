module.exports = function (eleventyConfig) {
    // eleventyConfig.addPassthroughCopy("./assets/css/");
    // eleventyConfig.addWatchTarget("./assets/css/");

    return {
      dir: {
        // default: [site root]
        input: "src",
        // default: _site
        output: "_site",
      },
    };
};