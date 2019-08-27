exports.formData = function formData({
    code = 1,
    data = [],
    msg = "success"
} = {}) {
    if (code === 0) {
        msg = "fail";
    }
    return {
        code,
        data,
        msg
    }
}