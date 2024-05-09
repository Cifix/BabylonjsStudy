import * as BABYLON from '@babylonjs/core';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function()
{
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true,false,true);//기본 조명 설치
  /*
  const box = new BABYLON.MeshBuilder.CreateBox('myBox',
    {
      size:0.1,
      width:2,
      height:0.05,
      depth:0.5,
      faceColors:[
        new BABYLON.Color4(1,0,0,1),
        BABYLON.Color3.Green()
      ]
    }
  );//box 생성

 
 const sphere = new BABYLON.MeshBuilder.CreateSphere('mySphere', 
 {segments: 50,
  diameter:0.3

 }, scene);


const ground = new BABYLON.MeshBuilder.CreateGround('', {
  height:10,
  width:10,
  subdivisions:30
});

ground.material = new BABYLON.StandardMaterial();
ground.material.wireframe = true;
*/

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

window.addEventListener('resize', function()//화면에 맞게 사이즈 조정
{
engine.resize();
}
);
