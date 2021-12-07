$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $(".header-bottom").addClass("sticky")
        } else
            (
                $(".header-bottom").removeClass("sticky")
            )
    })
})
