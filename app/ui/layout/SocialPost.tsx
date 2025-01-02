import * as React from 'react';
import { SocialPostProps } from '../../types';

export const SocialPost: React.FC<SocialPostProps> = ({ username, content, tag, imageDescription }) => {
  return (
    <div className="flex flex-col rounded-md shadow-md border border-gray-200 bg-white max-w-md">
      <div className="flex items-center p-4 border-b border-gray-100">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <h4 className="text-sm font-bold text-gray-800 flex-1">{username}</h4>
        <button className="text-gray-500 hover:text-gray-800">•••</button>
      </div>
      <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-sm text-gray-500">
        {imageDescription || "No Image Description Available"}
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-700 mb-3">{content}</p>
        <div className="inline-block px-2 py-1 bg-gray-200 rounded-full text-xs text-gray-600">
          #{tag}
        </div>
      </div>
    </div>
  );
};
