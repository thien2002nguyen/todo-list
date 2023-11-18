import axiosClient from "./axiosClient"

const apiBook = {
    getBook(params) {
        const url = '/book';
        return axiosClient.get(url, {
            params
        });
    },
    postBook(bookData) {
        const url = '/book';
        return axiosClient.post(url, bookData);
    },
    putBook(data) {
        const url = '/book';
        return axiosClient.put(url, data);
    },
    deleteBook(id) {
        const url = `/book?bookIds=${id.bookIds}`;
        return axiosClient.delete(url);
    }
}
export default apiBook;