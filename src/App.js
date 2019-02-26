import React from 'react';

import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'c87ae1ce207b86d32f1ac31b319e04ad';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humiduty: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humiduty: data.main.humiduty,
      description: data.weather[0].description,
      error: 'error'
    })
    console.log(this.state.temperature);
  }
  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App