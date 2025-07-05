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