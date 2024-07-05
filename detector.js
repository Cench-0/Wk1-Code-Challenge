function speedDetector(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;
  
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      const excessSpeed = speed - speedLimit;
      demeritPoints = Math.floor(excessSpeed / 5);
      console.log(`Points: ${demeritPoints}`);
  
      if (demeritPoints > 12) {
        console.log("License suspended");
      }
    }
  }
  //speedDetector(80)
  speedDetector(100)