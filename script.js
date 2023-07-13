var score = document.getElementById('score');
var countdown = document.getElementById('countdown');
var totalScore = document.getElementById('totalScore');
var skip = document.getElementById('skip');
var count = 0;
var scoreCount = 0;
var duration = 0;
var qaSet = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');

function step() {
    count += 1;
    for (let i = 0; i < qaSet.length; i++) {
        qaSet[i].className = 'qa_set';
    }
    qaSet[count].className = 'qa_set active';
    if (count == 5) {
        skip.style.display = 'none';
        clearInterval(durationTime);
        countdown.innerHTML = 0;
    }
}

var durationTime = setInterval(() => {
    if (duration == 10) {
        duration = 0;
    }
    duration += 1;
    countdown.innerHTML = duration;
    if (countdown.innerHTML == "10") {
        step();
    }
}, 1000);

skip.addEventListener('click', () => {
    step();
    duration = 10;
});

qaAnsRow.forEach((qaAnsRowSingle) => {
    qaAnsRowSingle.addEventListener('click', function(){
        setTimeout(() => {
            step();
            duration = 10;
        }, 500);

        let valid = this.getAttribute("valid");
        if (valid == "valid") {
            scoreCount += 20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        } else {
            scoreCount -= 20;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }
    })
});
