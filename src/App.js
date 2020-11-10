import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavBar from './Components/NavBar/navBar'
import LandingContainer from './Components/LandingContainer/landing'
import ContentCrucero from './Views/ContentCrucero/crucero'
import CardRegistro from './Views/CardRegistro/cardResgistro'
import CardBases from './Views/CardBases/cardBases'
import CardPremio from './Views/CardPremio/cardPremio'
import {navInfo} from './Data/dataNavBar'
import {firstLanding, secondLanding, thirdLanding, fourthLanding} from './Data/dataLanding'

function App() {
  return (
    <div className="App">
      {/* Nav Component */}
      <NavBar data={navInfo}> </NavBar>

      {/* First Landing */}
      <LandingContainer data ={firstLanding}> 
        <ContentCrucero></ContentCrucero>
      </LandingContainer>

      {/* Second Landing */}
      <LandingContainer data={secondLanding}>
        <CardRegistro></CardRegistro>
      </LandingContainer>

      {/* Third Landing */}
      <LandingContainer data={thirdLanding}>
        <CardBases></CardBases>
      </LandingContainer>

      {/* Fourth Landing */}
      <LandingContainer data={fourthLanding}>
        <CardPremio></CardPremio>
      </LandingContainer>
    </div>
  );
}

export default App;
