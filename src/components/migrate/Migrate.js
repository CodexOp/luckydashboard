import React, {useState} from 'react';
import './migrate.scss';
import Calculator from '../calculator/Calculator';

const Migrate = () => {
    const [active, setActive] = useState();
  
  return (
    <div className='migrate_outer'>
    <div className='calculator_title'>
        <h2>Migrate Old Token To New</h2>
    </div>
    <div className='calculator_content'>
        <div className='title_calculator'>
        <h3  className='input_label'>INPUT TOKEN</h3>
        </div>
        <div className='input_container input_max'>
            <input className='input_calculator flex_max' placeholder='amount'/>
            <div className='max'>
            <h3>Max</h3>

            </div>
        </div>
        <div className='input_button'>
        <button onClick={() => setActive('first')} className={active == 'first' ? "percentage_button active" : "percentage_button "}>25%</button>
        <button onClick={() => setActive('second')} className={active == 'second' ? "percentage_button active" : "percentage_button "}>50%</button>
        <button onClick={() => setActive('third')} className={active == 'third' ? "percentage_button active" : "percentage_button "}>75%</button>
        <button onClick={() => setActive('fourth')} className={active == 'fourth' ? "percentage_button active" : "percentage_button "}>100%</button>

        </div>

        <div className='availaible_token'>
        <p className='purple'>254675 Token Availaible</p>
        </div>
        <div className='title_calculator'>
        <h3  className='input_label'>OUTPUT TOKEN</h3>

        </div>
        <input className='input_calculator' placeholder='amount' disabled/>
        <p className='purple'>54675 Will Received</p>

    

        <div className='info_calculator'>
            <div className='info1'>
                <div className='left_info'>
                    <p className='info'>Price of old token</p>
                </div>
                <div className='right_info'>
                    <p  className='info'>5421 Token</p>
                
                </div>
            </div>
            <div className='info1'>
                <div className='left_info'>
                    <p  className='info'>Price of new token</p>
                    
                </div>
                <div className='right_info'>
                <p  className='info'>5421 Token</p>
                </div>
            </div>
            <div className='info1'>
                <div className='left_info'>
                    <p className='info'>Total token you get</p>
                </div>
                <div className='right_info'>
                    <p className='green'>+$0.00</p>
                </div>
            </div>
        </div>
        <button className='earn_button earnbutt2'>Enable</button>
        <button className='button_main earn_button earn_butt23 '>Migrate</button>
    </div>



</div>  )
}

export default Migrate