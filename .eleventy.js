// Date formatting library
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

    // Watch CSS changes
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/css");

    // Open on Chrome upon starting && SCSS for BrowserSync
    eleventyConfig.setBrowserSyncConfig({
        open: true,
      });

    // Date formatting
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    // Add admin panel to static site
    eleventyConfig.addPassthroughCopy("./src/admin");

    // Random fact
    eleventyConfig.addFilter("randomItem", (arr) => {
        arr.sort(() => {
            return 0.5 - Math.random();
        });
        return arr.slice(0, 1);
    });

    // Input and Output files
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};