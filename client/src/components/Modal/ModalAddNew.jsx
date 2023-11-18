import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import apiBook from "../../api/apiBook";
import { toast } from "react-toastify";

export default function ModalAddNew({ closeModal }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState("");
    const [description, setDescription] = useState("");
    const handleAddNew = async () => {
        const newBook = {
            title: title,
            price: price,
            available: available,
            description: description,
            category_code: category,
        };
        try {
            await apiBook.postBook(newBook);
            toast.success("Đã thêm vào danh sách");
        } catch (error) {
            console.log("Error:", error);
            toast.error("Thêm sách mới thất bại");
        }
        closeModal();
    };
    return (
        <Transition.Root show={true} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => { }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-[100%]">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-base text-center font-semibold leading-6 text-gray-900"
                                            >
                                                Thêm sách
                                            </Dialog.Title>
                                            <div className="mt-5 flex flex-col items-center">
                                                <div className="mt-5 flex flex-col items-center">
                                                    <div className="w-[80%] rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2">
                                                        <input
                                                            type="text"
                                                            className="w-[100%] m-auto bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                            placeholder="Nhập tiêu đề"
                                                            value={title}
                                                            onChange={(e) => setTitle(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="w-[80%] mt-3 rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2">
                                                        <input
                                                            type="text"
                                                            className="w-[100%] m-auto bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                            placeholder="Nhập loại sách"
                                                            value={category}
                                                            onChange={(e) => setCategory(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="w-[80%] sm:flex sm:gap-2 mt-3">
                                                        <div className="w-[100%] sm:w-[40%] rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2">
                                                            <input
                                                                type="number"
                                                                className="w-[100%] m-auto bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                                placeholder="Nhập giá sách"
                                                                value={price}
                                                                onChange={(e) => setPrice(e.target.value)}
                                                                min={0}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="w-[100%] mt-3 sm:mt-0 sm:w-[40%] rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2">
                                                            <input
                                                                type="number"
                                                                className="w-[100%] m-auto bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                                placeholder="Nhập số lượng"
                                                                value={available}
                                                                onChange={(e) => setAvailable(e.target.value)}
                                                                min={0}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="w-[80%] mt-3 rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2">
                                                        <textarea
                                                            className="w-[100%] mt-1 m-auto bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                            placeholder="Thêm mô tả"
                                                            value={description}
                                                            onChange={(e) => setDescription(e.target.value)}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                        onClick={handleAddNew}
                                    >
                                        Thêm
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => closeModal()}
                                    >
                                        Hủy
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
