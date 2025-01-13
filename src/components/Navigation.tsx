import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList, ScreenNames} from '@/models/navigation';

import Greetings from '@/views/Greetings';
import AfterGreetings from '@/views/AfterGreetings';
import Inspire from '@/views/Inspire';
import Main from '@/views/Main';
import Meditation from '@/views/Meditation';
import Mood from '@/views/Mood';
import Statistic from '@/views/Statistic';
import TopicsOverview from '@/views/Topics/Overview';
import TopicsDetails from '@/views/Topics/Details';
import EndMeditation from '@/views/EndMeditation';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.GREETINGS}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenNames.GREETINGS} component={Greetings} />
        <Stack.Screen
          name={ScreenNames.AFTER_GREETINGS}
          component={AfterGreetings}
        />
        <Stack.Screen name={ScreenNames.INSPIRE} component={Inspire} />

        <Stack.Screen name={ScreenNames.MOOD} component={Mood} />

        <Stack.Screen name={ScreenNames.MAIN} component={Main} />
        <Stack.Screen name={ScreenNames.MEDITATION} component={Meditation} />
        <Stack.Screen
          name={ScreenNames.MEDITATION_END}
          component={EndMeditation}
        />

        <Stack.Screen name={ScreenNames.STATISTIC} component={Statistic} />

        <Stack.Screen
          name={ScreenNames.TOPICS_OVERVIEW}
          component={TopicsOverview}
        />
        <Stack.Screen
          name={ScreenNames.TOPICS_DETAILS}
          component={TopicsDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
