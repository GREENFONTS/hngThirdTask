import './App.css';
import NavComponent from './components/shared/NavComponent';
import Complaince from './pages/complaince';
import "@fontsource/inter";
import Footer from './components/shared/Footer';

function App() {
  return (
    <div style={{"height":"max-content", "marginBottom":"0px", "paddingBottom":"0px"}}>
      <NavComponent />
      <Complaince />
      <Footer />
    </div>
  );
}

export default App;
