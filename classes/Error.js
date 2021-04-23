module.exports = class Error {
    constructor(message) {
        this.message = message;
    }

    showError() {
        return new Error(this.message);
    }
}