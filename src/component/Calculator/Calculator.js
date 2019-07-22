import React from 'react';
import TemperatureInput from '../TemperatureInput/TemperatureInput'; 

      
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  function tryConvert(temperature, convert) { //攝氏華氏互換 以及溫度輸出
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input); //轉換攝氏華氏
    const rounded = Math.round(output * 1000) / 1000; //取小數點第3位
    return rounded.toString();
  }

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
      }


      handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature:temperature}); //轉換好後存入state
      }
    
      handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature:temperature}); //轉換好後存入state
      }
  
    render() {
        const scale = this.state.scale; //查看是攝氏或是華氏
        const temperature = this.state.temperature; // 攝氏或是華氏轉換出來的溫度
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature; //攝氏轉成華氏
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;//華氏轉成攝氏
      return (
        <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} /> {/* 子元件觸發父組件事件 */}
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }

  function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }



  export default Calculator;