const initialState = {
    bookList: {
        books: [],
        loading: true,
        error: null,
    },
    shoppingCart: {
        cartItems: [],
        orderTotal: 0,
    }
};

const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }
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
        total: total + book.price * changer,
    }
};

const updateBookList = (state, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                books: [],
                loading: true,
                error: null,
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: action.payload,
                loading: false,
                error: null,
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                books: [] ,
                loading: false,
                error: action.payload,
            };

    }
};

function updateOrder(state, bookId, quantity) {
    const { bookList: { books }, shoppingCart: { cartItems } } = state;
    const book = books.find((book) => book.id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(book, item, quantity);
    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
}

const updateShoppingCart = (state, action) => {
    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        case 'BOOK_DECREASED_IN_CART':
            return updateOrder(state, action.payload, -1);


        case 'BOOK_REMOVED_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, - item.count);
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
        case 'FETCH_BOOKS_SUCCESS':
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                bookList: updateBookList(state, action),
            };
        case 'BOOK_ADDED_TO_CART':
        case 'BOOK_DECREASED_IN_CART':
        case 'BOOK_REMOVED_FROM_CART':
            return {
                ...state,
                shoppingCart: updateShoppingCart(state, action)
            };

        default:
            return state;
    }
};
