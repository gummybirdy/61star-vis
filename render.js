// setting up the canvas
const canvas = document.getElementById("animation");
const ctx = canvas.getContext("2d");

const image = new Image();

// helper functions
const drawPoint = (a) => ctx.fillRect(a[0] - 3, a[1] - 3, 6, 6); // draw a point at [x, y] coordinate pair a
const drawLine = (a, b) => { // draw a line between [x, y] coordinate pairs a and b
	ctx.moveTo(a[0], a[1]);
	ctx.lineTo(b[0], b[1]);
	ctx.stroke();
}
const drawShape = (points) => { // draw a polygon between each [x, y] coordinate pair in a list of points
	// draw the last line first
	// drawPoint(points[0]);
	drawLine(points[points.length - 1], points[0]);
onmousemove = function(e){console.log("mouse location:", e.clientX - 210, e.clientY - 16)} // shows (roughly) mouse pointer position in canvas; saves a lot of headache
	
	for (let i = 1; i < points.length; i++) {
		// drawPoint(points[i]);
		drawLine(points[i - 1], points[i]);
	}
}

// placeholder/guide; drawing image as the background
//image.src = "./61star.png";
//image.onload = function() {ctx.drawImage(this, 0, 0)}; // draw the image when it loads

// define glyphs in points
// letters/numbers
// 6
sixPts = [
	[146, 211],
	[70, 350],
	[51, 420],
	[58, 489],
	[94, 534],
	[145, 550],
	[194, 541],
	[238, 504],
	[261, 450],
	[252, 394],
	[217, 361],
	[176, 349],
	[138, 357],
	[214, 211]
]
// 1
onePts = [
	[340, 292],
	[268, 357],
	[324, 357],
	[255, 618],
	[324, 618],
	[408, 292]
]
// b
bPts = [
	[547, 216],
	[470, 543],
	[531, 543],
	[538, 516],
	[567, 539],
	[600, 542],
	[634, 523],
	[662, 487],
	[672, 443],
	[662, 403],
	[640, 380],
	[602, 378],
	[565, 399],
	[613, 216]
]
// i #1
i1Pts = [
	[729, 380],
	[683, 543],
	[745, 543],
	[790, 380]
]
// r
rPts = [
	[833, 380],
	[789, 543],
	[854, 543],
	[872, 496],
	[900, 462],
	[943, 442],
	[957, 380],
	[915, 386],
	[884, 415],
	[894, 380]
]
// d
dPts = [
	[1148, 216],
	[1100, 408],
	[1070, 382],
	[1027, 385],
	[987, 417],
	[965, 456],
	[966, 498],
	[988, 532],
	[1030, 543],
	[1073, 521],
	[1067, 543],
	[1129, 543],
	[1212, 216]
]
// i #2
i2Pts = [
	[1218, 380],
	[1177, 543],
	[1237, 543],
	[1277, 380]
]
// e
ePts = [
	[1383, 378],
	[1343, 394],
	[1311, 427],
	[1292, 471],
	[1297, 510],
	[1324, 536],
	[1359, 544],
	[1397, 533],
	[1361, 479],
	[1446, 479],
	[1458, 442],
	[1446, 406],
	[1421, 386]
]
// stars
// big star
star1Pts1 = [
	[454, 171],
	[445, 232],
	[401, 241],
	[443, 265],
	[438, 324],
	[471, 270],
	[516, 294],
	[488, 246],
	[511, 210],
	[473, 225]
]
star1Pts2 = [
	[455, 105],
	[437, 217],
	[335, 262],
	[438, 274],
	[411, 381],
	[477, 283],
	[565, 354],
	[504, 242],
	[578, 152],
	[482, 199]
]
star1Pts3 = [
	[470, 57],
	[455, 245],
	[377, 133],
	[451, 250],
	[275, 252],
	[450, 259],
	[312, 350],
	[452, 267],
	[392, 464],
	[463, 266],
	[515, 431],
	[468, 259],
	[589, 403],
	[473, 253],
	[617, 252],
	[466, 246],
	[622, 126],
	[464, 239],
	[543, 106],
	[463, 229]
]
// i # 1 star
star2Pts = [
	[777, 275],
	[760, 344],
	[729, 257],
	[748, 340],
	[681, 327],
	[748, 350],
	[679, 376],
	[748, 361],
	[699, 401],
	[747, 373],
	[728, 451],
	[759, 367],
	[785, 443],
	[768, 360],
	[827, 407],
	[778, 357],
	[845, 357],
	[770, 348],
	[817, 313],
	[767, 339]
]
// i # 2 star
star3Pts = [
	[1290, 258],
	[1257, 332],
	[1233, 276],
	[1244, 337],
	[1187, 316],
	[1244, 350],
	[1175, 366],
	[1240, 361],
	[1186, 409],
	[1245, 369],
	[1219, 436],
	[1257, 370],
	[1299, 429],
	[1269, 364],
	[1336, 377],
	[1264, 351],
	[1340, 325],
	[1265, 341],
	[1334, 288],
	[1267, 331]
]

// drawing settings
ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.imageSmoothingEnabled = false;

// draw each glyph
// draw letters/numbers
// 6
drawShape(sixPts);
// 1
drawShape(onePts);
// b
drawShape(bPts);
// i #1
drawShape(i1Pts);
// r
drawShape(rPts);
// d
drawShape(dPts);
// i #2
drawShape(i2Pts);
// e
drawShape(ePts);
// draw stars
// big star
drawShape(star1Pts1);
drawShape(star1Pts2);
drawShape(star1Pts3);
// i # 1 star
drawShape(star2Pts);
// i # 2 star
drawShape(star3Pts);