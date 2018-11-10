import React, { Component } from 'react';
import Steves from './Steves';
import AddSteve from './AddSteve';

class App extends Component {
  state = {
    steves : [
      { name: 'Raju', age: 30, belt: 'black', id: 1 },
      { name: 'Sakib', age: 40, belt: 'green', id: 2 },
      { name: 'Waheed', age: 55, belt: 'brown', id: 3 }
    ]
  }

  // create a function ..(functions as props)
  addsteve = (steve) => {
    steve.id = Math.random();

    let steves = [...this.state.steves, steve];
    this.setState({
      steves: steves
    });
  }

  // function for deleting data
  deleteSteve = (id) => {
    // console.log(id);
    let steves = this.state.steves.filter(steve => {
      return steve.id !== id
    });
    this.setState({
      steves: steves
    })

  }

  // Lifecycle Method
  componentDidMount(){
    console.log('Component Mounted');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('component updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>welcome</p>
        <Steves steves={this.state.steves} deleteSteve={this.deleteSteve} />
        <AddSteve addsteve={this.addsteve} />
      </div>
    );
  }
}

export default App;
