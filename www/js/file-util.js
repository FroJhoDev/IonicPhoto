angular.module("starter").factory("FileUtil", function($cordovaFile){
	var util = {};

	function getNewName(){
		var today = new Date();
		return today.getHours().toString() + 
		today.getMinutes().toString() + 
		today.getSeconds().toString() + ".jpg";
	}

	util.save = function(dataUrl){
		$cordovaFile.writeFile(cordova.file.externalApplicationStorageDirectory,
			"teste.jpg", dataUrl, true).then(
				function(success){
					console.log("sucesso");
				},function(error){
					console.log("erro ", err);
				});
	};

	return util;
})