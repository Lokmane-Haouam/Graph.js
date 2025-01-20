let cont = document.getElementById("cont");
a = 0;
b = 0;
q = 0;
qq = 0;
for (let i1 = -10; i1 < 10; i1++) {
  let lat = document.createElement("span");
  cont.appendChild(lat);
  lat.style.position = "absolute";
  lat.style.width = "100%";
  lat.style.height = "1px";
  lat.style.transform = "translateY(-50%)";
  lat.style.backgroundColor = "#686868";
  lat.style.left = "0";
  la = (q * 100) / 20;
  lat.style.bottom = la + "%";
  q++;
  let hor = document.createElement("span");
  cont.appendChild(hor);
  hor.style.position = "absolute";
  hor.style.width = "1px";
  hor.style.height = "100%";
  hor.style.transform = "translateX(-50%)";
  hor.style.backgroundColor = "#686868";
  hor.style.top = "0";
  ho = (qq * 100) / 20;
  hor.style.left = ho + "%";
  qq++;
}
function show() {
  let content = document.getElementById("input").textContent;
  let ndContent = "";
  let expContent = "";
  let logContent = "";
  for (let index = 0; index < content.length; index++) {
    if (content[index] == "^") {
      ndContent += "**";
    } else {
      if (content[index] == "e") {
        index += 2;
        if (content[index] == "x") {
          ndContent += "Math.exp(x)";
        }
        if (content[index] == "(") {
          while (content[index] != ")") {
            index++;
            if (content[index] == "^") {
              expContent += "**";
            } else {
              expContent += content[index];
            }
          }
          ndContent += "Math.exp(" + expContent;
        }
      } else {
        if (content[index] == "l") {
          index += 2;
          while (content[index] != ")") {
            index++;
            if (content[index] == "^") {
              logContent += "**";
            } else {
              logContent += content[index];
            }
          }
          ndContent += "Math.log(" + logContent;
        } else {
          ndContent += content[index];
        }
      }
    }
  }

  let func = "function f(x) {return " + ndContent + "; }";
  // alert(func);
  eval(func);
  for (let i = -20; i < 20; i = i + 0.005) {
    x = i;
    y = f(x);
    let dot = document.createElement("div");
    cont.appendChild(dot);
    dot.style.position = "absolute";
    dot.style.width = "2px";
    dot.style.height = "2px";
    dot.style.borderRadius = "50%";
    dot.style.backgroundColor = "black";
    dot.style.transform = "translateX(-50%) translateY(50%)";
    a = (x * 100) / 20;
    a += 50;
    dot.style.left = a + "%";
    if (isNaN(y)) {
      dot.style.display = "none";
    } else {
      b = (y * 100) / 20;
      b += 50;
    }
    dot.style.bottom = b + "%";
  }
}
function cl() {
  location.reload();
}
let pcont = "";
function btn(button) {
  pcont += button.textContent;
  document.getElementById("input").innerHTML = pcont;
}
function back() {
  let bcont = document.getElementById("input").textContent;
  let pcont = "";
  for (let index3 = 0; index3 < bcont.length - 1; index3++) {
    pcont += bcont[index3];
  }
  document.getElementById("input").innerHTML = pcont;
}
