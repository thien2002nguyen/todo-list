import { faArrowDownWideShort, faFileArrowDown, faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import apiBook from '../../api/apiBook';
import { useDispatch, useSelector } from 'react-redux';
import { setListAllBook, setListBook } from '../../features/books/bookSlice';
import ModalAddNew from '../Modal/ModalAddNew';
import ModalUpdate from '../Modal/ModalUpdate';
import ModalDelete from '../Modal/ModalDelete';
import { CSVLink } from "react-csv";

const Home = props => {
    const listBook = useSelector((state) => state.books.listBook);
    const listAllBook = useSelector((state) => state.books.listAllBook);
    const isCheckedLogin = useSelector((state) => state.auths.isCheckedLogin);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const [listView, setListView] = useState([]);
    const [typeSort, setTypeSort] = useState("ASC");
    const [isClickAdd, setIsClickAdd] = useState(false);
    const [isClickUpdate, setIsClickUpdate] = useState(false);
    const [bookUpdate, setBookUpdate] = useState({});
    const [isClickDelete, setIsClickDelete] = useState(false);
    const [bookDelete, setBookDelete] = useState({});
    const [dataFile, setDataFile] = useState([]);

    useEffect(() => {
        try {
            (async () => {
                const res = await apiBook.getBook({ page: page, limit: 7 });
                const responsive = await apiBook.getBook({ page: page, limit: res.data.bookData.count });
                setTotalPage(Math.ceil(res.data.bookData.count / 7));
                dispatch(setListBook(res.data.bookData.rows));
                setListView(res.data.bookData.rows);
                dispatch(setListAllBook(responsive.data.bookData.rows));
                handleFomat();
            })()
        } catch (error) {
            console.log('Error: ', error);
        }
    }, [page])

    const handlePageClick = (e) => {
        setPage(+e.selected + 1);
        setTypeSort("ASC");
    }

    const handleSearch = (value) => {
        if (value === "") {
            setListView(listBook);
        }
        else {
            let listSearch = [];
            listAllBook.forEach(item => {
                if (item.id === +value) {
                    listSearch.push(item);
                }
            })
            setListView(listSearch);
        }
    }

    const handleOnClick = () => {
        setIsClickAdd(false);
        setIsClickUpdate(false);
        setIsClickDelete(false);
    }

    const handleSort = () => {
        let listSort = [...listView];
        if (typeSort === "ASC") {
            listSort.sort((a, b) => b.id - a.id);
            setTypeSort("DESC");
        } else {
            listSort.sort((a, b) => a.id - b.id);
            setTypeSort("ASC");
        }
        setListView(listSort);
    };

    const handleClickUpdate = (id) => {
        listView.forEach(item => {
            if (item.id === id) {
                setBookUpdate({
                    id: id,
                    title: item.title,
                    category: item.categoryData.code,
                    price: item.price,
                    available: item.available,
                    description: item.description,
                })
            }
        })
        setIsClickUpdate(true);
    }

    const handleClickDelete = (id) => {
        listView.forEach(item => {
            if (item.id === id) {
                setBookDelete({
                    id: id,
                    title: item.title,
                    category: item.categoryData.code,
                    type: item.categoryData.value,
                    price: item.price,
                    available: item.available,
                    description: item.description,
                })
            }
        })
        setIsClickDelete(true);
    }

    const handleFomat = () => {
        let newListBook = [];
        listAllBook.forEach(item => {
            newListBook.push({ ...item, categoryData: item.categoryData.value })
        })
        setDataFile(newListBook);
    }

    return (
        <div>
            <div className="sm:flex sm:justify-between">
                <input type="search" placeholder='Search by ID...'
                    className="border-solid border-[#dedede] border-[1px] px-3 py-1 w-[100%] sm:w-[25%]"
                    onChange={e => handleSearch(e.target.value)}
                />
                <div className="mt-3 sm:mt-0 flex justify-end sm:flex-none sm:justify-normal">
                    {isCheckedLogin &&
                        <>
                            <button className="bg-blue-400 text-white px-3 py-1 me-3"
                                onClick={() => setIsClickAdd(true)}
                            >
                                <FontAwesomeIcon icon={faPlus} className="me-2" />
                                <span>Add new book</span>
                            </button>
                            <button className="bg-yellow-400 text-white px-3 py-1">
                                <FontAwesomeIcon icon={faFileArrowDown} className="me-2" />
                                <CSVLink data={dataFile}>Download me</CSVLink>
                            </button>
                        </>
                    }
                </div>
            </div>
            <div className="overflow-x-scroll mt-4">
                <table className="w-[100%] border-[1px] mb-2">
                    <thead className="border-[1px]">
                        <tr className="border-[1px]">
                            <th className="border-[1px] p-2 truncate">
                                <span className="me-2">Id</span>
                                <FontAwesomeIcon icon={faArrowDownWideShort} className="hover:text-gray-500 hover:cursor-pointer transition-all"
                                    onClick={handleSort}
                                />
                            </th>
                            <th className="border-[1px] p-2 truncate">Tên sách</th>
                            <th className="border-[1px] p-2 truncate">Loại sách</th>
                            <th className="border-[1px] p-2 truncate">Mã sách</th>
                            <th className="border-[1px] p-2 truncate">Giá</th>
                            <th className="border-[1px] p-2 truncate">Số lượng</th>
                            {isCheckedLogin && <th className="border-[1px] p-2 truncate">Chức năng</th>}
                        </tr>
                    </thead>
                    <tbody className="border-[1px]">
                        {listView?.map((item, index) => {
                            return (
                                <tr key={index} className="border-[1px]">
                                    <td className="border-[1px] p-2 truncate">{item.id}</td>
                                    <td className="border-[1px] p-2 truncate">{item.title}</td>
                                    <td className="border-[1px] p-2 truncate">{item.categoryData.value}</td>
                                    <td className="border-[1px] p-2 truncate">{item.categoryData.code}</td>
                                    <td className="border-[1px] p-2 truncate">{item.price}</td>
                                    <td className="border-[1px] p-2 truncate">{item.available}</td>
                                    {isCheckedLogin && <td className="border-[1px] p-2 truncate flex justify-around">
                                        <button className="border-[1px] border-b-gray-500 px-3 py-1 bg-green-400 text-white"
                                            onClick={() => handleClickUpdate(item.id)}
                                        >
                                            <FontAwesomeIcon icon={faPenToSquare} className="me-2" />
                                            <span>Sửa</span>
                                        </button>
                                        <button className="border-[1px] border-b-gray-500 px-3 py-1 bg-red-400 text-white"
                                            onClick={() => handleClickDelete(item.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} className="me-2" />
                                            <span>Xóa</span>
                                        </button>
                                    </td>}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="mt-2 flex justify-center">
                <ReactPaginate
                    className="flex"
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={totalPage}
                    pageCount={totalPage || 0}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    pageClassName="page-item text-center w-8 sm:w-10 h-8 mx-1 sm:mx-2 select-none block"
                    pageLinkClassName="page-link"
                    previousClassName="page-item select-none"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link select-none"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active border-[1px] bg-[#dedede]"
                />
            </div>
            {isClickAdd && <ModalAddNew closeModal={handleOnClick} />}
            {isClickUpdate && <ModalUpdate closeModal={handleOnClick} bookData={bookUpdate} />}
            {isClickDelete && <ModalDelete closeModal={handleOnClick} bookData={bookDelete} />}
        </div >
    );
};

export default Home;