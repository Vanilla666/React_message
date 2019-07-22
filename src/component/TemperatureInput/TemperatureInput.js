import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
  
  class TemperatureInput extends React.Component {
    constructor(props) { //建構子
      super(props);
      this.handleChange = this.handleChange.bind(this);
    //   this.state = {temperature: ''}; //初始化輸入對話框
    }
  
    handleChange(e) { //輸入時觸發的函數
    //   this.setState({temperature: e.target.value});
         this.props.onTemperatureChange(e.target.value); //呼叫自定義父組件事件
    }
  
    render() {
    //   const temperature = this.state.temperature;
     const temperature = this.props.temperature; //讀取外面輸入的值
      const scale = this.props.scale; // 拿外面輸入的scale
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend> {/* input value 即時回應當前輸入值 */}
          <input value={temperature} 
                 onChange={this.handleChange} />  {/* 輸入時會改變temperature */}
        </fieldset>
      );
    }
  }


  export default TemperatureInput;