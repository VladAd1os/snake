'use strict';

export const assertTrue = (expression, message = '') => {
    if (!expression) {
        throw new Error (
            'Given expression is false'
        );
    }
};

export const assertEquals = (expected, actual, message = '') => {
    if (expected !== actual) {
        throw new Error (
            `Expected value ${expected} is not equal actual one ${actual}` + message
        );
    }
}