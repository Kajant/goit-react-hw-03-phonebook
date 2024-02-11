import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filterInput, filter }) => {
    return (
        <div className={css.filter}>
            <p className={css.info}>Find contacts by name</p>
            <input className={css.input} type="text" name="filter" placeholder="name" value={filter} onChange={filterInput} />
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterInput: PropTypes.func,
};

export default Filter;