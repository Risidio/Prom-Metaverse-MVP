import { useState } from 'react';
import avatar from '../../../assets/avatarSmall.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import dialIcon from '../../../assets/dialIcon.svg';
import emojis from '../../../assets/emojis.svg';
import sendMessage from '../../../assets/sendMessage.svg';
//  user chat

interface UserData {
  username: string;
  role: string;
}
const userData: UserData[] = [
  { username: 'Peter', role: 'ScreenWriter' },
  { username: 'Louai', role: 'ScreenWriter' },
  { username: 'Celeine', role: 'ScreenWriter' },
  { username: 'Natalia', role: 'ScreenWriter' },
  { username: 'David', role: 'ScreenWriter' },
];
const MessagePopup = () => {
  // states for searching user chats
  const [searchValue, setSearchValue] = useState('');
  const [filteredUserData, setFilteredUserData] = useState(userData);

  // handling the searched users
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim().toLowerCase();
    setSearchValue(inputValue);

    // If input value is empty, show all users
    if (inputValue === '') {
      setFilteredUserData(userData);
    } else {
      // Filter user data based on input value
      const filteredData = userData.filter((user) =>
        user.username.toLowerCase().startsWith(inputValue[0])
      );
      setFilteredUserData(filteredData);
    }
  };

  return (
    <section className='message'>
      <div className='flex h-[603px] antialiased w-[763px] rounded-[37px]'>
        <div className='flex flex-row h-[603px] w-[763px] '>
          <div className='flex flex-col py-8  w-[227px] bg-[#30374D] flex-shrink-0 rounded-tl-[37px] rounded-bl-[37px]'>
            <div className='flex flex-col'>
              <div className='message__search-wrapper pl-3'>
                {/* start of search input wrapper*/}
                <input
                  type='text'
                  placeholder='Search'
                  className='message__search-input'
                  value={searchValue}
                  onChange={handleSearchInputChange}
                />

                <img
                  src={searchIcon}
                  alt={searchIcon}
                  className='message__search-icon'
                />
                {/* end of search input wrapper*/}
              </div>
              {/* start of aside  */}

              <div className='flex flex-col  mt-4 -mx-2 h-[400px] overflow-y-auto overflow-x-hidden'>
                {filteredUserData.map((data, index) => (
                  <button
                    key={index}
                    className='flex flex-row items-center hover:bg-[#5b6179] rounded-xl pt-2 pl-2 pb-2 pr-4 mx-auto'
                  >
                    <div className='flex items-center justify-center'>
                      <img src={avatar} alt={avatar} />
                    </div>
                    <div className='flex flex-col items-center pl-3 w-[100px]'>
                      <div
                        style={{
                          fontFamily: 'inherit',
                          fontWeight: '500',
                          color: '#C4494F',
                          fontSize: '16px',
                        }}
                      >
                        {data.username}
                      </div>
                      <div
                        style={{
                          fontFamily: 'inherit',
                          fontWeight: '400',
                          color: '#fff',
                          fontSize: '16px',
                        }}
                      >
                        {data.role}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* end of aside  */}
              {/* start of the new btn */}
              <div className='flex  items-center justify-center border-[#fff] bg-[none] rounded-[38px] message-chat-btn-wrapper'>
                <button type='button' className='new-chat-btn'>
                  New
                </button>
              </div>
              {/* end of new btn */}
            </div>
          </div>
          {/* start of chat room */}
          <div className='flex flex-col flex-auto h-[603px]'>
            <div className='flex flex-col flex-auto flex-shrink-0 w-[540px] h-[603px] bg-[#fff]  rounded-tr-[37px] rounded-br-[37px]'>
              <header className='message__user-chat-info-container'>
                <div className='message__user-chat-profile-img'>
                  <img
                    src={avatar}
                    alt={avatar}
                    className='user_chat-profile-img'
                  />
                  <p className='user__chat-profile-name'>UserName</p>
                </div>
                {/* profile and call wrapper */}
                <div className='user__chat-profile-btn-wrapper'>
                  <button
                    type='button'
                    className='user__chat-call-btn-container'
                  >
                    <img src={dialIcon} alt={dialIcon} />
                  </button>

                  <div className='user__chat-profile-btn-container'>
                    <button type='button' className='user__chat-profile-btn'>
                      Profile
                    </button>
                  </div>
                </div>
                {/* end of profile and call wrapper */}
              </header>
              <div className='flex flex-col h-[603px] overflow-x-auto'>
                <div className='flex flex-col'>
                  <div className='grid grid-cols-12'>
                    {/* for spacing */}
                    <div className='col-start-1 col-end-8 p-3 rounded-lg'></div>
                    <div className='col-start-1 col-end-8 p-3 rounded-lg'></div>
                    <div className='col-start-1 col-end-8 p-3 rounded-lg'></div>
                    <div className='col-start-1 col-end-8 p-3 rounded-lg'></div>
                    <div className='col-start-1 col-end-8 p-3 rounded-lg'></div>
                    <div className='col-start-1 col-end-12 p-3 rounded-lg'>
                      <div className='flex flex-row items-start'>
                        <img src={avatar} alt={avatar} />

                        <div className='relative ml-3 text-[16px] bg-[#E8EBEF] py-6 px-6 shadow rounded-xl '>
                          <div
                            style={{
                              fontFamily: 'inherit',
                              fontSize: '16px',
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore.
                          </div>
                          <div
                            className='absolute bottom-3 right-3 text-xs text-[#868686]'
                            style={{
                              fontFamily: 'inherit',
                              fontSize: '12px',
                              fontWeight: '400',
                            }}
                          >
                            Jan 10 - 1.23pm
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-start-1 col-end-8 p-3 rounded-lg'></div>
                    <div className='col-start-2 col-end-12 p-2 rounded-lg '>
                      <div className='flex items-start justify-start flex-row-reverse'>
                        <img src={avatar} alt='' />
                        <div className='relative mr-3  text-[16px] text-[#E8EBEF] bg-[#5B6179] py-8 px-6 shadow rounded-xl'>
                          <div
                            style={{
                              fontFamily: 'inherit',
                              fontSize: '16px',
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt.
                          </div>
                          <div
                            className='absolute bottom-3 right-3 text-xs text-[#B6BAC4]'
                            style={{
                              fontFamily: 'inherit',
                              fontSize: '12px',
                              fontWeight: '400',
                            }}
                          >
                            Jan 10 - 1.23pm
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-row items-center h-[46px] rounded-xl  w-[540px] p-10 mb-4 pl-5'>
                <div className='flex-grow'>
                  <div className='relative w-full'>
                    <input
                      type='text'
                      placeholder='Type Your message here'
                      className='flex w-full border rounded-[23px] focus:outline-none bg-[#E8EBEF] focus:border-[black] pl-7 h-[46px] message-chat-placeholder'
                    />
                    <button className='absolute flex items-center justify-center h-full w-12 right-14 top-0 text-gray-400 hover:text-gray-600'>
                      <img
                        src={emojis}
                        alt={emojis}
                        className='w-6 h-6 ml-15'
                      />
                    </button>

                    <button className='absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600'>
                      <img src={sendMessage} alt={sendMessage} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of chat room */}
        </div>
      </div>
      <div className='triangle-up-message'></div>
    </section>
  );
};

export default MessagePopup;
