import React, { useState } from 'react'
import { Button, message, Steps, theme } from 'antd';
import { OrderedListOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import BookingInfo from './BookingInfo';
import ChooseChair from './ChooseChair';
import Payment from './Payment';
import { useDispatch, useSelector } from 'react-redux';
import { movieBookingActions } from '../store/MovieBooking/slice';
const steps = [
    {
        title: 'Thông tin đặt vé',
        content: <BookingInfo />,
        icon: <UserOutlined />,

    },
    {
        title: 'Chọn vị trí ghế',
        content: <ChooseChair />,
        icon: <OrderedListOutlined />,

    },
    {
        title: 'Thanh toán',
        content: <Payment />,
        icon: <ShoppingCartOutlined />,

    },
];
const MovieBooking = () => {
    const [current, setCurrent] = useState(0);
    const { info, bookingList } = useSelector(state => state.movieBookingRedux);
    const dispatch = useDispatch();
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
        icon: item.icon,
    }));
    return (
        <div className='flex flex-col min-h-screen bg-[url("../public/images/bgmovie.jpg")] bg-cover bg-no-repeat bg-center'>
            <div className='container lg:max-w-[1024px] mx-auto backdrop-sepia-0 bg-white/60 my-5 p-3 space-y-3'>
                <Steps current={current} items={items} />
                <div className='bg-white px-6 py-7 rounded-md'>{steps[current].content}</div>
                <div className='mt-3'>
                    {current < steps.length - 1 && (
                        <Button type="primary" className='bg-[#1677ff]' onClick={() => (current === 0 && info.name || current > 0) ? next():message.error("Họ và tên không được bỏ trống")}>
                            Tiếp theo
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" className='bg-[#1677ff]' onClick={() => {
                            if (+info.amount === bookingList.length) {
                                dispatch(movieBookingActions.paymentBooking());
                                setCurrent(0);
                                message.success('Đặt vé thành công!');
                            } else
                                message.error('Bạn chưa chọn đủ vị trí ghế so với số lượng đặt');
                        }}>
                            Thanh toán
                        </Button>
                    )}
                    {current > 0 && (
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            className='bg-[#1677ff] border-none text-white hover:!text-white hover:bg-[#4096ff]'
                            onClick={() => prev()}
                        >
                            Quay lại
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieBooking