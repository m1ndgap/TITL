"use strict";

if(navigator.userAgent.match(/Trident.*rv:11\./)) {
    document.body.classList.add("ie11");

}

cssVars({
    rootElement: document // default
});

$(window).scroll(function() {
    var hT = $('#smooth-2').offset().top,
        hH = $('#smooth-2').outerHeight(),
        wH = $(window).height(),
        target = $('.avlblty-fixed'),
        wS = $(this).scrollTop();
    // console.log("offset top " + hT);
    // console.log("outer height " + hH);
    // console.log("window height " + wH);
    // console.log("scroll top " + wS);
    // if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
    //     target.addClass('avlblty-fixed--active')
    // } else {
    //     target.removeClass('avlblty-fixed--active')
    // }
    if ((wS - 500) > (hT+hH-wH)){
        target.addClass('avlblty-fixed--active')
        $('.avlblty-fixed__container').addClass('avlblty-fixed__container--active');
    } else {
        target.removeClass('avlblty-fixed--active')
        $('.avlblty-fixed__container').removeClass('avlblty-fixed__container--active');
    }
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 350
    }, 500);
});

$(document).ready(function() {
    var bw = window.innerWidth || document.body.clientWidth;
    if( bw > 1200 ) bw = bw - ( bw - 1200) / 2;
    var iw = $(".carousel .list .item").width() + 32;
    $(".carousel .list").each( function(){
        var ic = $( '.item', $(this) ).length;
        $(this).carousel({
            freeScroll: !0,
            contain: !0,
            pageDots: !1,
            groupCells: "100%",
            cellAlign: 'left',
            prevNextButtons: iw * ic > bw
        })

    })
    $("header nav").menu(),
        $(".logo span").fitText()
});

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.summary__slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});

let dpMonth;
let dpDate;
let dpYear;

$(".order-ui__datepicker").datepicker({
    language: 'en',
    minDate: new Date(),
    autoClose: true,
    //inline: true,
    onChangeMonth: function(month, year) {
        dpMonth = month;
        dpYear = year;
    },
    onRenderCell: function(date, cellType) {
        if (promo[date.getFullYear()][date.getMonth()].includes(date.getDate())) {
            return {
                classes: 'dp-promo-cell'
            }
        }
        if (daysoff[date.getFullYear()][date.getMonth()].includes(date.getDate())) {
            return {
                classes: '-disabled-'
            }
        }
    },
    // onSelect: function(formattedDate, date, inst) {
    //     destroy();
    // }
    onShow: function(dp, animationCompleted){
        let collapse = document.querySelector('.order-ui__date-collapse');
        collapse.classList.add('order-ui__date-collapse--active');
    },
    onHide: function(dp, animationCompleted){
        let collapse = document.querySelector('.order-ui__date-collapse');
        collapse.classList.remove('order-ui__date-collapse--active');
    }

});

$(document).ready(function () {
    updatePartcString();
});

// variables
// participants dropdown trigger
let orderUIparticipantsHandle = document.querySelector('#order-ui-participants-input');
let orderUIcollapseArrow = document.querySelector('.order-ui__participants-collapse');
//// participants dropdown frame
let orderUIparticipantsDropdown = document.getElementById("orderui-people");
//// number of adults seniors and children
let adultsNum = parseInt(document.getElementById('order-number-of-adults').innerText);
let seniorNum = parseInt(document.getElementById('order-number-of-seniors').innerText);
let childNum = parseInt(document.getElementById('order-number-of-children').innerText);
//// search again button
let orderUISubmit = document.getElementById("orderui-submit");

// function to update number
let updateNumbers = function(){
    adultsNum = parseInt(document.getElementById('order-number-of-adults').innerText);
    seniorNum = parseInt(document.getElementById('order-number-of-seniors').innerText);
    childNum = parseInt(document.getElementById('order-number-of-children').innerText);
};


// function to show order-ui result pane
let hideOrderSummaries = function() {
    let OS = document.querySelectorAll('.order-ui__result');
    OS.forEach(function(elt){
        elt.classList.remove('order-ui__result--active');
    });
};

let showOrderSummary = function() {
    let orderUIResult = document.getElementById("orderui-result");
    orderUIResult.classList.toggle('order-ui__result--active');
};
let showOrderSummary_nokids = function() {
    let orderUIResult = document.getElementById("orderui-result--no-children");
    orderUIResult.classList.toggle('order-ui__result--active');
};
let showOrderSummary_empty = function() {
    let orderUIResult = document.getElementById("orderui-result--no-participants");
    orderUIResult.classList.toggle('order-ui__result--active');
};

// functions to show/hide order participants number
let toggleOrderParticipants = function() {
    hideOrderSummaries();
    orderUIparticipantsDropdown.classList.toggle('order-dropdown--active');
    orderUIcollapseArrow.classList.toggle('order-ui__participants-collapse--active');

};
let hideOrderParticipants = function() {
    orderUIparticipantsDropdown.classList.remove('order-dropdown--active');
    orderUIcollapseArrow.classList.remove('order-ui__participants-collapse--active');
};

// checking if senior or adult is present
let checkAdults = function() {
    console.log(adultsNum + " " + seniorNum);
    if (adultsNum == 0 && seniorNum == 0) {
        return false;
    }
    return true;
};

