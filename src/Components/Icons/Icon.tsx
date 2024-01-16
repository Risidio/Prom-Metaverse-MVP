type Props = {
  imgPath: string,
  imgAlt: string,
}
const Icon: React.FC<Props> = ({ imgPath, imgAlt }) => {
  return (
<div className="navbar__icons-icon">
  <img src={imgPath} alt={imgAlt} />
</div>
  );
}

export default Icon;