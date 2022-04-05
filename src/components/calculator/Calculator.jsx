import React from 'react';
import './calculator.scss';

const Calculator = () => {
  return (
    <div className='calculator_outer'>
        <div className='calculator_title'>
            <h2>See how much you can receive</h2>
        </div>
        <div className='calculator_content'>
            <div className='title_calculator'>
            <h3  className='input_label'>Deposit amount (Token)</h3>
            </div>
            <div className='input_container input_max'>
                <input className='input_calculator flex_max' placeholder='amount'/>
                <div className='max'>
                <h3>Max</h3>

                </div>
            </div>
            <div className='availaible_token'>
            <p className='purple'>254675 Dai Availaible</p>
            </div>
            <div className='title_calculator'>
            <h3  className='input_label'>Term In Days</h3>

            </div>
            <input className='input_calculator' placeholder='amount'/>
            <div className='title_calculator'>
            <h3 className='input_label'>Fixed APR / MPH APR</h3>
            </div>
            <input className='input_calculator' placeholder='amount'/>

            <div className='info_calculator'>
                <div className='info1'>
                    <div className='left_info'>
                        <p className='info'>Fixed-rate yield at maturity</p>
                    </div>
                    <div className='right_info'>
                        <p  className='info'>5421 Token</p>
                        <p>$2000</p>
                    </div>
                </div>
                <div className='info1'>
                    <div className='left_info'>
                        <p  className='info'>Token rewards</p>
                        
                    </div>
                    <div className='right_info'>
                    <p  className='info'>5421 Token</p>
                        <p>$1800</p>
                    </div>
                </div>
                <div className='info1'>
                    <div className='left_info'>
                        <p className='info'>Total available at maturity 	</p>
                    </div>
                    <div className='right_info'>
                        <p className='green'>+$0.00</p>
                    </div>
                </div>
            </div>
            <button className='button_main earn_button'>Start Earning</button>
        </div>



    </div>
  )
}

export default Calculator