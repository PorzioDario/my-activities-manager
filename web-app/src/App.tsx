import { useState } from 'react'
import styled from 'styled-components'

import reactLogo from './assets/react.svg'
import type { Activity } from './types'
import { ActivityList } from './components/ActivityList'
import { NewActivityForm } from './components/NewActivityForm'

const Section = styled.section`
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const MainSection = styled.div`
  flex-grow: 2;
  overflow-y: scroll;
`
const Footer = styled.div`
  padding: 1em;
  display: flex;
  justify-content: right;
`

const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  padding-right: 3em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [addNew, setAddNew] = useState<boolean>(false)

  const submitForm = (newAct: Activity) => {
    setActivities([...activities, newAct])
    setAddNew(false)
  }

  return (
    <Section>
      <TopBar>
        <Logo src={reactLogo} className="logo" alt="Logo" />
        <h1>My Activity Manager</h1>
      </TopBar>
      <MainSection>
        {addNew ? <NewActivityForm onSavePress={submitForm} /> : <ActivityList activities={activities} />}
      </MainSection>
      <Footer>
        {!addNew &&
          <button className="addNewActivity" onClick={() => setAddNew(true)}>
            Add New Activity
        </button>
        }
      </Footer>
    </Section>
  )
}

export default App
