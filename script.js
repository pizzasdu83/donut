let A = 0, B = 0;

const screen = document.getElementById("screen");
const fullscreenButton = document.getElementById("fullscreen");

function openFullscreen() {
  const elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }

  document.getElementById("fullscreen").style.display = "none";
  document.getElementById("bgm").play(); 
}


fullscreenButton.addEventListener("click", openFullscreen);
function render() {
	let b = [];
	let z = [];
	for (let i = 0; i < 1760; i++) {
		b[i] = " ";
		z[i] = 0;
	}

	for (let j = 0; j < 6.28; j += 0.07) {
		for (let i = 0; i < 6.28; i += 0.02) {
			let c = Math.sin(i);
			let d = Math.cos(j);
			let e = Math.sin(A);
			let f = Math.sin(j);
			let g = Math.cos(A);
			let h = d + 2;
			let D = 1 / (c * h * e + f * g + 5);
			let l = Math.cos(i);
			let m = Math.cos(B);
			let n = Math.sin(B);
			let t = c * h * g - f * e;

			let x = Math.floor(40 + 30 * D * (l * h * m - t * n));
			let y = Math.floor(12 + 15 * D * (l * h * n + t * m));
			let o = x + 80 * y;

			let N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));

			if (y > 0 && y < 22 && x > 0 && x < 80 && D > z[o]) {
				z[o] = D;
				b[o] = ".,-~:;=!*#$@"[N > 0 ? N % 12 : 0];
			}
		}
	}

	let output = "";
	for (let k = 0; k < 1760; k++) {
		output += (k % 80) ? b[k] : "\n";
	}

	document.getElementById("screen").textContent = output;

	A += 0.04;
	B += 0.02;
}

setInterval(render, 30);
