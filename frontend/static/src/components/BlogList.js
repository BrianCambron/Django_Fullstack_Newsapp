import React from 'react';
import './BlogList.css'

function BlogItem(props){
    return(
      <div onClick={() => props.pickBlog(props.blog.id)} className="col">
        <div className="list-group mb-2">
          <div className="list-group-item list-group-item-action">
            <img src={props.blog.image} alt="" className="mb-2"/>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-3 left-side-blogtitle">{props.blog.title}</h5>
            </div>
              <p className='author'>{props.blog.author}</p>
              <p className="mb-1 left-side-blogbody">{props.truncate(props.blog.body)}</p>
          </div>
        </div>
      </div>
    );
}



function BlogList(props){
  const blogs = props.blogs.filter(blog => blog.isTopStory === true).map(blog => <BlogItem key={blog.id} blog={blog} truncate={props.truncate} pickBlog={props.pickBlog}/>);

  return(
    <div className="mt-3">
      {blogs}
    </div>
  )
}
export default BlogList;
