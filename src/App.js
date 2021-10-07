import './App.css';
import MessageForm from './containers/MessageForm';
import { useContext, useState } from 'react';
import AppContext from './contexts/AppContext';
import ChatContext from './contexts/ChatContext';
import MessageList from './containers/MessageList';
import AppRouter from './pages/AppRouter';

function App() {
  const appContext = useContext(AppContext);
  const [messageObjects, setMessageObjects] = useState([]);

  const handleSendMessage = (messageObject) => {
    setMessageObjects([...messageObjects, messageObject]);
  };

  return (
    <ChatContext.Provider value={messageObjects}>
      <AppRouter />
      <div className='App'>
        <header className='App-header'>
          <h1>My ReactJS app {appContext.language}</h1>
          <MessageList />
          <MessageForm onSendMessage={handleSendMessage} />
          <a
            className='App-link'
            href='https://github.com/t0kar'
            target='_blank'
            rel='noopener noreferrer'
          >
            My GitHub
          </a>
        </header>
      </div>
    </ChatContext.Provider>
  );
}

function withLove(Component) {
  return function () {
    return (
      <div>
        <Component />
        <div>Made with ❤</div>
      </div>
    );
  };
}
export default withLove(App);
