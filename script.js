let tbl = document.getElementById("c");
let p, q;

const col = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H" };

function getAns(p, q) {
  const n = 8,
    m = 8;
  const a = [];
  let X = [2, 1, -1, -2, -2, -1, 1, 2];
  let Y = [1, 2, 2, 1, -1, -2, -2, -1];

  for (let i = 0; i < 8; i++) {
    let x = p + X[i];
    let y = q + Y[i];

    if (x > 0 && y > 0 && x <= n && y <= m) {
      let k = x + col[y];
      a.push(k);
    }
  }
  return a;
}

if (tbl != null) {
  for (let i = 0; i < tbl.rows.length; i++) {
    for (let j = 0; j < tbl.rows[i].cells.length; j++) {
      tbl.rows[i].cells[j].onclick = function () {
        p = i;
        q = j;
        let ans = getAns(p, q);
        Swal.fire({
          icon: "success",
          title: "FROM " + col[q] + p + " THE KNIGHT CAN MOVE TO " + ans,
          showConfirmButton: true,
          timer: 500000,
        });
      };
      tbl.rows[i].cells[j].onmouseover = function () {
        getval(this);
      };
    }
  }
}
function getval(cel) {
  prev = cel.style.backgroundColor;
  cel.style.backgroundColor = "green";
  setTimeout(function () {
    cel.style.backgroundColor = prev;
  }, 100);
}
