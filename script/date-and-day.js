
function days() {
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let todaysDay = day[new Date().getDay()]
    document.getElementById('day').innerText = todaysDay + ' ,'
}
days()

function dateTime() {
    const now = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    const nowDates = `${month}  ${date}  ${year}`
    document.getElementById('date').innerText = nowDates
}
dateTime()