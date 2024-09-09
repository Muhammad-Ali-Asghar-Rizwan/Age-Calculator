// let d1 = document.getElementById('date').value;
// let m1 = document.getElementById('month').value;
// let y1 = document.getElementById('year').value;


// function age() {
//     let d1 = document.getElementById('date').value;
//     let m1 = document.getElementById('month').value;
//     let y1 = document.getElementById('year').value;

//     var date = new Date()
//     var d2 = date.getDate()
//     var m2 = 1 + date.getMonth()
//     var y2 =  date.getFullYear()
//     var month = [31 ,28 ,31 ,30  , 31 , 30,  31 , 31 , 30 , 31 , 30 ,31]
//     if (d1 > d2) {
//         d2 = d2 + month[m2-1]
//         m2 = m2 -1
//     }
//     if (m1 > m2) {
//         m2 = m2 +12;
//         y2 = y2 -1

//         var d = d2 -d1
//         var m = m2 -m1
//         var y = y2 - y1
//         document.getElementById('age').innerHTML = 'Your age is '+y+' Years '+m+' month '+d+' day '
//     }
// }


function age() {
    let d1 = parseInt(document.getElementById('date').value);
    let m1 = parseInt(document.getElementById('month').value);
    let y1 = parseInt(document.getElementById('year').value);

    if (isNaN(d1) || isNaN(m1) || isNaN(y1)) {
        document.getElementById('age').innerHTML = "Please enter valid date, month, and year.";
        return;
    }

    const currentDate = new Date();
    let d2 = currentDate.getDate();
    let m2 = currentDate.getMonth() + 1;
    let y2 = currentDate.getFullYear();

    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust day and month if needed
    if (d1 > d2) {
        d2 += monthDays[m2 - 1];
        m2--;
    }

    if (m1 > m2) {
        m2 += 12;
        y2--;
    }

    const dayDiff = d2 - d1;
    const monthDiff = m2 - m1;
    const yearDiff = y2 - y1;

     document.getElementById('age').innerHTML = `Your age is ${yearDiff} Years`;
}
