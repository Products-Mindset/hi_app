import { StyleSheet, Platform, SafeAreaView, StatusBar} from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store'
import AppNavigator from './src/navigation/AppNavigator'
import PersistLoadingScreen from './src/components/PersistLoadingScreen'
import { SafeAreaView as AndroidSafeAreaView } from 'react-native-safe-area-context';
export const CustomSafeAreaView = Platform.OS === 'ios' ? SafeAreaView : AndroidSafeAreaView;
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<PersistLoadingScreen />} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
        {/* <CustomSafeAreaView style={styles.container}> */}
          <StatusBar 
            barStyle="light-content" 
            backgroundColor="transparent" 
            translucent={Platform.OS === 'android'}
            hidden={false}
          />
          <AppNavigator />
        {/* </CustomSafeAreaView> */}
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})