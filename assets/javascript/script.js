/*------------------------------------- Onboarding Screen -------------------------------------*/
$(".skip_btn_1").click(function () {

    $("#first").removeClass("active");
    $(".first_slide").removeClass("active");

    $("#second").addClass("active");
    $(".second_slide").addClass("active");

});

$(".skip_btn_2").click(function () {
    $("#second").removeClass("active");
    $(".second_slide").removeClass("active");

    $("#third").addClass("active");
    $(".third_slide").addClass("active");
});

//  Sticky Header
$(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition >= 20) {
        $('#top-header, #top-navbar').addClass('fixed');
        $('.Amigo_img_main').css('padding-top', '70px');
    } else {
        $('#top-header, #top-navbar').removeClass('fixed');
        $('.Amigo_img_main').css('padding-top', '0');
    }
});


// All Page loader
$(window).on('load', function () {
    $('.loader').fadeOut(2500);
});


// New Password hide show button
$("#eye ,#eye1").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

// Personal Info Photo Upload
$(document).ready(function () {
    var readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(".file-upload").on('change', function () {
        readURL(this);
    });
    $(".upload-button").on('click', function () {
        $(".file-upload").click();
    });
});

// Personal info open Pop-Up page redirect
$(".print-continue-btn").on("click", function () {
    $('.loader2').fadeIn();
    $('.loader2').fadeOut(3000);
    setTimeout(function () {
        window.location = "create_new_pin.html";
    }, 2000);
});

// Add Text In Card
function updateLokiBox(lokiBoxId, inputField) {
    document.getElementById(lokiBoxId).innerText = inputField.value;
}

// Add Card Number 16 digit
function maskNumber() {
    let inputNumber = document.getElementById('cardNumber').value;

    let digitsOnly = inputNumber.replace(/\D/g, '');

    let maskedPart = digitsOnly.substring(0, 12).replace(/./g, '*');

    let lastPart = digitsOnly.substring(12);

    let maskedNumber = maskedPart.replace(/(.{4})/g, '$1 ').trim() + ' ' + lastPart;

    document.getElementById('lokiCardNumber').textContent = maskedNumber;
}

// Add CVV Number Only Three
function validateInputcvv(inputField) {
    inputField.value = inputField.value.replace(/\D/g, '');

    if (inputField.value.length > 3) {
        inputField.value = inputField.value.slice(0, 3);
    }

    document.getElementById('lokiCVV').textContent = inputField.value;
}


// Confirm OTP Input filed 
function validateInput(input) {
    input.value = input.value.replace(/\D/g, '');
    if (input.value.length > 1) {
        input.value = input.value[0];
    }
}

// Faq Section
$('.nested-accordion').find('.comment').slideUp();
$('.nested-accordion').find('h3').click(function () {
    $(this).next('.comment').slideToggle(100);
    $(this).toggleClass('selected');
});

// feedback drop down 
$(document).ready(function () {
    $('.select-dropdown__button').on('click', function () {
        $('.select-dropdown__list').toggleClass('active');
    });

    $('.select-dropdown__list-item').on('click', function () {
        var itemValue = $(this).data('value');
        $('.select-dropdown__button span').text($(this).text()).parent().attr('data-value', itemValue);
        $('.select-dropdown__list').removeClass('active');
    });
});

// payment Method Connect Not Connect
function toggleConnection(element) {
    let isConnected = element.innerText === 'Connected';
    isConnected = !isConnected;

    if (isConnected) {
        element.innerText = 'Connected';
        element.style.color = '#00D061';
        element.style.cursor = 'pointer'
    } else {
        element.innerText = 'Not Connected';
        element.style.color = '#FF484D';
        element.style.cursor = 'pointer';
    }
}

// Delete Or Deactive Button Check
function continueAction() {
    const form = document.getElementById('deleteDeactivateForm');
    const selectedAction = form.querySelector('input[name="action"]:checked').value;
    if (selectedAction === 'delete') {
        window.location.href = 'delete.html';
    } else if (selectedAction === 'deactivate') {
        window.location.href = 'deactivate.html';
    }
}
/*------------------------------------- Preloader -------------------------------------*/

$(window).on("load", function () {
    $('.circle').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');
});

$(window).on("load", function () {
    $('.loader-mask1').delay(2000).fadeOut(2500);

});


// Dark Light Mode Toggle
function myFunction() {
    var element = document.body;
    var toggleCheckbox = document.getElementById("toggle");
    var modeText = document.getElementById("modeText");

    if (toggleCheckbox) {
        element.classList.toggle("dark-mode", toggleCheckbox.checked);

        if (toggleCheckbox.checked === true) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
        modeText.textContent = toggleCheckbox.checked ? "Dark Mode" : "Light Mode";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "dark") {
        document.body.classList.add("dark-mode");
        var toggleCheckbox = document.getElementById("toggle");
        if (toggleCheckbox) {
            toggleCheckbox.checked = true;
        }
    }
    myFunction();
});


var toggleCheckbox = document.getElementById("toggle");
if (toggleCheckbox) {
    toggleCheckbox.addEventListener("change", myFunction);
}


// Add Home Screen Pop Up Scrren
$(document).ready(function () {
    $("#bkgOverlay").delay(4800).fadeIn(400);
    $("#delayedPopup").delay(5000).fadeIn(400);
    $("#btnClose").click(function (e) {
        HideDialog();
        e.preventDefault();
    });
});
function HideDialog() {
    $("#bkgOverlay").fadeOut(400);
    $("#delayedPopup").fadeOut(300);
}

// Add Home Screen Button Loader 
$(document).ready(function () {
    $('.btn-process').on('click', function () {
        $(".btn-ring").show();
        $(".btn-process").prop('disabled', true);
        $(".btn-process").val('disabled');
        setTimeout(function () {
            $(".btn-ring").hide();
            $(".btn-process").prop('disabled', false);
        }, 2000);
    });
});