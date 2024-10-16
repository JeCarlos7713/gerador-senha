import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './pages/home'
import Passwords from './pages/passwords'
import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export function Routes(){
    return(
        <Tab.Navigator>
           <Tab.Screen 
                name='home' 
                component={Home} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}) => focused ? <Ionicons size={size} color={color} name='home' /> : <Ionicons size={size} color={color} name='home-outline' />
                }}
            />
           <Tab.Screen 
                name='passwords' 
                component={Passwords} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}) => focused ? <Ionicons size={size} color={color} name='lock-closed' /> : <Ionicons size={size} color={color} name='lock-closed-outline' />
                }}
            />
        </Tab.Navigator>
    )
}
