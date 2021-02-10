import './App.css';
import Header from './components/Header'

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Header />
        <div className="app__itemsContainer">
          <Item 
            title='Lowest Cost Solar Panels in America'
            desc='Money back Guarantee'
            descLink=''
            LBT='Order Now'
            leftBtnLink=''
            RBT='Learn More'
            rightBtnLink=''
            twoButtons='true'
            backgroundImg={SolarPanels}
            first
          />
          <Item 
            title='Model S'
            desc='$69.420'
            descLink=''
            backgroundImg={ModelS}
            LBT='Custom Order'
            leftBtnLink=''
            RBT='Learn More'
            rightBtnLink=''
            twoButtons='true'
          />
          <Item 
            title='Model 3'
            desc='$69.420'
            descLink=''
            backgroundImg={Model3}
            LBT='Custom Order'
            leftBtnLink=''
            RBT='Learn More'
            rightBtnLink=''
            twoButtons='true'
          />
          <Item 
            title='Model X'
            desc='$69.420'
            descLink=''
            backgroundImg={ModelX}
            LBT='Custom Order'
            leftBtnLink=''
            RBT='Learn More'
            rightBtnLink=''
            twoButtons='true'
          />
          <Item 
            title='Model Y'
            desc='$69.420'
            descLink=''
            backgroundImg={ModelY}
            LBT='Custom Order'
            leftBtnLink=''
            RBT='Learn More'
            rightBtnLink=''
            twoButtons='true'
          />
          <Item 
            title='Solar for New Roofs'
            desc='Solar Roof Costs Less than a new roof plus solar panels'
            descLink=''
            backgroundImg={SolarRoof}
            LBT='Order Now'
            leftBtnLink=''
            RBT='Learn More'
            rightBtnLink=''
            twoButtons='true'
          />
          <Item 
            title='Accessories'
            desc='$69.420'
            descLink=''
            backgroundImg={Accessories}
            LBT='Shop Now'
            leftBtnLink=''
            RBT=''
            rightBtnLink=''
            twoButtons='false'
          />
        </div>
    </div>
  );
}

export default App;
