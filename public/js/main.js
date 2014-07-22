var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// console.log(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

//Basic Cube
var geometry = new THREE.BoxGeometry(100,100,100);
var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

cube.position.x = -80;
cube.position.y = -50;
cube.position.z = 10;

scene.add( cube );

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
var material = new THREE.MeshLambertMaterial( {color: 0xFFFF00} ); //mesh lambert material
var sphere = new THREE.Mesh( geometry, material );

sphere.position.x = 40;
sphere.position.y = 40;
sphere.position.z = 13;

scene.add( sphere );

// var light = new THREE.AmbientLight(0x404040); // soft white light
// scene.add( light );
// var spotLight = new THREE.SpotLight( 0xffffff );
// spotLight.position.set( 100, 1000, 100 );

// spotLight.castShadow = true;

// spotLight.shadowMapWidth = 1024;
// spotLight.shadowMapHeight = 1024;

// spotLight.shadowCameraNear = 500;
// spotLight.shadowCameraFar = 4000;
// spotLight.shadowCameraFov = 30;

// scene.add( spotLight );

//Casts a full color point light that is positioned at 10,50,130
var pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add( pointLight );

var pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = -10;
pointLight.position.y = -50;
pointLight.position.z = 130;

scene.add( pointLight );

//Adjust camera position in the x,y, or z axis
camera.position.z = 300;
// camera.position.x = 5;
// camera.position.y = -3;


function render() {

	requestAnimationFrame(render);

	//rotate the cube about the x and y axes
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	//change the position of the sphere up, right, and away
	// sphere.position.x += 0.5;
	// sphere.position.y += 0.05;
	// sphere.position.z -= 0.9;

	renderer.render(scene, camera);
}
render();