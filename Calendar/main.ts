{
    type DateType = { date: number; isToday: boolean; isDisabled: boolean }[];

    const year = 2024;
    const month = 4;
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

        for (let i = 1; i < lastDate+1; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: false
            });
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

    function createCalendar() {
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

    createCalendar();
}