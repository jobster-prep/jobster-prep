import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownToggle from 'react-bootstrap/DropdownToggle';
// import DropdownMenu from 'react-bootstrap/DropdownMenu';
// import DropdownItem from 'react-bootstrap/DropdownItem';

import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {RootState} from '../../app/store';
import {toggleModal, updateSelectedTopic} from './addQuestionSlice';
import {FilterOptionsType} from '../../types';

function AddQuestionModal(filterOptions: FilterOptionsType, selectedTopic: string) {
  const dispatch = useDispatch();

  //const topics = Object.keys(filterOptions);
  const topics = ['topic1', 'topic2', 'topic3'];
  console.log(topics);

  return (
    <div className="modal show" style={{display: 'block', position: 'initial'}}>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={() => dispatch(toggleModal())}>
          <Modal.Title>Add a Question</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <div>
              <input id="newQuestionText" placeholder="New Question" />
            </div>
            <div>
              <input id="newAnswerText" placeholder="Answer" />
            </div>
          </form>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedTopic ? selectedTopic : 'Select a topic'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {topics.map(el => (
                <Dropdown.Item onClick={() => dispatch(updateSelectedTopic(el))}>
                  {el}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(toggleModal())}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default AddQuestionModal;
