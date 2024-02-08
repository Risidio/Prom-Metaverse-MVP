import TriangleDiv from "../../Components/TriangleDiv";
import NotificationCard from "../Cards/NotificationCard/NotificationCard";

const NotificationPopup = () => {
  return (
    <article className="notification">
      <h1 className="notification-title">
        Notifications
      </h1>

      <section className="notification__card-container">
        <NotificationCard
          userName="userName"
          userActionDescription="want to add you in their contact list"/>

        <NotificationCard
          userName="userName"
          userActionDescription="Reviews your script 'script title"/>

        <NotificationCard
          userName="userName"
          userActionDescription="Reviews your script 'script title"/>

        <NotificationCard
          userName="userName"
          userActionDescription="Reviews your script 'script title"/>


      </section>

      <TriangleDiv classNameMain="triangle-container--notification"
      classNameSecond="triangle-up--notification"></TriangleDiv>

    </article>
  )
}

export default NotificationPopup;
