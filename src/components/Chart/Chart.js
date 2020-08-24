import React, { Component } from 'react';
import PropTypes from 'prop-types';
import c3 from 'c3';

import './Chart.css';

class Chart extends Component {
  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart() {
    c3.generate({
      bindto: '#chart', //donde se va renderizar este componente
      data: {
        columns: this.props.columns,
        type: this.props.chartType,
      },
    });
  }

  render() {
    return <div id="chart" />;
  }
}

Chart.propTypes = {
  columns: PropTypes.array,
  chartType: PropTypes.string,
};
export default Chart;