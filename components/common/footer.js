import React, { Component } from 'react';
export default class Footer extends Component {
  constructor(props, context) {
    super(props, context);

  }
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <h4 className="text-center">Footer</h4>
        </div>
      </footer>
    );
  }
}
