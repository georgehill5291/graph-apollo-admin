import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'

const FeatureInfo = () => {
    return (
        <>
            <div className='featured'>
                <div className='featuredItem'>
                    <span className='featureTitle'>Revanue</span>
                    <div className='featureMoneyContainer'>
                        <span className='featureMoney'>$2,415</span>
                        <span className='featureMoneyRate'>
                            -11.4 <ArrowDownward className='featuredIcon negative' />
                        </span>
                    </div>
                    <span className='featuredSub'>Compared to last month</span>
                </div>

                <div className='featuredItem'>
                    <span className='featureTitle'>Sales</span>
                    <div className='featureMoneyContainer'>
                        <span className='featureMoney'>$2,415</span>
                        <span className='featureMoneyRate'>
                            -11.4 <ArrowDownward className='featuredIcon negative' />
                        </span>
                    </div>
                    <span className='featuredSub'>Compared to last month</span>
                </div>

                <div className='featuredItem'>
                    <span className='featureTitle'>Cosnt</span>
                    <div className='featureMoneyContainer'>
                        <span className='featureMoney'>$2,415</span>
                        <span className='featureMoneyRate'>
                            -11.4 <ArrowUpward className='featuredIcon' />
                        </span>
                    </div>
                    <span className='featuredSub'>Compared to last month</span>
                </div>
            </div>
        </>
    )
}

export default FeatureInfo
