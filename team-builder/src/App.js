import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid'
import MemberForm from './MemberForm.js'
import TeamMember from './TeamMember.js'

const initialTeamMember = [

  {
    id: uuid(),
    username: 'MrMasters',
    email: 'robert@robertisawesome.com',
    role: 'Software Architect'
  },
]

const initialValues = {
  username: '',
  email: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamMember})
}

const fakeAxiosPost = (url, { username, email, role }) => {
  const newMember = { id: uuid(), username, email, role }
  return Promise.resolve({ status: 200, success: true, data: newMember })
}

function App() {

  const [members, setMembers ] = useState([])

  const [ formValues, setFormValues ] = useState(initialValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {

      const member = {
        username: formValues.username.trim(),
        email: formValues.email.trim(),
        role: formValues.role
      }
    

    if (!member.username || !member.email)
     return 
      fakeAxiosPost('fake.com', member)
      .then(good =>{
        const newMemAPI = good.data
        setMembers([ ...members, newMemAPI])
        // debugger
      })
      .catch(bad => {
        console.log(bad)
        debugger
      })
      .finally (() => {
        setFormValues(initialValues)
      })
  }

useEffect(() => {
  fakeAxiosGet('fakeapi.com').then(good => setMembers(good.data))
}, [])

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <MemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
{
  members.map(member =>{
    return (
      <TeamMember key = {member.id} info={member} />
    )
  })
}
    </div>
  );
}

export default App;
