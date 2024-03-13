import { useEffect, useState } from 'react';
import billboardBg from '../../../assets/billboardBanner.png';
import BillboardUploadAd from '../../../Components/Forms/BillboardUploadAd';
import BillboardDetails from './BillboardDetails';

interface BillboardBanner {
  imageUrl: string;
  billboardType: string;
  billboardName: string;
  billboardDesc: string;
}

const Billboard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showBillboardPopup, setShowBillboardPopup] = useState<boolean>(true);
  const [showBillboardUpload, seShowBillboardUpload] = useState<boolean>(false);
  const [showBillboardInfo, setShowBillboardInfo] = useState<boolean>(false);

  // placeholder billboard banner
  const slidesData: BillboardBanner[] = [
    {
      imageUrl: billboardBg,
      billboardType: 'Advertisement',
      billboardName: 'Howdy Burger',
      billboardDesc: ' Howdy Burger Website',
    },
    {
      imageUrl: billboardBg,
      billboardType: 'News',
      billboardName: 'The New Version Of PROM Is Here',
      billboardDesc: 'Read More',
    },
    {
      imageUrl: billboardBg,
      billboardType: 'Advertisement',
      billboardName:
        '"Film Foresight: Navigating Trends and Future Directions in the Movie Business"',
      billboardDesc: 'Read More',
    },
  ];

  // show the billboard upload Component

  const handleShowBillboardUpload = () => {
    setShowBillboardPopup(false);
    seShowBillboardUpload(true);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 10000); // Change image every 10 seconds

    // cleanup function for the interval
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // show the AD detail

  const handleShowBillboardDetails = () => {
    setShowBillboardInfo((prev) => !prev);
  };

  return (
    <>
      {showBillboardPopup && (
        <div
          className={`${
            showBillboardPopup ? 'billboard-modal-container ' : ''
          }`}
        >
          <article className='billboard-modal-wrapper '>
            {/* image slider */}
            <div className='billboard-image-slider-wrapper relative '>
              <div className='w-full mx-auto relative'>
                <div
                  id='default-carousel'
                  className='relative'
                  data-carousel='static'
                >
                  <div className='overflow-hidden relative h-56 sm:h-64 xl:h-80 2xl:h-[625px] '>
                    {slidesData.map((slide, index) => (
                      <div
                        key={index}
                        className={`duration-700 ease-in-out ${
                          currentIndex === index ? '' : 'hidden'
                        }`}
                        data-carousel-item
                      >
                        <img
                          src={slide.imageUrl}
                          className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2  '
                          alt='...'
                        />
                        <div className='absolute top-0 left-0 w-full h-42 p-10 '>
                          <div className='w-full h-full flex items-center justify-between '>
                            <button
                              className='billboard-img-back-btn'
                              onClick={() =>
                                setShowBillboardPopup(!showBillboardPopup)
                              }
                            >
                              Back to Promwood
                            </button>
                            <div className='billboard-cta  '>
                              <div className='relative'>
                                <input
                                  className='billboard-img-cta-search pl-10 pr-10'
                                  placeholder='Search'
                                />
                                <svg
                                  className='absolute right-4 top-1/2 transform -translate-y-1/2'
                                  width='20'
                                  height='21'
                                  viewBox='0 0 20 21'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M8.99994 0.8125C7.63446 0.812619 6.28881 1.14669 5.07525 1.78684C3.86169 2.42699 2.81541 3.35465 2.02371 4.49244C1.23202 5.63023 0.717855 6.94514 0.524124 8.32748C0.330394 9.70981 0.462712 11.1195 0.910041 12.4389C1.35737 13.7583 2.10674 14.9492 3.09562 15.9121C4.08451 16.8751 5.28424 17.5823 6.59471 17.9746C7.90519 18.367 9.28841 18.4332 10.629 18.1676C11.9695 17.9021 13.2286 17.3125 14.3011 16.4482L17.9802 20.2108C18.1702 20.3985 18.4247 20.5023 18.6888 20.5C18.953 20.4976 19.2056 20.3893 19.3924 20.1982C19.5792 20.0072 19.6852 19.7488 19.6875 19.4787C19.6898 19.2085 19.5882 18.9483 19.4047 18.754L15.7256 14.9913C16.7209 13.7 17.3406 12.1482 17.5139 10.5134C17.6871 8.87869 17.4068 7.2271 16.705 5.74768C16.0033 4.26826 14.9084 3.02078 13.5458 2.14799C12.1831 1.27521 10.6078 0.81239 8.99994 0.8125ZM2.45164 9.56996C2.45164 7.79384 3.14154 6.09046 4.36959 4.83455C5.59764 3.57864 7.26323 2.87308 8.99994 2.87308C10.7367 2.87308 12.4023 3.57864 13.6303 4.83455C14.8583 6.09046 15.5483 7.79384 15.5483 9.56996C15.5483 11.3461 14.8583 13.0495 13.6303 14.3054C12.4023 15.5613 10.7367 16.2668 8.99994 16.2668C7.26323 16.2668 5.59764 15.5613 4.36959 14.3054C3.14154 13.0495 2.45164 11.3461 2.45164 9.56996Z'
                                    fill='#30374D'
                                  />
                                </svg>
                              </div>
                              <button
                                className='billboard-img-cta-add-video'
                                onClick={handleShowBillboardUpload}
                              >
                                Add your video to the billboard
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className='billboard-image-slider-heading-wrapper absolute bottom-[-10px] left-0 p-10 w-full gradient-custom border-none'>
                          <p className='text-[17px] font-jost text-[#FFFFFF] font-[600]  relative z-10 '>
                            {slide.billboardType}
                          </p>
                          <h2 className='text-[36px] font-jost text-[#FFFFFF] font-[300] uppercase relative z-10 '>
                            {slide.billboardName}
                          </h2>
                          <button
                            className='billboard-image-slider-heading-wrapper-btn text-[17px] font-jost text-[#000000] font-[600] '
                            onClick={handleShowBillboardDetails}
                          >
                            {slide.billboardDesc}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='flex items-center justify-between absolute bottom-75 left-1/2 z-30 space-x-3 -translate-x-1/2 mt-5 w-[162px] bg-transparent border-none'>
                    {[...Array(3)].map((_, index) => (
                      <button
                        key={index}
                        type='button'
                        className='w-5 h-5 rounded-full relative border-none'
                        aria-current='false'
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                      >
                        <div
                          className={`absolute inset-0 rounded-full ${
                            currentIndex === index
                              ? 'bg-[#E8EBEF]'
                              : 'bg-[#E8EBEF]'
                          }`}
                        ></div>
                        <div
                          className={`absolute inset-[4px] rounded-full ${
                            currentIndex === index
                              ? 'bg-[#DC1720]'
                              : 'bg-transparent'
                          }`}
                        ></div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <section className='billboard-modal-container-body scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full mt-10 border-none'>
              <div className='billboard-modal-heading-wrapper ml-24'>
                <p className='font-jost font-[600] text-[17px] text-[#FFFFFF]'>
                  Monthly Stars
                </p>
                <h2 className='mt-2 font-jost font-[300] text-[17px] text-[#FFFFFF]'>
                  The citizens who've done the most for PROM
                </h2>

                <div className='billboard-modal-stars-of-month-wrapper'>
                  {[...Array(6)].map((_, index) => (
                    <div
                      key={index}
                      className='billboard-star-of-the-month'
                    ></div>
                  ))}
                </div>
                {/* <h2 className='mt-2 font-jost font-[300] text-[17px] text-[#FFFFFF]'>
                  The citizens who've done the most for PROM
                </h2> */}
              </div>
            </section>
          </article>
          <div className='billboard-modal-container-end'></div>
        </div>
      )}
      {showBillboardUpload && <BillboardUploadAd />}

      {showBillboardInfo && (
        // refactor using context Api
        <BillboardDetails
          setShowBillboardPopup={setShowBillboardPopup}
          showBillboardInfo={showBillboardInfo}
        />
      )}
    </>
  );
};

export default Billboard;
