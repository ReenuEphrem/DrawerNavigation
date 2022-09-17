import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView ,DrawerItemList} from '@react-navigation/drawer';

import Home from './src/drawer/Home';
import Profile from './src/drawer/Profile';
import AboutUs from './src/drawer/AboutUs';
import Settings from './src/drawer/Settings';
import Records from './src/drawer/Records';
import Refund from './src/drawer/Refund';
import Wallet from  './src/drawer/Wallet';
import Hekp from  './src/drawer/Help';
import DrawerContent from './src/drawer/DrawerContent'
import Help from './src/drawer/Help';

const Drawer = createDrawerNavigator();

// const DrawerContent =(props) =>{
//   return<DrawerContentScrollView{...props}>
//   <View>
//     <View>

//     </View>
//   </View>
//   <Text>Logout</Text>
//     <DrawerItemList{...props} />
//   </DrawerContentScrollView>
// }
const App = () =>{
  return (
    <NavigationContainer>
      
      <Drawer.Navigator drawerContent={(props)=><DrawerContent {...props}/>}>
      <Drawer.Screen 
         name='Home' 
         component={Home} options={{headerShown:false}}
        />
      <Drawer.Screen  
         name='Profile'
         component={Profile}  options={{headerShown:false}}
         />
          <Drawer.Screen  
         name='Wallet'
         component={Wallet} options={{headerShown:false}}
         />
           <Drawer.Screen  
         name='Records'
         component={Records} options={{headerShown:false}}
         />
           <Drawer.Screen  
         name='Refund'
         component={Refund} options={{headerShown:false}}
         />
        <Drawer.Screen  
         name='Settings'
         component={Settings} options={{headerShown:false}}
        />
          <Drawer.Screen  
         name='AboutUs'
         component={AboutUs} options={{headerShown:false}}
         />
          <Drawer.Screen  
         name='Help'
         component={Help} options={{headerShown:false}}
         />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;
