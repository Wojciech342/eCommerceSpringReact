import api from '../../api/api';

export const fetchProducts = (queryString) => async (dispatch) => {
    try {
        dispatch({ type: 'IS_FETCHING' });
        const { data } = await api.get(`/public/products?${queryString}`);
        dispatch({
            type: 'FETCH_PRODUCTS',
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });
        dispatch({ type: 'IS_SUCCESS' });
    } catch (error) {
        console.error(error);
        dispatch({
            type: 'IS_ERROR',
            payload: error?.response?.data.message || 'Failed to fetch product',
        });
    }
};

export const fetchCategories = () => async (dispatch) => {
    try {
        console.log('categories');
        dispatch({ type: 'CATEGORY_LOADER' });
        const { data } = await api.get(`/public/categories`);
        dispatch({
            type: 'FETCH_CATEGORIES',
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });

        dispatch({ type: 'CATEGORY_SUCCESS' });
    } catch (error) {
        console.error(error);
        dispatch({
            type: 'IS_ERROR',
            payload:
                error?.response?.data.message || 'Failed to fetch categories',
        });
    }
};

export const addToCart =
    (data, quantity = 1, toast) =>
    (dispatch, getState) => {
        const { products } = getState().products;
        const getProduct = products.find(
            (item) => item.productId === data.productId
        );

        const quantityExist = getProduct.stock >= quantity;

        if (quantityExist) {
            dispatch({
                type: 'ADD_CART',
                payload: { ...data, quantity: quantity },
            });
            toast.success(`${data?.productName} added to the cart`);
            localStorage.setItem(
                'cartItems',
                JSON.stringify(getState().carts.cart)
            );
        } else {
            toast.error('Out of stock');
        }
    };
