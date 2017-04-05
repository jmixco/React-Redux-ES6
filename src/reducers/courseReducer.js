export default function courseReucer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            state = [...state, Object.assign({}, action.course)];

            break;
        default:
            break;
    }
    return state;

}