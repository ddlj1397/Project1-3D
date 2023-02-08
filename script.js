require([
      "esri/WebScene",
      "esri/views/SceneView",
      "dojo/domReady!"
    ], function(WebScene, SceneView) {

      var scene = new WebScene({
        portalItem:{
         id:"b6a02922430a4b389138d7eb13a3f408" 
        }
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
		viewingMode:'global'
      });
  });
  
