import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <>
      <Nav links={[
        { displayText: 'Home', url: '/' },
        { displayText: 'Dashboard', url: '/dashboard' },
        { displayText: 'Chores', url: '/chores' },
      ]} />
      <Outlet />
    </>
  )
}