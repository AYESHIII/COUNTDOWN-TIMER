//#! user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { DifferenceInSecondsOptions } from "date-fns";


//step 1
function* countdownTimer(second:number){
    while(second > 0 ){
        yield second;
        second--;
    }
}
// step 2 counter inilization
let timeIterator = countdownTimer(10);

//function to creat a coundown timer

function dispalycoundown() {

    //value below 10

    let result = timeIterator.next();

    //if else condition apply

    if(!result.done){
        // current date and time call 
        const now = new Date();
        const countdownTime = new Date(now.getTime() +(result.value * 1000))

        // calculate remaining second in time
        const remainingseSeconds = differenceInSeconds(countdownTime, now)
        console.log(chalk.yellowBright.bold(`Remaining Second ${remainingseSeconds}`));
        setTimeout(dispalycoundown, 1000)
        
     }else {
        //display result countdown complete
        console.log(chalk.cyanBright.bold("COUNTDOWN COMPLETE!"));
        
     }
}
// Utility function to calculate difference in seconds
function differenceInSeconds(dateFuture: Date, datePast: Date): number {
    return Math.floor((dateFuture.getTime() - datePast.getTime()) / 1000);
}

// Invoke the countdown function
dispalycoundown();