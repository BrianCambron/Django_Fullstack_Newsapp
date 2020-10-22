import React, { Component } from 'react';
import Cookies from 'js-cookie';

class CreateProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: null,
      preview: '',
    }
    this.addPicture = this.addPicture.bind(this)
    this.handleImage = this.handleImage.bind(this)
  }
  addPicture(event, file){
    event.preventDefault();
    // const formData = new FormData().append('avatar', file.name);
    const csrftoken = Cookies.get('csrftoken');
    fetch('/api/v1/profile/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'multipart/form-data;boundary="boundary"'
      },
      body: JSON.stringify(file),
    })
    .then(response => response.json())
    .then(data => {
      const formData = new FormData();
      formData.append('avatar', file);
    })
    .catch(error => console.log("Error:", error));
  }

  handleImage(e){
    let file = e.target.files[0];
    this.setState({
      image: file
    });

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        preview: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  render(){
    return(
      <form className="col-12 col-md-6 mb-5" onSubmit={(event) => this.addPicture(event, this.state)}>
        <div className="form-group">
          <label htmlFor="avatar">Choose a profile picture:</label>
          <input type='file' id="avatar" name="avatar" onChange={this.handleImage}/>
          <img src={this.state.preview} alt=''/>
        </div>
        <button className="btn btn-primary">Add Profile</button>
      </form>
    )
  }
}
export default CreateProfile;
