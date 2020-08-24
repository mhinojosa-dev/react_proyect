import React from 'react';

class Footer extends React.Component {
  render() {
    return <footer>&copy; Mauricio {new Date().getFullYear()}</footer>;
  }
}
export default Footer;
