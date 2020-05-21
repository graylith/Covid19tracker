import React from 'react';
import {Cards, Chart, CountryPicker} from './Components';
import styles from './app.module.css';
import {fetchdata} from './api';
import coronaImage from './images/image.png';
import corona from './images/giphy.gif';

class App extends React.Component{
state = {
  data : {},
  country: '',
}
  async componentDidMount(){
    const fetchedData = await fetchdata();
    this.setState({data : fetchedData});
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchdata(country);
    this.setState({data : fetchedData, country : country});
  }
  render(){
    const {data} = this.state
    const {country} = this.state
    //console.log(this.state.country);
    return(
      <div className={styles.container}>
       <img className={styles.image1} src={corona} alt="covid_icon"></img>
       <img className={styles.image} src={coronaImage} alt="COVID-19"/>
        <Cards data = {data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;
