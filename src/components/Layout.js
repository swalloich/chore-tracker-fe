import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <>
      <header>
        <Nav
          homeLink={{ tp: '/', content: 'Chore Tracker' }}
          links={[
            { to: '/', displayText: 'Home' },
            { to: '/dashboard', displayText: 'Dashboard' },
            { to: '/chores', displayText: 'Chores' },
          ]}
        />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
