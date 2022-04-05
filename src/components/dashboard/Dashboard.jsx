import React from 'react';
import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard_outer">
        <div className='top_content'>
            <h2 className='heading'>TOKEN DASHBOARD</h2>
            <p className='subheading'>Understand about your token and know all the current rates</p>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </div>
        <div className='dashboard_box'>
            <div className='box_outer'>
                <p className='box_title'>Total Desposit</p>
                <h2 className='box_value'>$30,424,986,342</h2>
            </div>
            <div className='box_outer'>
                <p className='box_title'>Interest Earn</p>
                <h2 className='box_value'>$22,037,342</h2>
            </div>
            <div className='box_outer'>
                <p className='box_title'>ATH Token Price</p>
                <h2 className='box_value'>$22.00</h2>
            </div>
        </div>
        <div className='single_box'>
            <div className='internal_box'>
                <p className='title_dash'>Total Supply</p>
                <h2 className='title_value'>565,373,324,33</h2>
            </div>
            <div className='internal_box'>
                <p className='title_dash'>Crculating Supply</p>
                <h2 className='title_value'>123,342,234 TKN</h2>
            </div>
            <div className='internal_box'>
                <p className='title_dash'>Stacked Tokens</p>
                <h2 className='title_value'>9.25233%</h2>
            </div>
            <div className='internal_box'>
                <p className='title_dash'>Historical Stacking Reward</p>
                <h2 className='title_value'>457,457,478,75</h2>
            </div>
            <div className='internal_box'>
                <p className='title_dash'>Current Price USD</p>
                <h2 className='title_value'>$22.73</h2>
            </div>
            <div className='internal_box'>
                <p className='title_dash'>MarketCap</p>
                <h2 className='title_value'>450,37,390</h2>
            </div>
        </div>
    </div>
  )
}

export default Dashboard