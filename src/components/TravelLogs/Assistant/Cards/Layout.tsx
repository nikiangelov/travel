export type CardLayoutProps = {
  state: string;
  children: any;
  onBlockPress: (state: string) => void;
};
export default function CardLayout({
  state,
  children,
  onBlockPress,
}: CardLayoutProps) {
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
