// setting up the canvas
const canvas = document.getElementById("animation");
const ctx = canvas.getContext("2d");

const image = new Image();

// globals
jitterRate = 10; // format is [xMin, xMax], [yMin, yMax]
jitterMod = 2;

jitterRate1 = jitterRate * jitterMod;
jitterRate2 = jitterRate * jitterMod ** 2;

jitterGlyph = [[jitterRate, jitterRate], [jitterRate, jitterRate]];
jitterStar1 = [[jitterRate1, jitterRate1], [jitterRate1, jitterRate1]];
jitterStar2 = [[jitterRate2, jitterRate2], [jitterRate2, jitterRate2]];

// helper functions
// drawing functions
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
	
	for (let i = 1; i < points.length; i++) {
		// drawPoint(points[i]);
		drawLine(points[i - 1], points[i]);
	}
	
	return points; // we'll use the return to store these for the next frame
}
// animation functions
const brownianVib = (points, lastPoints, jitter) => { // points: array of points, lastPoints: array of points at last frame, jitter: 2x2 jitter array; returns jittered array
	let newPoints = []; // return array
	
	for (let i = 0; i < points.length; i++) {
		jitterX = 2 * jitter[0][1] * Math.random() - jitter[0][0];
		jitterY = 2 * jitter[1][1] * Math.random() - jitter[1][0];
		
		newPoints[i] = [0.5 * (points[i][0] + lastPoints[i][0] + jitterX),
						0.5 * (points[i][1] + lastPoints[i][1] + jitterY)];
	}
	
	return newPoints;
}
const update = () => { // updates the frame, draws everything
	// clear the canvas
	ctx.beginPath();
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

	// draw each glyph
	// draw letters/numbers
	sixPtsD = drawShape(brownianVib(sixPts, sixPtsD, jitterGlyph)); // 6
	onePtsD = drawShape(brownianVib(onePts, onePtsD, jitterGlyph)); // 1
	bPtsD = drawShape(brownianVib(bPts, bPtsD, jitterGlyph)); // b
	i1PtsD = drawShape(brownianVib(i1Pts, i1PtsD, jitterGlyph)); // i #1
	rPtsD = drawShape(brownianVib(rPts, rPtsD, jitterGlyph)); // r
	dPtsD = drawShape(brownianVib(dPts, dPtsD, jitterGlyph)); // d
	i2PtsD = drawShape(brownianVib(i2Pts, i2PtsD, jitterGlyph)); // i #2
	ePtsD = drawShape(brownianVib(ePts, ePtsD, jitterGlyph)); // e
	// draw stars
	star1Pts1D = drawShape(brownianVib(star1Pts1, star1Pts1D, jitterGlyph)); // big star 1
	star1Pts2D = drawShape(brownianVib(star1Pts2, star1Pts2D, jitterStar1)); // big star 2
	star1Pts3D = drawShape(brownianVib(star1Pts3, star1Pts3D, jitterStar2)); // big star 3
	star2PtsD = drawShape(brownianVib(star2Pts, star2PtsD, jitterGlyph)); // i #1 star
	star3PtsD = drawShape(brownianVib(star3Pts, star3PtsD, jitterGlyph)); // i #2 star
	
	setTimeout(() => {
		requestAnimationFrame(update);
	}, 100);
}

// onmousemove = function(e){console.log("mouse location:", e.clientX - 210, e.clientY - 16)} // shows (roughly) mouse pointer position in canvas; saves a lot of headache

// define glyphs in points
// letters/numbers
sixPts = [ // 6
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
onePts = [ // 1
	[340, 292],
	[268, 357],
	[324, 357],
	[255, 618],
	[324, 618],
	[408, 292]
]
bPts = [ // b
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
i1Pts = [ // i #1
	[729, 380],
	[683, 543],
	[745, 543],
	[790, 380]
]
rPts = [ // r
	[833, 380],
	[789, 543],
	[854, 543],
	[872, 496],
	[900, 462],
	[941, 442],
	[962, 380],
	[915, 386],
	[884, 415],
	[894, 380]
]
dPts = [ // d
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
i2Pts = [ // i #2
	[1218, 380],
	[1177, 543],
	[1237, 543],
	[1277, 380]
]
ePts = [ // e
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
star1Pts1 = [ // big star inner
	[454, 171],
	[444, 235],
	[403, 259],
	[444, 267],
	[438, 324],
	[469, 274],
	[508, 295],
	[488, 250],
	[511, 210],
	[473, 226]
]
star1Pts2 = [ // big star middle
	[453, 105],
	[439, 229],
	[335, 264],
	[439, 271],
	[411, 381],
	[472, 282],
	[565, 354],
	[494, 251],
	[581, 152],
	[476, 217]
]
star1Pts3 = [ // big star large
	[451, 55],
	[454, 242],
	[377, 133],
	[451, 250],
	[278, 268],
	[450, 259],
	[312, 350],
	[455, 264],
	[381, 457],
	[463, 266],
	[515, 431],
	[471, 262],
	[600, 390],
	[477, 256],
	[617, 252],
	[474, 246],
	[624, 118],
	[469, 240],
	[537, 99],
	[462, 239]
]
star2Pts = [ // i #1 star
	[777, 275],
	[758, 338],
	[729, 257],
	[752, 343],
	[681, 327],
	[744, 350],
	[679, 376],
	[745, 361],
	[699, 401],
	[750, 367],
	[728, 451],
	[759, 367],
	[785, 443],
	[769, 364],
	[827, 407],
	[776, 358],
	[845, 357],
	[773, 348],
	[817, 313],
	[767, 339]
]
star3Pts = [ // i #2 star
	[1287, 251],
	[1254, 336],
	[1233, 276],
	[1244, 337],
	[1187, 316],
	[1241, 346],
	[1175, 366],
	[1241, 358],
	[1186, 409],
	[1244, 368],
	[1219, 436],
	[1254, 367],
	[1299, 429],
	[1263, 364],
	[1336, 377],
	[1264, 351],
	[1340, 325],
	[1265, 341],
	[1334, 288],
	[1262, 335]
]
// variables for last frame
let sixPtsD = sixPts, onePtsD = onePts, bPtsD = bPts, i1PtsD = i1Pts, rPtsD = rPts, dPtsD = dPts, i2PtsD = i2Pts, ePtsD = ePts, 
	star1Pts1D = star1Pts1, star1Pts2D = star1Pts2, star1Pts3D = star1Pts3, star2PtsD = star2Pts, star3PtsD = star3Pts; // we'll also overload these to bool for if we don't want to draw

// drawing settings
ctx.fillStyle = "white";
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.imageSmoothingEnabled = false;

update();
