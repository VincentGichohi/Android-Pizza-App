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
            # 'absolute_url'
        ]

class PizzeriaDetailSerializer(serializers.ModelSerializer):
    class Meta:
        Model = Pizzeria
        fields = [
            'id',
            'pizzeria_name',
            'street',
            'city',
            'state',
            'zip_code',
            'website',
            'phone_number',
            'description',
            'logo_image',
            'email',
            'active'
        ]