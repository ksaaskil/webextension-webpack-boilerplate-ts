module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFiles: ["jest-webextension-mock"],
  setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  reporters: ["default", "jest-junit"],
};
