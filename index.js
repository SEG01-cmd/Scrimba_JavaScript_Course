let homeScore = 0;
let guestScore = 0
let homeScoreCard = document.getElementById("home-score-el");
let guestScoreCard = document.getElementById("guest-score-el");
//console.log(scoreCard)

function add1HomePoint(){
    homeScore += 1;
    console.log(homeScore);
    homeScoreCard.textContent = homeScore;
}

function add2HomePoints(){
    homeScore += 2;
    //console.log(score);
    homeScoreCard.textContent = homeScore;
}

function add3HomePoints(){
    homeScore += 3;
    //console.log(score);
    homeScoreCard.textContent = homeScore;
}

function add1GuestPoint(){
    guestScore += 1;
    console.log(guestScore);
    guestScoreCard.textContent = guestScore;
}

function add2GuestPoints(){
    guestScore += 2;
    //console.log(score);
    guestScoreCard.textContent = guestScore;
}

function add3GuestPoints(){
    guestScore += 3;
    //console.log(score);
    guestScoreCard.textContent = guestScore;
}