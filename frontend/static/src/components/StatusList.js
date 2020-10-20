import React, { Component } from 'react';

class StatusListItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      title:'',
      body:'',
      category:'Travel',
      created_at: new Date(),
      status:'Draft',
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
    this.props.editBlog(updatedBlog, this.props.blogs.id);
    this.toggleEdit();
  }
  render(){
    return(
      <li className="list-group-item list-group-item-action col"key={this.props.blogs.id}>
      {this.state.isEditing?
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className ="form-control" id="title" name="title" value={this.state.title} onChange={this.handleInput}/>
        </div>
        :<h3>{this.props.blogs.title}</h3>}
      <p>{this.props.blogs.author}</p>
      {
        this.state.isEditing
        ? <React.Fragment>
        <textarea rows="20" cols="100" name="body" value={this.state.body} onChange={this.handleInput} />
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" className="form-control" name="category" value={this.state.category} onChange={this.handleInput}>
            <option>Travel</option>
            <option>Sports</option>
            <option>Entertainment</option>
            <option>Food</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="status">Post Status</label>
          <select id="status" className="form-control" name="status" value={this.state.status} onChange={this.handleInput}>
            <option>Draft</option>
            <option>Submitted</option>
            <option>Published</option>
          </select>
        </div>
        </React.Fragment>
        : <p>{this.props.blogs.body}</p>
      }
      {
        this.state.isEditing
        ? <button className="btn btn-link" onClick={this.handleSave} type='button'>Save</button>
        : <button className="btn btn-link" onClick={() => this.toggleEdit()}>Edit</button>
      }
      <button className="btn btn-danger" onClick={() => this.props.deleteBlog(this.props.blogs.id)}>&#x2718;</button>
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
    .map(blog => <StatusListItem blogs={blog} key={blog.id} deleteBlog={this.props.deleteBlog} editBlog={this.props.editBlog}/>)
    return(
      <div>
        <button className="btn btn-link" type='button' onClick={this.handleClick} data-filter="all">All Status's</button>
        <button className="btn btn-link" type='button' onClick={this.handleClick} data-filter="Draft">Draft</button>
        <button className="btn btn-link" type='button' onClick={this.handleClick} data-filter="Published">Published</button>
        <button className="btn btn-link" type='button' onClick={this.handleClick} data-filter="Submitted">Submitted</button>
        {blogs}
      </div>
    )
  }
}
export default StatusList;
