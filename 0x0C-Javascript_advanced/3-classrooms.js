function createClassRoom(numberofStudents) {
    function studentSeat(seat) {
        return function() {
            return (seat);
        }
    }
    let students = [];
    for (let i = 0; i < numberofStudents; i++) {
        students[i] = studentSeat(i + 1);
    }
    return students;
}
let classRoom = createClassRoom(10);