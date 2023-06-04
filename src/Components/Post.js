/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
  
} from "@heroicons/react/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/solid";
import React ,{useState,useEffect} from 'react'

const Post = ({ post}) => {
  const [deleteData, setDeleteData] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  
  const handleDelete = async ()=>{
    try{
      const response = await fetch(`http://localhost:3000/tweets/${post.id}`,{
        method:'DELETE',
      });
      if(response.ok){
        console.log("Pst deleted successfully");
        window.location.reload();
      }else{
        console.error("failed to delete post")
      }

    }catch(error){
      console.error("Error",error);

    };
  }
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  


  return (
    <>
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* user image */} 
      <img
        className="h-11 w-11 rounded-full mr-4"
        src="https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-4-1024x1024.jpg"
        alt="Profile picture"
      />
    
      <div>
        
        <div className="flex items-center justify-between">
          
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {'krishnagabale'}
            </h4>
            <span className="text-sm sm:text-[15px]">@{'gabalekrishna'} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {'2 hours ago'}
            </span>
          </div>
          
          <DotsHorizontalIcon className="h-10 w-10 hoverEffect hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.text}
        </p>
      
        <div className="flex justify-between text-gray-500 p-2">
          <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" onClick={handleDelete}/>
          {isLiked ? (
              <HeartSolidIcon
                className="h-9 w-9 text-red-600 p-2 hover:text-red-600 hover:bg-red-100"
                onClick={handleLike}
              />
            ) : (
              <HeartIcon
                className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
                onClick={handleLike}
              />
            )}
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
   
    </div>
   
      
    
    </>
  );
};

export default Post;
