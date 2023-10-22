function getError(error) {
    const firstError = Object.values(error.errors)[0].message;

    return firstError;
}

exports.getErrorMessage = (error) => {
    switch (error.name) {
        case 'Error':
            return error.message;
        case 'ValidationError':
            return getError(error);
        default:
            return error.message;
    }
};
