import { View, Text } from 'react-native'
import React from 'react'
import Root from './src/navigation/root'
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { AuthProvider } from './src/navigation/authProvider'

const App = () => {
  return (
    <SafeAreaProvider>

     {/* <AuthProvider > */}
        <Root />
     {/* </AuthProvider> */}
    </SafeAreaProvider>
  )
}

export default App