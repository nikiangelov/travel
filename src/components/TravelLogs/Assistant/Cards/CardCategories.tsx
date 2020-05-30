import CardLayout from './Layout';
import { useState } from 'react';
import useI18n from '../../../../hooks/useI18n';

export type CardCategoriesProps = {
  state: string;
  onSkip: () => void;
  onChange: (categoryKey: string) => void;
  onBlockPress: (state: string) => void;
};
// TODO move to db
const PRICE_KEYS = [
  'mountain',
  'sea',
  'urban',
  'eco-trail',
  'caves',
  'waterfalls',
  'photo',
  'misc',
];
export default function CardCategories({
  state,
  onSkip,
  onChange,
  onBlockPress,
}: CardCategoriesProps) {
  const i18n = useI18n();
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string | null>(
    null,
  );
  const handleOnSelection = (categoryKey: string): void => {
    setSelectedCategoryKey(categoryKey);
    onChange(categoryKey);
  };
  return (
    <CardLayout state={state} onBlockPress={onBlockPress}>
      <img
        src={require('../../../../assets/illustrations/backpack.svg')}
        className="card-illustration mb-4"
        alt="Backpack illustration"
      />
      <h4 className="mb-4 ">В каква категория спада това пътуване?</h4>
      <div className="text-center">
        {PRICE_KEYS.map((k, i) => (
          <button
            onClick={() => handleOnSelection(k)}
            key={`tk-${i}`}
            className={`btn btn-sm m-1 ${
              selectedCategoryKey === k
                ? 'btn-success text-white'
                : 'btn-outline-info'
            } `}
          >
            {i18n.t(`travellogs.categories.${k}`)}
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
