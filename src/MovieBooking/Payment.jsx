import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieBookingActions } from '../store/MovieBooking/slice';

const Payment = () => {
    const { info, bookingList } = useSelector(state => state.movieBookingRedux);
    const dispatch = useDispatch();
    return (
        <div className='space-y-3'>
            <div className='border border-blue-300 p-3 relative'>
                <div className='absolute -translate-y-[50%] top-0 bg-white text-[#1677ff] font-semibold px-3'>Thông tin người mua</div>
                <div className='flex flex-col'>
                    <h3>Họ và tên: <span className='text-red-500'>{info.name}</span></h3>
                    <h3>Số ghế đặt: <span className='text-red-500'>{info.amount}</span></h3>
                    <h3>Số vị trí ghế chọn: <span className='text-red-500'>{bookingList.length}</span></h3>
                </div>
            </div>
            <table className='table-auto w-full leading-10'>
                <thead className='bg-blue-200/60 font-bold'>
                    <tr>
                        <th className='w-[50px]'>STT</th>
                        <th>Số ghế</th>
                        <th className='w-[200px]'>Giá tiền</th>
                        <th className='w-[100px]'>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {bookingList.map((item, index) => (
                        <tr key={item.soGhe} className='text-center even:bg-gray-300/20'>
                            <td>{index + 1}</td>
                            <td>{item.soGhe}</td>
                            <td>{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(item.gia)}</td>
                            <td><button type='button' onClick={() => {
                                dispatch(movieBookingActions.addToBookingList(item));
                            }}><i className="fa fa-trash-alt"></i></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex space-x-3 font-bold'>
                <h3>TỔNG TIỀN:</h3>
                <span className='text-red-500'>{new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(bookingList.reduce((sum, current) => sum + current.gia, 0))}</span>
            </div>
        </div>
    )
}

export default Payment