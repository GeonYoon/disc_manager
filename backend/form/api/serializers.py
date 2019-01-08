from rest_framework import serializers
from django.utils.translation import ugettext_lazy as _
from django.utils.timezone import now
from django.contrib.auth.models import User
from form.models import Health
from Scoring import calcScore
from Scoring import exercise


class FormCreateSerializer(serializers.ModelSerializer):
    username = serializers.HyperlinkedRelatedField(
        read_only=True,
        view_name='user-detail',
        lookup_field='username'
    )
    # BMI = serializers.IntegerField()
    pain = serializers.CharField()
    age = serializers.IntegerField()
    gender = serializers.CharField()
    accident = serializers.CharField()
    # score = serializers.IntegerField()
    height = serializers.IntegerField()
    weight = serializers.IntegerField()
    muscle_mass = serializers.IntegerField()
    body_fat = serializers.IntegerField()
    smoking = serializers.CharField()
    # suggested_exercise = serializers.CharField()
    # reason = serializers.CharField()

    class Meta:
        model = Health
        fields = (
            'id',
            'username',
            'age',
            'pain',
            'gender',
            'accident',
            # 'score',
            'height',
            'weight',
            'muscle_mass',
            'body_fat',
            'smoking',
            # 'suggested_exercise',
            # 'reason',

            'created_at',
            'updated_at',
            
        )
        read_only_fields=('id','created_at', 'updated_at', 'user')

    def create(self, validated_data):
        print(validated_data)
        pain = validated_data['pain']
        age = int(validated_data['age'])
        gender = validated_data['gender']
        accident = validated_data['accident']
        height = int(validated_data['height'])
        weight = int(validated_data['weight'])
        muscle_mass = int(validated_data['muscle_mass'])
        body_fat = int(validated_data['body_fat'])
        smoking = validated_data['smoking']
      

        # calculate the values
        BMI = round(weight / (height*height),2)
        score = round(calcScore.Scoring([gender,height*100,weight,body_fat,muscle_mass]),2)
        suggested_exercise,reason = exercise.suggest_work_out(pain,accident,age,height,weight,muscle_mass,body_fat,smoking)


        # # Get the requesting user
        # user = None
        request = self.context.get("request")
        print(request.user)
        if request and hasattr(request, "username"):
            user = request.user
        else:
            raise serializers.ValidationError('Must be authenticated to create post')
        # user =  self.context['request'].user
        # Create the post
        health = Health(
            username=user,
            BMI=BMI,
            pain=pain,
            age=age,
            gender=gender,
            accident=accident,
            score=score,
            height=height,
            weight=weight,
            muscle_mass=muscle_mass,
            body_fat=body_fat,
            smoking=smoking,
            suggested_exercise=suggested_exercise,
            reason=reason,
        )
        # Update the thread last_activity to post creation time
        health.save()
        # return {"percentage" : BMI, "score" : score, "advice" : {suggested_exercise,reason}}
        return health

# class PostUpdateSerializer(serializers.ModelSerializer):
#     content = serializers.CharField(required=True)
#     thread = serializers.HyperlinkedRelatedField(
#         read_only=True,
#         view_name='thread-detail'
#     )
#     creator = serializers.HyperlinkedRelatedField(
#         read_only=True,
#         view_name='user-detail',
#         lookup_field='username'
#     )
#     class Meta:
#         model = Post
#         fields = (
#             'id',
#             'content',
#             'thread',
#             'created_at',
#             'updated_at',
#             'creator'
#         )
#         read_only_fields=('id', 'thread', 'created_at', 'updated_at', 'creator',)

#     def update(self, instance, validated_data):
#         # Update fields if there is any change
#         for field, value in validated_data.items():
#             setattr(instance, field, value)
#         # Update 'updated_at' field to now
#         setattr(instance, 'updated_at', now())

#         # Note: If user update post, it won't change the last_activity
#         instance.save()
#         return instance


# class PostDeleteSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Post
#         fields = '__all__'

# class PostDetailSerializer(serializers.ModelSerializer):
#     thread = serializers.HyperlinkedRelatedField(
#         read_only=True,
#         view_name='thread-detail'
#     )
#     creator = serializers.HyperlinkedRelatedField(
#         read_only=True,
#         view_name='user-detail',
#         lookup_field='username'
#     )
#     class Meta:
#         model = Post
#         fields = (
#             'content',
#             'thread',
#             'created_at',
#             'updated_at',
#             'creator'
#         )