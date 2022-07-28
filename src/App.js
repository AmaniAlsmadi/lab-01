
import './App.css';
import Main from './component/main1.js';
import Footer from './component/footer1.js';
import Header from './component/header';
import BasicExample from './component/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import data from './component/data.json';
import SelectedBeast from './component/SelectedBeast';
import Forms from './component/Forms';



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

  render() {
    return (
      <div className="App">
        <BasicExample />
        <Forms/>
        <Header />
        <Main allbeast={this.state.allbeast} displayModal={this.displayModal} />
        <SelectedBeast show={this.state.showModal} handleClose={this.handleClose} SelectedBeast={this.state.SelectedBeast} />
        <Footer />

      </div>
    );
  }
}

export default App;
