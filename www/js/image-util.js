angular.module("starter").factory("ImageUtil", function($cordovaCamera){

	var util = {};

	util.cameraOptions = {
		CAMERA : 1,
		GALLERY : 2
	}

	util.getImage = function(option ,success, error){
		var options = {
	      quality: 100,
	      destinationType: Camera.DestinationType.DATA_URL,
	      sourceType: option,
	      allowEdit: false,
	      encodingType: Camera.EncodingType.JPEG,
	      targetWidth: 300,
	      targetHeight: 300,
	      popoverOptions: CameraPopoverOptions,
	      saveToPhotoAlbum: false
	    };

	    $cordovaCamera.getPicture(options).then(
	      function(imageData) {
	      success(imageData);

	    }, function(err) { 
	      error(err);

	    });
	}

	util.filterImage = function(imgId, option){
		Caman("#" + imgId, function(){
	      this.reset();

	      switch(option){
	        case 1:
	          this.sinCity();
	          break;
	        case 2:
	          this.vintage();
	          break;
	        case 3:
	          this.lomo();
	          break;
	        case 4:
	          this.nostalgia();
	          break;          
	      }
	      
	      this.render();
    	});
	}

	return util;

})