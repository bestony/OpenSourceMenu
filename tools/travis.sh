#!/bin/bash
set -ev

cd .. # enter project directory
npm run data:build
npm run data:lint
