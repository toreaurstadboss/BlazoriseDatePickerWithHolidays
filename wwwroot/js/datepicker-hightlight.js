window.highlightFlatpickrDates = (selector, dates) => {
    //debugger
    const calendar = document.querySelector(selector); 
    if (!calendar) {
        return; //Wait for Flatpickr to render days
    }
    //debugger
    setTimeout(() => {
        //
        dates.forEach(dateStr => {
            const dayElem = calendar.querySelector(`.flatpickr-day[aria-label="${dateStr}"]`);
            if (dayElem) {
                dayElem.classList.add('pink-day');
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