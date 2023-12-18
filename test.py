import tensorflow as tf
from tensorflow.keras.preprocessing.text import one_hot
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np

# load the model
model = tf.keras.models.load_model('model.h5')

vocab_size = 10000
embeded_vector_size = 100
max_length = 300

def PredictCustomerReview(review : str):
    data = one_hot(str(review), vocab_size)
    sequences = [data]
    padded_review = pad_sequences(sequences, maxlen=max_length, padding='post')
    pred  = model.predict(padded_review)[0][0]
    return pred # b/w 0-1

if __name__ == '__main__':
    # call the function
    print(PredictCustomerReview("I love this product"))
    
    
    