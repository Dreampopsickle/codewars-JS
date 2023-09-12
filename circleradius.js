


//Function returns the area of a circle with given radius 
function circleArea(radius) {
    //area of circle is pi * r ** 2
    const area = (Math.PI) * (radius ** 2);
    let roundedArea = parseFloat(area.toFixed(3));
    if (radius <= 0) {
        throw new Error('Radius must be positive');
    } else {
        return roundedArea;
    }
};