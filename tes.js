function string(limit) {
  let kalimat = "berburu ubur-ubur syalala lala";

  let slicing = kalimat.slice(0, limit);

  let spliting = slicing.split(" ");

  let kata = kalimat.split(" ");

  let final = [];

  if (spliting[0].split("").length != kata[0].split("").length) {
    return "not found";
  } else if (kalimat[slicing.length] != " ") {
    for (let i = 0; i < spliting.length - 1; i++) {
      final.push(kata[i]);
    }
  } else {
    return kalimat.slice(0, limit);
  }
  return final.join(" ");
}

let jawaban = string(7);
console.log(jawaban);
