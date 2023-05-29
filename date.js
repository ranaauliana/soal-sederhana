function date(input) {
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
  ];

  let monthIndex = input.slice(5, 7);
  let day = input.slice(8, 10);
  let year = input.slice(0, 4);
  let hour = input.slice(-8, -3);

  return `${day} ${month[Number(monthIndex)]} ${year} Pukul ${hour}`;
}

let result = date("2023-05-20 01:44:09");
console.log(result);

// function date(input) {
//   let month = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "Mei",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Okt",
//   ];

//   let monthIndex = input.slice(3, 8);
//   let day = input.slice(8, 10);
//   let year = input.slice(0, 4);
//   let hour = input.slice(-8, -3);
//   console.log(monthIndex);
//   console.log(month.findIndex(monthIndex));

//   //   return `${day} ${month[Number(monthIndex)]} ${year} Pukul ${hour}`;
// }

// let result2 = date("20 April 2023 11:00");
// console.log(result2);
