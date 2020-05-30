import CardLayout from './Layout';
import { useRef, useEffect, useState } from 'react';

export type CardTitleProps = {
  state: string;
  onChange: (title: string) => void;
  onBlockPress: (state: string) => void;
};
export default function CardTitle({
  state,
  onChange,
  onBlockPress,
}: CardTitleProps) {
  const inputEl = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState(false);
  const [title, setTitle] = useState('');
  useEffect(() => {
    if (state === 'current' && inputEl && inputEl.current) {
      setTimeout(() => {
        inputEl.current!.focus();
      }, 500);
    }
  }, [state]);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      setErrors(true);
      return;
    }
    setErrors(false);
    onChange(title);
  };
  return (
    <CardLayout state={state} onBlockPress={onBlockPress}>
      <span className="position-relative">
        <img
          src={require('../../../../assets/illustrations/book.svg')}
          className="card-illustration mb-4"
          alt="Notebook illustration"
        />
      </span>
      <h4 className="mb-4 ">
        Какво заглавие си избрал за твоя{' '}
        <span className="text-primary">пътепис</span>?
      </h4>
      <form onSubmit={onSubmit}>
        <div className="form-group mx-5 mb-0">
          <input
            ref={inputEl}
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            className={`form-control ${errors ? 'is-invalid' : ''}`}
            placeholder="Съботна разходка край Пловдив"
          />
          <div className="invalid-feedback">
            Заглавието не може да бъде празно.
          </div>
          <button type="submit" className="btn btn-success mt-4">
            Продължи
          </button>
        </div>
      </form>
    </CardLayout>
  );
}
