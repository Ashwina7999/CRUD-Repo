import React from 'react'
import BarChart from './BarChart'
import ColumnChart from './ColumnChart'
import '../CSS/Style.css';

function Chart() {
    return (
        <div className="chart-container">
            <div className='chart-card'>
                <center className='chart-center'>
                    <BarChart />
                </center>
            </div>
            <div className='chart-card'>
                <center className='chart-center'>
                    <ColumnChart />
                </center>
            </div>
        </div>
    )
}

export default Chart
