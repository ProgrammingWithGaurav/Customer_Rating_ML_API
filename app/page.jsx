"use client"
import { useState } from "react";
const Home = () =>  {
  const [review, setReview] = useState('')
  const [rating, setRating] = useState(null)
  async function fetchData(){
    const url = 'http://customer-review-rating.azurewebsites.net/predict';
    const data = {
      "review": review
    };
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      }
    });
    const json = await response.json();
    const preds = json['prediction']
    setRating(Math.round(preds * 10))
  }
  return (
    <main className="flex flex-col w-full items-center py-12 px-16">
      <div className="z-10 font-mono flex text-sm">
        <div>
          <label
            htmlFor="price"
            className="block text-xl font-bold leading-6 text-gray-900 "
          >
            Review
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <textarea
              value={review}
              placeholder="Review..."
              className="py-2 px-4 w-[80vw] rounded-xl my-2"
              onChange={(e) => setReview(e.target.value)}
            />
            <button className="bg-indigo-600 px-4 text-white active:scale-105 transition-all my-4 rounded-xl py-3 text-enter" onClick={() => fetchData()}>
              Check Rating ✨
            </button>
          </div>
        </div>
      </div>

      {/* show rating */}
      {
        rating && (
          <div className="flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-2xl p-8">
              <h1 className="text-4xl font-bold text-center mb-4">
                {rating}/10
              </h1>
              <h2 className="text-xl font-bold text-center mb-4">
                {rating > 5 ? 'Positive' : 'Negative'}
              </h2>
              <p className="text-center">
                {rating > 5 ? '😄' : '😞'}
              </p>
            </div>
          </div>
        )
      }
    </main>
  );
}

export default Home