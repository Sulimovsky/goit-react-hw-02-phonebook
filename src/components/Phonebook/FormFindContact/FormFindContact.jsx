import PropTypes from 'prop-types';
import s from './FormFindContact.module.css';

const FormFindContact = ({ onFilterContact, value }) => {
  return (
    <div className={s.form}>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="name"
          onChange={onFilterContact}
          value={value}
        />
      </label>
    </div>
  );
};

FormFindContact.propTypes = {
  onFilterContact: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormFindContact;
