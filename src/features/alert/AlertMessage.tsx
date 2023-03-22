import {useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import Alert from 'react-bootstrap/Alert';

const AlertMessage = (message: string) => {
  return (
    <div className="alert alert-info" role="alert">
      {message}
    </div>
  );
};

export default AlertMessage;
