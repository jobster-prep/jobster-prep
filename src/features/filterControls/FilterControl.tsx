import {useSelector, useDispatch} from 'react-redux';
import Button from 'react-bootstrap/Button';

const FilterControl = (id: string, topic: string) => {
  return <Button className="filterButton" aria-label={`filter ${topic}`}></Button>;
};
export default FilterControl;
