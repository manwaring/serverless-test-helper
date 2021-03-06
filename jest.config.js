module.exports = {
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/mock-signature/**",
    "!**/*.test.ts",
    "!**/*index.*ts",
    "!**/*mock-data/**",
  ],
  testMatch: ["**/src/**/*.test.ts", "!**/examples/**/*"],
};
