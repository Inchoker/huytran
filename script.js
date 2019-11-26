// interval is in milliseconds. 1000 = 1 second -> so 1000 * 10 = 10 seconds
// $('.carousel').carousel({
//     interval: 1000 * 10
//   });
$('.carousel').carousel({
    interval: 1000*10000000000000000000000;
})

$('#video').on('ended', function () {
    $('.carousel').carousel('next');
});