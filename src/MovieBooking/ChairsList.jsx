import React from 'react'
import Chair from './Chair'

const ChairsList = ({ data }) => {
    return (
        <div className='flex flex-col gap-3 p-5'>
            {data.map(({ hang, danhSachGhe }) => (
                <div className='flex gap-3 justify-center' key={hang}>
                    <div className='flex w-10 items-center justify-center text-gray-300 font-bold'>{hang}</div>
                    {danhSachGhe.map((item, index) => (
                        <Chair ghe={item} hang={hang} key={index} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ChairsList