module.exports = function (eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");

  // Configure Liquid template engine
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strictFilters: true,
    root: ["src/_includes"]
  });

  // Handle all static file extensions
  eleventyConfig.setTemplateFormats([
    "md",
    "css",
    "html",
    "jpg",
    "doc",
    "png",
    "gif",
    "ico",
    "svg",
    "otf",
    "eot",
    "ttf",
    "woff",
    "woff2"
  ]);

  // Configure directory structure
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes"
    }
  };
};