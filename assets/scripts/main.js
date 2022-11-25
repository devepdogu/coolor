const COLOR_FIELDS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
const COLOR_LENGTH = 6;
const swiper = new Swiper('.page-main .page-slide-wrapper .swiper', {
    slidesPerView: 5,
    spaceBetween: 40,
    breakpoints: {
        500: {
            slidesPerView: 1
        },
        540: {
            slidesPerView: "auto",
            spaceBetween: 20,
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: "auto",
            spaceBetween: 20
        },
    },
});



$('main.page-main .page-input-wrapper button').click(function () {
    const input = $(this).parent().find("input");
    if (input.val() === "" || input.val().trim().length === 0) {
        alert('Lütfen bir değer giriniz');
        return input.focus()
    }
    const word = input.val().trim().toLowerCase().split(" ")[0];
    const colorArr = [...Array(COLOR_LENGTH).keys()].map((i) =>
        COLOR_FIELDS[((word[i]?.charCodeAt(0) ?? word.length) + (word.length + [...word].reduce((p, c) => p + c.charCodeAt(0), 0))) % COLOR_FIELDS.length]);
    const color = `#${colorArr.join("")}`
    const colorArrInfo = colorArr.reduce((p, c) => {
        if (!p[c])
            p[c] = 1;
        else
            p[c] += 1;
        return p;
    }, {})
    $("body").get(0).style.setProperty("--primaryColor", color);
    $("body").get(0).style.setProperty("--primaryTextColor", colorArrInfo?.f && colorArrInfo?.f > 3 ? 'black' : 'white');

})