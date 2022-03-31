// NPM packages
import PropTypes from "prop-types";

export default function InputField({ setup, state }) {
  // safeguard
  if (setup === undefined) throw new Error("The setup prop is missing");
  if (state === undefined) throw new Error("The state prop is missing");

  const { autofocus, label, placeholder, required, type, min, max } = setup;
  const [getter, setter] = state;

  return (
    <label className="input-field">
      {label}:
      <input
        autoFocus={autofocus}
        placeholder={placeholder}
        type={type}
        required={required}
        value={getter}
        min={min}
        max={max}
        onChange={(event) => setter(event.target.value)}
      />
    </label>
  );
}

// InputField.propTypes = {
//   setup: PropTypes.shape({
//     autoFocus: PropTypes.bool,
//     label: PropTypes.string.isRequired,
//     max: PropTypes.number,
//     min: PropTypes.number,
//     placeholder: PropTypes.string.isRequired,
//     required: PropTypes.bool,
//     type: PropTypes.string.isRequired,
//   }).isRequired,
//   state: PropTypes.arrayOf(
//     PropTypes.string.isRequired,
//     PropTypes.func.isRequired
//   ).isRequired,
// };
