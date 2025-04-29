import { useState } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const ReviewFormContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid #eee;
`;

const StarRating = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 1rem;
`;

export const ReviewForm = ({ restaurantId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit to API
    console.log({ restaurantId, rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <ReviewFormContainer>
      <h3>Write a Review</h3>
      <form onSubmit={handleSubmit}>
        <StarRating>
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              color={star <= rating ? '#FFD700' : '#e4e5e9'}
              onClick={() => setRating(star)}
              style={{ cursor: 'pointer', fontSize: '24px' }}
            />
          ))}
        </StarRating>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience..."
          rows="4"
          style={{ width: '100%', padding: '8px' }}
        />
        <button type="submit" style={{ marginTop: '8px' }}>
          Submit Review
        </button>
      </form>
    </ReviewFormContainer>
  );
};