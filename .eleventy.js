module.exports = function (eleventyConfig) {

    // Watch CSS changes
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");

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