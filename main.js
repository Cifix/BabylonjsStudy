import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function()
{
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true,false,true);
 
const groundFromHM = new BABYLON.MeshBuilder.CreateGroundFromHeightMap('','/Asset/Images/heightmap.png',
  {
    height:10,
    width:10,
    subdivisions:100
  }
);

return scene;
}

const scene = createScene();

engine.runRenderLoop(function ()
{
  scene.render();
}
);

window.addEventListener('resize', function()
{
engine.resize();
}
);
