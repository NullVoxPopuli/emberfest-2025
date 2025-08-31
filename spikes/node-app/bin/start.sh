#!/usr/bin/env bash

IMPORT_MAP_PATH=./node-loader-importmap.json \
  node \
    --experimental-loader @node-loader/import-maps \
    --experimental-loader @node-loader/babel \
    ./src/app.gts
