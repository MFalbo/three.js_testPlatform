var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
console.log(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// var light = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add( light );

//Adjust camera position in the x,y, or z axis
camera.position.z = 3;
// camera.position.x = 5;
// camera.position.y = -3;


function render() {
	requestAnimationFrame(render);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}
render();