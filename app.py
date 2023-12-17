from typing import Union
from fastapi import FastAPI
from test import PredictCustomerReview

app = FastAPI()


@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/predict")
async def read_item(q: Union[str, None] = None):
    pred = PredictCustomerReview(q)
    print(pred)
    return {"prediction": float(pred)}