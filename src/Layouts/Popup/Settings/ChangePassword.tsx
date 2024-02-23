import Password from "../../../Components/Forms/Password";
type Props = {
  closeModal: () => void,
}

const ChangePassword: React.FC<Props> = ({
  closeModal,
}) => {
  return (
    <section className="user__password">

      <h1 className="user__password-title">
        change password
      </h1>

      <Password closeModal={closeModal}></Password>
    </section>
)
}

export default ChangePassword;