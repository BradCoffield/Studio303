module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("images");
    // eleventyConfig.setUseGitIgnore(false);
    // eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.setTemplateFormats([
      "md",
      "css",
      "html",
      "jpg",
      "doc",
      "png",
      "gif",
      "ico",
      "js"
    ]);
  
    return {
      dir: {
        input: "./src", 
        output: "_site",
      },
      passthroughFileCopy: true,
    };
  };
  