import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  /* useState - React Hook, only be called directly in react component functions & custom hooks
   */
  const [modalIsOpen, setModalIsOpen] = useState(false); // always returns an [] w/ 2 elements

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onExit={closeModalHandler} />}
    </div>
  );
}

export default Todo;
