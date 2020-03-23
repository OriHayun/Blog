import CreateDataContext from './createDataContext';
import JsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogPost':
            return action.payload;
        // case 'add_blog':
        //     return [
        //         ...state,
        //         {
        //             id: Math.floor(Math.random() * 99999),
        //             title: action.payload.title,
        //             content: action.payload.content
        //         }
        //     ];
        case 'delete_blog':
            return state.filter(blogPost => blogPost.id !== action.payload)
        case 'edit_blog':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost;
            })
        default:
            return state
    }
}

const getBlogPost = dispatch => {
    return async () => {
        const response = await JsonServer.get('/blogpost');
        dispatch({ type: 'get_blogPost', payload: response.data })
    }
}

const addBlog = dispatch => {
    return async (title, content, callback) => {
        await JsonServer.post('/blogpost', { title, content });
        // dispatch({ type: 'add_blog', payload: { title, content } });
        if (callback) {
            callback();
        }
    };
}

const deleteBlog = dispatch => {
    return async (id) => {
        await JsonServer.delete(`/blogpost/${id}`);
        const response = await JsonServer.get('/blogpost');
        dispatch({ type: 'get_blogPost', payload: response.data })
        //dispatch({ type: 'delete_blog', payload: id });
    };
}

const editBlog = dispatch => {
    return async (id, title, content, callback) => {
        await JsonServer.put(`/blogpost/${id}`, { title, content });
        const response = await JsonServer.get('/blogpost');
        dispatch({ type: 'get_blogPost', payload: response.data })
        // dispatch({ type: 'edit_blog', payload: { id, title, content } });
        if (callback) {
            callback();
        }
    };
}





export const { Context, Provider } = CreateDataContext(
    blogReducer,
    { getBlogPost, addBlog, deleteBlog, editBlog },
    []
);
