//array of objects
const objs = [
    {year: 2012, make: "Ford"},
    {year: 2009, make: "Porsche"},
    {year: 2006, make: "Volvo"},
    {year: 2015, make: "Chevy"}
];
const sortedObjs = objs.sort((a, b) => {
    const diffInYear = a.year - b.year;
    if(diffInYear === 0){
        if(a.make > b.make){
            return 1;
        } else if(a.make < b.make){
            return -1;
        }else{
            return 0;
        }
    }
    return diffInYear;
});
console.log(sortedObjs);