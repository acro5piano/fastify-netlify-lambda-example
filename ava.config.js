export default {
  environmentVariables: {
    TS_NODE_COMPILER_OPTIONS: '{"module":"commonjs"}',
  },
  require: ['ts-node/register/transpile-only'],
  files: ['server/**/*.test.ts'],
  extensions: ['ts', 'tsx'],
}
