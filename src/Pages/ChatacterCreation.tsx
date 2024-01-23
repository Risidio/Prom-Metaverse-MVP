// import RedButton from "../Components/Buttons/RedButton";
import ProfileForm from "../Components/Forms/ProfileForm";

const CharacterCreation = () => {
  return (

      <section className="character">
<div className="logo"></div>

<div className="character-container">
<h1 className="character-title">
About you
{/* <br>
</br> */}

</h1>
<ProfileForm></ProfileForm>
</div>
      </section>
  );
}

export default CharacterCreation;