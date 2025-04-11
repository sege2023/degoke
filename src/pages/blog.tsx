import { useState, useEffect } from "react";
import {marked} from 'marked'
import matter from 'gray-matter'
interface BlogProps {
    slug: string;
  }
  
  interface Post {
    title: string;
    date: string;
    tags: string[];
    slug: string;
    excerpt: string;
    contentUrl: string;
  }
  

const Blog: React.FC<BlogProps> = ({slug}) => {
    const [post, setPost] = useState<Post | null>(null);
    const [content, setContent] = useState<String>('');
    useEffect(() => {
        fetch('/api/getblogs')
          .then(res => {
            if (!res.ok) {
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
          })
          .then(data => {
            console.log("Received data:", data); 
            if (!data || !data.posts) {
              throw new Error('Invalid data format');
            }
            const foundPost = data.posts.find((p: Post) => p.slug === slug);
            if (foundPost) {
              setPost(foundPost);
              return fetch(foundPost.contentUrl);
            }
            throw new Error('Post not found');
          })
          .then(res => { 
            return res.text() 

          })
          .then(markdownContent => {
            const parsedContent = matter(markdownContent);
            const htmlContent: string = marked.parse(parsedContent.content, {async: false}) as string;
            setContent(htmlContent);
          })
          .catch(err => console.error(err));
      }, [slug]);
      
      if (!post) return <div>Loading...</div>;
    return(
        <>
        <div className="blog-post">
            <h1>{post.title}</h1>
            <div className="metadata">
                <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                <div className="tags">
                {post.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
                </div>
            </div>
            <div 
                className="content"
                dangerouslySetInnerHTML={{ __html: content }} 
            />
        </div>
        </>
    )
}
export default Blog