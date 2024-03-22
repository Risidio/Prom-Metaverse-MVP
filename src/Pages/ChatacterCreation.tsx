// import RedButton from "../Components/Buttons/RedButton";
import ProfileForm from "../Components/Forms/ProfileForm";
import QuestionIcon from "../Components/Icons/Question";

const CharacterCreation = () => {
  return (

    <section className="character">
      <div className="logo"></div>
      <QuestionIcon></QuestionIcon>

      <div className="character-container">
        <h1 className="character-title  mt-[27px] ml-[-27px]">
          About
          <br>
          </br>
          you
        </h1>
        <ProfileForm></ProfileForm>
      </div>
    </section>
  );
}

export default CharacterCreation;