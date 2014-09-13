$(document).ready(function() {
    $('body').append('<div id="jquery_jplayer_1" class="jp-jplayer"></div>');

    $("#jquery_jplayer_1").jPlayer({
        ready: function(event) {
            $(this).jPlayer("setMedia", {
                title: "Hectic Sound",
                mp3: "media/audio/hecticsoundsedit.mp3",
            });
            $(this).jPlayer("play");
        },
        swfPath: "http://jplayer.org/latest/js",
        supplied: "mp3"
    });
});                                      