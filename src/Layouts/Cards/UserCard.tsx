import WhiteButton from "../../Components/Buttons/WhiteButton";

type Props = {
  userName: string,
  role: string,
  onButtonClickAdd: (userName: string, role: string, status: string) => void;
};


const ContactCard: React.FC<Props> = ({
  userName,
  role,
  onButtonClickAdd,
}) => {
  return (
    <div className="contact__card">
      <div className="navbar__img-content--contact
      h-51px">
        <div className={`contact__card-status contact__card-status--${status}`}></div>
      </div>

      <div className="contact__card-info">
        <h1 className="contact__card-title">
          {userName}
        </h1>

        <h2 className="contact__card-role">
          {role}
        </h2>
      </div>

      <WhiteButton text="Add"
        type="button"
        className="button--user-add"
        onClick={() => onButtonClickAdd(userName, role, status)}/>
    </div>
  );
}

export default ContactCard;