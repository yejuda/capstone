#!/usr/bin/env python
# coding: utf-8

# In[2]:


import os
import numpy as np
import pandas as pd
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.applications.imagenet_utils import decode_predictions
from tensorflow.keras.models import load_model
from keras.preprocessing.image import ImageDataGenerator


# 추천 여행지 파일
recommend_csv = pd.read_csv('/Users/test/node-api/public/assets/model/recommend.csv')
TRAIN_PATH = '/Users/test/node-api/public/assets/model/splited_image_is/train'

# 이미지 클래스 이름 지정해주기
classGen = ImageDataGenerator()

class_generator = classGen.flow_from_directory(
    directory=TRAIN_PATH,
    target_size=(224, 224),
    batch_size=32,
    class_mode="categorical"
)

# 저장한 모델 파일 경로
model_path = '/Users/test/node-api/public/assets/model/Plan-it.h5'
# 저장한 모델 불러오기
model = load_model(model_path)

# 이미지 클래스 이름 지정해주기
img_path = '/Users/test/node-api/public/assets/uploads/uploaded_image.jpg'
target_size = (224, 224) # 모델이 학습시킨 이미지 사이즈와 동일하게 설정

    # 이미지 전처리
img = load_img(img_path, target_size=target_size)
x = img_to_array(img)
x = np.expand_dims(x, axis=0)
x = x / 255.0 # 이미지 스케일링

    # 예측
preds = model.predict(x)

    # 클래스 이름 받는 Dictionary 만들기
pre_dict = {}

    # 클래스별 확률 값 출력
class_indices = class_generator.class_indices
class_names = list(class_indices.keys())
    
    
for i in range(len(class_names)):
    pre_dict[class_names[i]] = round(preds[0][i]*100, 2)        
    
sorted_pre_dict = sorted(pre_dict.items(), key=lambda x: x[1], reverse=True)
a = sorted_pre_dict[0][0]
print(a)
