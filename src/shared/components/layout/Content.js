import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  static prop_types = {
    children: PropTypes.element.isRequired,
  };
  render() {
    const { children } = this.props;
    return <main> {children}</main>;
  }
}
export default Content;
