function setup() {
	// define artboard size
	createCanvas(500,600);
	// Set here the values that are not changing all over the sketch

}

function draw() {
	background(204);

	//Neck
	noStroke();
	fill(20,60,173); //Blue
	rect(240, 285, 20, 40);

	strokeWeight(2);
	stroke(0);

	//Hair
	line(250, 225, 270, 180);
	line(250, 225, 230, 190);

	//Body
	noStroke();
	fill(20,60,173); //Blue
	arc(250, 345, 170, 300 , 0, 3.14);
	fill(0, 140, 173, 75.5); //Lightblue
	arc(250, 345, 130, 200 , 0, 3.14);

	//Arms
	strokeWeight(2);
	stroke(0);
	line(165, 330, mouseX, mouseY);
	line(335, 330, mouseX+100, mouseY);

	noStroke();

	//Shoulders
	fill(73,168,206);
	rect(165, 325, 170, 20);
	fill(73,168,206);
	ellipse(165, 335, 20);
	fill(73,168,206);
	ellipse(335, 335, 20);

	//Feet
	fill(73,168,206);
	ellipse(230, 510, 20);
	fill(73,168,206);
	ellipse(270, 510, 20);

	//Legs
	fill(20,60,173); //Blue
	rect(220, 480, 20, 30);
	fill(20,60,173); //Blue
	rect(260, 480, 20, 30);



	//Ears
	fill(73,168,206);
	ellipse(165 ,265, 50);
	fill(73,168,206);
	ellipse(335, 265, 50);

	//Head
	ellipse(250, 240, 90, 50);
	fill(20,60,173); //Blue
	rect(165, 240, 170, 50);
	fill(0, 140, 173, 75.5); //Lightblue
	ellipse(250, 265, 160, 40);


	//Eyes
	fill(255, 255, 255);
	ellipse(230, 265, 12.5);
	fill(255, 255, 255);
	ellipse(270, 265, 20);
	fill(0,0,0);
	ellipse(230,265, 5);
	ellipse(270,265,5);
}
