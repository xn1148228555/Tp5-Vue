requirejs.config({
	    baseUrl: _requireJsPath_,
		//超时时间
		waitSeconds:0,
	    paths: {
             projectAppVue: 'lib/projectAppVue',
	    	 allRoutes: 'lib/allRoutes',
	    	 familyMerge: 'lib/familyMerge',
	    	 dataApi: 'lib/dataApi',
			 text:'lib/text',
	    	 vue: 'lib/vue/vue',
	    	 vueRouter: 'lib/vue/vue-router',
			//3d
			// YappamCar: webSiteURL +'/car/G10/js/YappamCar',
			// //YappamCar: 'http://www.yappam.com/saic/D90/330/YappamCar',
			// Detector: webSiteURL+ '/car/G10/js/Detector',
			// Tween: webSiteURL+ '/car/G10/js/Tween',
			// DRACOLoader:webSiteURL+  'car/G10/js/loaders/draco/DRACOLoader',
			// DracoLoaderManage: webSiteURL+ '/car/G10/js/DracoLoaderManage',
			// MaterialsManage: webSiteURL+ '/car/G10/js/MaterialsManage',
			// LightsManage: webSiteURL+ '/car/G10/js/LightsManage',
			// D90Optional: webSiteURL+ '/car/G10/js/G10Optional',
			// DeviceTesting: webSiteURL+ '/car/G10/js/DeviceTesting',
			//
			// three: webSiteURL+ '/car/G10/three.min',
			// OrbitControls: webSiteURL+ '/car/G10/js/controls/OrbitControls',
			// GLNode: webSiteURL+ '/car/G10/js/nodes/GLNode',
			// TempNode: webSiteURL+ '/car/G10/js/nodes/TempNode',
			// InputNode: webSiteURL+ '/car/G10/js/nodes/InputNode',
			// FunctionNode: webSiteURL+ '/car/G10/js/nodes/FunctionNode',
			// NodeBuilder: webSiteURL+ '/car/G10/js/nodes/NodeBuilder',
			// NodeMaterial: webSiteURL+ '/car/G10/js/nodes/NodeMaterial',
			// NormalNode: webSiteURL+ '/car/G10/js/nodes/accessors/NormalNode',
			// ReflectNode: webSiteURL+ '/car/G10/js/nodes/accessors/ReflectNode',
			// FloatNode: webSiteURL+ '/car/G10/js/nodes/inputs/FloatNode',
			// ColorNode: webSiteURL+ '/car/G10/js/nodes/inputs/ColorNode',
			// Vector3Node: webSiteURL+ '/car/G10/js/nodes/inputs/Vector3Node',
			// CubeTextureNode: webSiteURL+ '/car/G10/js/nodes/inputs/CubeTextureNode',
            //
			// Math1Node: webSiteURL+ '/car/G10/js/nodes/math/Math1Node',
			// Math2Node: webSiteURL+ '/car/G10/js/nodes/math/Math2Node',
			// OperatorNode: webSiteURL+ '/car/G10/js/nodes/math/OperatorNode',
            //
			// PhongNode: webSiteURL+ '/car/G10/js/nodes/materials/PhongNode',
			// PhongNodeMaterial: webSiteURL+ '/car/G10/js/nodes/materials/PhongNodeMaterial',
            //
			// krpano: webSiteURL+ '/pano/krpano',
			// YappamCarPano: webSiteURL+ '/pano/YappamCarPano',

			css:'lib/css.min'
		},
		// 
		shim: {
			GLNode:{deps:['three']},
			'YappamCar':{
				deps: ['three','DRACOLoader','OrbitControls','GLNode','TempNode','InputNode','FunctionNode','NodeBuilder','NodeMaterial','NormalNode'
				,'ReflectNode','FloatNode','ColorNode','Vector3Node','CubeTextureNode'
				,'Math1Node','Math2Node','OperatorNode','PhongNode','PhongNodeMaterial','Tween'
				,'Detector','YappamCarPano']
			},
			'three':{
				exports: 'THREE'
			},
			OrbitControls:{deps:['three']},
			NodeMaterial:{deps:['three']},
			NodeBuilder:{deps:['three']},
			DRACOLoader:{deps:['three']},
			DeviceTesting:{deps:['D90Optional']},
			D90Optional:{deps:['LightsManage']},
			LightsManage:{deps:['MaterialsManage']},
			MaterialsManage:{deps:['DracoLoaderManage']},
			DracoLoaderManage:{deps:['YappamCar']},
			Detector:{deps:['three']},
			YappamCarPano:{deps:['krpano']},

			


			TempNode:{deps:['GLNode']},
			PhongNode:{deps:['GLNode']},
			PhongNodeMaterial:{deps:['NodeMaterial']},
			NormalNode:{deps:['TempNode']},
			InputNode:{deps:['TempNode']},
			FunctionNode:{deps:['TempNode']},
			Math1Node:{deps:['TempNode']},
			Math2Node:{deps:['TempNode']},
			OperatorNode:{deps:['TempNode']},
			ColorNode:{deps:['InputNode']},
			FloatNode:{deps:['InputNode']},
			CubeTextureNode:{deps:['InputNode']},
			ReflectNode:{deps:['TempNode']},
			Vector3Node:{deps:['InputNode']}  
			/*,'':{
				deps:['DRACOLoader','carOrbitControls','carGLNode','carTempNode','carInputNode'
				,'carFunctionNode','carNodeBuilder','carNodeMaterial','carNormalNode','carReflectNode','carFloatNode'
				,'carColorNode','carVector3Node','carCubeTextureNode','carMath1Node','carMath2Node','carOperatorNode'
				,'carPhongNode','carPhongNodeMaterial'
				]
			}*/
		} ,
	    map: {
	        '*': {
	            'css': 'css.min'
	        }
	    }
	});