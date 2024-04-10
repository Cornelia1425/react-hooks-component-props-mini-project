import React from "react";
import blogData from "../data/blog"; //yes
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"
import Article from './Article'


console.log(blogData);

function App() {
  const name = blogData.name//"Overreacted"
  const about =blogData.about//"Personal blog by YS"
  const image =blogData.image//"https://via.placeholder.com/215" //?


  return (
    <div className="App">
    
      <Header  name={name}/> 
      <About  image={image} about={about}/>
      <ArticleList articles={blogData.posts}/>

    </div>
  );
}

export default App;
