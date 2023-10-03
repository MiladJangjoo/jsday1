//https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }

//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
function findAverage(array) {
    let total = 0;
    let average = 0;
    if (array.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < array.length; i++) {
        total += array[i]
      }
      average = total / array.length
      return average;
    }
  }

//https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
const areaOrPerimeter = function(l , w) {
    if(l ==w){
          return l * w;
    } else{
          return 2*(l+w);
    }
  };
//https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
  function updateLight(current) {
  
    if (current == 'green'){
      return 'yellow'
    }else if (current =='yellow'){
      return 'red'
    }else{
      return 'green'
    }
  
  }

