
import PropTypes from 'prop-types';

function InputField({ label, value, onChange }) {
  return (
    <div className="form-group">
      <label className="input-label">{label}</label>
      <input
        type="number"
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
