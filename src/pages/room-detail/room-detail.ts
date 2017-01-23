import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var THREE: any;
declare var THREEx: any;

@Component({
  selector: 'page-room-detail',
  templateUrl: 'room-detail.html'
})
export class RoomDetailPage {
  tabBarElement: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }
 
  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }
 
  ionViewDidLoad() {
    var camera, scene, renderer;
    var effect, controls;
    var mesh,container;
    var SCREEN_WIDTH = window.innerWidth*2;
    var SCREEN_HEIGHT = window.innerHeight;
    init();
    animate();

    function init() {
      container = document.getElementById( 'three_canvas' );
      console.log(container.innerHTML);

      camera = new THREE.PerspectiveCamera( 75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 1100 );
      camera.position.set(0.1,0.1,0.1);
      camera.target = new THREE.Vector3( 0, 0, 0 );

      scene = new THREE.Scene();

      var geometry = new THREE.SphereGeometry( 500, 60, 40 );
      geometry.scale( - 1, 1, 1 );

      var material = new THREE.MeshBasicMaterial( {
        map: new THREE.TextureLoader().load( 'assets/img/3.jpg' )
      } );

      mesh = new THREE.Mesh( geometry, material );
      scene.add( mesh );

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
      container.appendChild( renderer.domElement );

      effect = new THREE.StereoEffect(renderer);
        //
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;

      function setOrientationControls(e) {
           if (!e.alpha) {
             return;
           }
          controls = new THREE.DeviceOrientationControls(camera, true);
          controls.connect();

          renderer.domElement.addEventListener('click', fullscreen, false);

          window.removeEventListener('deviceorientation', setOrientationControls, true);
        }
        window.addEventListener('deviceorientation', setOrientationControls, true);
    }
    function fullscreen() {
        SCREEN_WIDTH = window.innerWidth;
        SCREEN_HEIGHT = window.innerHeight/2;
          if (container.requestFullscreen) {
            container.requestFullscreen();
          }else if (container.msRequestFullscreen) {
              container.msRequestFullscreen();
          }else if (container.mozRequestFullScreen) {
            container.mozRequestFullScreen();
          }else if (container.webkitRequestFullscreen) {
              container.webkitRequestFullscreen();
          }
    }
    function animate() {
        requestAnimationFrame( animate );
        update();
    }
    function update() {
        controls.update();
        //renderer.render( scene, camera );
        effect.render(scene, camera);
    }
  }

  makeFullScreen(){
    THREEx.FullScreen.request();
  }

}
