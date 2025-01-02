export interface StoryCardProps {
    title: string;
    description: string;
    tag: string;
    author: string;
  }
  
  export interface ReviewCardProps {
    author: string;
    rating: number;
    review: string;
  }
  
  export interface SocialPostProps {
    username: string;
    content: string;
    tag: string;
    imageDescription: string;
  }