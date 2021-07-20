#!/bin/sh

rm -rf ./dist
cp -r lib dist/
cp package.json dist/
# We put in the README so that consumers can view it in the NPM UI
cp README.md dist/