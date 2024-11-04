from rest_framework.viewsets import ModelViewSet
from .models import Artifact
from .serializers import ArtifactSerializer
from boto3 import client
from rest_framework.response import Response
from rest_framework import status
from rest_framework.response import Response
from django.utils.timezone import now


class ArtifactViewSet(ModelViewSet):
    queryset = Artifact.objects.all()
    serializer_class = ArtifactSerializer
    filterset_fields = "__all__"

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        response = client("s3").generate_presigned_post(
            "khojomojo", f"artifacts/{now()}", ExpiresIn=3600
        )
        data = serializer.data.copy()
        data["upload"] = response
        return Response(data, status=status.HTTP_201_CREATED, headers=headers)
