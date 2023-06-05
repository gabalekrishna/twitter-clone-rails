import { SparklesIcon } from "@heroicons/react/outline";
import TweetInput from "./TweetInput";
import Post from "./Post";
import React ,{useState,useEffect} from 'react'
import { SearchIcon } from "@heroicons/react/outline";

const Feed = () => {
   const [data, setData] = useState([]);
   const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
   
  useEffect(() => {
    fetch('http://localhost:3000/tweets') 
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);
  useEffect(() => {
    const filteredData = searchQuery
      ? data.filter((post) =>
          post.text.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : data;
    setFilteredData(filteredData);
  }, [searchQuery, data]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  

  return (
    <div className="xl:ml-[260px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
    <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
      <div className="flex py-2 px-3 sticky top-0 z-50  bg-white justify-between items-center border-b border-gray-200">
      
      <div className="flex items-center p-3 rounded-full relative">
  <SearchIcon className="h-5 z-50 text-gray-500" />
  <input
    className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
    type="text"
    placeholder="Search Tweets"
    value={searchQuery}
    onChange={handleSearch}
  />
</div>
       
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <TweetInput />
      {/* {
        data.map((post)=>(
          <Post key={post.id} post={post} />
        ))
      } */}
      {filteredData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <div>
      </div>
     
      
    
    </div>
  );
};
export default Feed;
