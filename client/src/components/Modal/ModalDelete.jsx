import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import apiBook from "../../api/apiBook";
import { toast } from "react-toastify";

export default function ModalAddNew({ closeModal, bookData }) {
    const handleUpdate = async () => {
        try {
            await apiBook.deleteBook({ bookIds: bookData.id });
            console.log("a");
            toast.warning("Xóa sách thành công");
        } catch (error) {
            console.log("Error:", error);
            toast.error("Thao tác thất bại");
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
                                                Bạn muốn xóa sách?
                                            </Dialog.Title>
                                            <div className="mt-5 flex flex-col items-center">
                                                <div className="mt-5 flex flex-col items-center">
                                                    <div className="w-[80%] rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2">
                                                        <p>Tên sách: <span>{bookData.title || ""}</span></p>
                                                    </div>
                                                    <div className="w-[80%] mt-3 rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2">
                                                        <p>Thể loại: <span>{bookData.type || ""}</span></p>
                                                    </div>
                                                    <div className="w-[80%] mt-3 rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2">
                                                        <p>Mã sách: <span>{bookData.category || ""}</span></p>
                                                    </div>
                                                    <div className="w-[80%] sm:flex sm:gap-2 mt-3">
                                                        <div className="w-[100%] sm:w-[40%] rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2">
                                                            <p>Đơn giá: <span>{bookData.price || 0}</span></p>
                                                        </div>
                                                        <div className="w-[100%] mt-3 sm:mt-0 sm:w-[40%] rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2">
                                                            <p>Số lượng <span>{bookData.available || 0}</span></p>
                                                        </div>
                                                    </div>
                                                    <div className="w-[80%] mt-3 rounded-md ring-1 ring-inset ring-gray-300 focus-within:ring-2">
                                                        <p className="text-center font-bold">Mô tả</p>
                                                        <p>{bookData.description || ""}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 sm:ml-3 sm:w-auto"
                                        onClick={handleUpdate}
                                    >
                                        Xóa
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