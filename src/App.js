
import './App.css';
import Main from './component/main1.js';
import Footer from './component/footer1.js';
import Header from './component/header';
import BasicExample from './component/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import data from './component/data.json';
import SelectedBeast from './component/SelectedBeast';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allbeast: data,
      SelectedBeast: {},
      showModal: false
    }
  }

  displayModal = (beast) => {
    this.setState({ showModal: true, SelectedBeast: beast })
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }

  displayhorns = (e) => {
    const hornsNumber = parseInt(e.target.value);
    let filterData = data; // return all the beast
    if (hornsNumber) {
      filterData = data.filter(item => item.horns === hornsNumber);// filter method have call back function

    }
    this.setState({ allbeast: filterData })
  }

  render() {
    return (
      <div className="App">
        <BasicExample />
        <Header />
        <Main allbeast={this.state.allbeast} displayModal={this.displayModal} displayhorns={this.displayhorns}/> 
        <SelectedBeast show={this.state.showModal} handleClose={this.handleClose} SelectedBeast={this.state.SelectedBeast} />
        <Footer />

      </div>
    );
  }
}

export default App;
