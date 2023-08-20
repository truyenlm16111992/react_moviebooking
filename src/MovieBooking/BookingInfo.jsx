import React from 'react'
import { Input, InputNumber } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { movieBookingActions } from '../store/MovieBooking/slice';

const BookingInfo = () => {
    const { info } = useSelector((state) => state.movieBookingRedux);
    const dispatch = useDispatch();
    return (
        <div>
            <div className='border border-blue-300 w-[500px] mx-auto p-3 relative'>
                <div className='absolute -translate-y-[50%] top-0 bg-white text-blue-400 px-3'>Người mua</div>
                <div className='grid grid-cols-2 gap-3'>
                    <div>Họ và tên</div>
                    <Input
                        placeholder="Nhập họ và tên người mua"
                        required
                        value={info.name}
                        onChange={(event) => {
                            dispatch(movieBookingActions.updateInfo({ ...info, name: event.target.value }));
                        }}
                    />
                    <div>Số lượng ghế đặt</div>
                    <div className='space-x-2'>
                        <button className=' hover:text-blue-500'><i className="fa fa-plus-circle" onClick={() => {
                            dispatch(movieBookingActions.changeNumberChairs(1));
                        }}></i></button>
                        <InputNumber value={info.amount} className='w-[60px] !text-center appearance-none' />
                        <button className=' hover:text-blue-500'><i className="fa fa-minus-circle" onClick={() => {
                            dispatch(movieBookingActions.changeNumberChairs(-1));
                        }}></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingInfo