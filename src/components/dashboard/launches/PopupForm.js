"use client"
import { Modal } from 'antd';
import FormPage from './Form';

const PopupForm = ({ open, onClose }) => {
  return (
    <Modal
      title=""
      open={open}
      onOk={onClose}
      onCancel={onClose}
      footer
    >
      <FormPage onClose={onClose} />
    </Modal>
  );
};

export default PopupForm;
