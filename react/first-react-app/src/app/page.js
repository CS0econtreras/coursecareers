"use client";
import Post from "@/why/Post";
import { useState } from "react";
export default function Home() {
 //we are initializing all the useStates as empty or empty strings because we want to get this from the user later.
  const [content , setContent] = useState("");
  const [author, setAuthor]= useState("");
  const [title, setTitle]= useState("");
  const [posts, setPosts]= useState([]);
  

  function addPost () {
    const newPost  = {
      title: title,
      author: author,
      content: content,
      following: false,
    };
    //line below unpacks the all elements wich in this case are objects into a new array and appends a newPost 
    //then that posts is set to that new array
    //below is explains the value and setState connection 
    //the value is set to title which is an empty string to start then as you type in the input box onChange is triggered which changes the value to what is typed
    setPosts([...posts, newPost]);
    setContent("");
    setAuthor("");
    setTitle("");
  }
//e is the event like a key stroke or a click that triggered onClick. e is event object
//e.target the referes to the input field that was typed in and triggred onChange
//e.target.value referes to the inputfield that triggred onChange then gets the value
//in this case we get the onChange trigger which is the input box and get the value in order to make it equal to the userSet
  return <div>
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"/>
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author"/>
      <button onClick={addPost}>Add Post</button>
    </div>
    <div className="posts">
      {/*() return {} need a return statement line 33 */}
      {posts.map((post, idx) => (
        <Post {...post} key={idx + Math.random()} /> 
      ))}
    </div>
  </div>
}
