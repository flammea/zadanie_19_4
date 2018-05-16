const ADDCOMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


//Add comment
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

//Edit comment
function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

//Remove comment
function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}


//Thumb up
function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}

//Thumb down
function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

