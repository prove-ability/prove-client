/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Modal from 'react-modal';
import { useSelector, shallowEqual } from 'react-redux';

import ui from 'src/stores/ui';
import { RootState, useAppDispatch } from 'src/stores';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('body');

const Dialog: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();

  const { onDialog } = useSelector(
    ({ ui: { onDialog } }: RootState) => ({
      onDialog,
    }),
    shallowEqual,
  );

  const closeModal = () => dispatch(ui.actions.handleDialog());

  return (
    <Modal
      isOpen={onDialog}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  );
};

export default Dialog;
