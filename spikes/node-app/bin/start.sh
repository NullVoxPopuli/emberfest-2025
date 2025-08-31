#!/usr/bin/env bash

IMPORT_MAP_PATH=./node-loader-importmap.json \
  node \
    --no-warnings=ExperimentalWarning \
    --experimental-loader ./bin/babel-loader.js \
    --experimental-loader @node-loader/import-maps \
    ./src/app.gts
