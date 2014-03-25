# URL Validator

Allows an input control to have javascript/php URL validator assigned to it, and when a URL is entered and the focus moves from the input, validation that the URL is valid is run.

Can specify a <span> to receive a simple message describing the status of the URL, and also an <img> to display an image based on the status.

## Getting Started

In your HTML

```html
   <div style="background-color:#ddffff; padding:10px;margin:10px">
   <input id="url_1" size=100 value="http://stackoverflow.com/questions/8667070/javascript-regular-expression-to-validate-url" />
   <img id="url_img_1" style='width:24px; height:24px; border-style:none;' src='data:image/gif;    base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D' />
   <br/><span id="url_status_1" style="font-size:60%;float:left;"></span>
   </div>
   <div style="background-color:#ffddff; padding:10px;margin:10px;">
   <input id="url_2" size=100 value="htt://stackoverflow.com/questions/8667070/javascript-regular-expression-to-validate-url" />
   <img id="url_img_2" style='width:24px; height:24px; border-style:none;' src='data:image/gif; base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D' />
   <br/><span id="url_status_2" style="font-size:60%;float:left;"></span>
   </div>
```
In your javascript

```javascript
   var URLtest1, URLtest2 ;

   URLtest1 = new ValidateURL($('#url_1') , $('#url_status_1'), $('#url_img_1')) ;
   URLtest1.validate() ;
   URLtest2 = new ValidateURL($('#url_2') , $('#url_status_2'), $('#url_img_2')) ;
   URLtest2.validate() ;
```

Comes with a couple of images that are used by default, but these can be overidden using the setOKImg/setERRImg functions

## Further Enhancements

* Specify CSS to apply to input when it passes/fails validation
* Allow message and iamge to be blanked
* Skip validation when input is empty - blank out message and image?
