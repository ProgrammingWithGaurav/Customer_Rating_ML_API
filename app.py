from typing import Union
from fastapi import FastAPI
from test import PredictCustomerReview
from pydantic import BaseModel


class userInput(BaseModel):
    review: str

app = FastAPI()


@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.post("/predict")
async def read_item(q: userInput):
    pred = PredictCustomerReview(dict(q)['review'])
    print(pred)
    return {"prediction": float(pred)}