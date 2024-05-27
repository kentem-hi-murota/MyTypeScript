{
    const transpose = (array: string[][]) => array[0].map((_, c) => array.map(r => r[c]));

    function createColumn(col: number): string[] {
        const source: number[] = [...Array(15)].map((_, i) => i + (col * 15) + 1);
        const column: string[] = Array(5);
        for (let index = 0; index < column.length; index++) {
            column[index] = source.splice(Math.floor(Math.random() * source.length), 1)[0].toString();
        }
        return column;
    }

    function createColumns(): string[][]{
        const columns: string[][] = [[]];
        for (let i = 0; i < 5; i++) {
            columns[i] = createColumn(i);
        }
        columns[2][2] = 'FREE';
        return transpose(columns);
    }

    function renderBingo(columns:string[][]):void{
        for (let i = 0; i < 5; i++) {
            const tr: HTMLTableRowElement = document.createElement('tr');
            for (let j = 0; j < 5; j++) {
                const td: HTMLTableCellElement = document.createElement('td');
                td.textContent = columns[i][j];
                tr.appendChild(td);
            }
            document.querySelector('tbody')?.appendChild(tr);
        }
    }

    renderBingo(createColumns());
}