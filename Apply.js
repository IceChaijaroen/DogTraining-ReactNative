import React from 'react';
import { StatusBar,Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Dogtrain from './screens/dogtraining';
import Mydog from './screens/mydog';
import Doginfo from './screens/doginfo';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function LogoTitle() {
  return (
    <View>
    <Image
      style={{ width: 50, height: 70, alignItems: 'center', justifyContent: 'center' }}
      source={require('./img/LOGOcomwhite.png')}
    />
    </View>
  );
}

function stackheader(){
  return(
    <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{
        headerStyle: {
          backgroundColor: '#575757',
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              height: 140,
        },
        headerTintColor: '#fff',
      }}
    >
        <Stack.Screen
          name="Home"
          component={Doginfo}
          options={{headerTitle: props => <LogoTitle {...props} />,
            title: 'Dog traning',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Stack = createStackNavigator();

const App = () => {
  
  const Tab = createBottomTabNavigator();
  
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer >
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let imagepath;

            if (route.name === 'Doginfo') {
              imagepath = focused ? require('./img/istockphoto-1084516046-612x612pink.png') : require('./img/istockphoto-1084516046-612x612white.png')
            } else if (route.name === 'Dogtrain') {
              imagepath = focused ? require('./img/dog-trainingpink.png') : require('./img/dog-trainingwhi.png');
            }else if (route.name === 'Mydog') {
              imagepath = focused ? require('./img/194pink279.png') : require('./img/194de279.png')
            }

            // You can return any component that you like here!
            return <Image
            style={{ width: 35, height: 35 }}
            source={imagepath}
          />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          activeTintColor: '#FF7E7E',
          inactiveTintColor: 'rgba(0,0,0,0.6)',
          showLabel: false,
          style:{
            shadowColor: 'rgba(58,55,55,0.1)',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 20,
            shadowRadius: 15,
            elevation: 3,
            borderTopColor: 'transparent',
            backgroundColor:'#575757',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: 70
          }
        }}>
        <Tab.Screen name="Doginfo" component={Doginfo} />
        <Tab.Screen name="Dogtrain" component={Dogtrain} />
        <Tab.Screen name="Mydog" component={Mydog} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default App;