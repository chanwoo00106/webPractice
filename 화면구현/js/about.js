$('.section h1').eq(0).animate({ "opacity": 1, "bottom": "30%" }, 1000);
new fullpage('#full-page', {
    licenseKey: '',
    sectionsColor: ['#f6e58d', '#f9ca24', '#badc58', '#6ab04c', '#c7ecee'],
    navigation: true,
    navigationTooltips: ['마량', '고금대교', '까막섬', '야경', '스카이뷰'],
    scrollingSpeed: 1000,
    onLeave: function (origin, destination, direction) {
        $('.section h1').eq(destination.index).animate({ "opacity": 1, "bottom": "30%" }, 1000);
    },
    afterLoad: function (origin, destination, direction) {
        $('.section h1').eq(origin.index).css({ "opacity": 0, "bottom": "40%" });
    }
})