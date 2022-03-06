import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { activitiy: '', listactivities: [], disabled: true, edited: 'Edit', done: true, marked:'Not Done'}
  }
  handleChange = (e) => {
    this.setState({ activitiy: e.target.value });
  }
  addValue = () => {
    let tempActivity = ""
    let { activitiy, listactivities } = this.state
    //tempActivity = activitiy
    //this.setState({ activitiy: tempActivity})
    listactivities.push("dumyy")
    //this.setState({ activitiy: '' });
  }
  deleteValue = (id) => {
    let activities = this.state.listactivities
    let tempActivities = activities.filter((item, index) => index !== id)
    this.setState({ listactivities: tempActivities})
  }
  editValue = (id) => {
    let activities = this.state.listactivities
    let tempActivities = activities.find((item, index) => {
      console.log("selected",id)
      console.log(item)
      console.log(index)
      return index === id
    })
    console.log(tempActivities)
    console.log('edit clicked!')
    //this.setState({ disabled: false})
  }
  done = (id) => {
    console.log(id)
    let activities = this.state.listactivities
    let tempActivities = activities.find((item, index) => {
      if(index === id)this.setState({ marked: 'Done'})
      return id
    })
    console.log(tempActivities)
    
  }
  
  render() {
    return (
      <div>
        <h1>TODO App Application</h1>
        <input 
          type="text"
          value={this.state.activitiy}
          placeholder="Input your activity"
          onChange={this.handleChange}
        />
        <button class="button-item" onClick={this.addValue}>Add Item</button>
        <ul>
          {this.state.listactivities.map((items, index) => 
              <li key={index} id={index} value={items}>
                    <input 
                      type="text"
                      class="input-class"
                      value={items}
                      placeholder={index}
                      disabled = {this.state.disabled}
                    />
                    <button onClick={() => this.editValue(index)}>{this.state.edited}</button>
                    
                    <button onClick={() => this.deleteValue(index)}>Delete</button>

                    <button onClick={() => this.done(index)}>{this.state.marked}</button>
              </li>
          )}
        </ul>
      </div>
    );  
  }
}

export default App;
