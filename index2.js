/**function projectsLink() {
    $('.projects-link').on('click', function() {
    $('main').scrollTo($('.projects'), 500);
})};
**/
$(".projects-link").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".projects").offset().top
    }, 500);
});
function runPage() {
    projectsLink();
};
$(runPage)