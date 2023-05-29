function string(limit) {
  let kalimat = "berburu ubur-ubur syalala lala";

  let slicing = kalimat.slice(0, limit - 1);

  let spliting = slicing.split(" ");

  let kata = kalimat.split(" ");

  let final = [];

  if (kalimat[slicing.length] != " ") {
    for (let i = 0; i < spliting.length - 1; i++) {
      final.push(kata[i]);
    }
  } else {
    return kalimat.slice(0, limit - 1);
  }
  return final.join(" ");
}

let jawaban = string(16);
console.log(jawaban);
