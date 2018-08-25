import React, { Component } from 'react';





class Timer extends Component{

  render() {
    console.log('this is Timer component')
    return (
      <div>
        {this.props.startWith}
      </div>
    );
  }
}

class Login extends Component { 

  constructor(props){
    super(props);

    this.state = { currentValue : 150};


    setInterval(() => {this.setState({currentValue : this.state.currentValue - 1});},1000);


  }

  resetTimer = () => {this.setState({currentValue : 150});}
  lgin= ()=>{if(this.name=="admin" && this.password=="admin")
				{
					<div>Welcome
					</div>
				}else {<div>error
					</div> }			


						}

  render() {
    console.log('this is App component');
    return (
      <div className="App">
       <Timer startWith={this.state.currentValue}/>
       <button onClick={this.resetTimer}>Reset Value</button>

       <div>
       <input id ="username" labelName="Username: " inputType="text" parentFunction={this.name}  />
       <input id ="password" labelName="Password: " inputType="password" parentFunction={this.setPassword} />
       <button onClick={this.login}>Login</button>
       </div> 
      </div>
    );
  }
}



export default Login