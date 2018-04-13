import React from 'react'
import ReactLogo from '../images/ReactLogo.svg'
import nodeLogo from '../images/nodeLogo.svg'
import springboot from '../images/springboot.png'
import postgresLogo from '../images/postgresLogo.svg'

const Sources = () => (
    <div className="source">
        <div className="source-title">
            <h2>Technologies</h2>
        </div>
        <div className='sources first'>
            <a className="react-link" href='https://reactjs.org' target='_blank'>
                <img className="react-logo" src={ReactLogo} alt="React Logo"/>
                REACT
            </a>
        </div>
        <div className='sources second'>
            <a href='https://nodejs.org/en/' target='_blank'>
                <img className="node-logo" src={nodeLogo} alt="NodeJS Logo"/>
            </a>
        </div>
        <div className='sources third'>
            <a href='https://nodejs.org/en/' target='_blank'>
                <img className="springboot-logo" src={springboot} alt="Springboot Logo"/>
            </a>
        </div>
        <div className='sources fourth'>
            <a href='https://nodejs.org/en/' target='_blank'>
                <img className="postgres-logo" src={postgresLogo} alt="PostgreSQL Logo"/>
            </a>
        </div>
    </div>
);

export default Sources;