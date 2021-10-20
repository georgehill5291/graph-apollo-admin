import React from 'react'
import { Image } from '@chakra-ui/image'

const WidgetLg = () => {
    const Button = ({ type }: any) => {
        return <button className={'widgetLgStatus ' + type}>{type}</button>
    }

    return (
        <div className='widgetLg'>
            <h3 className='widgetLgTItle'>Latest transactions</h3>
            <table className='widgetLgTable'>
                <tr className='widgetLgTr'>
                    <th className='widgetLgTh'>Cusomer</th>
                    <th className='widgetLgTh'>Date</th>
                    <th className='widgetLgTh'>Amount</th>
                    <th className='widgetLgTh'>Status</th>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <Image
                            src='http://georgedev.info/static/media/my-avatar.c9ca184d.jpg'
                            alt='avatar'
                            className='widgetLgImg'
                        />
                        <span className='widgetLgName'>George</span>
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Approved' />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <Image
                            src='http://georgedev.info/static/media/my-avatar.c9ca184d.jpg'
                            alt='avatar'
                            className='widgetLgImg'
                        />
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Declined' />
                    </td>
                </tr>
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <Image
                            src='http://georgedev.info/static/media/my-avatar.c9ca184d.jpg'
                            alt='avatar'
                            className='widgetLgImg'
                        />
                    </td>
                    <td className='widgetLgDate'>2 Jun 2021</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'>
                        <Button type='Pending' />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
