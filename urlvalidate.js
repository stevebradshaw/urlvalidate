function ValidateURL(URLinput, msgSpan, imgBox) {
  this.urlID = URLinput ;
  this.msgID = msgSpan ;
  this.imgID = imgBox ;
  this.OKImg = 'tick.png' ;
  this.ERRImg = 'cross.png' ;
  this.ClearImg = '' ;

  // bind to input - first param to $.proxy is function to call, second is the context
  $(this.urlID).bind('blur', $.proxy(this.validate, this)) ;
}

ValidateURL.prototype.setOKImg = function(img) {
  this.OKImg = img ;
}

ValidateURL.prototype.setERRImg = function(img) {
  this.ERRImg = img ;
}

ValidateURL.prototype.setOKImg = function(img) {
  this.ClearImg = img ;
}

ValidateURL.prototype.validURLRegex = function(url) {
  return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(url);
}

ValidateURL.prototype.setStatusImage = function(status) {
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

ValidateURL.prototype.headURL = function(url) {
  $.ajax({ type: "GET",
		   async: true,
           context: this,
		   url: 'validate.php?url=' + escape(url),
           dataType:'json',
           error: function( jqXHR, textStatus, errorThrown ) {
              console.log('fooked up') ;
           },
		   success: function(message,text,response){
                       if (message.status == 200) {
                         $(this.msgID).html("URL is fine") ;
                         this.setStatusImage('OK') ;
                       } else {
                         $(this.msgID).html("URL is invalid") ;
                         this.setStatusImage('ERR') ;
                       }
                     }
  });
}

ValidateURL.prototype.validate = function () {
  url = $(this.urlID).val() ;

  if (this.validURLRegex(url)) {
    // passes regex test so try and 'HEAD' it to make sure there is a resource
    $(this.msgID).html("URL passes REGEX check") ;
    this.headURL(url) ;
  } else { 
    // fails regex test
    $(this.msgID).html("Invalid URL - REGEX check") ;
    this.setStatusImage('ERR') ;
  }
}
