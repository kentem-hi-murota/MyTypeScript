{
    type DateType = { date: number; isToday: boolean; isDisabled: boolean }[];

    const today = new Date();
    let year: number = new Date().getFullYear();
    let month: number = new Date().getMonth();
    const previousButton: HTMLButtonElement | null = document.querySelector('#previous');
    const nextButton: HTMLButtonElement | null = document.querySelector('#next');
    const todayTextButton: HTMLTableElement | null = document.querySelector('#today');

    previousButton?.addEventListener('click', () => {
        month--;
        if (month < 0) {
            year--;
            month = 11;
        }
        createCalendar();
    });

    nextButton?.addEventListener('click', () => {
        month++;
        if (month > 11) {
            year++;
            month = 0;
        }
        createCalendar();
    });

    todayTextButton?.addEventListener('click', () => {
        year = new Date().getFullYear();
        month = new Date().getMonth();
        createCalendar();
    });

    function getClaendarHead(): DateType {
        const dates: DateType = [];
        const d = new Date(year, month, 0).getDate();
        const n = new Date(year, month, 1).getDay();

        for (let i = 0; i < n; i++) {
            dates.unshift({
                date: d - i,
                isToday: false,
                isDisabled: true
            });
        }
        return dates;
    }

    function getCalendarBody(): DateType {
        const dates: DateType = [];
        const lastDate = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i < lastDate + 1; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: false
            });
        }

        if (year === today.getFullYear() && month === today.getMonth()) {
            dates[today.getDate() - 1].isToday = true;
        }
        return dates;
    }

    function getCalendarTail(): DateType {
        const dates: DateType = [];
        const lastDay = new Date(year, month + 1, 0).getDay();
        for (let i = 1; i < 7 - lastDay; i++) {
            dates.unshift({
                date: i,
                isToday: false,
                isDisabled: true
            });
        }
        return dates;
    }

    function clearCalendar() {
        const tbody = document.querySelector('tbody');
        while (tbody?.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
    }

    function renderTitle() {
        const calendarTitle: HTMLTableElement | null = document.querySelector('#title');
        const title = `${year}/${String(month + 1).padStart(2, '0')}`.toString();
        if (calendarTitle) calendarTitle.textContent = title;
    }

    function renderWeeks() {
        const dates: DateType = [
            ...getClaendarHead(),
            ...getCalendarBody(),
            ...getCalendarTail(),
        ];

        const weeks: DateType[] = [];
        const weeksCount: number = dates.length / 7;
        for (let i = 0; i < weeksCount; i++) {
            weeks.push(dates.splice(0, 7));
        }

        weeks.forEach(week => {
            const tr = document.createElement('tr');
            week.forEach(date => {
                const td = document.createElement('td');

                td.textContent = date.date.toString();
                if (date.isToday) td.classList.add('today');
                if (date.isDisabled) td.classList.add('disabled');

                tr.appendChild(td);
            });
            document.querySelector('tbody')?.appendChild(tr);
        });
    }

    function createCalendar() {
        clearCalendar();
        renderTitle();
        renderWeeks();
    }

    createCalendar();
}