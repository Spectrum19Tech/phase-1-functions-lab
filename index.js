// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const distance = Math.abs(location - 42);
    return distance;
}
distanceFromHqInBlocks(10);

function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    const feet = blocks * 264;
    return feet;
}

function distanceTravelledInFeet(start, end) {
    const blocks = Math.abs(start - end);
    const feet = blocks * 264;
    return feet;
}

function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end);
    if(distance > 2500) {
        return 'cannot travel that far';
    } else if(distance > 2000) {
        return 25;
    } else if(distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else {
        return 0;
    }
}

calculatesFarePrice(10,19);
