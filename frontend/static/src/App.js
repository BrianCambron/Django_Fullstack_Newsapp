import React, { Component } from 'react';
import BlogList from './components/BlogList';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      blogs: [],
      display: null,
      pickedBlog: {},
    }
  this.handleClick = this.handleClick.bind(this)
  this.truncate = this.truncate.bind(this)
  this.pickBlog = this.pickBlog.bind(this)
  }

  componentDidMount(){
    fetch('api/v1/')
    .then(response => response.json())
    .then(data => this.setState({blogs: data}))
    .catch(error => console.log('Error:', error));
  }

  handleClick(event) {
    if(event.target.dataset.filter === 'all') {
      this.setState({display: null});
    } else {
      this.setState({display: event.target.dataset.filter});
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
    let display = this.state.blogs;

    if(this.state.display) {
      display = this.state.blogs.filter(blog => blog.category === this.state.display);
    }

    const blogs = display
      .filter(blog => !blog.isTopStory)
      .map(blog =>(
          <div onClick={() => this.pickBlog(blog.id)} key={blog.id} className="col">
            <ul className="list-group mb-1">
              <div className="list-group-item list-group-item-action">
                  <h5 className="mb-3 right-side-blogtitle">{blog.title}</h5>
              </div>
            </ul>
          </div>
        )
      );

    return(
      <React.Fragment>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <button className="btn btn-light" type='button' onClick={this.handleClick} data-filter="all">HomePage</button>
          <button className="btn btn-light" type='button' onClick={this.handleClick} data-filter="Entertainment">Entertainment</button>
          <button className="btn btn-light" type='button' onClick={this.handleClick} data-filter="Sports">Sports</button>
          <button className="btn btn-light" type='button' onClick={this.handleClick} data-filter="Travel">Travel</button>
          <button className="btn btn-light" type='button' onClick={this.handleClick} data-filter="Food">Food</button>
          <button className="btn btn-light" type='button'>Form</button>
        </nav>
        <div className="row no-gutters">
          <div className='col'>
            <h5 className='top-stories-heading'>Top Stories</h5>
            <BlogList blogs={display} truncate={this.truncate} pickBlog={this.pickBlog}/>
          </div>
          <div className="right-side col">
            <h5 className="last-week-stories">Last Week</h5>
            {blogs}
          </div>
       </div>
      </div>
      <FullBlog pickedBlog={this.state.pickedBlog}/>
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
          <p>{this.props.pickedBlog.body}</p>
        </div>
    </div>
    )
  }
}

export default App;
