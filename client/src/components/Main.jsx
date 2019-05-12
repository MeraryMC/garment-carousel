
import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:8000/${body.file}` });
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
      <div className = "upload_form">
        <div>
          <input className="no_file_chosen" ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <input className="enter_name" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        </div>
        <br />
        <div>
          <button className="upload_button">Upload</button>
        </div>
        <img className="upload_image" src={this.state.imageURL} alt="img" width="250" height="250" crop="fill"/>
        </div>
      </form>
    );
  }
}

export default Main;