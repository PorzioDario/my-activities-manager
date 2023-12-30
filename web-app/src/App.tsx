import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

type Activity = {
  name: string
  dueDate: Date
}

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  const generateRandomActivity = () => {
    const newAct = {
      name: 'Activity n.' + (activities.length + 1),
      dueDate: new Date()
    }
    setActivities([...activities, newAct])
  }

  return (
    <section>
      <div className="topBar">
        <img src={reactLogo} className="logo" alt="Vite logo" />
        <h1>My Activity Manager</h1>
      </div>
      <div className="mainSection">
        <ul className="actionList">
          {activities.map(act => <li className="activity">{act.name}</li>)}
        </ul>
      </div>
      <div className="footer">
        <button className="addNewActivity" onClick={generateRandomActivity}>
          Add New Activity
        </button>
      </div>
    </section>
  )
}

export default App
