import * as types from "../actions/actionTypes";
import initialState from './initialState';

export default function courseReucer(state = initialState.courses, action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            state = [...state, Object.assign({}, action.course)];

            break;
        case types.CREATE_COURSE_SUCCESS:
            state = [
                ...state,
                Object.assign({}, action.course)
            ];

            break;
        case types.UPDATE_COURSE_SUCCESS:
            state = [
                ...state.filter(course => course.id != action.course.id),
                Object.assign({}, action.course)
            ];

            break;
        case types.LOAD_COURSES_SUCCESS:
            state = action.courses;

            break;
        default:
            break;
    }
    return state;

}