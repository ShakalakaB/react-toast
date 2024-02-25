import { useRef } from 'react';
import { ReactComponent as SuccessIcon} from '../resource/success-icon.svg';
import { ReactComponent as WarningIcon} from '../resource/warning-icon.svg';
import { ReactComponent as ErrorIcon} from '../resource/error-icon.svg';
import CloseButton from './CloseButton';

import './Toast.css';

const ICONS = {
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon,
};

const Toast = ({ message }) => {
  const nodeRef = useRef();
  const Icon = ICONS.success;

  return (
    <div className="toast success" ref={nodeRef}>
      <div className="toast-body">
        <div className="toast-icon">
          <Icon />
        </div>
        <div className="toast-body__content">{message}</div>
      </div>
      {/* <CloseButton setShow={setShow} /> */}
      <CloseButton />
    </div>
  );
};

export default Toast;
