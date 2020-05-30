import CardLayout from './Layout';
import { useState } from 'react';

export type CardLocationProps = {
  state: string;
  onChange: (location: string) => void;
  onBlockPress: (state: string) => void;
};
export default function CardLocation({
  state,
  onChange,
  onBlockPress,
}: CardLocationProps) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const handleOnSelection = (location: string): void => {
    setSelectedLocation(location);
    onChange(location);
  };
  return (
    <CardLayout state={state} onBlockPress={onBlockPress}>
      <img
        src={require('../../../../assets/illustrations/map.svg')}
        className="card-illustration mb-4"
        alt="Map illustration"
      />
      <h4 className="mb-4 ">
        Посетените места в твоя пътепис къде се намират?
      </h4>
      <div className="row">
        <div className="col-md-6">
          <button
            onClick={() => handleOnSelection('bulgaria')}
            className={`btn btn-lg ${
              selectedLocation === 'bulgaria' ? 'btn-success' : 'btn-light'
            } w-100 `}
          >
            <span className="flag-icon flag-icon-bg mr-2"></span>В България
          </button>
        </div>
        <div className="col-md-6">
          <button
            onClick={() => handleOnSelection('abroad')}
            className={`btn btn-lg ${
              selectedLocation === 'abroad' ? 'btn-success' : 'btn-light'
            } w-100 `}
          >
            <span className="flag-icon flag-icon-eu mr-2"></span>В чужбина
          </button>
        </div>
      </div>
    </CardLayout>
  );
}
