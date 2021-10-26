import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountDue: 0,
      amountReceived: 0,
      changeDue: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
      }
    
      this.calculateChange = this.calculateChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  };

  calculateChange(event) {
    let amountReceived = Number(this.state.amountReceived * 100);
    let amountDue = Number(this.state.amountDue * 100);
    let subTotal = amountReceived - amountDue;
    let ones = Math.floor(subTotal / 100);
    let quarters = Math.floor((subTotal - ones * 100) / 25);
    let dimes = Math.floor((subTotal - ones * 100 - quarters * 25) / 10);
    let nickels = Math.floor((subTotal - ones * 100 - quarters * 25 - dimes * 10) / 5);
    let pennies = Math.floor((subTotal - ones * 100 - quarters * 25 - dimes * 10 - nickels * 5));
    let totalChange = subTotal / 100;
    let twenties = Math.floor(ones / 20);
    let fives = Math.floor(ones / 5);
    let tens = Math.floor(ones / 10);

    this.setState({
      totalChange: totalChange.toFixed(2),
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies,
      twenties: twenties,
      tens: tens - (twenties * 2),
      fives: fives - (tens * 2),
      ones: ones - (fives * 5),

    })

  };

  render() {
    return (
    <div className='container'>
      <h1 style= {{color:'white'}}>Change Calculator</h1>
      <hr />
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}></div>
      
      <div className='row justify-content-start'>
        <div className='col-4'>
          <div className='card'>
          
            <div className='card-header'>Enter Information</div>
          
            <div className='card-body'>

              <h4 className='card-title'>How much is due?</h4>
              <input name='amountDue' onChange={this.handleChange} value={this.state.amountDue} type='text'></input>
              <br></br>
              <br></br>

              <h4 className="card-title">How much is received?</h4>
              <input name='amountReceived' onChange={this.handleChange} value={this.state.amountReceived} type='text'></input>

              </div>
              <br></br>
              <div className='card-footer'>
                <div className='d-grid gap-2'>
                <button className='btn btn-primary' onClick={this.calculateChange}>Calculate</button>
                </div>
               </div>              
               </div>
               </div>
              <br></br>
              
      
      <div className='col-8'>
          <div className='card text-center'>
            <div className='card-body'>
              <div className='alert alert-success' role='alert'>The total change due is ${this.state.totalChange}</div>

              <div className='row'>
                <div className='col'>
                  <div className='alert alert-secondary' role='alert'>
                    <strong>Twenties</strong>
                    <h5 className='change'>{this.state.twenties}</h5>
                  </div>
                </div>

                <div className='col'>
                  <div className='alert alert-secondary' role='alert'>
                    <strong>Tens</strong>
                    <h5 className='change'>{this.state.tens}</h5>
                  </div>
                </div>

                <div className='col'>
                  <div className='alert alert-secondary' role='alert'>
                    <strong>Fives</strong>
                    <h5 className='change'>{this.state.fives}</h5>
                  </div>
                </div>

                <div className='col'>
                  <div className='alert alert-secondary' role='alert'>
                    <strong>Ones</strong>
                    <h5 className='change'>{this.state.ones}</h5>
                  </div>
                </div>
              </div>
            
              <div className='row'>
                <div className='col'>
                  <div className='alert alert-secondary' role='alert'>
                    <strong>Quarters</strong>
                    <h5 className='change'>{this.state.quarters}</h5>
                  </div>
                </div>

                <div className='col'>
                  <div className='alert alert-secondary' role='alert'>
                    <strong>Dimes</strong>
                    <h5 className='change'>{this.state.dimes}</h5>
                  </div>
                </div>

                <div className='col'>
                  <div className='alert alert-secondary' role='alert'>
                    <strong>Nickels</strong>
                    <h5 className='change'>{this.state.nickels}</h5>
                  </div>
                </div>

                <div className='col'>
                  <div className='alert alert-secondary' role='alert'>
                    <strong>Pennies</strong>
                    <h5 className='change'>{this.state.pennies}</h5>
                  </div>
                </div>

            
           
           </div>   
          </div>
        </div>    
      </div>
    </div>
  </div>

       


    )
  }
}

export default App;
