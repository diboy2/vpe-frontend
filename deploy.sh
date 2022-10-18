#!/bin/bash
set -e


IMAGE_TAG=`git rev-parse HEAD`
REPO_NAME="vpe-frontend"
GCP_PROJECT_NAME="virtual-physical-examination"

docker build . -t $REPO_NAME:$IMAGE_TAG

docker tag $REPO_NAME gcr.io/$GCP_PROJECT_NAME/$REPO_NAME:$IMAGE_TAG
docker push gcr.io/$GCP_PROJECT_NAME/$REPO_NAME:$IMAGE_TAG

gcloud beta run deploy $REPO_NAME --image gcr.io/$GCP_PROJECT_NAME/$REPO_NAME:$IMAGE_TAG \
  --project $GCP_PROJECT_NAME \
  --platform managed \
  --region us-east1 \
  --allow-unauthenticated