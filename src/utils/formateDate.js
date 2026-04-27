
const formateDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleString('en-US', {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    })
}

export default formateDate