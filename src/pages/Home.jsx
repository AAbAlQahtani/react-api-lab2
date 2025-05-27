
import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import ArticleDetails from "./ArticleDetails";

export default function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setArticles(data));
    }, []);

    return (
        <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">Articles Menu</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-xl shadow hover:shadow-lg p-5" >
             <img src="https://media.istockphoto.com/id/638059282/photo/research.jpg?s=612x612&w=0&k=20&c=sqFtKHae39emrEcXlQ_34F4u-wGqOvIuTEbpDNhMdSs="
          alt="" className="w-full h-40 object-cover rounded mb-3" />
          
            <h2 className="text-xl font-semibold mb-2 text-indigo-600"> {article.title} </h2>
        
            <Link to={`/articleDetails/${article.id}`}
              className="text-sm text-white bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-600"> Click to read </Link>
          
          </div>
        ))}
      </div>
    </div>
    );
}
