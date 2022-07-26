
import './App.css';
import Main from './component/main1.js';
import Footer from './component/footer1.js';
import Header from './component/header';
import BasicExample from './component/navBar'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BasicExample />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
