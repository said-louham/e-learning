import React from 'react'

const DescriptionCoures = (props) => {
    return (
        <div className='DescriptionCoures'>
            <h3>{props.title}</h3>
            <p className='description-Course'>
                {props.description}
            </p>
        </div>
    )
}

export default DescriptionCoures