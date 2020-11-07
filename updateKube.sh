#!/bin/sh
sed -i "s/VERSION/${TRAVIS_BUILD_NUMBER}/g" k8s/deployment.yaml
cat k8s/deployment.yaml