export class Matrix {
    constructor(s) {
        this.matrix = s
    }

    get rows() {
        return this.matrix
            .split(/\n/)
            .map((x) => x.split(' ').map((y) => Number(y)))
    }

    get columns() {
        return this.matrix
            .split(/\n/)
            .map((x) => x.split(' ').map((y) => Number(y)))
            .reduce((columnsArr, arr) => {
                arr.forEach((elem, index) => {
                    columnsArr[index]
                        ? columnsArr[index].push(elem)
                        : (columnsArr[index] = [elem])
                })
                return columnsArr
            }, [])
    }
}
