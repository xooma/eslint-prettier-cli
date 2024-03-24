import {join} from "path";

export default {
    // eslint-disable-next-line no-undef
    moduleDirectories: ['node_modules', join(__dirname, 'src'), 'shared'],
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: [
        "**/*.spec.ts"
    ]
}