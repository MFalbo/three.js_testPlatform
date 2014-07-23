// $(document).ready(function(){
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// console.log(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

//Basic Cube
var geometry = new THREE.BoxGeometry(100,500,100);
var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

cube.position.x = -200;
cube.position.y = 0;
cube.position.z = 0;

scene.add( cube );

// var geometry = new THREE.BoxGeometry(100,500,1000);
// var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var cube2 = new THREE.Mesh( geometry, material );

cube2.position.x = 200;
cube2.position.y = 0;
cube2.position.z = 0;

scene.add( cube2 );

//Create Sky Texture
var skyTexture = THREE.ImageUtils.loadTexture('../images/sky.jpg');
skyTexture.name = "Sky";
skyTexture.wrapS = THREE.RepeatWrapping;
skyTexture.wrapT = THREE.RepeatWrapping;
skyTexture.repeat.set(1,1);

//Planar Surface
var skyGeometry = new THREE.PlaneGeometry(window.innerWidth*2,window.innerHeight*2,0);
var skyMaterial = new THREE.MeshBasicMaterial( {map: skyTexture});
var skyPlane = new THREE.Mesh( skyGeometry, skyMaterial);
skyPlane.position.z = -499;

scene.add( skyPlane );

var groundGeometry = new THREE.PlaneGeometry(window.innerWidth*2,window.innerHeight,0);
var groundMaterial = new THREE.MeshBasicMaterial( {color: 0xFF0000});
var groundPlane = new THREE.Mesh( groundGeometry, groundMaterial);
groundPlane.position.z = -499;
groundPlane.position.y = -450;
groundPlane.rotation.x = -Math.PI/2;

scene.add( groundPlane );

//Basic Circle
// var material = new THREE.MeshBasicMaterial({
// 	color: 0x0000ff
// });

// var radius = 1;
// var segments = 64;

// var circleGeometry = new THREE.CircleGeometry( radius, segments );				
// var circle = new THREE.Mesh( circleGeometry, material );
// scene.add( circle );

//Basic Sphere
var geometry = new THREE.SphereGeometry( 50, 64, 64 ); //radius, segments, rings
// var material = new THREE.MeshBasicMaterial( {color: 0xffff00} ); //basic mesh material with a color yellow
var material = new THREE.MeshLambertMaterial( {color: 0xFFFF00} ); //mesh lambert material which requires the reflection of light
var sphere = new THREE.Mesh( geometry, material );

sphere.position.x = 0;
sphere.position.y = 0;
sphere.position.z = 0;

scene.add( sphere );



var light = new THREE.AmbientLight(0x101010); // soft white light
scene.add( light );

var spotLight = new THREE.SpotLight( 0xFFFFFF );
spotLight.position.set( 0, -100, 100 );

spotLight.castShadow = true;

spotLight.shadowMapWidth = 1024;
spotLight.shadowMapHeight = 1024;

spotLight.shadowCameraNear = 500;
spotLight.shadowCameraFar = 4000;
spotLight.shadowCameraFov = 30;

scene.add( spotLight );

// var spotLight = new THREE.SpotLight( 0xffffff );
// spotLight.position.set( 0, -1000, 200 );

// spotLight.castShadow = true;

// spotLight.shadowMapWidth = 1024;
// spotLight.shadowMapHeight = 1024;

// spotLight.shadowCameraNear = 500;
// spotLight.shadowCameraFar = 4000;
// spotLight.shadowCameraFov = 30;

// scene.add( spotLight );

//Casts a full color point light that is positioned at 10,50,130
// var pointLight = new THREE.PointLight(0xFFFFFF,1,500);
// pointLight.position.x = 0;
// pointLight.position.y = -100;
// pointLight.position.z = 0;

// scene.add( pointLight );

// var pointLight2 = new THREE.PointLight(0xFFFFFF,1,1000);
// pointLight2.position.x = 0;
// pointLight2.position.y = 100;
// pointLight2.position.z = 0;

// scene.add( pointLight2 );

//Directional Light at half intensity.  This shines from a single direction as though from an infinite distance.  (like the Sun)
// var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
// directionalLight.position.set( 0, 1, 0 );
// scene.add( directionalLight );

//Hemisphere Light
var hemisphereLight = new THREE.HemisphereLight(0xFFFFFF, 1.0)
scene.add( hemisphereLight );

//Adjust camera position in the x,y, or z axis
camera.position.z = 500;
// camera.position.x = 5;
// camera.position.y = -3;

//Adjust Camera position/rotation based on arrow keydown
//this is very rudimentary and will need a lot of improvement.  Also, the rotation is very awkward
$(document).on('keydown', function(e){
	// console.log(e.keyCode);
	// console.log(e.shiftKey);

	//Rotate Left
	if(e.keyCode === 37){
		camera.rotation.y += 0.01;
	}
	//Rotate Right
	if(e.keyCode === 39){
		camera.rotation.y -= 0.01;
	}
	//Move Forward
	if(e.keyCode === 38){
		if(e.shiftKey){
			camera.position.z -= 10.00;	//Move 10x as fast if shift is held down
		}else{
			camera.position.z -= 1.00; //Move at standard pace when only the arrow key is down
		}
	}
	//Move Backward
	if(e.keyCode === 40){
		if(e.shiftKey){
			camera.position.z += 10.00;	//Move 10x as fast if shift is held down
		}else{
			camera.position.z += 1.00; //Move at standard pace when only the arrow key is down
		}
	}
});

function render() {

	requestAnimationFrame(render); //loop animation at 60 fps


	//rotate the cube about the x and y axes
	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;

	//change the position of the sphere up, right, and away
	// sphere.position.x += 0.5;
	// sphere.position.y += 0.1;
	// sphere.position.z -= .1;




	renderer.render(scene, camera);
}
render();


// });