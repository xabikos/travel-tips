import React, { Component } from 'react';

import authentication from 'react-azure-adb2c';

class MembersArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: []
    };
  }

  componentDidMount() {
    const token = authentication.getAccessToken();
    const fetchOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetchOptions.headers.Authorization = `Bearer ${token}`;
    fetch('http://localhost:5000/api/values', fetchOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          values: data
        });
      });
  }

  render() {
    return (
      <div>
        This is an authenticated route
        {this.state.values &&
          this.state.values.map(v => <div>{v}</div>)
        }
      </div>
    );
  }
}

export default MembersArea;