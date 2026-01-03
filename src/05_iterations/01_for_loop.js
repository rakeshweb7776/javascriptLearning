export function forLoop() {

    const month = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];

    for (let i = 0; i < month.length; i++) {
        const monthName = month[i];
        if(monthName == "Mar") {
            console.log("This is 3rd month");   
            // break 
            continue    
        }
        console.log(monthName);
    }

}