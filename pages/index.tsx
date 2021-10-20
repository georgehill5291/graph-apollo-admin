import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Chart from '../src/components/chart/Chart'
import FeatureInfo from '../src/components/FeatureInfo/FeatureInfo'
import PortalLayout from '../src/components/layout/PortalLayout'
import TopBar from '../src/components/shared/topbar/TopBar'
import Sidebar from '../src/components/sidebar/Sidebar'
import WidgetLg from '../src/components/widgetLg/WidgetLg'
import WidgetSm from '../src/components/widgetSm/WidgetSm'
import styles from '../styles/Home.module.css'

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
