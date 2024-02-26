import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as SuccessIcon } from '../../resource/success-icon.svg';
import { ReactComponent as WarningIcon } from '../../resource/warning-icon.svg';
import { ReactComponent as ErrorIcon } from '../../resource/error-icon.svg';
import CloseButton from './CloseButton';

import './Toast.css';
import { removeToast } from '../../redux/toastQueueSlice';

const ICONS = {
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon,
};

const Toast = ({ id, message, type }) => {
  const [show, setShow] = useState(true);
  const nodeRef = useRef(null);
  const dispatch = useDispatch();

  const Icon = ICONS[type];

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    const node = nodeRef.current;

    const onExited = () => {
      node.removeEventListener('animationend', onExited);
      node.classList.add("collapsed");

      const totalTransitions = 6;
      let transitionCount = 0;
      node.addEventListener('transitionend', (event) => {
        transitionCount += 1;
        if (transitionCount === totalTransitions) {
          dispatch(removeToast(id));
        }
      });
    };

    if (show) {
      node.classList.add("slideEnter");
    } else {
      node.classList.remove("slideEnter");
      node.classList.add("slideExit");
      node.addEventListener('animationend', onExited);
    }
  }, [dispatch, id, nodeRef, show]);

  return (
    <div className={`toast ${type}`} ref={nodeRef}>
      <div className="toast-body">
        <div className="toast-icon">
          <Icon />
        </div>
        <div className="toast-body__content">{message}</div>
      </div>
      <CloseButton setShow={setShow} />
    </div>
  );
};

export default Toast;
