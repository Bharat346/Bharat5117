export const blogData = [
    {
        id : 1,
        title : "Image Processing",
        lang : "javascript",
        sections : [
            {
                type : "para",
                p : "In our daily life we take photos from phone or a camera and then we see that image digitally.There is a question How we see images digitally in mobile phones and laptops? So In this section we will cover out what is image processing and how manipulate images ( like - crop , rotate , effects , text on image ) ."
            },
            {
                type : "line",
            },
            {
                type : "heading",
                h3 : "What is Image Processing"
            },
            {
                type : "text",
                content : `Image processing is way to analyze and transforming digital images by computer algorithms. It involves various techniques to enhance, manipulate, or extract information from images to make them more useful for specific tasks or applications.<br/><br/> 
                The Basic steps involved in Image Processing are -
                <br/><b>(1)Input of Image </b>
                <br/><b>(2)Image Enhancement </b>- Improving the visual Quality of an Image By increasing contrast and reduce noise and others.
                <br/><b>(3)Image Restoration </b>- Removing distortions and noise to get clear image .
                <br/><b>(4)Image Segmentation </b>- dividing an image into segments and each segment store some properties.
                <br/><b>(5)Image Representation and description </b>-  Represent an image such a way that computer can understand and extract information.
                <br/><b>(6)Image Analysis </b>- Extract information from an image by Algorithms and mathematical models .
                <br/><b>(7)Image synthesis and compression </b>- Generate new images and compress Existing Images to reduce storage
                <br/>`
            },
            {
                type : "line"
            },
            {
                type : "bold",
                b : "Image Processing Mainly Include the following steps - "
            },
            {
                type : "ul-list",
                uli : ["Input the Image","Analyse and Manipulate the image","Output the new image"]
            },
            {
                type : "line",
            },
            {
                type : "heading",
                h3 : "Image"
            },
            {
                type : "ul-list",
                uli : ["Image is defined as 2D function F( x , y ) , where x and y are the co-ordinates of each pixel ( smallest segment of an image)  And amplitude of F at any co-ordinate (x , y) is called the intensity of image at that point.","Image is represented as two dimensional array. "]
            },
            {
                type : "image",
                src : "https://media.geeksforgeeks.org/wp-content/uploads/gfg2-5.png",
                alt : "Image in computer vision"
            },
            {
                type : "heading",
                h4 : "Types of Image"
            },
            {
                type : "text",
                content : `<b>1.Binary Image </b>- It contains only two pixel element 0 and 1 , 0 refers black and 1 refers white.<br/>
                           <b>2.8 - Bit color format </b>- It has 256 different shades of color in it .  ( 0  -  Black , 255  -  white ). This is famous color format. `
            },
            {
                type : "line"
            },
            {
                type : "heading",
                h3 : "Pixel"
            },
            {
                type : "ul-list",
                uli : ["Pixel is the smallest segment of image , for example if image has 100 x 100 size then it contain 10000 pixels .","Each Pixel has four values called as RGBA values . [ R - Red channel , B - Blue channel , G - Green channel , A - Alpha ( opacity  measure) ] "]
            },
            {
                type : "image",
                src : "https://introcomputing.org/image-diagram.png",
                alt : "Pixel of an image"
            },
            {
                type : "line"
            },
            {
                type : "heading",
                h3 : "Image Processing using JavaScript"
            },
            {
                type : "para",
                p : "Here we use the canvas Element for image processing . The overview of our task is-  1)we take input of image  by 'input' method . (2) then we manipulate image pixels and create a new image with that new pixels. (3) Then output the new image on canvas. "
            },
            {
                type : "bold",
                b : "Basic Structure of the code :",
            },
            {
                type : "code",
                code : `const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const srcImg = new Image;
let imgData = null;
let originalpixels = null;

//let fileInput be the file input get from user 

fileInput.onchange = (e) => {
    if (e.target.files && e.target.files.item(0)) {
        srcImg.src = URL.createObjectURL(e.target.files[0]);
    }
}

srcImg.onload = () => {
    canvas.width = srcImg.width;
    canvas.height = srcImg.height;
    ctx.drawImage(srcImg,0,0,srcImg.width,srcImg.height);
    imgData = ctx.getImageData(srcImg,0,0,srcImg.width,srcImg.height);
    originalpixels = imgData.data.slice();
}`,
            },
            {
                type : "text",
                content : "Here imgData is a Array of size <b>(width * height * 4)</b> because we know every image of size <b> width * height</b> consist same number of pixels. Hence Every pixel value holds four type of value - red , green , blue and alpha <b>(RGBA)</b>.<br/> For Example - <b>ClamppedArray = originalpixels = [48 , 210 , 10 , 0.7 , 150 , 150 , 100 , 1 , 55 , 75 , 25 ,0.5 ,122 , 34 , 188 , 0.8]</b> <br/>This is an pixelData / imgData of <b>4 pixel image.</b>"
            },
            {
                type : "line",
            },
            {
                type : "heading",
                h4 : "Finding First Index of Each Pixel"
            },
            {
                type : 'code',
                code : `const getPixelIndex = (x,y) => {
    return (x + y*srcImg.width)*4; // x and y are the co-ordinates of pixel       
}`
            },
            {
                type : "heading",
                h4 : "Clamping value between 0 - 255"
            },
            {
                type : "text",
                content : "<b>Clamping means -</b> we know in 8-bit color format there are 256 different shades of any color but in pixel manipulation we get values beyond the range ( 0 - 255 ) so getting value between this range we use clamping."
            },
            {
                type : "code",
                code : `const clamp = (value) => {
    return Math.max(0,Math.min(Math.floor(value),255));           
}`
            },
            {
                type : "line",
            },
            {
                type : "heading",
                h3 : "Filters"
            },
            {
                type : "para",
                p : "Filters are the techniques to manipulate original image pixels to modify image such as reducing noise , enhancing image and finally give a new modified image. such that -"
            },
            {
                type : "ol-list",
                oli : ["GrayScale Filter" , "Sepia Filter" , "Blur" , "Sharpen Filter","Brightness Adjustment" , "contrast Adjustment"]
            },
            {
                type : "heading",
                h3 : "Blue Effect"
            },
            {
                type : "para",
                p : "In this effect we increases the intensity of blue channel of every pixel in image."
            },
            {
                type : "code",
                code : `// Adding Blue Effect in Image
const R_OFFSET = 0;
const G_OFFSET = 1;
const B_OFFSET = 2;
const currentPixels = originalpixels;
const addBlue = (x,y,val) => { // val is parameter pass from user
    const index = getPixelIndex(x,y) + B_OFFSET;
    const currentVal = currentPixels[index];
    currentPixels[index] = clamp(currentVal + val); // here we increase blue pixel value.
}
// same for Red and Green Effects`
            },
            {
                type : "line"
            },
            {
                type : "heading",
                h3 : "(1) GrayScale Filter"
            },
            {
                type : "para",
                p : "GrayScale images contain shades of gray ranging from black to white."
            },
            {
                type : "code",
                code : `// GrayScale Filter
const grayScale = (originalpixels) => {
    let data = originalpixels;
    for (let i = 0; i < data.length; i++) {
        let intensity = (data[i] + data[i+1] + data[i+2])/3;
        data[i] = intensity; // red
        data[i+1] = intensity; // blue
        data[i+2] = intensity; // green
    }
}`
            },
            {
                type : "line"
            },
            {
                type : "heading",
                h3 : "(2) Sepia Filter"
            },
            {
                type : "code",
                code : `// Sepia Filter
const sepiaFilter = (originalpixels) => {
    let data = originalpixels;
    for (let i = 0; i < data.length; i += 4) {
        let r = data[i];
        let g = data[i+1];
        let b = data[i+2];
        data[i] = (r*0.393) + (g*0.769) + (b*0.189);
        data[i+1] = (r*0.349) + (g*0.686) + (b*0.168);
        data[i+2] = (r*0.272) + (g*0.534) + (b*0.131);
    }
}`
            },
            {
                type : "line"
            }
        ]
    },
    {
        id : 2,
        title : "QR - Code",
        lang : "javascript",
        sections : [
            {
                type : "para",
                p:"QR codes ( Quick Response Codes ) are modern marvel in the way of Technology and Accessibility. It's become popular way for buisness , Trnsactions . But there is a question How Qr - code work ? How data Encoded and Decoded in a small square size code ? Now let's dive into it."
            },
            {
                type : "line"
            },
            {
                type : "heading",
                h3 : "What is QR Code"
            },
            {
                type : "para",
                p:"A QR - code is a two - dimensional barcode matrix made with squares and rectengular modules that are arranged in grid like pattern."
            },
            {
                type : "para",
                p:"Qr code is very popular due to it's versatility and ability to store large amount of data in a small space. A QR code can hold numerical digits , alphabets and binary Data . The capacity of Qr code is depended upon it's version."
            },
            {
                type : "text",
                content : "<b>QR version 40 has 177 x 177 modules and This is a largest Qr code vesion.</b>"
            },
            {
                type : "line"
            },
            {
                type : "heading",
                h3  : "QR code patterns"
            },
            {
                type : "text",
                content : "<p class ='center m-0 p-0'>A typical Qr code consists following patterns : </p>"
            },
            {
                type : "table",
                tbody : [
                    [
                        {
                            content : "S.N"
                        },
                        {
                            content : "Pattern"
                        },
                    ],
                    [
                        {
                            content : "1"
                        },
                        {
                            content : "Position Markers / Finder Patterns"
                        },
                    ],
                    [
                        {
                            content : "2"
                        },
                        {
                            content : "Alignment Markers"
                        },
                    ],
                    [
                        {
                            content : "3"
                        },
                        {
                            content : "Timing Pattern"
                        },
                    ],
                    [
                        {
                            content : "4"
                        },
                        {
                            content : "Version Info"
                        },
                    ],
                    [
                        {
                            content : "5"
                        },
                        {
                            content : "Format Patterns"
                        },
                    ],
                    [
                        {
                            content : "6"
                        },
                        {
                            content : "Data Area"
                        },
                    ],
                    [
                        {
                            content : "7"
                        },
                        {
                            content : "Quiet Zone"
                        },
                    ]
                ]
            },
            {
                type : "heading",
                h3 : "Position Markers"
            },
            {
                type : "ul-list",
                uli : ["Position Markers are the three identical squares located at top-left , top-right , bottom-left corner of QR code ." , "This Orientation tells it's location to mobile device or any other decoder ."]
            },
            {
                type : "image",
                src : "#",
                alt : "Position Marker"
            },
            {
                type : "heading",
                h3 : "Alignment Markers"
            },
            {
                type : "ul-list",
                uli : ["Position Markers are the three identical squares located at top-left , top-right , bottom-left corner of QR code ." , "This Orientation tells it's location to mobile device or any other decoder ."]
            },
            {
                type : "image",
                src : "#",
                alt : "Position Marker"
            }
        ]
    }
]


