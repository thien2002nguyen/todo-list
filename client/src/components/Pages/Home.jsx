import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import book from '../../assets/images/book.png';

const Home = props => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-around">
            <div>
                <h1 className="font-bold text-[1.5rem]">Todo-list</h1>
                <h3 className="mt-3 font-bold">Chức năng</h3>
                <ul className="mt-1">
                    <li className="md:list-decimal">Đăng nhập</li>
                    <li className="md:list-decimal">Thêm sách</li>
                    <li className="md:list-decimal">Sửa đổi thông tin sách</li>
                    <li className="md:list-decimal">Xóa sách</li>
                    <li className="md:list-decimal">Sắp xếp theo ID</li>
                    <li className="md:list-decimal">Tìm kiếm sách theo ID</li>
                    <li className="md:list-decimal">Export file</li>
                </ul>
                <h3 className="mt-3 font-bold">Công nghệ sử dụng</h3>
                <ul className="mt-1">
                    <li className="md:list-decimal">ReactJS</li>
                    <li className="md:list-decimal">TailwindCSS</li>
                    <li className="md:list-decimal">NodeJS</li>
                </ul>
                <button className="bg-blue-500 mt-5 px-5 py-2 text-white"
                    onClick={() => navigate('/manager')}>
                    <span className="me-2">Click me</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
            <div>
                <img src={book} alt="" />
            </div>
        </div>
    );
};

export default Home;