#!/bin/bash
kubectl  apply -f ./k8s/
echo "The build number is ${TRAVIS_BUILD_NUMBER}"
kubectl set image deployment/backend backend=registry.gitlab.com/bogdanbledea/no-pain-faculty:${TRAVIS_BUILD_NUMBER} --record