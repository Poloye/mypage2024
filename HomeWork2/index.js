let totalScore = 0;
let question1Answered = false;
let question2Answered = false;

function checkAnswer(questionNum, selectedAnswer) {
    if (questionNum === 1 && !question1Answered) {
        question1Answered = true;
        evaluateAnswer(questionNum, selectedAnswer);
    } else if (questionNum === 2 && !question2Answered) {
        question2Answered = true;
        evaluateAnswer(questionNum, selectedAnswer);
    } 
}

function evaluateAnswer(questionNum, selectedAnswer) {
    let correctAnswer;
    if (questionNum === 1) {
        correctAnswer = 'pim';
    } else if (questionNum === 2) {
        correctAnswer = 'rpa';
    }

    if (selectedAnswer === correctAnswer) {
        totalScore += 1;
        updateScore();
        disableButtons(questionNum);
    } else {
        disableButtons(questionNum);
    }
    if (question1Answered && question2Answered) {
        if (totalScore === 2) {
            showResultText("ยินดีด้วยคุณได้คะแนนเต็ม!");
        } else if (totalScore === 0) {
            showResultText("เสียใจด้วยลองอยากให้อีกรอบ");
        }else{
            showResultText("ยังได้คะแนนไม่เต็ม สู้ต่อไปนะ");
        }
        showRefreshButton();
    }
}

function disableButtons(questionNum) {
    const buttons = document.querySelectorAll('.question-container:nth-child(' + questionNum + ') button');
    buttons.forEach(button => {
        button.style.backgroundColor = 'gray';
        button.disabled = true;
    });
}

function updateScore() {
    const scoreElement = document.getElementById('total-score');
    scoreElement.textContent = totalScore;
}


function showResultText(text) {
    const resultText = document.getElementById('result-text');
    resultText.textContent = text;
    resultText.style.display = 'block';
}

function showRefreshButton() {
    const refreshButton = document.getElementById('refresh-button');
    refreshButton.style.display = 'block';
}

function refreshPage() {
    location.reload();
}
