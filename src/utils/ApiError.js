class ApiError extends Error {
    constructor(
        staturcode,
    message= "something went wrong",
    errors = [],
    stack = ""
    ) {
        super(message);
        this.staturcode = staturcode;
        this.message = message;
        this.success = false;
        this.errors = errors;
        if (stack) {
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export  {ApiError};