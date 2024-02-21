import avatar from '../../../assets/avatarSmall.svg';
// using default component caused problems such as duplication errors this why I made my own style for the triangle
// import TriangleDiv from '../../../Components/TriangleDiv';
const MessagePopup = () => {
  //  user chat
  interface UserData {
    username: string;
    role: string;
  }
  const userData: UserData[] = [
    { username: '{UserName}', role: 'ScreenWriter' },
    { username: '{UserName}', role: 'ScreenWriter' },
    { username: '{UserName}', role: 'ScreenWriter' },
    { username: '{UserName}', role: 'ScreenWriter' },
    { username: '{UserName}', role: 'ScreenWriter' },
  ];

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
                />
                <svg
                  className='message__search-icon'
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='#30374D'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M6.52377 1.50471e-08C5.4834 9.06589e-05 4.45814 0.25462 3.53352 0.742353C2.6089 1.23009 1.81174 1.93688 1.20854 2.80376C0.605347 3.67065 0.213604 4.67249 0.0659994 5.7257C-0.0816049 6.7789 0.0192094 7.85294 0.360031 8.8582C0.700854 9.86346 1.2718 10.7708 2.02524 11.5045C2.77867 12.2382 3.69275 12.777 4.69121 13.0759C5.68967 13.3749 6.74355 13.4253 7.76494 13.223C8.78632 13.0206 9.74559 12.5715 10.5627 11.9129L13.3659 14.7796C13.5106 14.9226 13.7045 15.0018 13.9058 15C14.107 14.9982 14.2995 14.9156 14.4419 14.7701C14.5842 14.6245 14.6649 14.4277 14.6666 14.2218C14.6684 14.016 14.591 13.8177 14.4512 13.6697L11.648 10.8029C12.4064 9.81904 12.8786 8.63669 13.0106 7.39118C13.1425 6.14567 12.929 4.88732 12.3943 3.76014C11.8596 2.63296 11.0255 1.6825 9.98726 1.01752C8.94906 0.352541 7.74878 -8.41056e-05 6.52377 1.50471e-08ZM1.53458 6.67235C1.53458 5.31911 2.06022 4.0213 2.99588 3.06442C3.93153 2.10754 5.20055 1.56996 6.52377 1.56996C7.84698 1.56996 9.116 2.10754 10.0517 3.06442C10.9873 4.0213 11.513 5.31911 11.513 6.67235C11.513 8.02559 10.9873 9.3234 10.0517 10.2803C9.116 11.2372 7.84698 11.7747 6.52377 11.7747C5.20055 11.7747 3.93153 11.2372 2.99588 10.2803C2.06022 9.3234 1.53458 8.02559 1.53458 6.67235Z'
                    fill='#30374D'
                  />
                </svg>
                {/* end of search input wrapper*/}
              </div>
              {/* start of aside  */}

              <div className='flex flex-col  mt-4 -mx-2 h-[400px] overflow-y-auto overflow-x-hidden'>
                {userData.map((data, index) => (
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
                    <svg
                      width='13'
                      height='13'
                      viewBox='0 0 13 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M4.88219 2.52613e-08C4.9982 -3.23851e-05 5.11208 0.0311228 5.21192 0.0902037C5.31175 0.149285 5.39387 0.234119 5.44967 0.335824L5.48267 0.407L6.77678 3.64229C6.8289 3.77246 6.83734 3.91603 6.80081 4.0514C6.76428 4.18676 6.68478 4.30661 6.57425 4.39288L6.50955 4.43688L5.42637 5.08653L5.46714 5.15318C5.98269 5.9717 6.6752 6.66422 7.49372 7.17976L7.55972 7.21988L8.21002 6.138C8.28208 6.0177 8.39128 5.92407 8.52117 5.8712C8.65106 5.81834 8.7946 5.8091 8.93019 5.84488L9.00461 5.87012L12.2399 7.16424C12.3476 7.20721 12.4418 7.27836 12.5126 7.37022C12.5834 7.46209 12.6282 7.57129 12.6424 7.68641L12.6469 7.76471V10.3529C12.6469 11.4251 11.7779 12.2941 10.6669 12.2928C5.11578 11.9557 0.690548 7.53047 0.352783 1.94118C0.352756 1.44604 0.541935 0.969608 0.881614 0.609361C1.22129 0.249113 1.68579 0.0322834 2.18008 0.00323539L2.29396 2.52613e-08H4.88219Z'
                        fill='#5B6179'
                      />
                    </svg>
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
                      <svg
                        className='w-6 h-6 ml-15'
                        fill='none'
                        stroke='#030D2E'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        ></path>
                      </svg>
                    </button>
                    <button className='absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600'>
                      <svg
                        width='26'
                        height='25'
                        viewBox='0 0 26 25'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M0.0281013 4.8133C-0.348597 1.44572 3.13297 -1.0273 6.20885 0.424195L23.5138 8.58775C26.8287 10.1503 26.8287 14.8482 23.5138 16.4108L6.20885 24.5758C3.13297 26.0273 -0.347148 23.5543 0.0281013 20.1867L0.723544 13.9421H12.4852C12.8695 13.9421 13.238 13.7901 13.5097 13.5195C13.7814 13.2489 13.9341 12.8819 13.9341 12.4993C13.9341 12.1166 13.7814 11.7496 13.5097 11.479C13.238 11.2085 12.8695 11.0564 12.4852 11.0564H0.724993L0.0281013 4.8133Z'
                          fill='#DC1720'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of chat room */}
        </div>
      </div>
      {/* refactor using  TriangleDiv Component*/}
      <div className='triangle-up-message'></div>
    </section>
  );
};

export default MessagePopup;
