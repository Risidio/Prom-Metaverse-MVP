type Props = {
  imgPath: string,
  imgAlt: string,
  onClick: () => void,
}
const Icon: React.FC<Props> = ({
  imgPath,
  imgAlt,
  onClick,
 }) => {
  return (
    <div className="navbar__icons-icon">
      <button onClick={onClick}>
      <img src={imgPath} alt={imgAlt} />

      </button>
    </div>
  );
}

export default Icon;