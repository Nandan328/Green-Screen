var canvas1;
var canvas2;
var canvas3;
var image1;
var image2;

function upload1() {
    canvas1 = document.getElementById("canvas1");
    var imgInput1 = document.getElementById("fileInput1");
    image1 = new SimpleImage(imgInput1);
    image1.drawTo(canvas1);
}

function upload2() {
    canvas2 = document.getElementById("canvas2");
    var imgInput2 = document.getElementById("fileInput2");
    image2 = new SimpleImage(imgInput2);
    image2.drawTo(canvas2);
}

function replaceGreenScreen() {
    if (!image1 || !image2) {
        alert("Please upload both images first.");
        return;
    }

    canvas3 = document.getElementById("canvas3");

    var outputImage = new SimpleImage(canvas1.width, canvas1.height);

    for (var pixel of image1.values()) {
        if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
            var x = pixel.getX();
            var y = pixel.getY();
            var newPixel = image2.getPixel(x, y);
            outputImage.setPixel(x, y, newPixel);
        } else {
            outputImage.setPixel(pixel.getX(), pixel.getY(), pixel);
        }
    }

    outputImage.drawTo(canvas3);
}
