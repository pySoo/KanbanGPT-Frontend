import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer as Toast } from 'react-toastify';

export default function ToastContainer() {
  return (
    <Toast
      position="bottom-right"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme="colored"
    />
  );
}
