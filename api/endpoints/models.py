from django.db import models


# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    def __repr__(self):
        return f"User(name={self.name}, email={self.email})"


class Artifact(models.Model):
    name = models.CharField(max_length=255, unique=True)
    image = models.URLField(max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='artifacts')

    def __str__(self):
        return self.name

    def __repr__(self):
        return f"Artifact(name={self.name}, image={self.image}, created_at={self.created_at})"
