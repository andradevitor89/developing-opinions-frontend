import clsx from 'clsx';
import { SUBTITLE, TITLE } from '../helpers/styles';

export function Header() {
  return (
    <div className="p-16 text-left text-white">
      <p className={TITLE}>Jimmy Breck-McKye</p>
      <p className={clsx(SUBTITLE, 'opacity-50')}>
        Developing opinions
      </p>
    </div>
  );
}
