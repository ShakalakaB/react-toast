import './ToastContainer.css';
import Toast from './Toast';
import { useSelector } from 'react-redux';

const ToastContainer = () => {
  const toastQueue = useSelector((store) => store.toastQueue);

  return (
    <div className="toast-container">
      {toastQueue.map((toast) => (
        <Toast key={toast.id.toString()} id={toast.id} message={toast.message} type={toast.type} />
      ))}
    </div>
  );
};

export default ToastContainer;
