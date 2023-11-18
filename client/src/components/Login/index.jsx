import React, { useState } from 'react';
import apiAuth from '../../api/apiAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { setIsCheckedLogin } from '../../features/auth/authSlice';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const [isCheckPass, setIsCheckPass] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        const account = {
            email: email || "",
            password: password || ""
        };
        if (email?.includes("@gmail.com") && password?.length >= 6) {
            try {
                const res = await apiAuth.loginAccount(account);
                if (res.data.access_token) {
                    localStorage.setItem('access_token', res.data.access_token);
                    toast.success("Đăng nhập thành công");
                    navigate('/');
                    dispatch(setIsCheckedLogin(true));
                }
            } catch (error) {
                console.log("Error: ", error);
                toast.error("Đăng nhập thất bại");
            }
        }
    };

    const handleShow = () => {
        setIsCheckPass(!isCheckPass);
    }

    const handleClickEnter = (e) => {
        if (e && e.keyCode === 13) {
            handleSubmit();
        }
    }

    return (
        <div className="mt-20">
            <div className="border-gray-900/10 pb-12 flex flex-col items-center">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Login</h2>
                <div className="mt-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="w-[300px] block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Nhập email"
                                    onChange={e => setEmail(e.target.value)}
                                    onKeyDown={e => handleClickEnter(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="pass" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 relative">
                                <input
                                    type={isCheckPass ? "text" : "password"}
                                    name="pass"
                                    id="pass"
                                    className="w-[300px] block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="Nhập password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyDown={e => handleClickEnter(e)}
                                />
                                {isCheckPass ? <FontAwesomeIcon icon={faEye} onClick={handleShow} className="absolute right-2 top-2" /> :
                                    <FontAwesomeIcon icon={faEyeSlash} onClick={handleShow} className="absolute right-2 top-2" />}
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button className={email?.includes("@gmail.com") && password?.length >= 6 ? "block m-auto border-[1px] w-20 h-8 bg-red-400 text-white" :
                            "block m-auto border-[1px] w-20 h-8 cursor-not-allowed"}
                            onClick={() => handleSubmit()}
                        >Login
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;