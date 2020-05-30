import CardLayout from './Layout';
import { useState } from 'react';
import useI18n from '../../../../hooks/useI18n';

export type CardPriceProps = {
  state: string;
  onSkip: () => void;
  onChange: (priceKey: string) => void;
  onBlockPress: (state: string) => void;
};
// TODO move to db
const PRICE_KEYS = [
  'free',
  'about-20',
  '20-50',
  '50-100',
  '100-200',
  '300-500',
  '500-1000',
];
export default function CardPrice({
  state,
  onSkip,
  onChange,
  onBlockPress,
}: CardPriceProps) {
  const i18n = useI18n();
  const [selectedPriceKey, setSelectedPriceKey] = useState<string | null>(null);
  const handleOnSelection = (priceKey: string): void => {
    setSelectedPriceKey(priceKey);
    onChange(priceKey);
  };
  return (
    <CardLayout state={state} onBlockPress={onBlockPress}>
      <img
        src={require('../../../../assets/illustrations/wallet.svg')}
        className="card-illustration mb-4"
        alt="Wallet illustration"
      />
      <h4 className="mb-4 ">Каква сума е нужна, приблизително?</h4>
      <div className="text-center">
        {PRICE_KEYS.map((k, i) => (
          <button
            onClick={() => handleOnSelection(k)}
            key={`tk-${i}`}
            className={`btn m-1 ${
              selectedPriceKey === k
                ? 'btn-success text-white'
                : k === 'free'
                ? 'btn-outline-success'
                : 'btn-outline-primary'
            } `}
          >
            {i18n.t(`travellogs.price.${k}`)}
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
