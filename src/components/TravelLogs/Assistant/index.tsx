import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants } from '../../../constants/animations';
import CardIntro from './Cards/CardIntro';
import CardLocation from './Cards/CardLocation';
import CardTitle from './Cards/CardTitle';
import CardTime from './Cards/CardTime';
import CardPrice from './Cards/CardPrice';
import CardCategories from './Cards/CardCategories';
import CardSeason from './Cards/CardSeason';
import CardOutro from './Cards/CardOutro';

export type AssistantDataType = {
  location: null | string;
  title: null | string;
  timeKey: null | string;
  priceKey: null | string;
  categoryKey: null | string;
  seasonKey: null | string;
};
type TravelLogAssistantType = {
  onComplete: () => void;
  onStart?: () => void;
  onSkip?: () => void;
  onChange: (data: AssistantDataType) => void;
};
function TravelLogAssistant(props: TravelLogAssistantType) {
  const { onSkip, onStart, onChange, onComplete } = props;
  const [assistantData, setAssistantData] = useState<AssistantDataType>({
    location: null,
    title: null,
    timeKey: null,
    priceKey: null,
    categoryKey: null,
    seasonKey: null,
  });
  const [sliderState, setSliderState] = useState({
    isStarted: false,
    currentIndex: 1,
    nextIndex: 2,
    prevIndex: 0,
    maxIndex: 8,
  });
  const getStateName = (cardIndex: number): string => {
    let stateName = '';
    switch (cardIndex) {
      case sliderState.currentIndex:
        stateName = 'current';
        break;
      case sliderState.nextIndex:
        stateName = 'next';
        break;
      case sliderState.prevIndex:
        stateName = 'prev';
        break;
    }
    return stateName;
  };
  const nextCard = () => {
    const { currentIndex, nextIndex, maxIndex } = sliderState;
    const newCurrentIndex = currentIndex + 1;
    if (newCurrentIndex > maxIndex) return;
    setSliderState({
      ...sliderState,
      currentIndex: newCurrentIndex,
      prevIndex: currentIndex,
      nextIndex: nextIndex + 1,
      isStarted: true,
    });
  };
  const prevCard = () => {
    const { currentIndex, prevIndex } = sliderState;
    const newCurrentIndex = currentIndex - 1;
    if (newCurrentIndex <= 0) return;
    setSliderState({
      ...sliderState,
      nextIndex: currentIndex,
      currentIndex: newCurrentIndex,
      prevIndex: prevIndex - 1,
    });
  };
  const startAssistant = () => {
    if (onStart && typeof onStart === 'function' && !sliderState.isStarted) {
      onStart();
    }
    nextCard();
  };
  const skipAssistant = () => {
    if (onSkip && typeof onSkip === 'function') {
      onSkip();
    }
  };
  const handleBlockPress = (state: string) => {
    if (state === 'prev') {
      prevCard();
    } else if (state === 'next') {
      nextCard();
    }
  };
  const renderDots = () => {
    let dotsArr = [];
    for (let i = 1; i <= sliderState.maxIndex; i++) {
      dotsArr.push(
        <em
          key={`pager-dot-${i}`}
          className={i === sliderState.currentIndex ? 'active' : ''}
        />,
      );
    }
    return dotsArr;
  };
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-md-6 mx-auto">
          <motion.div variants={slideUpVariants}>
            <div className="assistant-slider-card-wrap">
              <CardIntro
                state={getStateName(1)}
                onBlockPress={handleBlockPress}
                onSkipPress={skipAssistant}
                onStartPress={startAssistant}
              />
              <CardLocation
                state={getStateName(2)}
                onChange={location => {
                  const newData = {
                    ...assistantData,
                    location,
                  };
                  setAssistantData(newData);
                  onChange(newData);
                  nextCard();
                }}
                onBlockPress={handleBlockPress}
              />
              <CardTitle
                state={getStateName(3)}
                onChange={title => {
                  const newData = {
                    ...assistantData,
                    title,
                  };
                  setAssistantData(newData);
                  onChange(newData);
                  nextCard();
                }}
                onBlockPress={handleBlockPress}
              />
              <CardTime
                state={getStateName(4)}
                onChange={timeKey => {
                  const newData = {
                    ...assistantData,
                    timeKey,
                  };
                  setAssistantData(newData);
                  onChange(newData);
                  nextCard();
                }}
                onSkip={nextCard}
                onBlockPress={handleBlockPress}
              />
              <CardPrice
                state={getStateName(5)}
                onChange={priceKey => {
                  const newData = {
                    ...assistantData,
                    priceKey,
                  };
                  setAssistantData(newData);
                  onChange(newData);
                  nextCard();
                }}
                onSkip={nextCard}
                onBlockPress={handleBlockPress}
              />
              <CardCategories
                state={getStateName(6)}
                onChange={categoryKey => {
                  const newData = {
                    ...assistantData,
                    categoryKey,
                  };
                  setAssistantData(newData);
                  onChange(newData);
                  nextCard();
                }}
                onSkip={nextCard}
                onBlockPress={handleBlockPress}
              />
              <CardSeason
                state={getStateName(7)}
                onChange={seasonKey => {
                  const newData = {
                    ...assistantData,
                    seasonKey,
                  };
                  setAssistantData(newData);
                  onChange(newData);
                  nextCard();
                }}
                onSkip={nextCard}
                onBlockPress={handleBlockPress}
              />
              <CardOutro
                onCompletePress={onComplete}
                state={getStateName(8)}
                onBlockPress={handleBlockPress}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 mx-auto">
          <div className="assistant-slider-pager">{renderDots()}</div>
        </div>
      </div>
    </div>
  );
}
function Header() {
  return (
    <div className="row mb-4">
      <div className="col-md-6 mx-auto">
        <div className="text-center">
          <h2>Добавяне на пътешествие</h2>
        </div>
      </div>
    </div>
  );
}

export default TravelLogAssistant;
