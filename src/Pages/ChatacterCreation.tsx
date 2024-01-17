import RedButton from "../Components/Buttons/RedButton";
import ProfileForm from "../Components/Forms/profileForm";

const CharacterCreation = () => {
  return (
    <main>
    <RedButton 
    // pathLink="/onboarding"
      text="Create my character"
      className="button--character"></RedButton>
      <ProfileForm />
      </main>
  );
}

export default CharacterCreation;