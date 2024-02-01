import React from 'react';
import { MessageCircle, Share, Heart} from 'lucide-react';
import LocationTag from "./location-tag";
import PersonTag from './person-tag';

export interface Author {
    name: string;
    image: string;
    link: string;
  }
  
  interface Comment {
    count: number;
    link: string;
  }
  
  interface PostCardProps {
    category: string;
    title: string;
    author: Author;
    timeAgo: string;
    content: string;
    likes: number;
    comments: Comment;
  }
  

const PostCard: React.FC<PostCardProps> = ({
  category,
  title,
  author,
  timeAgo,
  content,
  likes,
  comments,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto border-2 border-blue-100">
      <div className="border-b pb-4">
        {/**<div className="text-green-600 uppercase text-sm font-semibold tracking-wide">{category}</div>*/}
        <LocationTag locationName="Cape Town"/>
        <h2 className="text-2xl font-bold my-2">{title}</h2>
        <div className="flex items-center text-sm text-gray-500">
          <PersonTag personName={author.name}/>
          <span className="mx-2">•</span>
          <p>{timeAgo}</p>
        </div>
      </div>
      <div className="pt-4 text-gray-700">
        {content}
      </div>
      <div className="flex items-center justify-between border-t pt-4 mt-4">
        <div className="flex items-center space-x-1 text-gray-500">
          <Heart className="h-6 w-6" />
          <span>{likes}</span>
          <a href={comments.link} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-6 w-6" />
          </a>
          <span>{comments.count}</span>
        </div>
        <button onClick={() => (console.log(12))}>
          <Share className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
