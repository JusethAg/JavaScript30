const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const HAND_DEGREE_OFFSET = 90;
const TOTAL_DEGREES = 360;
const TOTAL_SECONDS_OR_MINUTES = 60;
const TOTAL_HOURS = 12;

function setDate() {

    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / TOTAL_SECONDS_OR_MINUTES) * TOTAL_DEGREES) + HAND_DEGREE_OFFSET;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;


    const mins = now.getMinutes();
    const minsDegrees = ((mins / TOTAL_SECONDS_OR_MINUTES) * TOTAL_DEGREES) + HAND_DEGREE_OFFSET;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / TOTAL_HOURS) * TOTAL_DEGREES) + HAND_DEGREE_OFFSET;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    resetTransitionProperty(seconds);

}

function resetTransitionProperty(second) {

    const hands = document.querySelectorAll('.hand');
    const DEFAULT_TRANSITION_STYLE = {
        'property': 'all',
        'duration': '0.0.5s',
        'timing-function': 'cubic-bezier(0.1, 2.7, 0.50, 1)'
    };

    hands.forEach((hand) => {
        hand.style['transition-property'] = (second === 0) ? 'none' : DEFAULT_TRANSITION_STYLE['property'];
        hand.style['transition-duration'] = (second === 0) ? 'none' : DEFAULT_TRANSITION_STYLE['duration'];
        hand.style['transition-timing-function'] = (second === 0) ? 'none' : DEFAULT_TRANSITION_STYLE['timing-function'];
    });

}

setInterval(setDate, 1000);