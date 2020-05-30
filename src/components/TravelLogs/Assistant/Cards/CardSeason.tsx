import CardLayout from './Layout';
import { useState } from 'react';
import useI18n from '../../../../hooks/useI18n';

export type CardSeasonProps = {
  state: string;
  onSkip: () => void;
  onChange: (seasonKey: string) => void;
  onBlockPress: (state: string) => void;
};
const SEASON_KEYS = ['spring', 'summer', 'autumn', 'winter'];
export default function CardSeason({
  state,
  onSkip,
  onChange,
  onBlockPress,
}: CardSeasonProps) {
  const i18n = useI18n();
  const [selectedSeasonKey, setSelectedSeasonKey] = useState<string | null>(
    null,
  );
  const handleOnSelection = (seasonKey: string): void => {
    setSelectedSeasonKey(seasonKey);
    onChange(seasonKey);
  };
  return (
    <CardLayout state={state} onBlockPress={onBlockPress}>
      <img
        src={require('../../../../assets/illustrations/season.svg')}
        className="card-illustration mb-4"
        alt="Autumn illustration"
      />
      <h4 className="mb-4 ">Кой е подходящия сезон?</h4>
      <div className="text-center">
        {SEASON_KEYS.map((k, i) => (
          <button
            onClick={() => handleOnSelection(k)}
            key={`tk-${i}`}
            className={`btn m-1 ${
              selectedSeasonKey === k
                ? 'btn-success text-white'
                : 'btn-outline-primary'
            } `}
          >
            {i18n.t(`travellogs.seasons.${k}`)}
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
