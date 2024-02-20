import { useEffect, useState } from "react";
import QuestionIcon from "../Components/Icons/Question";
import Navbar from "../Layouts/NavBar";
import OutgoingCall from "../Layouts/Popup/Call/OutgoingCall";
import OnBoardingFirst from "../Layouts/Popup/OnboardingPopup/OnboardingFirst";

const OnBoarding = () => {

  const titleArray = [
    'Hi {Username}',
    'Your Profile',
    'Tools',
    'Screenwriter building',
  ];

  const textArray = [
    'My name is Alex, and I’m here to help you with your journey in the people’s republic of movies. Let’s create the future of movie together.',
    `You will find your profile here, you can edit your information and keep track of your level. You earn experience every time you take action to grow PROM, and when you have enough experience, you gain a level and reward to thank you for your contribution.`,
    'Here you’ll find useful tools at your disposal to travel faster, contact partners or look at your work!',
    'In this first version, PROM focuses on tools to help screenwriters. When you are ready, you can click on the building to enter inside. '
  ];
  const collaboratorsArray = [
    {
      userName: 'Peter',
      role: 'Investor',
      status: 'online'
    },
    {
      userName: 'Celine',
      role: 'Movie director',
      status: 'online'
    },
    {
      userName: 'Nataliia',
      role: 'Screenwriter',
      status: 'absent'
    },
    {
      userName: 'Preye',
      role: 'Actor',
      status: 'offline'
    },
    {
      userName: 'David',
      role: 'Screenwriter',
      status: 'offline'
    },
    {
      userName: 'Zanjeel',
      role: 'Screenwriter',
      status: 'offline'
    },
    {
      userName: 'Olaide',
      role: 'Screenwriter',
      status: 'offline'
    },
    {
      userName: 'User7',
      role: 'Screenwriter',
      status: 'offline'
    },
    {
      userName: 'User8',
      role: 'Screenwriter',
      status: 'offline'
    },
    {
      userName: 'User9',
      role: 'Screenwriter',
      status: 'offline'
    },
    {
      userName: 'User10',
      role: 'Screenwriter',
      status: 'offline'
    },
  ]


  const [callVisibility, setCallVisibility] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [noFound, setNoFound] = useState(false);

  const handleCallVisibility = () => {
    setCallVisibility(!callVisibility);
  }

  const handleButtonClick = (userName: string) => {
    setSelectedUser(userName);
  };

  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };


  const filteredCollaborators = collaboratorsArray
    .filter(collaborator => collaborator.userName
      .toLowerCase()
      .includes(searchInput.toLowerCase()));


  useEffect(() => {
    if (filteredCollaborators.length > 0) {
      setNoFound(true);
    } else {
      setNoFound(false);
    }
  }, [filteredCollaborators]);

  return (
    <main>
      <div className="onboarding">
        <div className="logo"></div>
        <QuestionIcon></QuestionIcon>

        <OnBoardingFirst
          textArray={textArray}
          titleArray={titleArray}></OnBoardingFirst>
        <Navbar userName="userName"
          level={1}
          contactValue={searchInput}
          handleInputChange={handleInputChange}
          handleCallVisibility={handleCallVisibility}
          collaborators={filteredCollaborators}
          onButtonClick={handleButtonClick}
          showNoFound={noFound}
        />


        {callVisibility &&
          <OutgoingCall
            handleCallVisibility={handleCallVisibility}
            userName={selectedUser} />
        }
      </div>
    </main>
  );
}

export default OnBoarding;