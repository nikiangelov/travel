import CardLayout from './Layout';
import { useState } from 'react';
import useI18n from '../../../../hooks/useI18n';

export type CardTimeProps = {
  state: string;
  onSkip: () => void;
  onChange: (timeKey: string) => void;
  onBlockPress: (state: string) => void;
};
// TODO move to db
const TIME_PERIOD_KEYS = [
  'couple-of-hours',
  'one-day',
  'two-days',
  'three-days',
  'a-week',
  'more-than-week',
];
export default function CardTime({
  state,
  onSkip,
  onChange,
  onBlockPress,
}: CardTimeProps) {
  const i18n = useI18n();
  const [selectedTimeKey, setSelectedTimeKey] = useState<string | null>(null);
  const handleOnSelection = (timeKey: string): void => {
    setSelectedTimeKey(timeKey);
    onChange(timeKey);
  };
  return (
    <CardLayout state={state} onBlockPress={onBlockPress}>
      <img
        src={require('../../../../assets/illustrations/timer.svg')}
        className="card-illustration mb-4"
        alt="Timer illustration"
      />
      <h4 className="mb-4 ">Колко време е нужно, за да се измине?</h4>
      <div className="text-center">
        {TIME_PERIOD_KEYS.map((k, i) => (
          <button
            onClick={() => handleOnSelection(k)}
            key={`tk-${i}`}
            className={`btn m-1 ${
              selectedTimeKey === k
                ? 'btn-success text-white'
                : 'btn-outline-primary'
            } `}
          >
            {i18n.t(`travellogs.time.${k}`)}
          </button>
        ))}
      </div>
      <div className="text-center mt-3">
        <button onClick={onSkip} className="btn btn-sm btn-link">
          Прескочи тази стъпка &raquo;
        </button>
      </div>
    </CardLayout>
  );
}
