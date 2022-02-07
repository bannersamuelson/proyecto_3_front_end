import React from 'react';
import {createReview} from "../../services/apiconfig";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function UpdateReview(props) {
  const [newReview, setNewReview] = useState({
    author:`${props.firstName}`,
    course: `${props.review.course}`,
    review: `${props.review.review}`,
    rate: `${props.review.rate}`,
  });
  console.log(props,newReview);
  
  
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newReview.author);
    let res=await createReview(newReview);
    console.log(res);
    navigation("/");
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewReview((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return <div>
    <form onSubmit={handleSubmit}
    className="mr-auto ml-auto w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
        <label >Course</label>
        <br />
        <input
          type="text"
          placeholder="course title"
          id="course"
          value={newReview.course}
          onChange={handleInput}
          className="flex items-center border-b border-teal-500 py-2 text-teal-700"
        />
        <br />
        <label >Review</label>
        <br />
        <input
          type="text"
         placeholder="write your review"
         id="review"
         value={newReview.review}
         onChange={handleInput}
         className="flex items-center border-b border-teal-500 py-2 text-teal-700"
        />
        <br />
        <label >Rate</label>
        <br />
        <input
          type="number"
          placeholder="image link"
          id="rate"
          value={newReview.rate}
          onChange={handleInput}
          className="flex items-center border-b border-teal-500 py-2 text-teal-700"
        />
        <br />
        <button className="flex-shrink-0 bg-blue-900 hover:bg-blue-900 border-blue-700 hover:border-blue-900 text-sm border-4 text-white py-1 px-2 rounded text-xl">
        Add Course
        </button>
      </form>
  </div>;
}