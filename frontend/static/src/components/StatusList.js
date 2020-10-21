import React, { Component } from 'react';
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
            <option>TVL</option>
            <option>SPRT</option>
            <option>ENT</option>
            <option>FD</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="status">Post Status</label>
          <select id="status" className="form-control" name="status" value={this.state.status} onChange={this.handleInput}>
            <option>DFT</option>
            <option>SMTD</option>
            <option>PBSHD</option>
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
      <button className="btn btn-danger" onClick={() => this.props.deleteBlog(this.props.blog.id)}>&#x2718;</button>
      </li>
    )
  }
}



class StatusList extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: null,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    if(event.target.dataset.filter === 'all') {
      this.setState({status: null});
    } else {
      this.setState({status: event.target.dataset.filter});
    }
  }

  render(){
    let selection = this.props.blogs;

    if(this.state.status) {
      selection = this.props.blogs.filter(blog => blog.status === this.state.status);
    }
    const blogs = selection
    .map(blog => <StatusListItem blog={blog} key={blog.id} deleteBlog={this.props.deleteBlog} editBlog={this.props.editBlog}/>)
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
