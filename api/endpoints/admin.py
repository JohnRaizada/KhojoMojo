from django.contrib import admin
from .models import Artifact, User

# Register your models here.
admin.site.site_header = "KhojoMojo Admin"
admin.site.site_title = "KhojoMojo Admin"
admin.site.index_title = "KhojoMojo Admin"
admin.site.register(Artifact)
admin.site.register(User)
