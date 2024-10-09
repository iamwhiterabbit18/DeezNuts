import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Landing from '@features/landing/Landing';
import Newsfeed from '@features/newsfeed/Newsfeed';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/nf" element={<Newsfeed />} />
    </Routes>
  )
}

export default App