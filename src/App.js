import './App.css';
import ToastContainer from './components/Toast/ToastContainer';
import { useDispatch } from 'react-redux';
import { addToast, TOAST_TYPE } from './redux/toastQueueSlice';

function App() {
  const dispatch = useDispatch();

  const addSuccessToast = () => {
    dispatch(addToast({
      message: "Success Toast",
      type: TOAST_TYPE.SUCCESS,
    }))
  };

  const addWarningToast = () => {
    dispatch(addToast({
      message: "Warning Toast",
      type: TOAST_TYPE.WARNING,
    }))
  };

  const addErrorToast = () => {
    dispatch(addToast({
      message: "Error Toast",
      type: TOAST_TYPE.ERROR,
    }))
  };

  return (
    <div className="App">
      <ToastContainer />
      <div className="button-container">
        <button className="success-button" type="button" onClick={addSuccessToast}>Add Success Toast</button>
        <button className="warning-button" type="button" onClick={addWarningToast}>Add Warning Toast</button>
        <button className="error-button" type="button" onClick={addErrorToast}>Add Error Toast</button>
      </div>
    </div>
  );
}

export default App;
