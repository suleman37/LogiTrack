// src/ReviewForm.js
import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      email,
      rating,
      comment
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label><br/>
        <input 
        id='name'
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
        id='name'
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Rating:</label>
        <ReactStars
          count={5}
          onChange={(newRating) => setRating(newRating)}
          size={24}
          activeColor="#ffd700"
        />
      </div>
      <div>
        <label>Comment:</label>
        <textarea 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;