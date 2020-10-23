import React, { Component } from 'react';
import Cookies from 'js-cookie';
import './StatusList.css'

class StatusListItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: this.props.blog.title,
      body:this.props.blog.body,
      category:'TVL',
      created_at: new Date(),
      status:'DFT',
      isEditing: false,
    }
    this.handleInput = this.handleInput.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }
  handleInput(event){
    this.setState({[event.target.name]: event.target.value});
  }
  toggleEdit(){
    this.setState({isEditing: !this.state.isEditing});
  }
  handleSave(props){
  const updatedBlog = {
    title: this.state.title,
    body: this.state.body,
    category: this.state.category,
    created_at: this.state.created_at,
    status: this.state.status,
  };
    this.props.editBlog(updatedBlog, this.props.blog.id);
    this.toggleEdit();
  }
  render(){
    const is_staff = localStorage.getItem('is_staff');
    console.log('is_staff', is_staff);

    return(
      <li className="list-group-item list-group-item-action col"key={this.props.blog.id}>
      {this.state.isEditing?
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className ="form-control" id="title" name="title" value={this.state.title} onChange={this.handleInput}/>
        </div>
        :<h3>{this.props.blog.title}</h3>}
      <p>{this.props.blog.author}</p>
      {
        this.state.isEditing
        ? <React.Fragment>
        <textarea rows="20" cols="100" name="body" value={this.state.body} onChange={this.handleInput} />
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" className="form-control" name="category" value={this.state.category} onChange={this.handleInput}>
            <option value="TVL">Travel</option>
            <option value="SPRT">Sports</option>
            <option value="ENT">Entertainment</option>
            <option value="FD">Food</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="status">Post Status</label>
          <select id="status" className="form-control" name="status" value={this.state.status} onChange={this.handleInput}>
            <option value="DFT">Draft</option>
            <option value="SMTD">Submitted</option>
            <option value="PBSHD">Published</option>
          </select>
        </div>
        </React.Fragment>
        : <p>{this.props.blog.body}</p>
      }
      {
        this.state.isEditing
        ? <button className="btn btn-link" onClick={this.handleSave} type='button'>Save</button>
        : <button className="btn btn-link" onClick={() => this.toggleEdit()}>Edit</button>
      }
      {is_staff === 'false'?
        <button className="btn btn-danger" onClick={() => this.props.userdeleteBlog(this.props.blog.id)}>&#x2718;</button>
      : <button className="btn btn-danger" onClick={() => this.props.admindeleteBlog(this.props.blog.id)}>&#x2718;</button>
      }
      </li>
    )
  }
}



class StatusList extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: null,
      blogs: [],
    }
    this.handleClick = this.handleClick.bind(this)
    this.admindeleteBlog = this.admindeleteBlog.bind(this)
    this.userdeleteBlog = this.userdeleteBlog.bind(this)
  }

  componentDidMount(){
    const is_staff = localStorage.getItem('is_staff');

    // console.log('is_staff', is_staff);
    if(is_staff === 'false') {
      fetch('api/v1/blogs/user')
      .then(response => response.json())
      .then(data => this.setState({blogs: data}))
      .catch(error => console.log('Error:', error));
    }
    else {
      fetch('api/v1/blogs/admin')
      .then(response => response.json())
      .then(data => this.setState({blogs: data}))
      .catch(error => console.log('Error:', error));
    }
  }

  admindeleteBlog(id){
  const csrftoken = Cookies.get('csrftoken');
  fetch(`api/v1/blogs/admin/${id}/`, {
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
  userdeleteBlog(id){
  const csrftoken = Cookies.get('csrftoken');
  fetch(`api/v1/blogs/user/${id}/`, {
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

  handleClick(event) {
    if(event.target.dataset.filter === 'all') {
      this.setState({status: null});
    } else {
      this.setState({status: event.target.dataset.filter});
    }
  }

  render(){
    let selection = this.state.blogs;

    if(this.state.status) {
      selection = this.state.blogs.filter(blog => blog.status === this.state.status);
    }
    const blogs = selection
    .map(blog => <StatusListItem blog={blog} key={blog.id} admindeleteBlog={this.admindeleteBlog} userdeleteBlog={this.userdeleteBlog} editBlog={this.props.editBlog}/>);
    console.log(blogs);
    return(
      <div className='col-8 status-list'>
        <button className="btn btn-link" type='button' onClick={this.handleClick} data-filter="all">All Status's</button>
        <button className="btn btn-link" type='button' onClick={this.handleClick} data-filter="DFT">Draft</button>
        <button className="btn btn-link" type='button' onClick={this.handleClick} data-filter="PBSHD">Published</button>
        <button className="btn btn-link" type='button' onClick={this.handleClick} data-filter="SMTD">Submitted</button>
        {blogs}
      </div>
    )
  }
}
export default StatusList;
