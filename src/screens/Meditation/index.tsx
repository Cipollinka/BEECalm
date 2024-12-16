import React, {useEffect, useState} from 'react';
import CustomText from '@/components/ui/Text';
import {Mood} from '@/types';
import MainBackgroundWrapper from '@/components/layout/MainWrapper';
import {TouchableOpacity, View} from 'react-native';
import Slider from '@react-native-community/slider';
import Sound from 'react-native-sound';
import ArrowIcon from '@/assets/icons/arrow.svg';
import Row from '@/components/layout/Row';
import LinearGradient from 'react-native-linear-gradient';
import PlayIcon from '@/assets/icons/play.svg';
import PauseIcon from '@/assets/icons/pause.svg';
import {useUserStore} from '@/stores/userStore';
import {Screens, UseNavigationProp} from '@/types/navigation';
import {useNavigation} from '@react-navigation/native';

const labelBtKey = {
  [Mood.RELAXED]: 'Morning meditation preset',
  [Mood.INSPIRED]: 'Evening meditation preset',
  [Mood.STRESSED]: 'BEECALM meditation preset',
};

const musicByKey = {
  [Mood.RELAXED]: 'relaxed.wav',
  [Mood.INSPIRED]: 'inspired.mp3',
  [Mood.STRESSED]: 'stressed.wav',
};

export default function Meditation({route}: {route: any}) {
  const nav = useNavigation<UseNavigationProp>();

  const key = (route?.params?.key as Mood) || Mood.RELAXED;
  const label = labelBtKey[key];

  const currentMood = useUserStore(state => state.currentMood) as Mood;
  const setTotalListeningTime = useUserStore(
    state => state.setTotalListeningTime,
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [sound, setSound] = useState<Sound | null>(null);

  const selectedMusicPath = musicByKey[key];

  useEffect(() => {}, [duration, currentTime]);

  useEffect(() => {
    const soundInstance = new Sound(
      selectedMusicPath,
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('Failed to load the sound', error.code);
          return;
        }
        setDuration(soundInstance.getDuration());
        setSound(soundInstance);
      },
    );

    return () => {
      soundInstance.release();
    };
  }, [selectedMusicPath]);

  const handlePlayPause = () => {
    if (!sound) return;
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play(error => {
        if (error) {
          console.error('Playback failed due to error:', error);
        } else {
          setIsPlaying(true);
        }
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (value: number) => {
    if (!sound) return;
    sound.setCurrentTime(value);
    setCurrentTime(value);
  };

  const handleSkipForward = () => {
    if (!sound) return;
    const newTime = Math.min(currentTime + 10, duration);
    sound.setCurrentTime(newTime);
    setCurrentTime(newTime);
  };

  const handleSkipBackward = () => {
    if (!sound) return;

    const newTime = Math.max(currentTime - 10, 0);
    sound.setCurrentTime(newTime);
    setCurrentTime(newTime);
  };

  useEffect(() => {
    if (!sound) return;

    const intervalId = setInterval(() => {
      if (isPlaying) {
        sound.getCurrentTime(seconds => {
          setCurrentTime(seconds);
          console.log('seconds', seconds);
          console.log('duration', duration);

          if (seconds >= duration - 2) {
            setIsPlaying(false);
            nav.navigate(Screens.MEDITATION_END);
          }
          setTotalListeningTime(prevTime => prevTime + 1);
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const formattedTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <MainBackgroundWrapper bottomBlock navDisabled={!currentMood}>
      <LinearGradient
        colors={['#F9BF2B00', '#F9BF2B']}
        style={{
          width: '100%',
          height: 700,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
      <View style={{width: '100%', alignItems: 'center'}}>
        <CustomText fw="black" color="#fff" fs={22} mt={40}>
          {label}
        </CustomText>

        <View
          style={{
            marginTop: 20,
            marginHorizontal: 'auto',
            borderRadius: 500,
            height: 30,
            width: 88,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFEAB5',
          }}>
          <CustomText fw="bold" fs={17}>
            {formattedTime(duration)}
          </CustomText>
        </View>

        <Row gap={10} mt={50} style={{marginHorizontal: 'auto'}}>
          <TouchableOpacity onPress={handleSkipBackward}>
            <ArrowIcon />
          </TouchableOpacity>
          <Slider
            style={{width: 240, height: 40}}
            minimumValue={0}
            maximumValue={duration}
            value={currentTime}
            onSlidingComplete={handleSeek}
          />
          <TouchableOpacity onPress={handleSkipForward}>
            <ArrowIcon style={{transform: [{scaleX: -1}]}} />
          </TouchableOpacity>
        </Row>

        <TouchableOpacity onPress={handlePlayPause}>
          <View>
            {isPlaying ? (
              <PauseIcon width={58} height={58} style={{marginTop: 5}} />
            ) : (
              <PlayIcon />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </MainBackgroundWrapper>
  );
}
