import React from 'react'
import Card from '../Card/Card'


export default function LeftPane(props: any) {
    const data = props.data
    return (
        <div>
            {
                data.map((item: any) => <Card key={item.id} item={item} />)
            }
        </div>
    )
}
