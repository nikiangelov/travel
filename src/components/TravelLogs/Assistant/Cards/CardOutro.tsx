import CardLayout from './Layout';

export type CardOutroProps = {
  state: string;
  onCompletePress: () => void;
  onBlockPress: (state: string) => void;
};
export default function CardOutro({
  state,
  onCompletePress,
  onBlockPress,
}: CardOutroProps) {
  return (
    <CardLayout state={state} onBlockPress={onBlockPress}>
      <img
        src={require('../../../../assets/illustrations/write.svg')}
        className="card-illustration mb-4"
        alt="Write illustration"
      />
      <h4 className="mb-4 ">
        Страхотно! Сега е време да ни разкажеш с думи за твоето приключение?
      </h4>
      <div className="text-center mt-3">
        <button
          onClick={onCompletePress}
          className="btn btn-lg btn-primary text-white"
        >
          Отвори редактора
        </button>
      </div>
    </CardLayout>
  );
}
