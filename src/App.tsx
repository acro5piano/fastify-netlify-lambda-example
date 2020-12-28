import React from 'react'
import { Provider as UrqlProvider } from 'urql'
import { Hello } from './components/Hello'
import { urqlClient } from './services/urqlClient'

function App() {
  return (
    <React.Suspense fallback={'loading...'}>
      <UrqlProvider value={urqlClient}>
        <Hello />
      </UrqlProvider>
    </React.Suspense>
  )
}

export default App
