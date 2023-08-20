import React from 'react'
import data from "../data/danhSachGhe.json"
import ChairsList from './ChairsList'
import { useSelector } from 'react-redux'
const ChooseChair = () => {
    const { info, bookingList } = useSelector(state => state.movieBookingRedux);
    return (
        <div className='space-y-3'>
            <div className='flex space-x-3'>
                <div className='text-md text-center font-semibold'>
                    <div className='flex justify-center items-center w-[30px] h-[30px] mx-auto bg-blue-400/30 text-blue-400 text-xl'>
                        <i className="fa fa-chair"></i>
                    </div>
                    <span>Trống</span>
                </div>
                <div className='text-md text-center font-semibold'>
                    <div className='flex justify-center items-center w-[30px] h-[30px] mx-auto bg-blue-500 text-white text-xl'>
                        <i className="fa fa-chair"></i>
                    </div>
                    <span>Được chọn</span>
                </div>
                <div className='text-md text-center font-semibold'>
                    <div className='flex justify-center items-center w-[30px] h-[30px] mx-auto bg-transparent text-gray-500 text-xl'>
                        <i className="fa fa-chair"></i>
                    </div>
                    <span>Đã đặt chổ</span>
                </div>
            </div>
            <div className='bg-yellow-400 h-[40px] rounded-md flex items-center justify-center text-xl font-semibold'>
                MÀN HÌNH XEM PHIM
            </div>
            <ChairsList data={data} />
            <div className='relative -translate-x-1 before:content-[""] before:absolute before:w-full before:h-full before:z-10 before:bg-gray-700/60 before:translate-x-2 before:translate-y-2'>
                <div className='relative grid grid-cols-3 z-50 bg-gray-700 text-white/60 gap-x-3 p-3'>

                    <h3>Số vé đặt mua: <span className='font-bold text-white'> {info.amount} vé</span></h3>
                    <h3>Ghế đang chọn: <span className='font-bold text-white'>{bookingList.map(item => item.soGhe).join(", ")}</span></h3>
                    <h3 className='text-right'>Tổng tiền: <span className='font-bold text-white'>{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(bookingList.reduce((sum, current) => sum + current.gia, 0))}</span></h3>
                </div>
            </div>

        </div>
    )
}

export default ChooseChair