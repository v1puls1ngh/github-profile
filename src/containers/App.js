import React from 'react';
import './App.css';
import EnterProfileName from '../components/enterProfileName.js';
import ProfileData from '../components/profileData.js';

class App extends React.Component{
  state = {
    username: '',
    profileData: undefined,
    displayProfile: false
  }

  changeHandler = (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  keypressHandler = (e) => {
    if (e.key === 'Enter') {
      fetch('https://api.github.com/users/'+this.state.username).then((result) => {
        return result.json();
      }).then(resData => {
        this.setState({
          profileData: resData,
          displayProfile: true
        })
      }).catch(err => console.log(err));
    }
  }

  render(){
    return(
      <div>
        {!this.state.displayProfile ? 
        <EnterProfileName username={this.state.username} change={this.changeHandler} keypress={this.keypressHandler}/> : 
        <ProfileData userData={this.state.profileData} />}
      </div>
    )
  }
}

export default App;
