function date(input) {
  let date = [
    { month: "Jan", day: 31 },
    { month: "Feb", day: 28 },
    { month: "Mar", day: 31 },
    { month: "Apr", day: 30 },
    { month: "Mei", day: 31 },
    { month: "Jun", day: 30 },
    { month: "Jul", day: 31 },
    { month: "Aug", day: 31 },
    { month: "Sep", day: 30 },
    { month: "Oct", day: 31 },
    { month: "Nov", day: 30 },
    { month: "Dec", day: 31 },
  ];

  if (input != "") {
    if (input.split(" ").length < 2) return "error";
    // waktu
    let time = input.split(" ")[1];
    let hour = time.split(":");

    // tanggal
    let dates = input.split(" ")[0];
    let tggl = dates.split("-");

    // index bulan
    let index = Number(tggl[1]) - 1;

    if (
      !date[index] ||
      date[index]["day"] < Number(tggl[2]) ||
      Number(tggl[0]) > 2023 ||
      Number(tggl[0]) < 2010 ||
      Number(hour[0] > 23) ||
      Number(hour[1] > 59) ||
      Number(hour[2] > 59)
    ) {
      return "error";
    }

    return `${tggl[2]} ${date[index]["month"]} ${tggl[0]} Pukul ${time}`;
  } else {
    return "kosong";
  }
}

let result = date("2023-12-31 23:59:59");
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
