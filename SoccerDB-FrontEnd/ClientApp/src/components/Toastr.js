import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

const Toastr = ({ type, message }) => {
  useEffect(() => {
    switch (type) {
      case 'error':
        toast.error(message);
        break;
      case 'info':
        toast.info(message);
        break;
      case 'warning':
        toast.warning(message);
        break;
      default:
        toast.success(message);
    }
  });

  return (
    <div>
      <ToastContainer autoClose={4000} />
    </div>
  );
};
export default Toastr;
