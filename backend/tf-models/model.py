
# coding: utf-8

# In[32]:


import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import cv2
from scipy import stats
np.random.seed(123)  # for reproducibility

from sklearn.model_selection import LeaveOneOut
from keras.applications import ResNet50
from keras.applications.resnet50 import preprocess_input
from keras.models import Sequential, load_model
from keras.layers import Dense, Dropout, Activation, Flatten
from keras.layers import MaxPooling2D, Conv2D
from keras.utils import np_utils
from keras.preprocessing.image import ImageDataGenerator, load_img, img_to_array, array_to_img
import keras.callbacks

import tensorflow as tf
import os
import pickle


# In[6]:


classes = {"back":0, "face":1, "hand":2, "inner_forearm":3}
PATH = "burn-data-test-v3/"
X = []
y = []
for cls in classes:
    folder = PATH + cls
    for img_name in os.listdir(folder):
        path = os.path.join(folder, img_name)
        if os.path.isfile(path):
            img = load_img(path, target_size=(224, 224))
            img = img_to_array(img)
            img = preprocess_input(img)
            X.append(img)
            y.append(classes[cls])
X = np.array(X)
y = np.array(y)


# In[7]:


X.shape, y.shape


# In[9]:


p = np.random.permutation(len(X))
X = X[p]
y = y[p]


# In[25]:


y[:10]


# In[27]:


y = np_utils.to_categorical(y)
y[:10]


# In[16]:


loo = LeaveOneOut()
loo


# In[39]:


def get_model():
    model = Sequential()
    model.add(ResNet50(include_top=False, pooling='avg'))
    model.add(Dense(4, activation='softmax'))
    model.layers[0].trainable = False
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    return model


# In[22]:


class_weight = {0: 1/22,
                1: 1/29,
                2: 1/34,
                3: 1/20}


# In[41]:


model = get_model()
model.save_weights('random_weights.h5')
accuracies = []
for iter_no, (train_index, val_index) in enumerate(loo.split(X)):
    print(f"iteration number: {iter_no + 1}")
    X_train, y_train = X[train_index], y[train_index]
    X_val, y_val = X[val_index], y[val_index]
#     model = None
#     model = get_model()
    model.load_weights("random_weights.h5")
    history = model.fit(X_train, y_train,
                        validation_data=(X_val, y_val), class_weight=class_weight,
                        epochs=4, verbose=1)
    probs = model.predict_proba(X_val)[0]
    label = list(y_val[0]).index(1)
    print(f"True Label = {label}, Probs = {probs}")
    accuracies.append((label, *probs))


# In[36]:


with open("LeaveOneOut_probs.pickle", "wb") as fp:   #Pickling
    pickle.dump(accuracies, fp)
