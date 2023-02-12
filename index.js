// NODE SCEDULAR FOR SCEDULE THE JOB
const schedule = require('node-schedule');
//IMPORT EVENT ARRAY
const event=require("./event")


// REVERSE A STRING USING TWO PONTER
let reverseText=(str)=>{
    str=str.split("")
    let [start,end]=[0,str.length-1]
    while(start<end){
        [str[start],str[end]]=[str[end],str[start]]
        start++
        end--
    }
    return str.join("")
}


// SCEDULE THE EVENT 
const scheduleJob=function(ele){
    const job = schedule.scheduleJob(ele.dateTime, async ()=>{
//DELEY OF 7 SECOND AND AFTER EVENT WILL BE EXECUTE
        setTimeout(() => {
            console.log(reverseText(ele.text))
        }, 7*1000);
//CANCEL THE JOB AFTER EXECUTED EVENT
          job.cancel()
    });
}



// ITRATE EACH EVENT FROM EVENT ARRAY
event.forEach( async (x) => {
    await scheduleJob(x)
});