import os
import numpy as np
import pandas as pd
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.applications.imagenet_utils import decode_predictions
from tensorflow.keras.models import load_model
from keras.preprocessing.image import ImageDataGenerator


# 추천 여행지 파일
recommend_csv = pd.read_csv('/Users/nayoungmin/Desktop/Capstone/recommend.csv')


# 저장한 모델 파일 경로
model_path = '/Users/nayoungmin/Desktop/Capstone/Code/my_model_parameter_1.h5'
TRAIN_PATH = '/Users/nayoungmin/Desktop/Capstone/splited_image_is/train'

# 저장한 모델 불러오기
model = load_model(model_path)

# 이미지 클래스 이름 지정해주기
classGen = ImageDataGenerator()

class_generator = classGen.flow_from_directory(
    directory=TRAIN_PATH,
    target_size=(224, 224),
    batch_size=32,
    class_mode="categorical"
)

while(True):
    img_path = input('이미지를 넣어주세요: ') # 예측하고자 하는 이미지 경로
    if img_path == '종료':
        break
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

    for key, value in sorted_pre_dict:
        print(f"{key}: {value}%")

    if max(pre_dict.values()) < 40:
        print('\n\n다른 사진을 업로드 해주세요!\n\n')
        continue
    else:
        max_pre = max(pre_dict, key=pre_dict.get)
        print('카테고리: ',max_pre)
        
        
    input_rec = input('카테고리: ')
    print(recommend_csv.loc[recommend_csv['category']==input_rec, ])
