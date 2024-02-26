import {ReactComponent as CloseIcon} from '../resource/close-icon.svg';
import './CloseButton.css';

const CloseButton = ({ setShow }) => (
  <button className="close-button" type="button" aria-label="close" onClick={() => setShow(false)}>
    <CloseIcon className="close-button__icon" />
  </button>
);

export default CloseButton;
