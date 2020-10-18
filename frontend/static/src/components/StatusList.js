import React, { Component } from 'react';





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
    .map(blog => <li className="list-group-item list-group-item-action col"key={blog.id}><h3>{blog.title}</h3><p>{blog.author}</p><p>{blog.body}</p><button className="btn btn-danger" onClick={() => this.props.deleteBlog(blog.id)}>&#x2718;</button></li>)
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
