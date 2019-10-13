
export default class BookstoreService {
    data = [
        {
            id:1,
            title: "title 1",
            author: "author 1",
            price: 25,
            coverImage: "https://cdn1.ozone.ru/multimedia/c400/1037874847.jpg",
        },
        {
            id:2,
            title: "title 2",
            author: "author 2",
            price: 43,
            coverImage: "https://cdn1.ozone.ru/multimedia/c400/1028566083.jpg",
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() > 0.75
                    ? reject(new Error("something bad happened"))
                    : resolve(this.data);
            }, 1000)
        })
    }
 }
