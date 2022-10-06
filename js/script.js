function Time() {
    var today = new Date();
    var dayOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'][today.getDay()];
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var check = (value) => {
        if (value < 10) {
            value = `0${value}`;
        }
        return value;
    }
    $('.time').text(`${dayOfWeek}, ${check(date)}/${check(month)}/${check(year)} | ${check(hour)}:${check(minute)}:${check(second)}`);
}

function Covid() {
    axios.get('https://static.pipezero.com/covid/data.json').then(response => {

        let internal = response.data.total.internal;

        let world = response.data.total.world;

        $('.internal-death').text(internal.death);

        $('.internal-treating').text(internal.treating);

        $('.internal-recovered').text(internal.recovered);

        $('.internal-cases').text(internal.cases);

        $('.world-death').text(world.death);

        $('.world-treating').text(world.treating);

        $('.world-recovered').text(world.recovered);

        $('.world-cases').text(world.cases);

    }).catch(error => {
        console.log(error)
    });
}


Covid();

setInterval(() => {
    Time();
}, 1000);

setInterval(() => {
    Covid();
}, 60000);