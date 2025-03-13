import React from 'react'
import './IconComp.css'

const IconComp = ({Icon,Head,Sub}) => {
return (
    <div className='CompContainer' >
        <div className="CompIcon">
            <Icon/>
        </div>
        <div className="CompContent">
            <h1>{Head}</h1>
            <p>{Sub}</p>

        </div>
    
    </div>
)
}

export default IconComp
