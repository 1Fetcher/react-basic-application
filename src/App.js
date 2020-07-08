import React, { Component } from 'react';

import Table from './Table';
import Form from './Form';

import Api from './Api';

class App extends Component {

  state = {
    resumes: [
      
    ]
  }

  removeResume = (id) => {
    const { resumes } = this.state;

    this.setState({
      resumes: resumes.filter((resume, i) => {
        return i !== id;
      })
    })
  }

  handleSubmit = (resume) => {
    this.setState({ resumes: [...this.state.resumes, resume] })
  }

  render() {
    const heading = <h1 className="site-heading">React, Tutorials Basic</h1>
   
    return (
      <div className="App">
        <div className="container">
          {heading}
          <Table resumeData={this.state.resumes} removeResume={this.removeResume} />
          <Form handleSubmit={this.handleSubmit} />

          <Api />
        </div>
      </div>
    );
  }
}

export default App;
