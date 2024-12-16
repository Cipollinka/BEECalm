import {Share, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Row from './layout/Row';
import CustomText from './ui/Text';

import QuotesIcon from '@/assets/icons/quote.svg';
import TaskIcon from '@/assets/icons/task.svg';
import ShareIcon from '@/assets/icons/share.svg';

import Button from './ui/Button';

const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

interface Props {
  text: string;
  author?: string;
  isFirst?: boolean;
  isDone: boolean;
  setIsDone: (isDone: boolean) => void;
}

export default function Task({
  text,
  author,
  isFirst,
  isDone,
  setIsDone,
}: Props) {
  const [timer, setTimer] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const buttonText = isFirst
    ? 'Got it!'
    : isTimerActive || isDone
    ? 'Done'
    : 'Start task';
  const labelText = isFirst ? 'Your quote' : 'Your task';

  const handleDonePress = () => {
    if (!isFirst && !isDone && !isTimerActive) {
      setIsTimerActive(true);
      return;
    }
    setIsDone(true);
  };

  const handleShare = () => {
    Share.share({
      message: `${text} - ${author}`,
    });
  };

  useEffect(() => {
    if (!isTimerActive) return;
    const done = () => {
      setIsDone(true);
      setIsTimerActive(false);
    };
    const timerId = setInterval(() => {
      setTimer(timer =>
        timer >= 0
          ? timer - 1
          : (() => {
              done();
              return 0;
            })(),
      );
    }, 1000);

    return () => clearInterval(timerId);
  }, [isTimerActive]);

  return (
    <Row gap={10} style={{alignItems: 'baseline'}}>
      <View
        style={{
          borderWidth: 2,
          borderStyle: 'dashed',
          borderRadius: 9999,
          borderColor: isDone ? '#59BF00' : '#F9BF2B',
        }}>
        <View
          style={{
            backgroundColor: isDone ? '#59BF00' : '#F9BF2B',
            borderRadius: 9999,
            width: 30,
            height: 30,
            margin: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {isFirst ? <QuotesIcon /> : <TaskIcon />}
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#EEEEEE',
          borderRadius: 14,
          paddingVertical: 9,
          paddingHorizontal: 13,
          width: '80%',
        }}>
        <CustomText fw="bold" fs={14} color="#555">
          {labelText} today:
        </CustomText>
        <CustomText mt={6} fw="bold" fs={15}>
          {text}
        </CustomText>
        {author && (
          <CustomText fw="bold" mt={5} fs={14} color="#555">
            - {author}
          </CustomText>
        )}

        <Row gap={10} mt={8}>
          <Button
            title={buttonText}
            disabled={isDone}
            onPress={handleDonePress}
            fs={14}
            style={{
              paddingHorizontal: 4,
              paddingVertical: 4,
              borderRadius: 8,
              width: 86,
            }}
          />

          {isFirst && (
            <TouchableOpacity onPress={handleShare}>
              <View
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#F9BF2B',
                }}>
                <ShareIcon />
              </View>
            </TouchableOpacity>
          )}
          {!isFirst && (
            <View
              style={{
                width: 64,
                height: 28,
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
              }}>
              <CustomText fw="bold" fs={14}>
                00:{formatTime(timer)}
              </CustomText>
            </View>
          )}
        </Row>
      </View>
    </Row>
  );
}
