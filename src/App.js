import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      banner: 'First name',
      lastname: 'Last name',
      isOpen: false,
    };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.textHandler = this.textHandler.bind(this);
    this.textName = this.textName.bind(this);
    console.log(this.props)
  }

  buttonHandler() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  textHandler(e) {
    this.setState({
      banner: e.target.value,
    })
  }

  textName(e) {
    this.setState({
      lastname: e.target.value,
    })
  }

  render() {
    let myVariable = <h2>Carlos Velasco</h2>;
    let myBanner;
    if (this.state.isOpen) {
      myBanner = (<form>
      First name:
      <input type="text" name="firstname"/>
      
      Last name:
      <input type="text" name="lastname"/>
    </form>)
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {myVariable}
          </p>
          {myBanner}
          {
            this.state.isOpen && 
            <Header banner={this.state.banner}/>
          }
          {this.props.test}
          <input value={this.state.banner} onChange={this.textHandler}/>
          <input value={this.state.lastname} onChange={this.textName}/>
          <button onClick={this.buttonHandler} >Click Me</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testReducer.test,
  };
};

const mapDispatchToProps = { doTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);