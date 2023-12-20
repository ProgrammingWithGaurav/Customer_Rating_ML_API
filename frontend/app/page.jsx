
"use client"
import { useState } from "react";
const Home = () =>  {
  const [review, setReview] = useState('')
  async function fetch(){
    const url = 'http://customer-review-rating.azurewebsites.net/predict';
    const data = {
      "review": review
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setReview("");
    } catch (error) {
      console.error('Error fetching data:', error);
    }}

  return (
    <main className="flex w-full items-center py-12 px-16">
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
            <button onClick={() => fetch()} className="bg-indigo-600 px-4 text-white active:scale-105 transition-all my-4 rounded-xl py-3 text-cen">
              Check Rating ✨
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home