import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, type, children }) => {
  return (
    <section className={s[type]}>
      {title && <h1 className={s.title}>{title}</h1>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
