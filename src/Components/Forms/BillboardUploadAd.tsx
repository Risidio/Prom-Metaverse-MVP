import { useState } from 'react';
import QuestionIcon from '../../Components/Icons/Question';
import Navbar from '../../Layouts/NavBar';
import closeIcon from '../../assets/closeIcon.svg';
import uploadIcon from '../../assets/uploadIcon.svg';
import coin from '../../assets/coin.svg';
import pdfIcon from '../../assets/pdfIcon.svg';
import arrowDown from '../../assets/arrowDown.svg';
import { collaboratorsArray, users } from '../../utils/arrays/arrays';

interface UploadScriptForm {
  title: string;
  gener: string[];
  status: string;
  synopsis: string;
  contributors: string[];
  pdfFile: File[];
  imageFile: File[];
}

interface UploadProgress {
  [key: string]: number;
}

interface User {
  userName: string;
  roles: string[];
  status: string;
}

const BillboardUploadAd = () => {
  const [callVisibility, setCallVisibility] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [fetchedCollaboratos, setFetchedCollaborators] =
    useState(collaboratorsArray);
  const [noFound, setNoFound] = useState(false);
  const [noFoundUser, setNoFoundUser] = useState(false);

  const [searchInput, setSearchInput] = useState('');
  const [searchInputUsers, setSearchInputUsers] = useState('');

  //  Script Upload status -----------------------------------
  // upload form state for submit the form
  const [uploadScriptForm, setUploadScriptForm] = useState<UploadScriptForm>({
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
  const [uploadProgress, setUploadProgress] = useState<UploadProgress>({});
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
  const [selectedImage, setSelectedImage] = useState<File[]>([]);
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files!);
    setSelectedImage(files); // Update selected image state
  };
  const toggleDropdownGener = () => {
    setOpenGener(!openGener);
  };
  const [selectedStatus, setSelectedStatus] = useState('');
  const toggleDropdownStatus = () => {
    setOpenStatus(!openStatus);
  };

  const setStatus = (status: string) => {
    setUploadScriptForm((prevState) => ({
      ...prevState,
      status: status,
    }));
    setSelectedStatus(status); // Update the selectedStatus state
    setOpenStatus(false); // Close the dropdown after selecting a status
  };

  const setGener = (gener: string) => {
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
  //  clg for build
  console.log(
    selectedUser,
    setNoFound,
    setNoFoundUser,
    progressPercentage,
    selectedGener,
    setSelectedGener,
    setFetchedCollaborators
  );
  // onChange upload form method
  const handleScriptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUploadScriptForm({
      ...uploadScriptForm,
      [name]: value,
    });
  };

  const handlePdfFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadingPdf(true);
    const files = Array.from(e.target.files || []);
    setUploadScriptForm((prevState: UploadScriptForm) => ({
      ...prevState,
      pdfFile: files,
    }));
  };
  const handleUploadPdf = () => {
    uploadScriptForm.pdfFile.forEach((file: File) => {
      const progressInterval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const currentProgress = (prevProgress[file.name] || 0) + 10;
          return {
            ...prevProgress,
            [file.name]: currentProgress,
          };
        });
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

  const scriptUploadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      return; // Exit the function, preventing form submission
    }

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

  const handleAddUser = (userName: string, roles: string[], status: string) => {
    // Check if the user is not already in the collaboratorsArray
    if (
      !collaboratorsArray.some(
        (collaborator) => collaborator.userName === userName
      )
    ) {
      // Add a new collaborator with the provided userName, role, and status
      const newUser: User = {
        userName,
        roles,
        status,
      };
      collaboratorsArray.push(newUser);
    }
  };

  return (
    <>
      {!showScript && (
        <main className=' w-full h-full fixed top-0 left-0 flex items-center justify-center'>
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
              <nav className='script__top bg-[#d4e6f2]'>
                <h1 className=''>Upload your advertisement</h1>

                <button
                  className='script__top-close'
                  type='button'
                  onClick={() => setShowScript(true)}
                >
                  <img src={closeIcon} alt={closeIcon} />
                </button>
              </nav>
              <form onSubmit={scriptUploadSubmit}>
                <div className='script-upload-wrapper'>
                  {/* left side container for the script upload */}
                  <div className='script-upload-left-side'>
                    <div className='script-upload-left-heading-container'>
                      <h4 className='script-upload-primary'>
                        Upload your advertisement
                      </h4>
                    </div>

                    <div className='billboard-upload-movie-container '>
                      <h4 className='billboard-upload-primary mt-10 pb-2'>
                        Title of your ad*
                      </h4>
                      <input
                        name='title'
                        value={uploadScriptForm.title}
                        onChange={handleScriptChange}
                        type='text'
                        placeholder='Title of your ad*'
                        className='billboard-upload-movie-input ring-black-600'
                        required
                      />
                    </div>
                    <div className='billboard-upload-movie-selection'>
                      <div className='billboard-upload-input-container'>
                        <div>
                          <h4 className='billboard-upload-primary pb-3 pt-5'>
                            Link
                          </h4>
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
                                      uploadScriptForm.gener.includes(option) &&
                                      'text-black-600'
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
                          <h4 className='billboard-upload-primary pb-3 pt-5'>
                            Link Name
                          </h4>
                          <div className='relative'>
                            <div onClick={toggleDropdownStatus}>
                              <button
                                type='button'
                                className={`w-[292px] h-[48px] rounded-full bg-white  ring-1 ring-gray-300 ${
                                  openStatus && 'ring-black-600'
                                }`}
                              >
                                <div className='flex items-center justify-between'>
                                  <span className='ml-5 text-[18px] font-[400] text-[#5B6179] font-jost'>
                                    {selectedStatus
                                      ? selectedStatus
                                      : 'Choose status'}
                                  </span>
                                  <div className='mr-5'>
                                    <img src={arrowDown} alt={arrowDown} />
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
                    <div className='billboard-upload-text-field'>
                      <h4 className='billboard-upload-primary mb-3'>
                        Synopsis
                      </h4>
                      <textarea
                        name='synopsis'
                        required
                        value={uploadScriptForm.synopsis}
                        className='w-[635px] h-[258.8px] p-4 border border-gray-300 rounded font-jost'
                        placeholder='Write a short description of your script'
                      ></textarea>
                      <div className='billboard-upload-contributors-btn-container'>
                        <div className=' pl-5 w-full flex items-center'>
                          <input
                            type='checkbox'
                            className='billboard-checkbox form-checkbox pr-5 w-[22px] h-[22px] bg-transparent'
                            id='seeable'
                            name='seeable'
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                          />
                          <label
                            className=' pl-3 flex items-center'
                            htmlFor='seeable'
                          >
                            I want my ad to be seeable from the world view (80
                            <img src={coin} alt={coin} className='pl-1 pr-1' />)
                          </label>
                        </div>
                        <div className=' pl-5 w-full flex items-center'>
                          <input
                            type='checkbox'
                            className='billboard-checkbox form-checkbox pr-5 w-[22px] h-[22px] bg-transparent'
                            id='seeable'
                            name='seeable'
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                          />
                          <label
                            className=' pl-3 flex items-center'
                            htmlFor='seeable'
                          >
                            I want my ad to be seeable from the world view (80
                            <img src={coin} alt={coin} className='pl-1 pr-1' />)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* right side container for the billboard upload */}
                  <div className='billboard-upload-right-side'>
                    <div className='billboard-right-side-heading'>
                      <h4 className='font-jost text-[16px] text-[#000000] font-medium'>
                        Upload an image (Free)
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
                                  <img src={uploadIcon} alt={uploadIcon} />
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
                                      className='text-center flex items-center justify-center w-full text-[16px] font-[400] text-[#7B7B7B'
                                    >
                                      <div className='title text-[#7B7B7B] font-jost align-middle'>
                                        png or jpeg <br />
                                        Optimal size xxxx
                                      </div>
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
                      <div key={index} className='billboard-uploaded-wrapper'>
                        <div className='billboard-uploaded-content'>
                          <img src={pdfIcon} alt={pdfIcon} />
                          <button
                            className='billboard-uploaded-content-close-icon'
                            type='button'
                          >
                            <img
                              src={closeIcon}
                              alt={closeIcon}
                              className='w-[12px] h-[12px]'
                            />
                          </button>
                          <div className='flex items-start  justify-start flex-col'>
                            <p className='billboard-uploaded-name'>
                              {file.name}
                            </p>
                            <p className='billboard-uploaded-size'>
                              {file.size}
                            </p>
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
                      <h4 className='font-jost text-[16px] text-[#000000] font-medium flex'>
                        Upload a clip or a video ( 10
                        <img src={coin} alt={coin} className='pl-1 pr-1' />)
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
                                  <img
                                    src={closeIcon}
                                    alt={closeIcon}
                                    className='w-[12px] h-[12px]'
                                  />
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
                                <img src={uploadIcon} alt={uploadIcon} />

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

                                    <div className='title text-[#7B7B7B] font-jost align-middle mt-5'>
                                      MP4 or AVI
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        {/* toggle switch */}
                        {/* script buttons for draft and upload */}
                        <div className='billboard-upload-footer-container'>
                          <div className='billboard-upload-footer-btn-wrapper mt-36'>
                            <button
                              type='submit'
                              className='billboard-upload-btn--uploaded'
                            >
                              Upload Your Add
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
              <img
                src={closeIcon}
                alt={closeIcon}
                className='absolute top-5 right-5'
              />
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
export default BillboardUploadAd;
