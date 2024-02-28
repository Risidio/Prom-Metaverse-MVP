import ProfileChangeForm from "../../../Components/Forms/ProfileChangeForm";

type Props = {
  closeModal:  () => void,
}
const ProfileSettings: React.FC<Props> = ({
  closeModal,
}) => {
  return (
    <section className="user__password">

      <h1 className="user__password-title">
        Profile details
      </h1>

<ProfileChangeForm closeModal={closeModal}></ProfileChangeForm>
    </section>

  )
}

export default ProfileSettings;