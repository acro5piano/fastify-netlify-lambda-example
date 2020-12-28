# fastify-netlify-lambda-example

Show the following serverless stuck:

**Infrastructure**

- Netlify
- Netlify Lambda

**Server**

- Fastify
  - aws-lambda-fastify
  - mercurius (formally fastify-gql)

**Frontend**

- React
- URQL
- TypeScript

# Getting Started

```sh
yarn install
yarn start
```

# Test

We use `ava` to run serverside tests.

```sh
yarn tsc
yarn lint
yarn ava --serial
```
