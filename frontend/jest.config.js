module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',  
    },
    moduleNameMapper: {
      "^store/(.*)$": "<rootDir>/src/store/$1", 
      "^components/(.*)$": "<rootDir>/src/components/$1", 
      "\\.(css|less|scss)$": "identity-obj-proxy", 
      "\\.(jpg|jpeg|png|gif|svg)$": "jest-transform-stub"
    },
    moduleDirectories: ["node_modules", "src"], 
    testEnvironment: 'jsdom', 
    setupFiles: ['<rootDir>/jest.setup.js'], 
    testPathIgnorePatterns: ['/node_modules/', 'frontend/src/__tests__/preProcessFunctions.js']
};