function attachEventsListeners() {

    document.querySelector('body').addEventListener('click', calculate);
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let daysButton = document.querySelector('#daysBtn');
    let hoursButton = document.querySelector('#hoursBtn');
    let minutesButton = document.querySelector('#minutesBtn');
    let secondsButton = document.querySelector('#secondsBtn');

    function calculate(e) {
        let parent = e.target;

        if (parent === daysButton) {
            hours.value = days.value * 24;
            minutes.value = days.value * 1440;
            seconds.value = days.value * 86400;
        } else if (parent === hoursButton) {
           days.value=hours.value/24;
           minutes.value=hours.value * 60;
           seconds.value=hours.value * 3600;
        } else if (parent === minutesButton) {
            hours.value = minutes.value / 60;
            days.value = minutes.value / 1440;
            seconds.value = minutes.value *60;
        } else if (parent === secondsButton) {
            hours.value = seconds.value /3600;
            minutes.value = seconds.value / 60;
            days.value = seconds.value / 86400;
        }
    }
}