// functions to disable buttons
let checkButtonsAvailability = function(valueEl) {
    let nxt = valueEl.nextElementSibling;
    let prev = valueEl.previousElementSibling;
    let limit = valueEl.dataset.limit;
    let value = valueEl.innerText;
    updateNumbers();
    // console.log('checkadults ' + !checkAdults());
    // console.log('valueEl  ' + valueEl.classList.contains('adults-value'));
    // console.log(valueEl.classList.contains('adults-value') && !checkAdults);
    //     if (valueEl.classList.contains('adults-value') && !checkAdults) {
    //         console.log(123);
    //         valueEl.innerText = 1;
    //     }
    //     if (valueEl.classList.contains('seniors-value') && !checkAdults) {
    //         valueEl.innerText = 1;
    //         console.log(123);
    //     }

    if (value == 0) {
        prev.classList.add('order-dropdown__minus-btn--inactive')}
    else if (value == limit){
        nxt.classList.add('order-dropdown__plus-btn--inactive')
    }
    if (value > 0 && !(value == limit)) {
        prev.classList.remove('order-dropdown__minus-btn--inactive')
        nxt.classList.remove('order-dropdown__plus-btn--inactive')}
    else if (value < limit){
        nxt.classList.remove('order-dropdown__plus-btn--inactive')
    }
};

//function to update input
let updatePartcString = function(){
    let adultStr = document.getElementById('order-adults-string').innerText;
    let seniorStr = document.getElementById('order-seniors-string').innerText;
    let childStr = document.getElementById('order-children-string').innerText;
    let partcInput = document.getElementById('order-ui-participants-input');
    partcInput.value = 'No participants';
    if (adultsNum > 0) {
        partcInput.value = adultStr + " x " + adultsNum;
        if (seniorNum > 0) {
            partcInput.value += ', ' + seniorStr + " x " + seniorNum;
        }
        if (childNum > 0) {
            partcInput.value += ', '  + childStr + " x " + childNum;
        }
    } else if (seniorNum > 0) {
        partcInput.value = seniorStr + " x " + seniorNum;
        if (childNum > 0) {
            partcInput.value += ', '  + childStr + " x " + childNum;
        }
    } else if (childNum > 0) {
        partcInput.value = childStr + " x " + childNum;
    }
};

// sorting switch for review feed section
let reviewFeedSortingSwitch = document.querySelectorAll('.review-feed__sorting-switch');
reviewFeedSortingSwitch.forEach(function(elem){
    elem.addEventListener('click', function (evnt) {
        evnt.preventDefault();
        this.classList.toggle('review-feed__sorting-switch--state');
    })
});

// showing dropdown choosing number of participants in order section
orderUIparticipantsHandle.addEventListener('click', function (evnt) {
    evnt.preventDefault();
    evnt.stopPropagation();
    toggleOrderParticipants();
});

// hiding the participants dropdown if we click anywhere else on the page
document.addEventListener('click', function(evnt){
    evnt.stopPropagation();
    if (!orderUIparticipantsDropdown.contains(evnt.target)) {
        hideOrderParticipants();
    }
});

// participants dropdown (+) and (-) buttons behavior
let orderDropdownMinus = document.querySelectorAll('.order-dropdown__minus-btn');
let orderDropdownPlus = document.querySelectorAll('.order-dropdown__plus-btn');
orderDropdownMinus.forEach(function(elem){
    elem.addEventListener('click', function (evnt) {
        evnt.preventDefault();
        let nxtSbling = elem.nextElementSibling;
        if (nxtSbling.innerText > 0) {
            nxtSbling.innerText -= 1;
            checkButtonsAvailability(nxtSbling);
        }
        updatePartcString();
        updateNumbers();
    })
});
orderDropdownPlus.forEach(function(elem){
    elem.addEventListener('click', function (event) {
        event.preventDefault();
        let prvSbling = elem.previousElementSibling;
        let limit = prvSbling.dataset.limit;
        if (parseInt(prvSbling.innerText) < limit) {
            prvSbling.innerText = parseInt(prvSbling.innerText) + 1;
            checkButtonsAvailability(prvSbling);
        }
        updatePartcString();
        updateNumbers();
    })
});

// showing order UI summary
orderUISubmit.addEventListener('click', function (event) {
    event.preventDefault();
    hideOrderSummaries();
    // orderUISubmit.classList.toggle('order-dropdown--active');

    if (!checkAdults() && childNum == 0) {
        showOrderSummary_empty();
    } else if (!checkAdults() && childNum != 0) {
        showOrderSummary_nokids();
    } else {
        showOrderSummary();
    }
});

let reviewFeedbackButtons = document.querySelectorAll('.review-card__feedback-button');
reviewFeedbackButtons.forEach(function(elem){
    elem.addEventListener('click', function (event) {
        event.preventDefault();
        let closest = $(this).siblings('.review-card__feedback-popup');
        this.classList.add('review-card__feedback-button--state');
        closest[0].classList.add('review-card__feedback-popup--active');
        let timeoutID = setTimeout(function(){
            closest[0].classList.remove('review-card__feedback-popup--active');
        }, 2000);
    })
});
