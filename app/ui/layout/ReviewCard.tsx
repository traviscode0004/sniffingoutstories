import * as React from 'react';
import { ReviewCardProps } from '../../types';

export const ReviewCard: React.FC<ReviewCardProps> = ({ author, rating, review }) => {
  return (
    <div className="flex flex-col p-4 rounded-md shadow-md border border-gray-200 bg-white max-w-sm">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <div className="flex-1">
          <h4 className="text-sm font-bold text-gray-800">{author}</h4>
        </div>
        <div className="text-yellow-500">
          {Array(rating)
            .fill(0)
            .map((_, index) => (
              <span key={index}>&#9733;</span> // Unicode for star character
            ))}
        </div>
      </div>
      <p className="text-sm text-gray-600">{review}</p>
    </div>
  );
};
