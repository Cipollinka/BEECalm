import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, Screens} from '@/types/navigation';

import Greetings from '@/screens/Greetings';
import AfterGreetings from '@/screens/AfterGreetings';
import Inspire from '@/screens/Inspire';
import Main from '@/screens/Main';
import Meditation from '@/screens/Meditation';
import Mood from '@/screens/Mood';
import Statistic from '@/screens/Statistic';
import TopicsOverview from '@/screens/Topics/Overview';
import TopicsDetails from '@/screens/Topics/Details';
import EndMeditation from '@/screens/EndMeditation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.GREETINGS}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screens.GREETINGS} component={Greetings} />
        <Stack.Screen
          name={Screens.AFTER_GREETINGS}
          component={AfterGreetings}
        />
        <Stack.Screen name={Screens.INSPIRE} component={Inspire} />

        <Stack.Screen name={Screens.MOOD} component={Mood} />

        <Stack.Screen name={Screens.MAIN} component={Main} />
        <Stack.Screen name={Screens.MEDITATION} component={Meditation} />
        <Stack.Screen name={Screens.MEDITATION_END} component={EndMeditation} />

        <Stack.Screen name={Screens.STATISTIC} component={Statistic} />

        <Stack.Screen
          name={Screens.TOPICS_OVERVIEW}
          component={TopicsOverview}
        />
        <Stack.Screen name={Screens.TOPICS_DETAILS} component={TopicsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
