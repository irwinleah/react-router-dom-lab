// src/App.jsx
import { useState } from 'react';

import MailboxList from './components/MailboxList/MailboxList';
import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';

import { Route, Routes } from 'react-router'

const initialState = []


const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);

  function addBox(newBoxData) {
    newBoxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBoxData])

  }

  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<h1>Post Office</h1>} />
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox} />} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h2>Whoops Nothing here</h2>} />
      </Routes>
    </>
  )
};

export default App;
