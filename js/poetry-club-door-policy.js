function frontDoorResponse(line) {
    return line.charAt(0);
  }
  
  function frontDoorPassword(letters) {
    return letters.charAt(0).toUpperCase() + letters.slice(1).toLowerCase();
  }
  
  function backDoorResponse(line) {
    let trimmedLine = line.trim();
    return trimmedLine.charAt(trimmedLine.length - 1);
  }
  
  function backDoorPassword(letters) {
    let capitalizedWord = letters.charAt(0).toUpperCase() + letters.slice(1).toLowerCase();
    return capitalizedWord + ', please';
  }
  
  // Example usage:
  const frontDoorLine = 'Stands so high';
  const backDoorLine = 'Stands so high   ';
  
  const frontDoorLetters = frontDoorResponse(frontDoorLine);
  const frontDoorPwd = frontDoorPassword(frontDoorLetters);
  console.log(frontDoorPwd);
  
  const backDoorLetters = backDoorResponse(backDoorLine);
  const backDoorPwd = backDoorPassword(backDoorLetters);
  console.log(backDoorPwd);
  