
function visitInquiry() {

    let likeToVisit = prompt("Do you want to visit us at Mount Nebu?  Please answer yes or no.");

    if(likeToVisit === 'yes' || likeToVisit === 'Yes') {
       document.write("Yay! Please email us at the email address provided below!");
    }
    else if(likeToVisit === 'no' || likeToVisit === 'No') {
       document.write("That's too bad, but if you ever want more information, please email us at the email address provided below!");
     }
     else{
       document.write("Please try again with yes or no");
     }


}

