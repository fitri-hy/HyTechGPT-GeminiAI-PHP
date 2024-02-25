var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(document).ready(function () {
    $messages.mCustomScrollbar();
    setTimeout(function () {
        fakeMessage();
    }, 100);
});

function updateScrollbar() {
    $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
    });
}

function setDate() {
    d = new Date();
    if (m != d.getMinutes()) {
        m = d.getMinutes();

        var hours = d.getHours();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format

        var timestamp = hours + ':' + padZero(m) + ' ' + ampm;

        $('<div class="timestamp">' + timestamp + '</div>').appendTo($('.message:last'));
    }
}

// Helper function to pad single-digit minutes with a leading zero
function padZero(number) {
    return number < 10 ? '0' + number : number;
}

$('.message-submit').click(function () {
    insertMessage();
});

$(window).on('keydown', function (e) {
    if (e.which == 13) {
        insertMessage();
        return false;
    }
})

var Fake = [
    'Hey, Jessica! I’m Amigo 😊',
    'I am very happy today because I can talk with you 😍😍',
    'How are you?',
    'Not too bad, thanks',
    'What do you do?',
    'That\'s awesome',
    'I think you\'re a nice person',
    'Why do you think that?',
    'Can you explain?',
    'Anyway I\'ve gotta go now',
    'It was a pleasure chat with you',
    'Bye',
    ':)'
]

var i = 0;

function insertMessage() {
    var msg = $('.message-input').val();
    if ($.trim(msg) == '') {
        return false;
    }

    var timestamp = getCurrentTime();
    $('<div class="message message-personal">' + msg + '<span class="timestamp">' + timestamp + '</span></div>').appendTo($('.mCSB_container')).addClass('new');

    setDate();
    $('.message-input').val(null);
    updateScrollbar();

    setTimeout(function () {
        fakeMessage();
    }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function () {
    insertMessage();
});

$(window).on('keydown', function (e) {
    if (e.which == 13) {
        insertMessage();
        return false;
    }
});

function fakeMessage() {
    if ($('.message-input').val() != '') {
        return false;
    }

    $('<div class="message loading new"><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();

    setTimeout(function () {
        $('.message.loading').remove();
        var fakeTimestamp = getCurrentTime();
        $('<div class="message new">' + Fake[i] + '<span class="timestamp">' + fakeTimestamp + '</span></div>').appendTo($('.mCSB_container')).addClass('new');
        setDate();
        updateScrollbar();
        i++;
    }, 1000 + (Math.random() * 20) * 100);
}

function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var timeString = hours + ':' + minutes + ' ' + ampm;
    return timeString;
}

$('.button').click(function () {
    $('.menu .items span').toggleClass('active');
    $('.menu .button').toggleClass('active');
});
