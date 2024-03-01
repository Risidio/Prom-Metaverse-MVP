import { useState } from 'react';
import QuestionIcon from '../../Components/Icons/Question';
import Navbar from '../../Layouts/NavBar';

// import OnBoardingFirst from "../Layouts/Popup/OnboardingPopup/OnboardingFirst";
import { collaboratorsArray, users } from '../../utils/arrays/arrays';

const ScriptUploadFile = () => {
  const [callVisibility, setCallVisibility] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [fetchedCollaboratos, setFetchedCollaborators] =
    useState(collaboratorsArray);
  const [noFound, setNoFound] = useState(false);
  const [noFoundUser, setNoFoundUser] = useState(false);

  const [searchInput, setSearchInput] = useState('');
  const [searchInputUsers, setSearchInputUsers] = useState('');

  //  Script Upload status -----------------------------------

  // refactor code to use typescript
  // upload form state for submit the form
  const [uploadScriptForm, setUploadScriptForm] = useState({
    title: '',
    gener: [],
    status: '',
    synopsis: '',
    contributors: [],
    pdfFile: [],
    imageFile: [],
  });
  // state to show the script Upload container
  const [showScript, setShowScript] = useState(false);
  //  state for progress bar when upload (not working yet)
  const [uploadProgress, setUploadProgress] = useState({});
  //  state for progress bar when upload (not working yet)
  const [progressPercentage, setProgressPercentage] = useState({});
  //  status dropdown state
  const [openStatus, setOpenStatus] = useState(false);
  // gender dropdwon state
  const [openGener, setOpenGener] = useState(false);
  // preserve the selected status
  const [selectedGener, setSelectedGener] = useState([]);
  // pdf upload state
  const [uploadingPdf, setUploadingPdf] = useState(false);
  // image state
  const [selectedImage, setSelectedImage] = useState([]);
  //  state for upload script anoymously
  const [isChecked, setIsChecked] = useState(false);
  // thank you popup state
  const [showThankYou, setShowThankYou] = useState(false);
  // status array
  const statusOptions = ['In Progress', 'On Hold', 'Cancelled', 'Finished'];
  // geners array
  const genreOptions = ['Action', 'Adventure', 'Cancelled', 'Finished'];
  //  return to userProfile Component
  const handleThankYou = () => {
    setShowThankYou(!showThankYou);
    setShowScript(true);
  };
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    console.log('Selected Image Files:', files); // Log selected image files
    setSelectedImage(files); // Update selected image state
  };
  const toggleDropdownGener = () => {
    setOpenGener(!openGener);
  };
  const [selectedStatus, setSelectedStatus] = useState('');
  const toggleDropdownStatus = () => {
    setOpenStatus(!openStatus);
  };

  const setStatus = (status) => {
    setUploadScriptForm((prevState) => ({
      ...prevState,
      status: status,
    }));
    setSelectedStatus(status); // Update the selectedStatus state
    setOpenStatus(false); // Close the dropdown after selecting a status
  };

  const setGener = (gener) => {
    // Check if the gener is already selected
    if (uploadScriptForm.gener.includes(gener)) {
      // If already selected, remove it
      setUploadScriptForm((prevState) => ({
        ...prevState,
        gener: prevState.gener.filter((item) => item !== gener),
      }));
    } else {
      // If not selected, add it
      setUploadScriptForm((prevState) => ({
        ...prevState,
        gener: [...prevState.gener, gener],
      }));
    }
  };

  // onChange upload form method
  const handleScriptChange = (e) => {
    const { name, value } = e.target;
    setUploadScriptForm({
      ...uploadScriptForm,
      [name]: value,
    });
  };

  const handleAddContributors = () => {
    const newContributor = prompt('Enter the name of the contributor');
    if (newContributor) {
      setUploadScriptForm((prevState) => ({
        ...prevState,
        contributors: [...prevState.contributors, newContributor],
      }));
    }
  };
  const handlePdfFileChange = (e) => {
    setUploadingPdf(true);
    const files = Array.from(e.target.files);
    setUploadScriptForm((prevState) => ({
      ...prevState,
      pdfFile: files,
    }));
  };
  const handleUploadPdf = () => {
    uploadScriptForm.pdfFile.forEach((file) => {
      const progressInterval = setInterval(() => {
        setUploadProgress((prevProgress) => ({
          ...prevProgress,
          [file.name]: (prevProgress[file.name] || 0) + 10,
        }));
        // Calculate and update progress percentage
        setProgressPercentage((prevPercentage) => ({
          ...prevPercentage,
          [file.name]: Math.min(
            Math.round((prevProgress[file.name] || 0) / 10), // Calculate percentage
            100
          ),
        }));
      }, 1000);

      setTimeout(() => {
        clearInterval(progressInterval);
        setUploadProgress((prevProgress) => ({
          ...prevProgress,
          [file.name]: 100,
        }));
        // Update progress percentage to 100% when upload completes
        setProgressPercentage((prevPercentage) => ({
          ...prevPercentage,
          [file.name]: 100,
        }));
      }, 3000);
    });
  };

  // Inside scriptUploadSubmit function
  const scriptUploadSubmit = (e) => {
    e.preventDefault();

    // Validation logic to check for empty fields
    if (
      !uploadScriptForm.title ||
      uploadScriptForm.gener.length === 0 || // Check if genre is not selected
      uploadScriptForm.status.length === 0 ||
      !uploadScriptForm.status ||
      !uploadScriptForm.synopsis ||
      selectedImage.length === 0
    ) {
      // If any required field is empty, display an error message
      console.log('Please fill in all required fields.');
      return; // Exit the function, preventing form submission
    }

    // If all required fields are filled, proceed with form submission
    // 1. Log the uploadScriptForm object to verify its contents
    console.log('Upload Script Form:', uploadScriptForm);

    // 2. Log the selectedImage array to verify its contents
    console.log('Selected Image:', selectedImage);

    // Create a FormData object to store form data
    const formData = new FormData();

    // Append form data to the FormData object
    formData.append('title', uploadScriptForm.title);
    formData.append('gener', uploadScriptForm.gener.join(','));
    formData.append('status', uploadScriptForm.status);
    formData.append('synopsis', uploadScriptForm.synopsis);
    formData.append('contributors', uploadScriptForm.contributors.join(','));

    // Append image files to FormData object
    selectedImage.forEach((image, index) => {
      formData.append(`image_${index}`, image);
    });

    //  cannot directly log FormData objects, loop through the entries
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    // Submit the form data
    console.log('Submitting form data...');
    setShowThankYou(true);
  };

  // --------------------------------------------------
  const handleCallVisibility = () => {
    setCallVisibility(!callVisibility);
  };

  const handleButtonClick = (userName: string) => {
    setSelectedUser(userName);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleInputChangeUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputUsers(e.target.value);
  };

  const filteredCollaborators = fetchedCollaboratos.filter((collaborator) =>
    collaborator.userName.toLowerCase().includes(searchInput.toLowerCase())
  );

  const filteredUsers = users.filter((user) =>
    user.userName.toLowerCase().includes(searchInputUsers.toLowerCase())
  );

  const handleAddUser = (userName: string, role: string, status: string) => {
    // Check if the user is not already in the collaboratorsArray
    if (
      !collaboratorsArray.some(
        (collaborator) => collaborator.userName === userName
      )
    ) {
      // Add a new collaborator with the provided userName, role, and status
      const newUser = {
        userName,
        role, // You can provide a default role for the new user
        status, // You can provide a default status for the new user
      };

      // Update the collaboratorsArray using the state setter
      setFetchedCollaborators((prevCollaborators) => [
        ...prevCollaborators,
        newUser,
      ]);
    }
  };

  return (
    <>
      {!showScript && (
        <main className='bg-red-700 w-full h-full fixed top-0 left-0 flex items-center justify-center'>
          <div>
            <div className='logo'></div>
            <QuestionIcon></QuestionIcon>

            <Navbar
              userName='userName'
              level={1}
              contactValue={searchInput}
              handleInputChange={handleInputChange}
              handleCallVisibility={handleCallVisibility}
              collaborators={filteredCollaborators}
              onButtonClick={handleButtonClick}
              showNoFound={noFound}
              users={filteredUsers}
              contactValueUser={searchInputUsers}
              handleInputChangeUser={handleInputChangeUsers}
              onButtonClickAddUser={handleAddUser}
              showNoFoundUser={noFoundUser}
            />

            <div
              className={`${
                showThankYou
                  ? 'script-upload-container-close'
                  : 'script-upload-container'
              }`}
            >
              <nav className='script__top bg-[#d39ea4]'>
                <h1 className=''>Upload your script</h1>

                <button
                  className='script__top-close'
                  type='button'
                  onClick={() => setShowScript(true)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M10.0114 12.6921L16.7467 19.4197C17.1041 19.7767 17.5888 19.9772 18.0943 19.9772C18.5997 19.9772 19.0844 19.7767 19.4418 19.4197C19.7992 19.0627 20 18.5785 20 18.0736C20 17.5688 19.7992 17.0846 19.4418 16.7276L12.704 10L19.4405 3.27238C19.6174 3.09562 19.7577 2.88579 19.8534 2.65487C19.9491 2.42395 19.9983 2.17646 19.9983 1.92654C19.9982 1.67662 19.9489 1.42915 19.8531 1.19828C19.7573 0.967401 19.6169 0.757635 19.4399 0.580956C19.2629 0.404276 19.0529 0.264142 18.8217 0.168555C18.5905 0.0729685 18.3427 0.0238009 18.0925 0.0238599C17.8423 0.0239188 17.5946 0.0732027 17.3634 0.168898C17.1323 0.264594 16.9223 0.404827 16.7454 0.58159L10.0114 7.30921L3.2761 0.58159C3.10044 0.399757 2.89028 0.254687 2.6579 0.154847C2.42551 0.0550063 2.17554 0.00239379 1.92258 7.98025e-05C1.66962 -0.00223418 1.41873 0.0457963 1.18456 0.141369C0.950377 0.236941 0.737599 0.378142 0.558637 0.556731C0.379675 0.735321 0.238113 0.947724 0.14221 1.18154C0.046308 1.41537 -0.00201381 1.66592 6.42879e-05 1.9186C0.00214238 2.17127 0.0545786 2.421 0.154314 2.65322C0.254049 2.88543 0.399086 3.09549 0.580961 3.27111L7.3188 10L0.582232 16.7289C0.400356 16.9045 0.25532 17.1146 0.155584 17.3468C0.0558492 17.579 0.00341238 17.8287 0.00133429 18.0814C-0.000743808 18.3341 0.047578 18.5846 0.14348 18.8185C0.239383 19.0523 0.380945 19.2647 0.559907 19.4433C0.738869 19.6219 0.951647 19.7631 1.18583 19.8586C1.42 19.9542 1.67089 20.0022 1.92385 19.9999C2.17681 19.9976 2.42678 19.945 2.65917 19.8452C2.89155 19.7453 3.10171 19.6002 3.27736 19.4184L10.0114 12.6933V12.6921Z'
                      fill='#030D2E'
                    />
                  </svg>
                </button>
              </nav>
              <form onSubmit={scriptUploadSubmit}>
                <div className='script-upload-wrapper'>
                  {/* left side container for the script upload */}
                  <div className='script-upload-left-side'>
                    <div className='script-upload-left-heading-container'>
                      <h4 className='script-upload-primary'>
                        Upload Your script
                      </h4>
                    </div>
                    <div className='script-upload-btn-container'>
                      <a className='script-upload-movie-btn'>Movie</a>
                      <a className='script-upload-TvShow-btn'>TvShow</a>
                    </div>
                    <div className='script-upload-movie-container'>
                      <h4 className='script-upload-primary'>
                        Title of the movie
                      </h4>
                      <input
                        name='title'
                        value={uploadScriptForm.title}
                        onChange={handleScriptChange}
                        type='text'
                        placeholder='Title of your script'
                        className='script-upload-movie-input ring-black-600'
                        required
                      />
                    </div>
                    <div className='script-upload-movie-selection'>
                      <div className='script-upload-input-container'>
                        <div>
                          <h4 className='script-upload-primary'>Genre</h4>
                          <div className='relative'>
                            <div onClick={toggleDropdownGener}>
                              <button
                                type='button'
                                className={`w-[292px] h-[48px] rounded-full bg-white ring-1 ring-gray-300 ${
                                  openGener ? 'ring-black-600' : ''
                                }`}
                              >
                                <div className='flex items-center justify-start'>
                                  {uploadScriptForm.gener.length > 0 ? (
                                    uploadScriptForm.gener.map(
                                      (genre, index) => (
                                        <span
                                          key={index}
                                          className={`ml-5 text-[18px] font-[400] font-jost flex items-center justify-center ${
                                            index !==
                                            uploadScriptForm.gener.length - 1
                                              ? 'mr-1'
                                              : ''
                                          }`}
                                        >
                                          <span
                                            className='inline-block rounded-8px bg-[#DC1720] text-[#fff]'
                                            style={{
                                              width: '100px',
                                              height: '26px',
                                              borderRadius: '8px',
                                              fontSize: '16px',
                                              fontWeight: '400',
                                            }}
                                          >
                                            {genre}
                                          </span>
                                        </span>
                                      )
                                    )
                                  ) : (
                                    <span className='ml-5 text-[18px] text-[#5B6179] font-[400] font-jost'>
                                      Choose genre
                                    </span>
                                  )}
                                </div>
                              </button>
                            </div>
                            {openGener && (
                              <ul className='z-2 rounded-lg absolute mt-3 ml-24 w-[194px] max-h-[164px] overflow-y-auto bg-[#fff] ring-1 ring-gray-300 flex flex-col items-center justify-center'>
                                {genreOptions.map((option, index) => (
                                  <li
                                    key={index}
                                    className={`cursor-pointer mb-1 select-none w-[160px] h-[30px] hover:bg-[#E8EBEF] font-jost flex items-center justify-center font-[500] text-[#030D2E] ${
                                      uploadScriptForm.gener.includes(option)
                                        ? 'text-black-600'
                                        : ''
                                    }`}
                                    onClick={() => setGener(option)}
                                  >
                                    {option}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className='script-upload-primary'>Status</h4>
                          <div className='relative'>
                            <div onClick={toggleDropdownStatus}>
                              <button
                                type='button'
                                className={`w-[292px] h-[48px] rounded-full bg-white  ring-1 ring-gray-300 ${
                                  openStatus ? 'ring-black-600' : ''
                                }`}
                              >
                                <div className='flex items-center justify-between'>
                                  <span className='ml-5 text-[18px] font-[400] text-[#5B6179] font-jost'>
                                    {selectedStatus
                                      ? selectedStatus
                                      : 'Choose status'}
                                  </span>
                                  <div className='mr-5'>
                                    <svg
                                      style={{
                                        marginRight: '10px',
                                      }}
                                      width='20'
                                      height='10'
                                      viewBox='0 0 20 10'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M1.00019 1L9.83262 9L18.665 1'
                                        stroke='#30374D'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </button>
                            </div>
                            {openStatus && (
                              <ul className='z-2 absolute mt-3 w-[194px] h-[164px] rounded bg-[#fff] ring-1 ring-gray-300 flex flex-col items-center justify-center'>
                                {statusOptions.map((option, index) => (
                                  <li
                                    key={index}
                                    className='cursor-pointer mb-1 select-none w-[160px] h-[30px]  hover:bg-[#E8EBEF] font-jost flex items-center justify-center font-[500] text-[#030D2E]'
                                    onClick={() => setStatus(option)}
                                  >
                                    {option}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='script-upload-text-field'>
                      <h4 className='script-upload-primary mb-3'>Synopsis</h4>
                      <textarea
                        name='synopsis'
                        required
                        value={uploadScriptForm.synopsis}
                        onChange={handleScriptChange}
                        className='w-[635px] h-[258.8px] p-4 border border-gray-300 rounded font-jost'
                        placeholder='Write a short description of your script'
                      ></textarea>
                      <div className='script-upload-contributors-btn-container'>
                        <svg
                          className='ml-5 mr-5'
                          width='27'
                          height='27'
                          viewBox='0 0 27 27'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M23.625 10.125H16.875V3.375C16.875 2.47989 16.5194 1.62145 15.8865 0.988514C15.2535 0.355579 14.3951 0 13.5 0C12.6049 0 11.7465 0.355579 11.1135 0.988514C10.4806 1.62145 10.125 2.47989 10.125 3.375L10.2448 10.125H3.375C2.47989 10.125 1.62145 10.4806 0.988514 11.1135C0.355579 11.7465 0 12.6049 0 13.5C0 14.3951 0.355579 15.2535 0.988514 15.8865C1.62145 16.5194 2.47989 16.875 3.375 16.875L10.2448 16.7552L10.125 23.625C10.125 24.5201 10.4806 25.3785 11.1135 26.0115C11.7465 26.6444 12.6049 27 13.5 27C14.3951 27 15.2535 26.6444 15.8865 26.0115C16.5194 25.3785 16.875 24.5201 16.875 23.625V16.7552L23.625 16.875C24.5201 16.875 25.3785 16.5194 26.0115 15.8865C26.6444 15.2535 27 14.3951 27 13.5C27 12.6049 26.6444 11.7465 26.0115 11.1135C25.3785 10.4806 24.5201 10.125 23.625 10.125Z'
                            fill='#30374D'
                          />
                        </svg>

                        <button
                          className='font-jost text-[#30374D] text-[16px]'
                          onClick={handleAddContributors}
                        >
                          Add contributors
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* right side container for the script upload */}
                  <div className='script-upload-right-side'>
                    <div className='script-right-side-heading'>
                      <h4 className='font-jost text-[16px] text-[#000000] font-medium'>
                        Your Script
                      </h4>
                    </div>
                    {/* Pdf upload  */}

                    {!uploadingPdf && (
                      <>
                        <div className='w-full flex mt-1'>
                          <div className='w-[591px] h-[270px] extraOutline rounded-lg '>
                            <div className='w-[591px] h-[270px] flex'>
                              <div className='extraOutline  bg-white w-max  m-auto rounded-lg'>
                                <div className='file_upload flex flex-col items-center justify-center border-4 border-dotted border-gray-300 rounded-lg w-[591px] h-[270px] mb-1'>
                                  <svg
                                    width='30'
                                    height='26'
                                    viewBox='0 0 30 26'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      d='M15.0568 9.57553V25M15.0568 9.57553L20.2855 14.717M15.0568 9.57553L9.82813 14.717M24.6428 18.1447C27.2902 18.1447 29 16.035 29 13.4316C28.9999 12.401 28.6562 11.3988 28.0216 10.5785C27.387 9.7582 26.4964 9.1651 25.4863 8.89C25.3309 6.96787 24.5208 5.15346 23.1869 3.7401C21.853 2.32675 20.0734 1.39707 18.1357 1.10138C16.1979 0.805678 14.2155 1.16124 12.5087 2.11059C10.8019 3.05993 9.47065 4.54756 8.7301 6.33297C7.17095 5.90798 5.50396 6.10943 4.09587 6.89302C2.68777 7.67661 1.6539 8.97814 1.2217 10.5113C0.7895 12.0444 0.994373 13.6836 1.79125 15.0682C2.58813 16.4528 3.91173 17.4695 5.47088 17.8945'
                                      stroke='#7B7B7B'
                                      strokeWidth='2'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>

                                  <div>
                                    <label>
                                      <input
                                        className='text-sm cursor-pointer w-36 hidden font-jost'
                                        onChange={handlePdfFileChange}
                                        multiple
                                        type='file'
                                        required
                                      />

                                      <div className='text-[#000000] mt-5 rounded font-semibold cursor-pointer font-jost'>
                                        Drag & Drop or
                                        <span className='text-[#3871B5] font-[400] mr-1 ml-1 underline'>
                                          Choose file
                                        </span>
                                        to upload
                                      </div>
                                    </label>
                                    <button
                                      onClick={handleUploadPdf}
                                      className='text-center'
                                    >
                                      PDF
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {uploadScriptForm.pdfFile.map((file, index) => (
                      <div key={index} className='script-uploaded-wrapper'>
                        <div className='script-uploaded-content'>
                          <svg
                            width='35'
                            height='38'
                            viewBox='0 0 35 38'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M8.07692 19C7.7199 19 7.3775 19.143 7.12505 19.3975C6.8726 19.652 6.73077 19.9972 6.73077 20.3571V27.1429C6.73077 27.5028 6.8726 27.848 7.12505 28.1025C7.3775 28.357 7.7199 28.5 8.07692 28.5C8.43395 28.5 8.77634 28.357 9.0288 28.1025C9.28125 27.848 9.42308 27.5028 9.42308 27.1429V25.7857H10.0962C10.9887 25.7857 11.8447 25.4283 12.4758 24.792C13.107 24.1557 13.4615 23.2927 13.4615 22.3929C13.4615 21.493 13.107 20.63 12.4758 19.9937C11.8447 19.3575 10.9887 19 10.0962 19H8.07692ZM10.0962 23.0714H9.42308V21.7143H10.0962C10.2747 21.7143 10.4459 21.7858 10.5721 21.913C10.6983 22.0403 10.7692 22.2129 10.7692 22.3929C10.7692 22.5728 10.6983 22.7454 10.5721 22.8727C10.4459 22.9999 10.2747 23.0714 10.0962 23.0714ZM14.8077 20.3571C14.8077 19.9972 14.9495 19.652 15.202 19.3975C15.4544 19.143 15.7968 19 16.1538 19H16.8269C18.0765 19 19.2749 19.5004 20.1585 20.3912C21.0421 21.282 21.5385 22.4902 21.5385 23.75C21.5385 25.0098 21.0421 26.218 20.1585 27.1088C19.2749 27.9996 18.0765 28.5 16.8269 28.5H16.1538C15.7968 28.5 15.4544 28.357 15.202 28.1025C14.9495 27.848 14.8077 27.5028 14.8077 27.1429V20.3571ZM17.5 25.6704C17.8944 25.5305 18.236 25.2706 18.4777 24.9266C18.7194 24.5827 18.8492 24.1715 18.8492 23.75C18.8492 23.3285 18.7194 22.9173 18.4777 22.5734C18.236 22.2294 17.8944 21.9695 17.5 21.8296V25.6704ZM22.8846 27.1429V20.3571C22.8846 19.9972 23.0264 19.652 23.2789 19.3975C23.5313 19.143 23.8737 19 24.2308 19H28.2692C28.6263 19 28.9687 19.143 29.2211 19.3975C29.4736 19.652 29.6154 19.9972 29.6154 20.3571C29.6154 20.7171 29.4736 21.0623 29.2211 21.3168C28.9687 21.5713 28.6263 21.7143 28.2692 21.7143H25.5769V23.0714H28.2692C28.6263 23.0714 28.9687 23.2144 29.2211 23.4689C29.4736 23.7234 29.6154 24.0686 29.6154 24.4286C29.6154 24.7885 29.4736 25.1337 29.2211 25.3882C28.9687 25.6427 28.6263 25.7857 28.2692 25.7857H25.5769V27.1429C25.5769 27.5028 25.4351 27.848 25.1826 28.1025C24.9302 28.357 24.5878 28.5 24.2308 28.5C23.8737 28.5 23.5313 28.357 23.2789 28.1025C23.0264 27.848 22.8846 27.5028 22.8846 27.1429ZM18.8462 9.5V0H6.73077C5.6597 0 4.6325 0.428953 3.87515 1.19249C3.11779 1.95603 2.69231 2.99162 2.69231 4.07143V14.9286C1.97826 14.9286 1.29346 15.2145 0.788559 15.7236C0.283653 16.2326 0 16.923 0 17.6429V29.8571C0 30.577 0.283653 31.2674 0.788559 31.7764C1.29346 32.2855 1.97826 32.5714 2.69231 32.5714V33.9286C2.69231 35.0084 3.11779 36.044 3.87515 36.8075C4.6325 37.571 5.6597 38 6.73077 38H28.2692C29.3403 38 30.3675 37.571 31.1249 36.8075C31.8822 36.044 32.3077 35.0084 32.3077 33.9286V32.5714C33.0217 32.5714 33.7065 32.2855 34.2114 31.7764C34.7163 31.2674 35 30.577 35 29.8571V17.6429C35 16.923 34.7163 16.2326 34.2114 15.7236C33.7065 15.2145 33.0217 14.9286 32.3077 14.9286V13.5714H22.8846C21.8135 13.5714 20.7864 13.1425 20.029 12.3789C19.2716 11.6154 18.8462 10.5798 18.8462 9.5ZM32.3077 17.6429V29.8571H2.69231V17.6429H32.3077ZM21.5385 9.5V0.158786C22.1962 0.349256 22.7951 0.705106 23.279 1.19293L31.1244 9.10236C31.6083 9.59022 31.9613 10.194 32.1502 10.8571H22.8846C22.5276 10.8571 22.1852 10.7142 21.9327 10.4596C21.6803 10.2051 21.5385 9.85994 21.5385 9.5Z'
                              fill='black'
                            />
                          </svg>

                          <button
                            className='script-uploaded-content-close-icon'
                            type='button'
                          >
                            <svg
                              width='12'
                              height='12'
                              viewBox='0 0 12 12'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M6.00683 7.61524L10.048 11.6518C10.2624 11.866 10.5533 11.9863 10.8566 11.9863C11.1598 11.9863 11.4507 11.866 11.6651 11.6518C11.8795 11.4376 12 11.1471 12 10.8442C12 10.5413 11.8795 10.2508 11.6651 10.0366L7.62239 6L11.6643 1.96343C11.7705 1.85737 11.8546 1.73147 11.9121 1.59292C11.9695 1.45437 11.999 1.30588 11.999 1.15592C11.9989 1.00597 11.9693 0.857491 11.9118 0.718966C11.8544 0.580441 11.7701 0.454581 11.6639 0.348573C11.5578 0.242565 11.4317 0.158485 11.293 0.101133C11.1543 0.0437811 11.0056 0.0142806 10.8555 0.0143159C10.7054 0.0143513 10.5567 0.0439216 10.4181 0.101339C10.2794 0.158756 10.1534 0.242896 10.0472 0.348954L6.00683 4.38552L1.96566 0.348954C1.86026 0.239854 1.73417 0.152812 1.59474 0.092908C1.45531 0.0330038 1.30533 0.00143627 1.15355 4.78815e-05C1.00177 -0.00134051 0.85124 0.0274778 0.710733 0.0848213C0.570226 0.142165 0.442559 0.226885 0.335182 0.334039C0.227805 0.441193 0.142868 0.568634 0.0853262 0.708927C0.0277848 0.84922 -0.00120828 0.999554 3.85728e-05 1.15116C0.00128543 1.30276 0.0327471 1.4526 0.0925883 1.59193C0.152429 1.73126 0.239451 1.85729 0.348577 1.96267L4.39128 6L0.349339 10.0373C0.240214 10.1427 0.153192 10.2687 0.0933506 10.4081C0.0335095 10.5474 0.00204743 10.6972 0.000800572 10.8488C-0.000446285 11.0004 0.0285468 11.1508 0.0860882 11.2911C0.14363 11.4314 0.228567 11.5588 0.335944 11.666C0.443321 11.7731 0.570988 11.8578 0.711495 11.9152C0.852002 11.9725 1.00254 12.0013 1.15431 12C1.30609 11.9986 1.45607 11.967 1.5955 11.9071C1.73493 11.8472 1.86102 11.7601 1.96642 11.651L6.00683 7.616V7.61524Z'
                                fill='black'
                              />
                            </svg>
                          </button>
                          <div className='flex items-start  justify-start flex-col'>
                            <p className='script-uploaded-name'>{file.name}</p>

                            <p className='script-uploaded-size'> {file.size}</p>
                            {/* Progress bar */}
                            <div className='progress-container'>
                              <div
                                className='progress-bar'
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  borderRadius: '2px',
                                  backgroundColor: '#DC1720',
                                }}
                              ></div>
                              <span className='text-[20px] progress-perc'>{`${
                                uploadProgress[file.name] || 0
                              }%`}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* image upload */}
                    <div className='script-right-side-heading'>
                      <h4 className='font-jost text-[16px] text-[#000000] font-medium'>
                        Add a cover image
                      </h4>
                    </div>
                    <div>
                      <div className='w-[591px] h-[195px] extraOutline rounded-lg '>
                        <div className='w-[591px] h-[195px] flex'>
                          {selectedImage.length > 0 ? (
                            <div className=' bg-white w-max m-auto rounded-lg'>
                              <div className='file_upload flex  items-start justify-start bg-[#EFF3F5] rounded-lg w-[591px] h-[195px] mb-1 relative'>
                                {/* close button  */}
                                <button
                                  className='absolute top-5 right-5'
                                  type='button'
                                >
                                  <svg
                                    width='12'
                                    height='12'
                                    viewBox='0 0 12 12'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      fillRule='evenodd'
                                      clipRule='evenodd'
                                      d='M6.00683 7.61524L10.048 11.6518C10.2624 11.866 10.5533 11.9863 10.8566 11.9863C11.1598 11.9863 11.4507 11.866 11.6651 11.6518C11.8795 11.4376 12 11.1471 12 10.8442C12 10.5413 11.8795 10.2508 11.6651 10.0366L7.62239 6L11.6643 1.96343C11.7705 1.85737 11.8546 1.73147 11.9121 1.59292C11.9695 1.45437 11.999 1.30588 11.999 1.15592C11.9989 1.00597 11.9693 0.857491 11.9118 0.718966C11.8544 0.580441 11.7701 0.454581 11.6639 0.348573C11.5578 0.242565 11.4317 0.158485 11.293 0.101133C11.1543 0.0437811 11.0056 0.0142806 10.8555 0.0143159C10.7054 0.0143513 10.5567 0.0439216 10.4181 0.101339C10.2794 0.158756 10.1534 0.242896 10.0472 0.348954L6.00683 4.38552L1.96566 0.348954C1.86026 0.239854 1.73417 0.152812 1.59474 0.092908C1.45531 0.0330038 1.30533 0.00143627 1.15355 4.78815e-05C1.00177 -0.00134051 0.85124 0.0274778 0.710733 0.0848213C0.570226 0.142165 0.442559 0.226885 0.335182 0.334039C0.227805 0.441193 0.142868 0.568634 0.0853262 0.708927C0.0277848 0.84922 -0.00120828 0.999554 3.85728e-05 1.15116C0.00128543 1.30276 0.0327471 1.4526 0.0925883 1.59193C0.152429 1.73126 0.239451 1.85729 0.348577 1.96267L4.39128 6L0.349339 10.0373C0.240214 10.1427 0.153192 10.2687 0.0933506 10.4081C0.0335095 10.5474 0.00204743 10.6972 0.000800572 10.8488C-0.000446285 11.0004 0.0285468 11.1508 0.0860882 11.2911C0.14363 11.4314 0.228567 11.5588 0.335944 11.666C0.443321 11.7731 0.570988 11.8578 0.711495 11.9152C0.852002 11.9725 1.00254 12.0013 1.15431 12C1.30609 11.9986 1.45607 11.967 1.5955 11.9071C1.73493 11.8472 1.86102 11.7601 1.96642 11.651L6.00683 7.616V7.61524Z'
                                      fill='black'
                                    />
                                  </svg>
                                </button>
                                <article>
                                  {selectedImage.map((image, index) => (
                                    <div
                                      key={index}
                                      className='w-[225px] h-[177px] mt-5 ml-5 '
                                    >
                                      <div className='flex gap-5'>
                                        <img
                                          src={URL.createObjectURL(image)}
                                          alt={`Image ${index}`}
                                        />
                                        <div className='flex flex-col'>
                                          <p className='mt-2 text-[16px] font-jost text-[#000000]'>
                                            {image.name}
                                          </p>
                                          <span className='text-[#6D6D6D] text-[14px]  font-jost'>
                                            {(image.size / 1024).toFixed(2)} KB
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </article>
                              </div>
                            </div>
                          ) : (
                            <div className='extraOutline bg-white w-max m-auto rounded-lg'>
                              <div className='file_upload flex flex-col items-center justify-center border-4 border-dotted border-gray-300 rounded-lg w-[591px] h-[195px] mb-1 '>
                                <svg
                                  width='30'
                                  height='26'
                                  viewBox='0 0 30 26'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M15.0568 9.57553V25M15.0568 9.57553L20.2855 14.717M15.0568 9.57553L9.82813 14.717M24.6428 18.1447C27.2902 18.1447 29 16.035 29 13.4316C28.9999 12.401 28.6562 11.3988 28.0216 10.5785C27.387 9.7582 26.4964 9.1651 25.4863 8.89C25.3309 6.96787 24.5208 5.15346 23.1869 3.7401C21.853 2.32675 20.0734 1.39707 18.1357 1.10138C16.1979 0.805678 14.2155 1.16124 12.5087 2.11059C10.8019 3.05993 9.47065 4.54756 8.7301 6.33297C7.17095 5.90798 5.50396 6.10943 4.09587 6.89302C2.68777 7.67661 1.6539 8.97814 1.2217 10.5113C0.7895 12.0444 0.994373 13.6836 1.79125 15.0682C2.58813 16.4528 3.91173 17.4695 5.47088 17.8945'
                                    stroke='#7B7B7B'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                </svg>

                                <div className='input_field flex flex-col w-max mx-auto text-center'>
                                  <label>
                                    <input
                                      className='text-sm cursor-pointer w-36 hidden font-jost'
                                      type='file'
                                      accept='image/*'
                                      multiple
                                      onChange={handleImageChange}
                                      required
                                    />
                                    <div className='text-[#000000] mt-5 rounded font-semibold cursor-pointer font-jost'>
                                      Drag & Drop or
                                      <span className='text-[#3871B5] font-[400] mr-1 ml-1 underline'>
                                        Choose file
                                      </span>
                                      to upload
                                    </div>

                                    <div className='title text-[#7B7B7B] font-jost align-middle'>
                                      PNG or JPEG <br />
                                      (add here minimum size and format)
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* toggle switch */}
                        <label
                          className={`${
                            uploadingPdf
                              ? 'flex cursor-pointer mt-2 select-none items-center justify-between w-[591px] mt-40'
                              : 'flex cursor-pointer mt-2 select-none items-center justify-between w-[591px]'
                          }`}
                        >
                          <div className='relative flex items-center'>
                            <input
                              type='checkbox'
                              className='sr-only'
                              checked={isChecked}
                              onChange={toggleCheckbox}
                            />
                            <div className='block h-8 w-14 rounded-full bg-[#E5E7EB]'></div>
                            <div
                              className={`dot absolute left-1 top-1 h-6 w-6 rounded-full transition ${
                                isChecked ? 'left-7' : ''
                              }`}
                              style={{
                                backgroundColor: isChecked
                                  ? '#DC1720'
                                  : 'white',
                                border: isChecked
                                  ? '1px solid #9A101B'
                                  : '1px solid #E5E7EB',
                              }}
                            ></div>
                            <span className='ml-2 font-jost text-[16px] text-[#000000] font-[400]'>
                              Upload script anonymously
                            </span>
                          </div>
                          <div className='mt-8 bg-[#E8EBEF] w-[332px] h-[82px] flex items-center justify-center rounded-[8px] pl-2 pr-2 pt-2 pb-2'>
                            <span className='text-[14px] font-jost font-[400] leading-15 tracking-normal text-justify'>
                              Anonymous scripts will still be visible in your
                              personal script collection but people won’t be
                              able to see the publisher. You can always change
                              this later.
                            </span>
                          </div>
                        </label>
                        {/* script buttons for draft and upload */}
                        <div className='script-upload-footer-container'>
                          <div className='script-upload-footer-btn-wrapper'>
                            {!uploadingPdf && (
                              <button
                                type='button'
                                className='script-upload-btn--draft'
                              >
                                Save as draft
                              </button>
                            )}

                            <button
                              type='submit'
                              className={`${
                                uploadingPdf
                                  ? 'script-upload-btn--uploaded'
                                  : 'script-upload-btn--upload'
                              }`}
                            >
                              Upload your Script
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      )}

      {/* Thank You message Popup */}
      {showThankYou && (
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className='bg-white p-8  w-[502px] h-[607px] rounded-3xl relative flex items-center justify-start flex-col'>
            <button onClick={handleThankYou}>
              <svg
                className='absolute top-5 right-5'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M10.0114 12.6921L16.7467 19.4197C17.1041 19.7767 17.5888 19.9772 18.0943 19.9772C18.5997 19.9772 19.0844 19.7767 19.4418 19.4197C19.7992 19.0627 20 18.5785 20 18.0736C20 17.5688 19.7992 17.0846 19.4418 16.7276L12.704 10L19.4405 3.27238C19.6174 3.09562 19.7577 2.88579 19.8534 2.65487C19.9491 2.42395 19.9983 2.17646 19.9983 1.92654C19.9982 1.67662 19.9489 1.42915 19.8531 1.19828C19.7573 0.967401 19.6169 0.757635 19.4399 0.580956C19.2629 0.404275 19.0529 0.264142 18.8217 0.168555C18.5905 0.0729685 18.3427 0.0238009 18.0925 0.0238599C17.8423 0.0239188 17.5946 0.0732027 17.3634 0.168898C17.1323 0.264594 16.9223 0.404827 16.7454 0.58159L10.0114 7.30921L3.2761 0.58159C3.10044 0.399757 2.89028 0.254687 2.6579 0.154847C2.42551 0.0550063 2.17554 0.00239379 1.92258 7.98025e-05C1.66962 -0.00223418 1.41873 0.0457963 1.18456 0.141369C0.950377 0.236941 0.737599 0.378142 0.558637 0.556731C0.379675 0.735321 0.238113 0.947724 0.14221 1.18154C0.046308 1.41537 -0.00201381 1.66592 6.42879e-05 1.9186C0.00214238 2.17127 0.0545786 2.421 0.154314 2.65322C0.254049 2.88544 0.399086 3.09549 0.580961 3.27111L7.3188 10L0.582232 16.7289C0.400356 16.9045 0.25532 17.1146 0.155584 17.3468C0.0558492 17.579 0.00341238 17.8287 0.00133429 18.0814C-0.000743808 18.3341 0.047578 18.5846 0.14348 18.8185C0.239383 19.0523 0.380945 19.2647 0.559907 19.4433C0.738869 19.6219 0.951647 19.7631 1.18583 19.8586C1.42 19.9542 1.67089 20.0022 1.92385 19.9999C2.17681 19.9976 2.42678 19.945 2.65917 19.8452C2.89155 19.7453 3.10171 19.6002 3.27736 19.4184L10.0114 12.6933V12.6921Z'
                  fill='#030D2E'
                />
              </svg>
            </button>

            <h2 className='text-[32px] font-jost text-[#DC1720] font-bold mt-10 text-center'>
              Thank you for uploading your script
            </h2>

            <p className='mt-10 font-jost text-[#030D2E] text-[16px] text-center w-[342px]'>
              Your script has been added to your bag, you can now share it with
              the community if you wish to get feedback and find collaborators.{' '}
            </p>
            <div className='thank-you-btn-container mt-24 flex items-center justify-center flex-col'>
              <button className='thank-you-btn-share'>
                Share it with the community
              </button>
              <button className='thank-you-see-script-btn' type='button'>
                See my script
              </button>
              <p className='font-jost text-[#979EA9] text-[16px]'>
                You will still be able to share it later from you bag.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScriptUploadFile;
