import { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import './MessageForm.css';
import Checkbox from '../Checkbox';
import FormButton from '../FormButton';

export default function MessageForm({ onSendMessage }) {
  const [state, setState] = useState({
    title: '',
    message: '',
    isImportant: false,
  });

  const setTitle = (event) => {
    setState((currentState) => {
      return { ...currentState, title: event.target.value };
    });
  };

  const setMessage = (event) => {
    // setState({ ...state, message: event.target.value }); ili
    setState((currentState) => {
      return { ...currentState, message: event.target.value }; //Bolji pristup
    });
  };

  const setIsImportant = (event) => {
    setState({ ...state, isImportant: event.target.checked });
  };

  const sendMessage = (event) => {
    event.preventDefault();
    console.log(state);
    onSendMessage(state);
  };

  return (
    <form className='MessageForm' onSubmit={sendMessage}>
      <div className='MessageForm__row'>
        <TextInput
          label={<div>Title:</div>}
          onChange={setTitle}
          value={state.title}
          inputProps={{ name: 'title', id: 'title', placeholder: 'title' }}
        />
      </div>
      <div className='MessageForm__row'>
        <TextInput
          label={<div>Message:</div>}
          onChange={setMessage}
          value={state.message}
          inputProps={{
            name: 'message',
            id: 'message',
            placeholder: 'message',
          }}
        />
      </div>
      <div className='MessageForm__row'>
        <Checkbox
          label='Important'
          onChange={setIsImportant}
          value='isImportant'
          checked={state.isImportant}
          inputProps={{
            name: 'checkbox-isImportant',
            id: 'checkbox-isImportant',
          }}
        />
      </div>
      <div className='MessageForm__row'>
        <FormButton
          label='Send'
          inputProps={{
            name: 'button-submit',
            id: 'button-submit-form',
          }}
        />
      </div>
    </form>
  );
}

MessageForm.propTypes = {
  onSendMessage: PropTypes.func,
};
