import React from 'react';
import propTypes from 'prop-types';

//import Home from './Home/Home';
import Header from '../shared/components/layout/Header';
import Footer from '../shared/components/layout/Footer';
import Content from '../shared/components/layout/Content';
//import Todo from './Todo/Todo';
//import Numbers from './Numbers/Numbers';
//import Chart from './Chart/Chart';
//import { render } from '@testing-library/react';
//import Timer from './Pomodoro/Timer';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      chartType: 'bar',
    };
    this.columns = [
      ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
      ['ETH', 2000, 3000, 50000, 4000, 3000, 940],
      ['XRP', 100, 200, 300, 500, 400, 300],
    ]; 
  }
 /*  setBarChart=()=>{
    this.setState({
      chartType:'bar'
    });
  }
  setAreaChart=()=>{
    this.setState({
      chartType:'area'
    });
  } */
  render() {
    return (
      <div className="App">
        <Header title="Tienda de Libros"></Header>
        <Content>
          {this.props.children}
       {/*    <Timer></Timer> */}
          {/*<Home></Home>*/}
          {/*<Todo></Todo>*/}
          {/*<Numbers></Numbers>*/}
       {/*    <div>
            <Chart columns={this.columns} chartType={this.state.chartType}></Chart>
            <p>
              Chart Type
              <button onClick={this.setBarChart}>Bar Chart</button>
              <button onClick={this.setAreaChart}> Area Chart</button>
            </p>
          </div> */}
        </Content>
        <Footer></Footer>
      </div>
    );
  }
}
App.propTypes={
  children : propTypes.element,
};
export default App;
