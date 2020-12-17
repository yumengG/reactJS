import * as ActionTypes from './ActionTypes';

export const Feedbacks = (state = { errMess: null, feedbacks: [] }, action) => {
    switch (action.type) {
        //this is the new comment
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            return { ...state, comments: state.comments.concat(feedback) };

        default:
            return state;
    }
};