function pagination(totalPage, currentPage) {
  let arr = [];

  if (currentPage > 0 && currentPage <= totalPage) {
    // page 1 - 3
    if (currentPage < 4) {
      for (let i = 1; i < currentPage + 2; i++) {
        arr.push(i);
      }
      console.log(`${arr.join(" ")} ... ${totalPage}`);

      // page 4 - seterusnya
    } else if (currentPage >= 4 && currentPage < totalPage - 2) {
      for (let i = currentPage - 1; i < currentPage + 2; i++) {
        arr.push(i);
      }
      console.log(`1 ... ${arr.join(" ")} ... ${totalPage}`);

      // page totalpage - 1
    } else if (currentPage == totalPage - 1 && currentPage < totalPage) {
      for (let i = currentPage - 1; i < currentPage + 2; i++) {
        arr.push(i);
      }
      console.log(`1 ... ${arr.join(" ")}`);

      // page totalpage - 2
    } else if (currentPage == totalPage - 2 && currentPage < totalPage) {
      for (let i = currentPage - 1; i < currentPage + 3; i++) {
        arr.push(i);
      }
      console.log(`1 ... ${arr.join(" ")}`);

      // page terakhir
    } else if (currentPage == totalPage) {
      for (let i = currentPage - 2; i < currentPage + 1; i++) {
        arr.push(i);
      }
      console.log(`1 ... ${arr.join(" ")}`);
    }
  } else {
    console.log("page doesn't exist");
  }
}

pagination(29, -1);
