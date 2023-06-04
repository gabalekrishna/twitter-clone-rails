/* eslint-disable jsx-a11y/img-redundant-alt */
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useState,useEffect } from "react";

const TweetInput = () => {
  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    try {
      const response = await fetch("http://localhost:3000/tweets");
      if (response.ok) {
        const data = await response.json();
        setTweets(data);
      } else {
        console.error("Failed to fetch tweets");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handlePostTweet = async () =>{
   try{
    const response = await fetch('http://localhost:3000/tweets',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({text:input})
    });
    if(response.ok){
      console.log("Tweet posted successfully")
      setInput("");
      window.location.reload();
      fetchTweets();
    }else{
      console.error("faild to post tweet")
    }
   }
   catch(error){
    console.error("Error:",error)

   }
  };
  const handleChange = (e)=>{
    setInput(e.target.value)
    
  }

  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-4-1024x1024.jpg"
        alt="Profile picture"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <div>
          <textarea
            value={input}
            onChange={handleChange}
            placeholder="What's happening?"
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-500 tracking-wide min-h-[50px] text-gray-500"
            rows="2"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex">
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button
            disabled={!input.trim()}
            className="bg-blue-400 text-white px-4 py-2 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
            onClick={handlePostTweet}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
export default TweetInput;
