import { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/TextInput';
import './MessageForm.css';
import Checkbox from '../../components/Checkbox';
import FormButton from '../../components/FormButton';

export default function MessageForm({ onSendMessage }) {
  const [state, setState] = useState({
    title: '',
    message: '',
    isImportant: false,
  });

  const handleOnChange = (event) => {
    let value = undefined;

    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    setState((currentState) => {
      console.log('Current state', { ...currentState });
      return { ...currentState, [event.target.name]: value };
    });
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
          onChange={handleOnChange}
          value={state.title}
          inputProps={{ name: 'title', id: 'title', placeholder: 'title' }}
        />
      </div>
      <div className='MessageForm__row'>
        <TextInput
          label={<div>Message:</div>}
          onChange={handleOnChange}
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
          onChange={handleOnChange}
          value='isImportant'
          checked={state.isImportant}
          checkboxProps={{
            name: 'isImportant',
            id: 'is-important',
          }}
        />
      </div>
      <div className='MessageForm__row'>
        <FormButton type='submit'>Send</FormButton>
      </div>
    </form>
  );
}

MessageForm.propTypes = {
  onSendMessage: PropTypes.func,
};
