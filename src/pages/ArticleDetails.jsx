import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router'


export default function ArticleDetails() {

    const [articles, setArticles] = useState("")
    const {id}=useParams();

    useEffect(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((res) => res.json())
                .then((data) => setArticles(data));
        }, [id])
    
  return (
    <>
     <div className="min-h-screen bg-white py-12 px-6 md:px-24  leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{articles.title}</h1>

      <p className="text-gray-700 text-lg mb-10">{articles.body}</p>

      <Link to="/" className="inline-block text-indigo-600 font-medium hover:underline"> Back </Link>
    </div>

    
    </>
  )
}
