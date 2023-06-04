import { SparklesIcon } from "@heroicons/react/outline";
import TweetInput from "./TweetInput";
import Post from "./Post";
import React ,{useState,useEffect} from 'react'

const Feed = () => {
   const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/tweets') 
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);
  

  return (
    <div className="xl:ml-[260px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50  bg-white justify-between items-center border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <TweetInput />
      {
        data.map((post)=>(
          <Post key={post.id} post={post} />
        ))
      }
      <div>
      </div>
     
      
    
    </div>
  );
};
export default Feed;
