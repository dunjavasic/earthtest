var scene = new THREE.Scene();

// CAMERA
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.z = 4.5;
camera.position.y = 2.5;

var renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setClearColor("#bada55");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

// RESPONSIVE
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

//LIGHTS
var light = new THREE.PointLight(0xFFFFD3, .7, 1000)
light.position.set(40,80,10);
scene.add(light);

// var light2 = new THREE.DirectionalLight(0xFFF9D5, .9, 100);
// scene.add(light2);

var light3 = new THREE.AmbientLight( 0x404040, 3 ); // soft white light
scene.add( light3 );

// Earth sphere
var geometry = new THREE.SphereGeometry(3, 500, 100);
var materialEarth = new THREE.MeshPhongMaterial();
var meshEarth = new THREE.Mesh(geometry, materialEarth);

scene.add(meshEarth);

//Earth image
materialEarth.map = THREE.ImageUtils.loadTexture('images/earthblue.jpg');


var texture = THREE.ImageUtils.loadTexture( 'images/dark.jpg' );
        var backgroundMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2, 0),
            new THREE.MeshBasicMaterial({
                map: texture
            }));

        backgroundMesh .material.depthTest = false;
        backgroundMesh .material.depthWrite = false;
        var backgroundScene = new THREE.Scene();
        var backgroundCamera = new THREE.Camera();
        backgroundScene .add(backgroundCamera );
        backgroundScene .add(backgroundMesh );

requestAnimationFrame(render);
function render() {

    meshEarth.rotation.y += 0.004;
    var time = Date.now() * 0.0005;

    // camera.lookAt( meshEarth.position );

    renderer.autoClear = false;
    renderer.clear();
    renderer.render(backgroundScene , backgroundCamera );
    renderer.render(scene, camera);
    
    requestAnimationFrame(render);
}