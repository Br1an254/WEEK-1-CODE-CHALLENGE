//******************  Challenge 2: Speed Detector (Toy Problem) ******************

speedDetector = (speed) => { // This function takes an input(integer) of parameter speed
    const speedLimit = 70; // this line describes our speed limit
    const DemeritPointperkm = 5; // this line describes demerit points per kilometer
  
    if (speed <= speedLimit) {
      return "Ok";
    } // this block prints 'OK' as long as the value of speed is less than the speed limit.
  
    // by rounding off the value of speed subtracted by speedLimit, and dividing by DemeritPointperkm,
    // we get the value of demeritPoints
    const demeritPoints = Math.floor((speed - speedLimit) / DemeritPointperkm);
  
    if (demeritPoints > 12) { //if the value of demeritPoints is greater than 12 we print "License suspended"
      return "License suspended";
    } else {// Else we return the value "Points" and the value of demeritPoints.
      return `Points: ${demeritPoints}`;
    }
  }
  
//   console.log(speedDetector(80));
