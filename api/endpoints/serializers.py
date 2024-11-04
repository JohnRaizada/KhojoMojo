from rest_framework.serializers import ModelSerializer
from .models import Artifact


class ArtifactSerializer(ModelSerializer):
    class Meta:
        model = Artifact
        fields = "__all__"
        extra_kwargs = {
            "created_at": {"read_only": True},
        }
