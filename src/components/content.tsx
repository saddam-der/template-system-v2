import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
  card?: boolean;
  title?: string;
}

export default function Content(props: Props) {
  const { children, className, card, title } = props;

  return (
    <div
      className={classNames(
        'content shadow-md',
        card && '!bg-[#f8f8f8] !p-0 shadow-none',
        className
      )}
    >
      <div className="content__container">
        {card && (
          <div className="bg-white rounded">
            <div className="text-2xl font-semibold pl-3 py-3 border-b border-grey-200">
              {title}
            </div>
            {children}
            <div className="pt-10 border-t border-grey-200" />
          </div>
        )}
        {!card && children}
      </div>
    </div>
  );
}
