import * as React from 'react';
import { StoryCardProps } from '../../types';

export const StoryCard: React.FC<StoryCardProps> = ({ title, description, tag, author }) => {
  return (
    <div className="flex flex-col p-4 rounded-md shadow-md border border-gray-200 bg-white min-w-[240px] max-w-sm">
      <div className="w-full h-32 bg-gray-300 rounded-md mb-4"></div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span className="px-2 py-1 bg-gray-200 rounded-full">{tag}</span>
      </div>
      <div className="flex items-center mt-4">
        <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
        <span className="text-sm text-gray-700">{author}</span>
      </div>
    </div>
  );
};
