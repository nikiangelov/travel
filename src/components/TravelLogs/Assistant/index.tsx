import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants } from '../../../constants/animations';

function TravelLogAssistant() {
  const [sliderState, setSliderState] = useState({
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
              <Card state={getStateName(1)} onBlockPress={handleBlockPress}>
                <img
                  src={require('../../../assets/illustrations/rocket.svg')}
                  className="card-illustration mb-1"
                  alt="map illustration"
                />
                <h4 className="mb-3">
                  Асистент за добавяне на{' '}
                  <span className="text-primary">пътеписи</span>.
                </h4>
                <p className=" text-muted">
                  Ще ви помогнем лесно да попълните нужните данни за вашия
                  пътепис. Това ще го направи лесно откриваем за другите
                  потребители.
                </p>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <button
                      onClick={nextCard}
                      className="btn btn-lg btn-success w-100"
                    >
                      Започни
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button
                      onClick={prevCard}
                      className="btn btn-lg btn-light w-100"
                    >
                      Пропусни
                    </button>
                  </div>
                </div>
                <p className="small text-muted mt-5 mb-0">
                  Бутонът &quot;Пропусни&quot; ще ви отведе директно към
                  текстовия редактор.
                  <br />
                  Винаги може да се върнете към тези въпроси.
                </p>
              </Card>
              <Card state={getStateName(2)} onBlockPress={handleBlockPress}>
                <img
                  src={require('../../../assets/illustrations/map.svg')}
                  className="card-illustration mb-4"
                  alt="map illustration"
                />
                <h4 className="mb-4 ">
                  Посетените места в твоя пътепис къде се намират?
                </h4>
                <div className="row">
                  <div className="col-md-6">
                    <button
                      onClick={nextCard}
                      className="btn btn-lg btn-light w-100"
                    >
                      <span className="flag-icon flag-icon-bg mr-2"></span>В
                      България
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button
                      onClick={prevCard}
                      className="btn btn-lg btn-light w-100"
                    >
                      <span className="flag-icon flag-icon-eu mr-2"></span>В
                      чужбина
                    </button>
                  </div>
                </div>
              </Card>
              <Card state={getStateName(3)} onBlockPress={handleBlockPress}>
                <img
                  src={require('../../../assets/illustrations/book.svg')}
                  className="card-illustration mb-4"
                  alt="map illustration"
                />
                <h4 className="mb-4 ">
                  Какво заглавие си избрал за твоя{' '}
                  <span className="text-primary">пътепис</span>?
                </h4>
                <form>
                  <div className="form-group mx-5 mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Съботна разходка край Пловдив"
                    />
                    <button type="submit" className="btn btn-success mt-4">
                      Продължи
                    </button>
                  </div>
                </form>
              </Card>
              <Card state={getStateName(4)} onBlockPress={handleBlockPress}>
                <img
                  src={require('../../../assets/illustrations/timer.svg')}
                  className="card-illustration mb-4"
                  alt="map illustration"
                />
                <h4 className="mb-4 ">Колко е време е нужно, за да измине?</h4>
                <div className="text-center">
                  <button className="btn btn-outline-primary m-1">
                    Няколко часа
                  </button>
                  <button className="btn btn-outline-primary m-1">1 ден</button>
                  <button className="btn btn-outline-primary m-1">
                    2 дена
                  </button>
                  <button className="btn btn-outline-primary m-1">
                    3 дена
                  </button>
                  <button className="btn btn-outline-primary m-1">
                    Седмица
                  </button>
                  <button className="btn btn-outline-primary m-1">
                    Повече от седмица
                  </button>
                </div>
                <div className="text-center mt-3">
                  <button onClick={nextCard} className="btn btn-sm btn-link">
                    Прескочи тази стъпка &raquo;
                  </button>
                </div>
              </Card>
              <Card state={getStateName(5)} onBlockPress={handleBlockPress}>
                <img
                  src={require('../../../assets/illustrations/wallet.svg')}
                  className="card-illustration mb-4"
                  alt="map illustration"
                />
                <h4 className="mb-4 ">Каква сума е нужна, приблизително?</h4>
                <div className="text-center">
                  <button className="btn btn-outline-success m-1">
                    Безплатно е
                  </button>
                  <button className="btn btn-outline-primary m-1">
                    Около 20лв
                  </button>
                  <button className="btn btn-outline-primary m-1">
                    20лв - 50лв
                  </button>
                  <button className="btn btn-outline-primary m-1">
                    50лв - 100лв
                  </button>
                  <button className="btn btn-outline-primary m-1">
                    100лв - 200лв
                  </button>
                  <button className="btn btn-outline-primary m-1">
                    300лв - 500лв
                  </button>
                </div>
                <div className="text-center mt-3">
                  <button onClick={nextCard} className="btn btn-sm btn-link">
                    Прескочи тази стъпка &raquo;
                  </button>
                </div>
              </Card>
              <Card state={getStateName(6)} onBlockPress={handleBlockPress}>
                <img
                  src={require('../../../assets/illustrations/backpack.svg')}
                  className="card-illustration mb-4"
                  alt="map illustration"
                />
                <h4 className="mb-4 ">
                  В каква категория спада това пътуване?
                </h4>
                <div className="text-center">
                  <button className="btn btn-sm btn-outline-info m-1">
                    Планината
                  </button>
                  <button className="btn btn-sm btn-outline-info m-1">
                    Море
                  </button>
                  <button className="btn btn-sm btn-outline-info m-1">
                    Градски туризъм
                  </button>
                  <button className="btn btn-sm btn-outline-info m-1">
                    Екопътеки
                  </button>
                  <button className="btn btn-sm btn-outline-info m-1">
                    Пещери
                  </button>
                  <button className="btn btn-sm btn-outline-info m-1">
                    Водопади
                  </button>
                  <button className="btn btn-sm btn-outline-info m-1">
                    Фотография
                  </button>
                  <button className="btn btn-sm btn-outline-info m-1">
                    Други
                  </button>
                </div>
                <div className="text-center mt-3">
                  <button onClick={nextCard} className="btn btn-sm btn-link">
                    Прескочи тази стъпка &raquo;
                  </button>
                </div>
              </Card>
              <Card state={getStateName(7)} onBlockPress={handleBlockPress}>
                <img
                  src={require('../../../assets/illustrations/season.svg')}
                  className="card-illustration mb-4"
                  alt="map illustration"
                />
                <h4 className="mb-4 ">Кой е подходящия сезон?</h4>
                <div className="text-center">
                  <button className="btn btn-outline-primary m-1">
                    Пролет
                  </button>
                  <button className="btn btn-outline-primary m-1">Лято</button>
                  <button className="btn btn-outline-primary m-1">Есен</button>
                  <button className="btn btn-outline-primary m-1">Зима</button>
                </div>
                <div className="text-center mt-3">
                  <button onClick={nextCard} className="btn btn-sm btn-link">
                    Прескочи тази стъпка &raquo;
                  </button>
                </div>
              </Card>
              <Card state={getStateName(8)} onBlockPress={handleBlockPress}>
                <img
                  src={require('../../../assets/illustrations/write.svg')}
                  className="card-illustration mb-4"
                  alt="map illustration"
                />
                <h4 className="mb-4 ">
                  Страхотно! Сега е време да ни разкажеш с думи за твоето
                  приключение?
                </h4>
                <div className="text-center mt-3">
                  <button
                    onClick={nextCard}
                    className="btn btn-lg btn-primary text-white"
                  >
                    Отвори редактора
                  </button>
                </div>
              </Card>
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
function Card({ state, children, onBlockPress }: any) {
  return (
    <>
      <div className={`assistant-slider-card ${state ? state : ''}`}>
        <div className="card white-card-elevated elevation-5 border-0 px-5 py-1 ">
          {children}
        </div>
        <div
          onClick={() => {
            if (onBlockPress && typeof onBlockPress === 'function') {
              onBlockPress(state);
            }
          }}
          className="contentBlock"
        />
      </div>
    </>
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
