#!/bin/bash

echo "I will fake the deployment for now"
# echo "$KUBERNETES_CLUSTER_CERTIFICATE" | base64 --decode > cert.crt
# /usr/local/bin/kubectl \
#   --kubeconfig=/dev/null \
#   --server=$KUBERNETES_SERVER \
#   --certificate-authority=cert.crt \
#   --token=$KUBERNETES_TOKEN \
#   apply -f ./k8s/
# echo "The build number is ${TRAVIS_BUILD_NUMBER}"
# /usr/local/bin/kubectl \
#   --kubeconfig=/dev/null \
#   --server=$KUBERNETES_SERVER \
#   --certificate-authority=cert.crt \
#   --token=$KUBERNETES_TOKEN \
#   set image deployment/backend backend=registry.gitlab.com/bogdanbledea/no-pain-faculty:${TRAVIS_BUILD_NUMBER} --record