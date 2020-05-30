import CardLayout from './Layout';

export type CardIntroProps = {
  state: string;
  onStartPress: () => void;
  onSkipPress: () => void;
  onBlockPress: (state: string) => void;
};
export default function CardIntro({
  state,
  onStartPress,
  onSkipPress,
  onBlockPress,
}: CardIntroProps) {
  return (
    <CardLayout state={state} onBlockPress={onBlockPress}>
      <img
        src={require('../../../../assets/illustrations/rocket.svg')}
        className="card-illustration mb-1"
        alt="Rocket Illustration"
      />
      <h4 className="mb-3">
        Асистент за добавяне на <span className="text-primary">пътеписи</span>.
      </h4>
      <p className=" text-muted">
        Ще ви помогнем лесно да попълните нужните данни за вашия пътепис. Това
        ще го направи лесно откриваем за другите потребители.
      </p>
      <div className="row mt-2">
        <div className="col-md-6">
          <button
            onClick={onStartPress}
            className="btn btn-lg btn-success w-100"
          >
            Започни
          </button>
        </div>
        <div className="col-md-6">
          <button onClick={onSkipPress} className="btn btn-lg btn-light w-100">
            Пропусни
          </button>
        </div>
      </div>
      <p className="small text-muted mt-5 mb-0">
        Бутонът &quot;Пропусни&quot; ще ви отведе директно към текстовия
        редактор.
        <br />
        Винаги може да се върнете към тези въпроси.
      </p>
    </CardLayout>
  );
}
