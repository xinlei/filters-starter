/* Filters the given pixels to grayscale.
 *
 * Arguments:
 * pixels -- an array of pixel values
 */
function filterGrayscale(pixels) {

}

/* Brightens the given pixels.
 *
 * Arguments:
 * pixels -- an array of pixel values
 */
function filterBrighten(pixels) {
  for(var i = 0; i < pixels.length; i+= 4){
    var red = pixels[i];
    var green = pixels[i + 1];
    var blue = pixels[i + 2];

    pixels[i] = red + 20;
    pixels[i + 1] = green + 20;
    pixels[i + 2] = blue + 20;
  }
  return pixels;
}

/* Applies a threshold filter to the given pixels. Makes all pixels above
 * the threshold black and all pixels below the threshold white.
 *
 * Arguments:
 * pixels -- an array of pixel values
 */
function filterThreshold(pixels) {
}
