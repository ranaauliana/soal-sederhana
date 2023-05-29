function pagination(totalPage, currentPage) {
  let arr = [];

  if (currentPage < 4) {
    for (let i = 1; i < currentPage + 2; i++) {
      arr.push(i);
    }
    console.log(`${arr.join(" ")} ... ${totalPage}`);
  } else if (currentPage > 4 && currentPage != totalPage) {
    for (let i = currentPage - 2; i < currentPage + 2; i++) {
      arr.push(i);
    }
    console.log(`1 ... ${arr.join(" ")} ... ${totalPage}`);
  } else if (currentPage <= totalPage && currentPage <= totalPage - 1) {
    for (let i = currentPage - 2; i < currentPage + 1; i++) {
      arr.push(i);
    }
    console.log(`1 ... ${arr.join(" ")}`);
  }
}

pagination(29, 28);
