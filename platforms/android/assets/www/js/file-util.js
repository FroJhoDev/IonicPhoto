angular.module("starter").factory("FileUtil", function($cordovaFile){
	var util = {};

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