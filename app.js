
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

function grabName() {

    let visitorName = prompt("Hello!  Could you please tell us your name?")
    document.write(`Welcome to Mount Nebu, ${visitorName}!`)

}

function furryLove()  {
    let likeAnimals = prompt("Do you like furry creatures?  Please answer yes or no.");

    if(likeAnimals === 'yes' || likeAnimals === 'Yes') {
       document.write("Yeah!  Mount Nebu is the place for you!");
    }
    else if(likeAnimals === 'no' || likeAnimals === 'No') {
       document.write("That's too bad, but our furry creatures like you anyway!");
     }
     else{
       document.write("Please try again with yes or no");
     }
}

     
function greatCatDogDivide() {
    let dogOrCat = prompt("Are you a dog or cat person?  Please answer with dog or cat.");

    if(dogOrCat === 'dog' || dogOrCat === 'Dog') {
       document.write("Hello Dog Lover!  You'll love Birdy!");
    }
    else if(dogOrCat === 'cat' || dogOrCat === 'Cat') {
       document.write("Cat lovers rock! Take your pick or love all three -- Markus, Izzy and Gizmo!");
     }
     else{
       document.write("Please try again with dog or cat");
     }

}

function dogWithBlues() {
    let blues = prompt("Yes, even dogs get the blues. On a scale of 1 to 5, please rate how bluesy you think Birdy the dog gets?")
    for (let i = 1; i <= blues; i++){
            document.write("<p>dogWithBlues</p>")
        } 
     
   } 



