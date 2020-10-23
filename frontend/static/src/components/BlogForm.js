import React, { Component } from 'react';
import './BlogForm.css'


class BlogForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      title:'',
      body:'',
      author: '',
      isTopStory: false,
      created_at: new Date(),
      category:'TVL',
      status:'DFT',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    const is_staff = localStorage.getItem('is_staff');
    // console.log('is_staff', typeof is_staff);
    console.log('rendering Blog Form');
    return(
      <React.Fragment>
      <form className="col-12 col-md-6 mb-5 form" onSubmit={(event) => {this.props.addBlog(event, this.state); this.setState({title:'', body:'', author:''})}}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className ="form-control" id="title" name="title" value={this.state.title} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea className="form-control" id="body" name="body" rows="8" value={this.state.body} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" className ="form-control" id="author" name="author"value={this.state.author} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" className="form-control" name="category" value={this.state.category} onChange={this.handleChange}>
            <option value="TVL">Travel</option>
            <option value="SPRT">Sports</option>
            <option value="ENT">Entertainment</option>
            <option value="FD">Food</option>
          </select>
        </div>
        <div className="form-bottom">
          <label htmlFor="status">Post Status</label>
          <select id="status" className="form-control" name="status" value={this.state.status} onChange={this.handleChange}>
          {
            is_staff === 'true'
            ?
            <>
              <option value="DFT">Draft</option>
              <option value="SMTD">Submitted</option>
              <option value="PBSHD">Published</option>
            </>
            :
            <>
              <option value="DFT">Draft</option>
              <option value="SMTD">Submitted</option>
            </>
          }
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Post</button>
      </form>
      </React.Fragment>
    )
  }
}





export default BlogForm;
