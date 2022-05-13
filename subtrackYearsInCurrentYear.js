function subtractYears(numOfYears, date = new Date()){ 
  date.setFullYear(date.getFullYear() - numOfYears);
  return date;
} 
const result = subtractYears(1);
console.log('One Sub',result);
