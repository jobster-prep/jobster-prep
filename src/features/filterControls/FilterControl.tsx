import {useSelector, useDispatch} from 'react-redux';
import Button from 'react-bootstrap/Button';
import {toggleFilter} from '../filters/filterSlice';

const FilterControl = (id: string, topic: string, toggleStatus: boolean) => {
  const dispatch = useDispatch();

  return (
    <Button
      id={`filter${id}`}
      key={`filter${id}`}
      className={toggleStatus ? 'btn btn-info' : 'btn btn-light'}
      aria-label={`filter ${topic}`}
      onClick={() => {
        console.log('toggle status ', toggleStatus);
        dispatch(toggleFilter(topic));
      }}
    >
      {topic}
    </Button>
  );
};
export default FilterControl;
