import React from 'react'
import cn from "classnames"
import { useDispatch, useSelector } from 'react-redux'
import { movieBookingActions } from '../store/MovieBooking/slice';
import { message } from 'antd';

const Chair = ({ ghe, hang }) => {
    const { info, bookingList, bookedList } = useSelector((state) => state.movieBookingRedux);
    const dispatch = useDispatch();
    const { soGhe } = ghe;
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center backdrop-sepia-0 w-[60px]',
                {
                    'bg-blue-400/30 text-blue-400 font-bold h-[60px] hover:cursor-pointer hover:bg-blue-500 hover:text-white': hang,
                    'text-gray-300 font-bold': !hang,
                    '!bg-blue-500 !text-white': hang && bookingList.find(item => item.soGhe === ghe.soGhe),
                    '!bg-transparent !cursor-default !text-gray-500': hang && bookedList.find(item => item.soGhe === ghe.soGhe),

                }
            )}
            onClick={() => {
                if (bookingList.length < info.amount || bookingList.find(item=>item.soGhe===ghe.soGhe))
                    dispatch(movieBookingActions.addToBookingList(ghe));
                else
                    message.error("Bạn đã chọn đủ số ghế");
            }}
        >
            {hang && <i className="fa fa-chair text-[30px]"></i>}
            <span className='text-sm'>{soGhe}</span>
        </div>
    )
}

export default Chair