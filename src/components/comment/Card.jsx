import PropTypes from 'prop-types';

function Card({children, reverse}) {
    const cardStyles = {
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
        width:"770px",
        margin:"10px auto",
        padding:'10px'
    }
    
    return (
    <div className='card' style={cardStyles}>
        {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card