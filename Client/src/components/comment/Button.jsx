import PropTypes from 'prop-types';

function Button({ children, type, version, isDisabled }) {
  return (
    <button type={type} 
            className={`btn btn-${version}  ms-3`}
            disabled={isDisabled}>
        {children}
    </button>
  )
}

Button.defaultProps = { 
    type: 'button',
    version: 'warning',
    isDisabled: false
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button