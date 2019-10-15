import React from 'react';
import Greeter from './Greeter'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        greeting: '',
        email: ''
      }
    }
  }
  handleSubmit = ()=>{
    var confirmed = window.confirm(`Is your name really ${this.state.form.greeting}`)
    console.log("this was confirmed?", this.state.form)
  }
  handleChange = (e) => {
    const{ form } = this.state 
    form[e.target.name] = e.target.value
    this.setState({form})
  }
  render(){
    return (
      <div className="App">
        <label>Greeting</label>
        <input
          type="text"
          name="greeting"
          onChange={this.handleChange}
          value = {this.state.form.name}
          />
        <br />
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={this.handleChange}
          value={this.state.form.email}
          />
          <button
            onClick={this.handleSubmit}
          >
            Submit Value
          </button>
          
          <br />
          <Greeter name={this.state.form.name} />
      </div>
    );
  }
}

export default App;
