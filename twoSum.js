const twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
    const diff = target - nums[i];
    const indexOfDiff = nums.indexOf(diff);
    if(indexOfDiff !== -1 && indexOfDiff !== i){
        return [i, indexOfDiff];
    }
  }
  return []; 
};

console.log(twoSum([2, 7, 11, 15], 9));