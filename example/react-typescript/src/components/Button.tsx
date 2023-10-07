interface Props {
  title: string;
  onBtnClick?: () => void;
  disabled?: boolean;
}

export default function Button({ title, onBtnClick, disabled = false }: Props) {
  return (
    <button disabled={disabled} onClick={onBtnClick}>
      {title}
    </button>
  );
}
