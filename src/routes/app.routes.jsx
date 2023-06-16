import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'
import { Details } from '../pages/Details'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}