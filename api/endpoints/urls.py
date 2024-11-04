from rest_framework.routers import DefaultRouter
from .views import ArtifactViewSet

app_name = "endpoints"

router = DefaultRouter()
router.register("artifacts", ArtifactViewSet, basename="artifact")

urlpatterns = router.urls
