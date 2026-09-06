import React from 'react'
import App_routes from '../app.routes'
import { AuthProvider } from './features/auth/auth.context'

const App = () => {
  return (
    <AuthProvider>
      <div >
      
     <App_routes></App_routes>
    </div>
    </AuthProvider>
    
  )
}

export default App
