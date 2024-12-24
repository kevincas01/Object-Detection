export const drawItems = (detections, ctx) => {
    console.log("draeingghggg ")
  detections.forEach((detection) => {
    const [x, y, width, height] = detection["bbox"];
    const objectText = detection["class"];

    console.log(x,y,width,height)
    const color = Math.floor(Math.random()*16777215).toString(16);
    ctx.strokeStyle = '#' + color
    ctx.font = '18px Arial';

    // Draw rectangles and text
    ctx.beginPath();   
    ctx.fillStyle = '#' + color
    ctx.fillText(objectText, x, y);
    ctx.rect(x, y, width, height); 
    ctx.stroke();
  });
};
