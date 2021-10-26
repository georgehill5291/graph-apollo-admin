import type { NextPage } from 'next'
import Chart from '../src/components/chart/Chart'
import FeatureInfo from '../src/components/FeatureInfo/FeatureInfo'
import PortalLayout from '../src/components/layout/PortalLayout'
import WidgetLg from '../src/components/widgetLg/WidgetLg'
import WidgetSm from '../src/components/widgetSm/WidgetSm'

const Home: NextPage = () => {
    return (
        <PortalLayout>
            <FeatureInfo />
            <Chart />
            <div className='homeWidgets'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </PortalLayout>
    )
}

export default Home
