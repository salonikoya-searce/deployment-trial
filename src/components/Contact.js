import React from "react";

class Contact extends React.Component {

    componentDidMount(){
        console.log(this.props)
    }
  render() {
    return (
      <div>
        {console.log(this.props)}
        <h3>Contact</h3>
        <p>Hi, this is Contact 1 page</p>
      </div>
    );
  }
}
export default Contact;
