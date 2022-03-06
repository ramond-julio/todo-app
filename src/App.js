import './App.css';
import React, { useState } from 'react';

const App = (props) => {
  const [activity, setActivity] = useState('');
  const [listActivities, setListActivities] = useState([]);
  const [indexEdited, setIndexEdited] = useState(-1);
  const handleChange = (e) => {
    //event yang ketrigger ketika ada perubahan value pada DOM yang declare onchange
    setActivity(e.target.value);
  }
  
  const addActivity = () => {
    console.log(activity)
    //let newListActivities = listActivities.map((activity, index) => activity)
    let objActivities = { activity: activity, marked: false}
    let newListActivities = listActivities.slice()
    //let newListActivities = [...listActivities]
    //let newListActivities = listActivities.filter((activity, index) => true)
    newListActivities.push(objActivities) //alamat newlist dengan alamat list beda
    setListActivities(newListActivities)
    setActivity('')
  }

  const deleteActivity = (id) => {
    let tempActivities = listActivities.filter((item, index) => index !== id)
    setListActivities(tempActivities)
  }

  //  1. copy state ke variable biar isi state baru (slice / spread)
  //  2. modifikasi elemen sesuai index yang dituju
  //  3. push ke state yang dituju
  const markActivity = (index) => {
    let newListActivity = listActivities.slice()
    listActivities[index].marked = !listActivities[index].marked
    setListActivities(newListActivity)
  }

  //edit ada 2 fungsi
  // 1. untuk mark index yang diedit
  // 2. untuk simpan hasil editannya

  //fungsi 1
  //  1. simpan index yang akan diedit 
  //  2. input nama baru untuk index yang telah disimpan 
  const editActivity = (index) => {
    setIndexEdited(index)
    setActivity(listActivities[index].activity)
  }
  
  //fungsi 2
  //  1. copy state ke variable biar isi state baru (slice / spread) 
  //  2. modifikasi nama elemen sesuai index yang telah disimpan  
  //  3. push ke state yang dituju 
  const saveEditedActivity = () => {
    let newListActivity = listActivities.slice()
    listActivities[indexEdited].activity = activity
    setListActivities(newListActivity)
    setActivity('')
    setIndexEdited(-1)
  }

  return <div>
    <h1>TODO App Application</h1>
    <input
      type="text"
      value={activity}
      placeholder="Input your activity"
      onChange={handleChange}
    />
    <button className="button-item" onClick={addActivity}>Add Item</button>
    <ul>
      {listActivities.map((items, index) =>
        <li key={index}> 
          {items.activity}
          <button onClick={() => { index === indexEdited ? saveEditedActivity() : editActivity(index)}}>{index === indexEdited ? 'Save' : 'Edit'}</button>
          <button onClick={() => deleteActivity(index)}>Delete</button>
          <button onClick={() => markActivity(index)}>{items.marked ? 'Done' : 'Not Done'}</button>
        </li>
      )}
    </ul>
  </div>
}

export default App;
