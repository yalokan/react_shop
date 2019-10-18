const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220,
};

const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
};

const deleteCartItems = (cartItems, idx) => {
    return cartItems.length > 0
        ? [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
        : []
};

const updateCartItem = (book, item = {}, changer) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + changer,
        total: changer > 0 ? total + book.price : total - book.price,
    }
};

export const reducer = (state = initialState, action) => {
    let bookId;
    let book;
    let itemIndex;
    let item;
    let newItem;

    console.log(action.type);
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null,
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload,
            };
        case 'BOOK_ADDED_TO_CART':
            bookId = action.payload;
            book = state.books.find((book) => book.id === bookId);
            itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
            item = state.cartItems[itemIndex];
            newItem = updateCartItem(book, item, 1);
            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
            };

        case 'BOOK_DECREASED_IN_CART':
            bookId = action.payload;
            book = state.books.find((book) => book.id === bookId);
            itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
            item = state.cartItems[itemIndex];
            newItem = updateCartItem(book, item, -1);
            return newItem.count > 0
                ? {
                    ...state,
                    cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
                } : {
                    ...state,
                    cartItems: deleteCartItems(state.cartItems, itemIndex)
                };

        case 'BOOK_REMOVED_FROM_CART':
            bookId = action.payload;
            book = state.books.find((book) => book.id === bookId);
            itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
            item = state.cartItems[itemIndex];
            return {
                ...state,
                cartItems: deleteCartItems(state.cartItems, itemIndex)
            };

        default:
            return state;
    }
};
