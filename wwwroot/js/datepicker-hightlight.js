window.highlightFlatpickrDates = (selector, dates) => {
    //debugger
    const calendar = document.querySelector(selector); 
    if (!calendar) {
        return; //Wait for Flatpickr to render days
    }
    //debugger
    setTimeout(() => {
        //
        dates.forEach(date => {
            //debugger
            const dayElem = calendar.querySelector(`.flatpickr-day[aria-label="${date.date}"]`);
            if (dayElem) {
                dayElem.classList.add('pink-day');
                dayElem.setAttribute('title', date.annotation);
            }
        });
    }, 50);
};

window.registerFlatpickrMonthChange = (selector, dotNetHelper) => {
    const fpInput = document.querySelector(selector);
    if (!fpInput || !fpInput._flatpickr) {
        setTimeout(() => window.registerFlatpickrMonthChange(selector, dotNetHelper), 50);
        return;
    }
    fpInput._flatpickr.config.onMonthChange.push(function () {
        dotNetHelper.invokeMethodAsync('OnMonthChanged');
    });
};

window.registerFlatpickrYearChange = (selector, dotNetHelper) => {
    const fpInput = document.querySelector(selector);
    if (!fpInput || !fpInput._flatpickr) {
        setTimeout(() => window.registerFlatpickrYearChange(selector, dotNetHelper), 50);
        return;
    }
    fpInput._flatpickr.config.onYearChange.push(function () {
        dotNetHelper.invokeMethodAsync('OnYearChanged');
    });
};