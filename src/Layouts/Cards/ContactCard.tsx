type Props = {
  userName: string,
  role: string,
};


const ContactCard: React.FC<Props> = ({
  userName,
  role,
}) => {
  return (
    <div className="contact__card">
      <div className="navbar__img-content--contact
      h-51px"></div>

      <div className="contact__card-info">
        <h1 className="contact__card-title">
          {userName}
        </h1>

        <h2 className="contact__card-role">
          {role}
        </h2>
      </div>

      <div className="contact__card-buttons">
        <button type="button"
        className="contact__card-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
  <rect x="0.5" y="0.5" width="29.6563" height="29" rx="14.5" stroke="#5B6179"/>
  <path d="M19.6943 9.75H10.6943C10.0739 9.75 9.56934 10.2529 9.56934 10.8705V17.6295C9.56934 18.2471 10.0739 18.75 10.6943 18.75H12.3818V21L15.9543 18.75H19.6943C20.3148 18.75 20.8193 18.2471 20.8193 17.6295V10.8705C20.8184 10.5728 20.6995 10.2877 20.4886 10.0776C20.2777 9.86751 19.992 9.7497 19.6943 9.75Z" fill="#5B6179"/>
</svg>
        </button>

        <button className="contact__card-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
  <rect x="0.75" y="0.5" width="29.6563" height="29" rx="14.5" stroke="#5B6179"/>
  <path d="M13.7793 10C13.8847 9.99997 13.9883 10.0283 14.079 10.082C14.1698 10.1357 14.2444 10.2128 14.2952 10.3053L14.3252 10.37L15.5016 13.3112C15.549 13.4295 15.5567 13.56 15.5235 13.6831C15.4903 13.8061 15.418 13.9151 15.3175 13.9935L15.2587 14.0335L14.274 14.6241L14.311 14.6847C14.7797 15.4288 15.4093 16.0584 16.1534 16.5271L16.2134 16.5635L16.8046 15.58C16.8701 15.4706 16.9693 15.3855 17.0874 15.3375C17.2055 15.2894 17.336 15.281 17.4593 15.3135L17.5269 15.3365L20.4681 16.5129C20.566 16.552 20.6517 16.6167 20.716 16.7002C20.7804 16.7837 20.8211 16.883 20.834 16.9876L20.8381 17.0588V19.4118C20.8381 20.3865 20.0481 21.1765 19.0381 21.1753C13.9916 20.8688 9.96868 16.8459 9.66162 11.7647C9.6616 11.3146 9.83358 10.8815 10.1424 10.554C10.4512 10.2265 10.8734 10.0293 11.3228 10.0029L11.4263 10H13.7793Z" fill="#5B6179"/>
</svg>
        </button>
      </div>
    </div>
  );
}

export default ContactCard;