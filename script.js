//title ids
let work = document.getElementById('work');
let play = document.getElementById('play');
let study = document.getElementById('study');
let exercise = document.getElementById('exercise');
let social = document.getElementById('social');
let selfCare = document.getElementById('self-care');

//current ids
let workCurrent = document.getElementById('work-current');
let playCurrent = document.getElementById('play-current');
let studyCurrent = document.getElementById('study-current');
let exerciseCurrent = document.getElementById('exercise-current');
let socialCurrent = document.getElementById('social-current');
let selfCareCurrent = document.getElementById('self-care-current');

//previous ids
let workPrevious = document.getElementById('work-previous');
let playPrevious = document.getElementById('play-previous');
let studyPrevious = document.getElementById('study-previous');
let exercisePrevious = document.getElementById('exercise-previous');
let socialPrevious = document.getElementById('social-previous');
let selfCarePrevious = document.getElementById('self-care-previous');

//periodBtn ids
let btnDaily = document.getElementById("btn-daily");
let btnWeekly = document.getElementById("btn-weekly");
let btnMonthly = document.getElementById("btn-monthly");

//active variables
let currentlyActive = document.querySelector('.active');
let active = 'weekly';

let xhr = new XMLHttpRequest();

xhr.open('GET', 'data.json');

xhr.onload = function() {

    var response = JSON.parse(xhr.responseText);

    changePeriod(response);

    btnDaily.addEventListener('click', function() {

        active = 'daily';

        changePeriod(response);

    })

    btnWeekly.addEventListener('click',function() {

        active = 'weekly';

        changePeriod(response);
    })

    btnMonthly.addEventListener('click',function() {

        active = 'monthly';

        changePeriod(response);
    })
 
    }

xhr.send();

function changePeriod(data) {

    if (active == 'daily') {

        btnDaily.classList.add('active');
        btnWeekly.classList.remove('active');
        btnMonthly.classList.remove('active');
        //change active color

      //  btnDaily.style.color = '#fff';
      //  btnWeekly.style.color = 'rgba(255, 255, 255, 0.479)';
      //  btnMonthly.style.color = 'rgba(255, 255, 255, 0.479)';

      //daily data

        work.innerText = data[0].title;
        workCurrent.innerText = data[0].timeframes.daily.current + 'hrs';
        workPrevious.innerText = 'last week - ' + data[0].timeframes.daily.previous + 'hrs';

        play.innerText = data[1].title;
        playCurrent.innerText = data[1].timeframes.daily.current + 'hrs';
        playPrevious.innerText = 'last week - ' + data[1].timeframes.daily.previous + 'hrs';

        study.innerText = data[2].title;
        studyCurrent.innerText = data[2].timeframes.daily.current + 'hrs';
        studyPrevious.innerText = 'last week - ' + data[2].timeframes.daily.previous + 'hrs';

        exercise.innerText = data[3].title;
        exerciseCurrent.innerText = data[3].timeframes.daily.current + 'hrs';
        exercisePrevious.innerText = 'last week - ' + data[3].timeframes.daily.previous + 'hrs';

        social.innerText = data[4].title;
        socialCurrent.innerText = data[4].timeframes.daily.current + 'hrs';
        socialPrevious.innerText = 'last week - ' + data[4].timeframes.daily.previous + 'hrs';

        selfCare.innerText = data[5].title;
        selfCareCurrent.innerText = data[5].timeframes.daily.current + 'hrs';
        selfCarePrevious.innerText = 'last week - ' + data[5].timeframes.daily.previous + 'hrs';

    }
    else if (active == 'weekly') {

        //change active color

        btnDaily.classList.remove('active');
        btnWeekly.classList.add('active');
        btnMonthly.classList.remove('active');

       // btnDaily.style.color = 'rgba(255, 255, 255, 0.479)';
      //  btnWeekly.style.color = '#fff';
      //  btnMonthly.style.color = 'rgba(255, 255, 255, 0.479)';

        //weekly data

        work.innerText = data[0].title;
        workCurrent.innerText = data[0].timeframes.weekly.current + 'hrs';
        workPrevious.innerText = 'last week - ' + data[0].timeframes.weekly.previous + 'hrs';

        play.innerText = data[1].title;
        playCurrent.innerText = data[1].timeframes.weekly.current + 'hrs';
        playPrevious.innerText = 'last week - ' + data[1].timeframes.weekly.previous + 'hrs';

        study.innerText = data[2].title;
        studyCurrent.innerText = data[2].timeframes.weekly.current + 'hrs';
        studyPrevious.innerText = 'last week - ' + data[2].timeframes.weekly.previous + 'hrs';

        exercise.innerText = data[3].title;
        exerciseCurrent.innerText = data[3].timeframes.weekly.current + 'hrs';
        exercisePrevious.innerText = 'last week - ' + data[3].timeframes.weekly.previous + 'hrs';

        social.innerText = data[4].title;
        socialCurrent.innerText = data[4].timeframes.weekly.current + 'hrs';
        socialPrevious.innerText = 'last week - ' + data[4].timeframes.weekly.previous + 'hrs';

        selfCare.innerText = data[5].title;
        selfCareCurrent.innerText = data[5].timeframes.weekly.current + 'hrs';
        selfCarePrevious.innerText = 'last week - ' + data[5].timeframes.weekly.previous + 'hrs';
    }

    else {

        //change active color

        btnDaily.classList.remove('active');
        btnWeekly.classList.remove('active');
        btnMonthly.classList.add('active');

       // btnDaily.style.color = 'rgba(255, 255, 255, 0.479)';
      //  btnWeekly.style.color = 'rgba(255, 255, 255, 0.479)';
      //  btnMonthly.style.color = '#fff';

        //monthly data

        work.innerText = data[0].title;
        workCurrent.innerText = data[0].timeframes.monthly.current + 'hrs';
        workPrevious.innerText = 'last week - ' + data[0].timeframes.monthly.previous + 'hrs';

        play.innerText = data[1].title;
        playCurrent.innerText = data[1].timeframes.monthly.current + 'hrs';
        playPrevious.innerText = 'last week - ' + data[1].timeframes.monthly.previous + 'hrs';

        study.innerText = data[2].title;
        studyCurrent.innerText = data[2].timeframes.monthly.current + 'hrs';
        studyPrevious.innerText = 'last week - ' + data[2].timeframes.monthly.previous + 'hrs';

        exercise.innerText = data[3].title;
        exerciseCurrent.innerText = data[3].timeframes.monthly.current + 'hrs';
        exercisePrevious.innerText = 'last week - ' + data[3].timeframes.monthly.previous + 'hrs';

        social.innerText = data[4].title;
        socialCurrent.innerText = data[4].timeframes.monthly.current + 'hrs';
        socialPrevious.innerText = 'last week - ' + data[4].timeframes.monthly.previous + 'hrs';

        selfCare.innerText = data[5].title;
        selfCareCurrent.innerText = data[5].timeframes.monthly.current + 'hrs';
        selfCarePrevious.innerText = 'last week - ' + data[5].timeframes.monthly.previous + 'hrs';
    }
}






