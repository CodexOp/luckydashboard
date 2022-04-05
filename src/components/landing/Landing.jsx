import React from 'react'
import Calculator from '../calculator/Calculator';
import './landing.scss';
import wrapper1 from '../../images/Vector1.svg'
import wrapper2 from '../../images/Vector2.svg'

const Landing = () => {
  return (
    <div className='landing_outer' >
    
        <div className='landing_left'>
            <h2 className='landing_heading'>Earn up to 0.00% fixed APR + 0.00% $TKN APR on your crypto</h2>
            <p className='landing_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</p>
            <div className='boxes'>
        <div className='box'>
            <p className='box_heading'>
            TVL
            </p>
            <h2 className='box_content'>
            $35.1m

            </h2>
        </div>
        <div className='box'>
            <p className='box_heading'>
            YIELD EARNED
            </p>
            <h2 className='box_content'>
            $1.445m

            </h2>
        </div>
        <div className='box'>
            <p className='box_heading'>
            TOTAL  REVENUE 
            </p>
            <h2 className='box_content'>
            $0.319m

            </h2>
        </div>
    </div>
        </div>
        <div className='landing_right'>
            <div className='calculator_container'>
            <Calculator />
            </div>
        </div>
        
    </div>
  
  )
}

export default Landing