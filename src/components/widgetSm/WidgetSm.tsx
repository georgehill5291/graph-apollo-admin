import { Image } from '@chakra-ui/image'
import { Visibility } from '@material-ui/icons'
import React from 'react'

const WidgetSm = () => {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetsmList'>
                <li className='widgetSmListItem'>
                    <Image
                        src='http://georgedev.info/static/media/my-avatar.c9ca184d.jpg'
                        alt=''
                        className='widgetSmImg'
                    />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>George</span>
                        <span className='widgetSmUserTitle'>Web develoepr</span>
                    </div>
                    <button className='widgetSmButton'>
                        <Visibility className='widgetSmIcon' />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
