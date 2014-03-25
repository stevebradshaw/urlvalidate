function ValidateURI(URIinput, msgSpan, imgBox) {
  this.uriID = URIinput ;
  this.msgID = msgSpan ;
  this.imgID = imgBox ;
  this.OKImg = 'tick.png' ;
  this.ERRImg = 'cross.png' ;
  this.ClearImg = '' ;

  // bind to input - first param to $.proxy is function to call, second is the context
  $(this.uriID).bind('blur', $.proxy(this.validate, this)) ;
}

ValidateURI.prototype.setOKImg = function(img) {
  this.OKImg = img ;
}

ValidateURI.prototype.setERRImg = function(img) {
  this.ERRImg = img ;
}

ValidateURI.prototype.setOKImg = function(img) {
  this.ClearImg = img ;
}

ValidateURI.prototype.validURIRegex = function(uri) {
  return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(uri);
}

ValidateURI.prototype.setStatusImage = function(status) {
  if (status == "OK") {
    // set ok image
    $(this.imgID).attr('src', this.OKImg) ;
  } else if (status == "ERR") {
    // set error image
    $(this.imgID).attr('src', this.ERRImg) ;
  } else {
    // clear image
  }
}

ValidateURI.prototype.headURI = function(uri) {
  $.ajax({ type: "GET",
		   async: true,
           context: this,
		   url: 'validate.php?uri=' + escape(uri),
           dataType:'json',
           error: function( jqXHR, textStatus, errorThrown ) {
              console.log('fooked up') ;
           },
		   success: function(message,text,response){
                       if (message.status == 200) {
                         $(this.msgID).html("URI is fine") ;
                         this.setStatusImage('OK') ;
                       } else {
                         $(this.msgID).html("URI is invalid") ;
                         this.setStatusImage('ERR') ;
                       }
                     }
  });
}

ValidateURI.prototype.validate = function () {
  uri = $(this.uriID).val() ;

  if (this.validURIRegex(uri)) {
    // passes regex test so try and 'HEAD' it to make sure there is a resource
    $(this.msgID).html("URI passes REGEX check") ;
    this.headURI(uri) ;
  } else { 
    // fails regex test
    $(this.msgID).html("Invalid URI - REGEX check") ;
    this.setStatusImage('ERR') ;
  }
}
