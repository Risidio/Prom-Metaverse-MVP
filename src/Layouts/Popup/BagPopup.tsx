import WhiteButton from "../../Components/Buttons/WhiteButton";
import TriangleDiv from "../../Components/TriangleDiv";
import MovieCard from "../MovieCard/MovieCard";

const BagPopup = () => {

  // const MovieCardArray = [
  //   'movie',
  //   'movie',
  //   'movie',
  // ]; // replace data later

  return (
    <article className="bag">
      <section className="bag__top">
        <h1 className="bag__top-title">
          Your bag
        </h1>

        <div className="bag__top-points">
          <h2 className="">
            1098
          </h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#FFCD61" />
            <path d="M15.75 4C9.26 4 4 9.26 4 15.75C4 22.24 9.26 27.5 15.75 27.5C22.24 27.5 27.5 22.24 27.5 15.75C27.5 12.6337 26.2621 9.64505 24.0585 7.4415C21.855 5.23794 18.8663 4 15.75 4ZM15.75 24.57C13.4108 24.57 11.1674 23.6408 9.51332 21.9867C7.85925 20.3326 6.93 18.0892 6.93 15.75C6.93 13.4108 7.85925 11.1674 9.51332 9.51332C11.1674 7.85925 13.4108 6.93 15.75 6.93C18.0892 6.93 20.3326 7.85925 21.9867 9.51332C23.6408 11.1674 24.57 13.4108 24.57 15.75C24.57 18.0892 23.6408 20.3326 21.9867 21.9867C20.3326 23.6408 18.0892 24.57 15.75 24.57ZM12.82 15.76L15.76 20.16L18.68 15.76L15.76 11.35L12.82 15.76Z" fill="white" />
          </svg>
          <WhiteButton text="Buy more"
            type="button"
            className="button--buy-more" />

        </div>



      </section>

      <section className="bag__scripts">
        <div className="bag__scripts-top">
          <h1 className="bag__scripts-title">Your scripts</h1>
          <button className="">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group 48096598">
                <path id="Vector" d="M3.48291 8.48983C3.48291 8.29091 3.56193 8.10015 3.70258 7.9595C3.84323 7.81884 4.034 7.73983 4.23291 7.73983H7.72591V4.24683C7.72591 4.04791 7.80493 3.85715 7.94558 3.7165C8.08623 3.57584 8.277 3.49683 8.47591 3.49683C8.67482 3.49683 8.86559 3.57584 9.00624 3.7165C9.14689 3.85715 9.22591 4.04791 9.22591 4.24683V7.73983H12.7189C12.9178 7.73983 13.1086 7.81884 13.2492 7.9595C13.3899 8.10015 13.4689 8.29091 13.4689 8.48983C13.4689 8.68874 13.3899 8.8795 13.2492 9.02016C13.1086 9.16081 12.9178 9.23983 12.7189 9.23983H9.22591V12.7328C9.22591 12.9317 9.14689 13.1225 9.00624 13.2632C8.86559 13.4038 8.67482 13.4828 8.47591 13.4828C8.277 13.4828 8.08623 13.4038 7.94558 13.2632C7.80493 13.1225 7.72591 12.9317 7.72591 12.7328V9.23983H4.23291C4.034 9.23983 3.84323 9.16081 3.70258 9.02016C3.56193 8.8795 3.48291 8.68874 3.48291 8.48983Z" fill="#30374D" />
                <path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M3.79292 0.258781C6.90538 -0.0862605 10.0465 -0.0862605 13.1589 0.258781C14.9859 0.462781 16.4609 1.90178 16.6749 3.73878C17.0449 6.89578 17.0449 10.0848 16.6749 13.2418C16.4599 15.0788 14.9849 16.5168 13.1589 16.7218C10.0465 17.0668 6.90538 17.0668 3.79292 16.7218C1.96592 16.5168 0.490917 15.0788 0.276917 13.2418C-0.0923055 10.0849 -0.0923055 6.89569 0.276917 3.73878C0.490917 1.90178 1.96692 0.462781 3.79292 0.258781ZM12.9929 1.74878C9.99078 1.41602 6.96106 1.41602 3.95892 1.74878C3.40316 1.81044 2.88442 2.05766 2.48649 2.4505C2.08857 2.84334 1.83471 3.35886 1.76592 3.91378C1.41026 6.95475 1.41026 10.0268 1.76592 13.0678C1.83492 13.6225 2.08887 14.1378 2.48678 14.5305C2.88468 14.9231 3.40331 15.1702 3.95892 15.2318C6.93592 15.5638 10.0159 15.5638 12.9929 15.2318C13.5483 15.17 14.0667 14.9228 14.4644 14.5302C14.8622 14.1375 15.116 13.6224 15.1849 13.0678C15.5406 10.0268 15.5406 6.95475 15.1849 3.91378C15.1158 3.35937 14.8618 2.84443 14.4642 2.452C14.0665 2.05958 13.5482 1.81256 12.9929 1.75078" fill="#30374D" />
              </g>
            </svg>

          </button>
        </div>

        <div className="bag__scripts-movies">
          <MovieCard title="Movie"
            description="A new live" />

          <MovieCard title="Movie"
            description="A new live" />

          <MovieCard title="Movie"
            description="A new live" />


        </div>

      </section>

      <section className="bag__bottom">
        <h1 className="bag__bottom-title">
          Your Borkmarked scipts
        </h1>

        <p className="bag__bottom-description">
          You don’t have any scipts bokmarked yet, go to the board on the sciptwriter builing to read some.
        </p>
      </section>

      <TriangleDiv></TriangleDiv>

    </article>
  )
}

export default BagPopup;
