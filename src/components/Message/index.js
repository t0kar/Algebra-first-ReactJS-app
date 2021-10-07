import UserInfo from '../UserInfo';
import UniqueId from '../UniqueId';
import CurrentDate from '../CurrentDate';
import './Message.css';

export default function Message({ isImportant, message, title, children }) {
  if (message === '' || message == null) {
    return null;
  }

  let className = 'message';
  if (isImportant) className += ' message--important';

  return (
    <div className={className}>
      <div>{title}</div>
      <div>
        <UserInfo />
      </div>
      <div>
        <UniqueId />
      </div>
      <div>Your message: {message}</div>
      <div>
        <CurrentDate />
      </div>
    </div>
  );
}

function withUserInfo(Component) {
  return function (props) {
    console.log('withUserInfo', props);
    return <Component {...props} />;
  };
}

function withUniqueId(Component) {
  return function (props) {
    console.log('withUniqueID', props);
    return <Component {...props} />;
  };
}

function withCurrentDate(Component) {
  return function (props) {
    console.log('withCurrentDate', props);
    return <Component {...props} />;
  };
}

export const MessageWithHoc = withUserInfo(
  withUniqueId(withCurrentDate(Message))
);
