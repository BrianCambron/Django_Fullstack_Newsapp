import React, { Component } from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import StatusList from './components/StatusList'
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      blogs: [],
      selection: null,
      pickedBlog: {},
      display: 'home',
    }
  this.handleClick = this.handleClick.bind(this)
  this.truncate = this.truncate.bind(this)
  this.pickBlog = this.pickBlog.bind(this)
  this.addBlog = this.addBlog.bind(this)
  this.deleteBlog = this.deleteBlog.bind(this)
  }

  componentDidMount(){
    fetch('api/v1/')
    .then(response => response.json())
    .then(data => this.setState({blogs: data}))
    .catch(error => console.log('Error:', error));
  }
  addBlog(event, data){
    event.preventDefault();
    fetch('api/v1/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
  .then(response => response.json())
  .then(data => {
    const blogs = [...this.state.blogs, data];
    this.setState({blogs});
  })
  }
  deleteBlog(id){
  fetch(`api/v1/${id}`, {
    method: 'DELETE',
  })
  .then(response => response)
  .then(data => {
    const blogs = [...this.state.blogs]
    console.log('blogs', blogs)
    const index = blogs.findIndex(blog => blog.id === id)
    blogs.splice(index,1);
    this.setState({blogs})
  })
  .catch(error => console.log("Error:", error));
  }

  handleClick(event) {
    if(event.target.dataset.filter === 'all') {
      this.setState({selection: null});
    } else {
      this.setState({selection: event.target.dataset.filter});
      }
  }

  pickBlog(id){
    const blogPost = this.state.blogs.find(blog => blog.id === id);
    // console.log(id);
    this.setState({pickedBlog: blogPost});
    console.log(this.state.pickedBlog);
  }

  truncate(str) {
    return str.length > 10 ? str.substring(0, 30) + "..." : str;
  }

  render(){
    let selection = this.state.blogs;
    let display = this.state.display;
    if(this.state.selection) {
      selection = this.state.blogs.filter(blog => blog.category === this.state.selection);
    }

    const blogs = selection
      .filter(blog => !blog.isTopStory)
      .map(blog =>(
          <div onClick={() => this.pickBlog(blog.id)} key={blog.id}>
            <ul className="list-group mb-1">
              <div className="list-group-item list-group-item-action">
                  <h5 className="mb-3 right-side-blogtitle">{blog.title}</h5>
                  <p className='author'>{blog.author}</p>
              </div>
            </ul>
          </div>
        )
      );
      let html;
      if(display === 'home'){
        html = <div className="row"> <div className="col-8"><h5 className='top-stories-heading'>Top Stories</h5><BlogList blogs={selection} truncate={this.truncate} pickBlog={this.pickBlog}/></div>
                    <div className="col-4"><h5 className="last-week-stories">Last Week</h5>
                    {blogs}
                </div></div>
      } else if (display === 'form') {
        html = <BlogForm addBlog={this.addBlog}/>
      } else if (display === 'status') {
        html = <StatusList blogs={this.state.blogs} deleteBlog={this.deleteBlog}/>
      }

    return(
      <React.Fragment>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <button className="btn btn-dark" type='button' onClick={() => {this.setState({display:'home'}); this.setState({selection: null});}} data-filter="all">HomePage</button>
          <button className="btn btn-dark"type='button' onClick={this.handleClick} data-filter="Entertainment">Entertainment</button>
          <button className="btn btn-dark" type='button' onClick={this.handleClick} data-filter="Sports">Sports</button>
          <button className="btn btn-dark" type='button' onClick={this.handleClick} data-filter="Travel">Travel</button>
          <button className="btn btn-dark" type='button' onClick={this.handleClick} data-filter="Food">Food</button>
          <button className="btn btn-dark" onClick={() => this.setState({display: 'status'})} type='button'>Status List</button>
          <button className="btn btn-dark" onClick={() => this.setState({display: 'form'})} type='button'>Form</button>
        </nav>
        <div className="row no-gutters">
            {html}
        </div>
        <FullBlog pickedBlog={this.state.pickedBlog}/>
      </div>
      </React.Fragment>
    )
  }
}

class FullBlog extends Component{
  render(props){
    return(
      <div className="col">
        <div>
          <h5>{this.props.pickedBlog.title}</h5>
          <p>{this.props.pickedBlog.author}</p>
          <p>{this.props.pickedBlog.body}</p>
        </div>
    </div>
    )
  }
}

export default App;
