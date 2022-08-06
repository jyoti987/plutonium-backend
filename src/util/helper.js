function printDate(){
    const day= new Date();
    const dd=day.getDate();
    const mm=day.getMonth()+1;
    const yyyy=day.getFullYear();
    console.log("Current Date is ---> " , dd,"/",mm,"/",yyyy);
}

module.exports.printDate = printDate