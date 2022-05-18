import PropTypes from 'prop-types';
import { BsFillTrashFill } from 'react-icons/bs';
import s from './Contacts.module.css';

const Contacts = ({ list, onDeleteContact }) => {
  return (
    <ul>
      {list.map(({ id, name, number }) => {
        return (
          <li key={id} id={id} className={s.item}>
            <p>
              <span>{name}:</span> <span>{number}</span>
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              <BsFillTrashFill />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
