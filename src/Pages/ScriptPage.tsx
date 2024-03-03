import { useState, useEffect } from "react";
import QuestionIcon from "../Components/Icons/Question";
import Navbar from "../Layouts/NavBar";
import ActiveCall from "../Layouts/Popup/Call/ActiveCall";
import IncomingCall from "../Layouts/Popup/Call/IncomingCall";
import OutgoingCall from "../Layouts/Popup/Call/OutgoingCall";
// import OnBoardingFirst from "../Layouts/Popup/OnboardingPopup/OnboardingFirst";
import { collaboratorsArray, users } from "../utils/arrays/arrays";
import ScriptOwner from "../Layouts/Scripts/ScriptOwner";

const ScriptPage = () => {
  const [callVisibility, setCallVisibility] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [fetchedCollaboratos, setFetchedCollaborators] = useState(collaboratorsArray);
  const [noFound, setNoFound] = useState(false);
  const [noFoundUser, setNoFoundUser] = useState(false);


  const [searchInput, setSearchInput] = useState('');
  const [searchInputUsers, setSearchInputUsers] = useState('');
  // const [showGuestUserProfile, setShowGuestUserProfile] = useState(false);


  const [movie, setMovie] = useState({

    title: "Title",
    type: "movie",
    status: "Finished",
    pagesAmount: 135,
    genres: ['Comedy', 'Drama'],
    privacy: "private script",
    author: "username",
    cowriters: ['username', 'username'],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  
  })

  const handleCallVisibility = () => {
    setCallVisibility(!callVisibility);
  }

  const handleButtonClick = (userName: string) => {
    setSelectedUser(userName);
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleInputChangeUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputUsers(e.target.value);
  };




  const filteredCollaborators = fetchedCollaboratos
    .filter(collaborator => collaborator.userName
      .toLowerCase()
      .includes(searchInput.toLowerCase()));

  const filteredUsers = users
    .filter(user => user.userName
      .toLowerCase()
      .includes(searchInputUsers.toLowerCase()));



  const handleAddUser = (userName: string, roles: string[], status: string) => {
    // Check if the user is not already in the collaboratorsArray
    if (!collaboratorsArray.some(collaborator => collaborator.userName === userName)) {
      // Add a new collaborator with the provided userName, role, and status
      const newUser = {
        userName,
        roles,  // You can provide a default role for the new user
        status,
        // You can provide a default status for the new user
      };

      // Update the collaboratorsArray using the state setter
      setFetchedCollaborators(prevCollaborators => [...prevCollaborators, newUser]);

      console.log(1);
    }
  };

  // const handleShowGuestUserProfile = () => {
  //   setShowGuestUserProfile(!showGuestUserProfile);
  //     }
    


  useEffect(() => {
    if (filteredCollaborators.length > 0) {
      setNoFound(true);
    } else {
      setNoFound(false);
    }
  }, [filteredCollaborators]);

  useEffect(() => {
    if (filteredUsers.length > 0) {
      setNoFoundUser(true);
    } else {
      setNoFoundUser(false);
    }
  }, [filteredUsers]);

  return (
    <main>
      <div className="script-page">
        <div className="logo"></div>
        <QuestionIcon></QuestionIcon>

        <ScriptOwner movie={movie}
        setMovie={setMovie} />

        <Navbar userName="userName"
        level={1}
        contactValue={searchInput}
        handleInputChange={handleInputChange}
        handleCallVisibility={handleCallVisibility}

        collaborators={filteredCollaborators}
        onButtonClick={handleButtonClick}
        showNoFound={noFound}

        users={filteredUsers}
        contactValueUser={searchInputUsers} 
        handleInputChangeUser={handleInputChangeUsers } 
        onButtonClickAddUser={handleAddUser}
        showNoFoundUser={noFoundUser}


        // showGuestUserProfile={handleShowGuestUserProfile}
      
        />


        {callVisibility &&
          <OutgoingCall
            handleCallVisibility={handleCallVisibility}
            userName={selectedUser} />
        }

        {callVisibility &&
          <IncomingCall
            handleCallVisibility={handleCallVisibility}
            userName={selectedUser} />
        }


        {callVisibility &&
          <ActiveCall
            handleCallVisibility={handleCallVisibility}
            userName={selectedUser} callDuration={'10:05'} />
        }

      </div>
    </main>

  )
}

export default ScriptPage;