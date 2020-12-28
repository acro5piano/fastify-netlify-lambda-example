#!/bin/sh

yarn nodemon \
    --watch server \
    --ext ts,tsx \
    --exec ts-node -O '{\"module\":\"commonjs\"}' -T -r dotenv/config server/app.ts
