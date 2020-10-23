import React, { Component } from 'react';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import StatusList from './components/StatusList';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import CreateProfile from './components/CreateProfile'
import Cookies from 'js-cookie';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      blogs: [],
      selection: null,
      pickedBlog: {},
      display: 'home',
      isLoggedIn: Cookies.get('Authorization')? true: false,
      // is_staff: localStorage.getItem('is_staff') ? true : false,
    }
    this.handleClick = this.handleClick.bind(this)
    this.truncate = this.truncate.bind(this)
    this.pickBlog = this.pickBlog.bind(this)
    this.addBlog = this.addBlog.bind(this)
    this.deleteBlog = this.deleteBlog.bind(this)
    this.editBlog = this.editBlog.bind(this)
    this.registerUser = this.registerUser.bind(this)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount(){
      fetch('api/v1/blogs')
      .then(response => response.json())
      .then(data => this.setState({blogs: data}))
      .catch(error => console.log('Error:', error));
  }
  addBlog(event, data){
    event.preventDefault();
    const csrftoken = Cookies.get('csrftoken');
    fetch('api/v1/blogs/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': csrftoken,
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
  const csrftoken = Cookies.get('csrftoken');
  fetch(`api/v1/blogs/${id}/`, {
    method: 'DELETE',
    headers:{
      'X-CSRFToken': csrftoken,
      'Content-Type': 'application/json'
    },
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
  editBlog(data, id){
    const csrftoken = Cookies.get('csrftoken');
    fetch(`api/v1/blogs/${id}/`,{
      method:'PUT',
      headers: {
      'X-CSRFToken': csrftoken,
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const blogs = [...this.state.blogs];
      const index = blogs.findIndex(blog => blog.id === id);
      blogs[index] = data;
      this.setState({blogs})
    })
    .catch(error => console.log('Error:', error));
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
    this.setState({pickedBlog: blogPost, display:'pickedBlog'});
    console.log(this.state.pickedBlog);
  }

  truncate(str) {
    return str.length > 10 ? str.substring(0, 30) + "..." : str;
  }

  registerUser(event, data){
  event.preventDefault();
  const csrftoken = Cookies.get('csrftoken');
  fetch('/api/v1/rest-auth/registration/', {
    method:'POST',
    headers: {
      'X-CSRFToken': csrftoken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {if(data.key){
        Cookies.set('Authorization', `Token ${data.key}`);
        this.setState({isLoggedIn:true, display:'home'});
        localStorage.setItem('is_staff', data.is_staff);
      }})
    .catch(error => console.log('Error:', error));
  }

  logIn(event, data){
  event.preventDefault();
  const csrftoken = Cookies.get('csrftoken');
  fetch('/api/v1/rest-auth/login/', {
    method:'POST',
    headers:{
      'X-CSRFToken': csrftoken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {if(data.key){
        Cookies.set('Authorization', `Token ${data.key}`);
        this.setState({isLoggedIn:true, display:'home',})
        localStorage.setItem('is_staff', data.is_staff);
      }
    })
    .catch(error => console.log('Error:', error));
  }
  logOut(){
  const csrftoken = Cookies.get('csrftoken');
  fetch('/api/v1/rest-auth/logout/', {
    method: 'POST',
    headers: {
      'X-CSRFToken': csrftoken,
      'Content-Type': 'application/json',
    }
  })
    .then(response => response.json())
    .then(data => {if(data.detail === 'Successfully logged out.'){
          Cookies.remove('Authorization');
          this.setState({isLoggedIn:false, display:'home',})
          localStorage.removeItem('is_staff');
        }})
    .catch(error => console.log('Error:', error));
  }

  // <BlogForm addBlog={this.addBlog}/>
  // <StatusList blogs={this.state.blogs} deleteBlog={this.deleteBlog} editBlog={this.editBlog}/>

  render(){
    let selection = this.state.blogs;
    let display = this.state.display;
    if(this.state.selection) {
      selection = this.state.blogs.filter(blog => blog.category === this.state.selection);
    }

    const blogs = selection
      .filter(blog => !blog.isTopStory && blog.status === 'PBSHD')
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
      } else if (display === 'register') {
        html =  <RegisterForm registerUser={this.registerUser}/> //blogform used to be here

      } else if (display === 'login') {
        html = <LoginForm logIn={this.logIn}/> //status list used to be here
      } else if (display === 'pickedBlog') {
        html = <FullBlog pickedBlog={this.state.pickedBlog}/>
      }
      let loggedInHtml;
      if(display === 'form'){
        loggedInHtml = <BlogForm addBlog={this.addBlog}/>
      } else if (display === 'StatusList') {
        loggedInHtml = <StatusList deleteBlog={this.deleteBlog} editBlog={this.editBlog}/>
      } else if (display === 'home') {
        loggedInHtml = <div className="row"> <div className="col-8"><h5 className='top-stories-heading'>Top Stories</h5><BlogList blogs={selection} truncate={this.truncate} pickBlog={this.pickBlog}/></div>
                    <div className="col-4"><h5 className="last-week-stories">Last Week</h5>
                    {blogs}
                </div></div>
      } else if (display === 'pickedBlog') {
        loggedInHtml = <FullBlog pickedBlog={this.state.pickedBlog}/>
      } else if (display === 'profile') {
        loggedInHtml = <CreateProfile />
      }
      const isLoggedIn = this.state.isLoggedIn;
      // console.log(isLoggedIn);
      // console.log(localStorage);
    return(
      <React.Fragment>
      <div>
        <nav className="navbar navbar-dark bg-dark container-fluid">
          <div>
            {isLoggedIn === false?<button className="btn btn-dark" type='button' onClick={() => {this.setState({display:'home'}); this.setState({selection: null});}} data-filter="all">HomePage</button>
            : <button className="btn btn-dark" type='button' onClick={() => {this.setState({display:'home'}); this.setState({selection: null});}} data-filter="all">HomePage</button>}
            <button className="btn btn-dark"type='button' onClick={this.handleClick} data-filter="ENT">Entertainment</button>
            <button className="btn btn-dark" type='button' onClick={this.handleClick} data-filter="SPRT">Sports</button>
            <button className="btn btn-dark" type='button' onClick={this.handleClick} data-filter="TVL">Travel</button>
            <button className="btn btn-dark" type='button' onClick={this.handleClick} data-filter="FD">Food</button>
          </div>
          <div>
            {isLoggedIn === false?<button className="btn btn-dark" onClick={() => this.setState({display: 'register'})}>Register</button>
            : <button className="btn btn-dark" onClick={() => this.setState({display: 'form'})}>Form</button>}
            {isLoggedIn === false?''
            : <button className="btn btn-dark" onClick={() => this.setState({display: 'StatusList'})}>Status List</button> }
            {isLoggedIn === false?''
            : <button className="btn btn-dark" onClick={() => this.setState({display: 'profile'})}>Profile</button>
            }
            {isLoggedIn === false?<button className="btn btn-dark" onClick={() => this.setState({display: 'login'})} type='button'>Log in</button>
            : <button className="btn btn-dark" onClick={this.logOut}>Logout</button> }
          </div>
        </nav>
        <div className="row no-gutters mt-4">
        {isLoggedIn === true ? loggedInHtml
          : html
        }
        </div>
      </div>
      </React.Fragment>
    )
  }
}

class FullBlog extends Component{
  render(props){
    return(
      <div className="col list-group mb-1">
        <div className="list-group-item">
          <h5>{this.props.pickedBlog.title}</h5>
          <p>{this.props.pickedBlog.author}</p>
          <p>{this.props.pickedBlog.body}</p>
        </div>
    </div>
    )
  }
}

export default App;
