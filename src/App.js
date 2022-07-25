
import './App.css';
import Main from './component/main1.js';
import Footer from './component/footer1.js';
import Header from './component/header';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Home</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
