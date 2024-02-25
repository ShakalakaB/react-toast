import {ReactComponent as CloseIcon} from '../resource/close-icon.svg';
import './CloseButton.css';

const CloseButton = () => (
  <button className="close-button" type="button" aria-label="close">
    <CloseIcon className="close-button__icon" />
  </button>
);

export default CloseButton;
