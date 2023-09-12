


//Function returns the area of a circle with given radius 
function circleArea(radius) {
    //area of circle is pi * r ** 2
    const area = (Math.PI) * (radius ** 2);
    let roundedArea = Math.round((area * 1000) / 1000);
    if (radius <= 0) {
        throw new Error('Radius must be positive');
    } else {
        return roundedArea;
    }
};