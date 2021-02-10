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
            desc='Money)back Guarantee'
            descLink=''
            backgroundImg={SolarPanels}
            leftBtnTxt='Order Now'
            leftBtnLink=''
            rightBtnText='Learn More'
            rightBtnLink=''
            twoButtons='true'
            first
          />
          <Item 
            title='Model S'
            desc='$69.420'
            descLink=''
            backgroundImg={ModelS}
            leftBtnTxt='Custom Order'
            leftBtnLink=''
            rightBtnText='Learn More'
            rightBtnLink=''
            twoButtons='true'
          />
          <Item 
            title='Model 3'
            desc='$69.420'
            descLink=''
            backgroundImg={Model3}
            leftBtnTxt='Custom Order'
            leftBtnLink=''
            rightBtnText='Learn More'
            rightBtnLink=''
            twoButtons='true'
          />
          <Item 
            title='Model X'
            desc='$69.420'
            descLink=''
            backgroundImg={ModelX}
            leftBtnTxt='Custom Order'
            leftBtnLink=''
            rightBtnText='Learn More'
            rightBtnLink=''
            twoButtons='true'
          />
          <Item 
            title='Model Y'
            desc='$69.420'
            descLink=''
            backgroundImg={ModelY}
            leftBtnTxt='Custom Order'
            leftBtnLink=''
            rightBtnText='Learn More'
            rightBtnLink=''
            twoButtons='true'
          />
          <Item 
            title='Solar for New Roofs'
            desc='Solar Roof Costs Less than a new roof plus solar panels'
            descLink=''
            backgroundImg={SolarRoof}
            leftBtnTxt='Order Now'
            leftBtnLink=''
            rightBtnText='Learn More'
            rightBtnLink=''
            twoButtons='true'
          />
          <Item 
            title='Accessories'
            desc='$69.420'
            descLink=''
            backgroundImg={Accessories}
            leftBtnTxt='Shop Now'
            leftBtnLink=''
            rightBtnText=''
            rightBtnLink=''
            twoButtons='false'
          />
        </div>
    </div>
  );
}

export default App;
