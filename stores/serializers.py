from .models import Pizzeria
from rest_framework import serializers


class PizzeriaListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pizzeria
        fields = [
            'id',
            'logo_image',
            'pizzeria_name',
            'city',
            'zip_code',
            'absolute_url'
        ]
