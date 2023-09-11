const questions = [
    { question: "“Happy New Year to all, including to my many enemies and those who have fought me and lost so badly they just don’t know what to do. Love!”", answer: "Trump", tweetHTML: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Happy New Year to all, including to my many enemies and those who have fought me and lost so badly they just don&#39;t know what to do. Love!</p>&mdash; Donald J. Trump (@realDonaldTrump) <a href="https://twitter.com/realDonaldTrump/status/815185071317676033?ref_src=twsrc%5Etfw">December 31, 2016</a></blockquote>` },
    { question: "“Parents don’t realize the Soviet level of indoctrination that their children are receiving in elite high schools & colleges!”", answer: "Elon", tweetHTML: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Parents don’t realize the Soviet level of indoctrination that their children are receiving in elite high schools &amp; colleges! <a href="https://t.co/xhpmNanp6b">https://t.co/xhpmNanp6b</a></p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1635699420326133760?ref_src=twsrc%5Etfw">March 14, 2023</a></blockquote>` },
    { question: "“Why does ur pp look like u just came?”", answer: "Elon", tweetHTML: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Why does ur pp look like u just came?</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1457497438474981384?ref_src=twsrc%5Etfw">November 7, 2021</a></blockquote>` },
    { question: "“The intolerant left is driving people right”", answer: "Elon", tweetHTML: `<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">The intolerant left is driving people right</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1661440573235163138?ref_src=twsrc%5Etfw">May 24, 2023</a></blockquote>` },
    { question: "“I have never seen a thin person drinking diet coke.”", answer: "Trump", tweetHTML: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I have never seen a thin person drinking Diet Coke.</p>&mdash; Donald J. Trump (@realDonaldTrump) <a href="https://twitter.com/realDonaldTrump/status/257552283850653696?ref_src=twsrc%5Etfw">October 14, 2012</a></blockquote>`  },
    { question: "“Only thing more insane than a nazi is a nazi on meth”", answer: "Elon", tweetHTML: `<blockquote class="twitter-tweet" data-conversation="none"><p lang="en" dir="ltr">💯 <br><br>Only thing more insane than a nazi is a nazi on meth</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1692486750348664837?ref_src=twsrc%5Etfw">August 18, 2023</a></blockquote>`  },
    { question: "“This platform is hell bent on being the least untrue source of information”", answer: "Elon", tweetHTML: `<blockquote class="twitter-tweet" data-conversation="none" data-dnt="true"><p lang="en" dir="ltr">This platform is hell bent on being the least untrue source of information</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1655316060508241924?ref_src=twsrc%5Etfw">May 7, 2023</a></blockquote>` },
    { question: "“Every time I speak of the haters and losers I do so with great love and affection. They cannot help the fact that they were born fucked up!”", answer: "Trump", tweetHTML: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Every time I speak of the haters and losers I do so with great love and affection. They cannot help the fact that they were born fucked up!</p>&mdash; Donald J. Trump (@realDonaldTrump) <a href="https://twitter.com/realDonaldTrump/status/516382177798680576?ref_src=twsrc%5Etfw">September 29, 2014</a></blockquote>` },
    { question: "“It makes me feel so good to hit 'sleazebags' back -- much better than seeing a psychiatrist (which I never have!)”", answer: "Trump", tweetHTML: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">It makes me feel so good to hit &quot;sleazebags&quot; back -- much better than seeing a psychiatrist (which I never have!)</p>&mdash; Donald J. Trump (@realDonaldTrump) <a href="https://twitter.com/realDonaldTrump/status/270558656502837248?ref_src=twsrc%5Etfw">November 19, 2012</a></blockquote> ` },
    { question: "“I can’t believe Apple isn’t moving faster to create a larger iPhone screen. Bring back Steve Jobs!”", answer: "Trump", tweetHTML: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I can’t believe Apple isn’t moving faster to create a larger iPhone screen. Bring back Steve Jobs!</p>&mdash; Donald J. Trump (@realDonaldTrump) <a href="https://twitter.com/realDonaldTrump/status/360124399074025474?ref_src=twsrc%5Etfw">July 24, 2013</a></blockquote>` },
    { question: "(In response to covid rules) “FREE AMERICA NOW”", answer: "Elon", tweetHTML: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">FREE AMERICA NOW</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1255380013488189440?ref_src=twsrc%5Etfw">April 29, 2020</a></blockquote>` },
    { question: "“My pronouns are, Prosecute/Fauci”", answer: "Elon", tweetHTML: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My pronouns are Prosecute/Fauci</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1601894132573605888?ref_src=twsrc%5Etfw">December 11, 2022</a></blockquote>`  },
    { question: "“The real tragedy of @NYTimes is that their propaganda isn’t even interesting”", answer: "Elon", tweetHTML: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The real tragedy of <a href="https://twitter.com/nytimes?ref_src=twsrc%5Etfw">@NYTimes</a> is that their propaganda isn’t even interesting</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1642395451209940993?ref_src=twsrc%5Etfw">April 2, 2023</a></blockquote>` },
    { question: "(In response to Bernie Sanders) “I keep forgetting that you’re still alive”", answer: "Elon", tweetHTML: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I keep forgetting that you’re still alive</p>&mdash; Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1459891238384115722?ref_src=twsrc%5Etfw">November 14, 2021</a></blockquote>` },
]; 
const splashScreen = document.querySelector(".splash-screen");
const startButton = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score");
const tryAgainButton = document.createElement("button"); // Create a "Try Again" button
tryAgainButton.textContent = "Try Again";
tryAgainButton.classList.add("try-again-button"); // Add the "try-again-button" class
tryAgainButton.addEventListener("click", restartGame);

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("startGame function called"); // Debugging statement
    startButton.style.display = "none";
    quizContainer.style.display = "block"; // Show the quiz container
    showQuestion();
    splashScreen.style.display = "none";
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionText.style.display = "block";
        questionText.textContent = question.question;
        resultContainer.textContent = ""; // Clear previous result

        // Show the answer buttons for the current question
        showAnswerButtons();
    } else {
        endGame();
    }
}

quizContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("answer-button")) {
        const answer = event.target.id === "trump-button" ? "Trump" : "Elon";
        checkAnswer(answer);
    }
});

function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];

    if (answer === question.answer) {
        score++;

        // Add correct-answer class to the selected button
        const selectedButton = document.getElementById(`${answer.toLowerCase()}-button`);
        selectedButton.classList.add("correct-answer");

        // Disable all answer buttons during the transition
     
        document.querySelectorAll(".answer-button").forEach((button) => {
            button.disabled = true;
            button.pointerEvents = "none"
        });

        // Delay transitioning to the next question
        setTimeout(() => {
            currentQuestionIndex++;
            scoreDisplay.textContent = `Score: ${score}`;

            if (currentQuestionIndex < questions.length) {
                // Reset button styles and show the next question
                document.querySelectorAll(".answer-button").forEach((button) => {
                    button.classList.remove("correct-answer", "wrong-answer");
                });
                showQuestion();
                
                // Re-enable all answer buttons after showing the new question
                document.querySelectorAll(".answer-button").forEach((button) => {
                    button.disabled = false;
                });
            } else {
                endGame();
            }
        }, 1500); // Adjust the delay time as needed (1.5 seconds in this example)
    } else {
        showingWrongPage = true;
        showWrongPage(question); // Call showWrongPage for wrong answers
    }
}



function showWrongPage(question) {
    // Hide the questionText
    questionText.style.display = "none";

    // Clear the resultContainer
    resultContainer.innerHTML = "";

    // Create a <div> element for displaying the message
    const wrongText = document.createElement("div");

    // Determine the correct answer to display in the message
    const correctAnswer = question.answer;

    // Set the text content of the wrongText element
    wrongText.textContent = `Wrong! It was ${correctAnswer}:`;
    wrongText.style.color = "black"; // Set the text color to black

    // Append the wrongText to the resultContainer
    resultContainer.appendChild(wrongText);

    // Create a <blockquote> element for the tweet with the tweet HTML
    const tweetContainer = document.createElement("blockquote");
    tweetContainer.setAttribute("class", "twitter-tweet");

    // Set the tweet HTML as the content of the tweetContainer
    tweetContainer.innerHTML = question.tweetHTML;

    // Append the tweetContainer to the resultContainer
    resultContainer.appendChild(tweetContainer);

    // Load Twitter widgets to embed the tweet
    twttr.widgets.load()
        .then(() => {
            // Widget initialization successful
            console.log("Twitter widget initialized successfully!");
        })
        .catch((error) => {
            // Widget initialization failed, log the error
            console.error("Error initializing Twitter widget:", error);
        });

    // Show the "Next Question" button
    const nextQuestionButton = document.createElement("button");
    nextQuestionButton.textContent = "Next Question";
    nextQuestionButton.classList.add("try-again-button");
    nextQuestionButton.addEventListener("click", () => {
        showingWrongPage = false;
        currentQuestionIndex++;
        scoreDisplay.textContent = `Score: ${score}`;

        if (currentQuestionIndex < questions.length) {
            // Reset button styles and show the next question
            document.querySelectorAll(".answer-button").forEach((button) => {
                button.classList.remove("correct-answer", "wrong-answer");
            });
            showQuestion();
        } else {
            endGame();
        }
    });

    // Append the nextQuestionButton to the resultContainer
    resultContainer.appendChild(nextQuestionButton);

    // Hide the answer buttons
    hideAnswerButtons();
}

function endGame() {
    questionText.textContent = "Game Over";
    resultContainer.textContent = `Your final score is ${score} out of ${questions.length}`;
    scoreDisplay.style.display = "block"; // Show the score display

    // Check if the current question index is equal to the total number of questions
    if (currentQuestionIndex === questions.length) {
        // Create a <div> element to contain the "Try Again" button
        const tryAgainDiv = document.createElement("div");
        tryAgainDiv.classList.add("try-again-button-container"); // Add a container class

        // Append the "Try Again" button to the container
        tryAgainDiv.appendChild(tryAgainButton);

        // Append the container to the results container
        resultContainer.appendChild(tryAgainDiv);
    }
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    scoreDisplay.textContent = "";
    tryAgainButton.style.display = "block"; // Show the "Try Again" button

    // Reset button styles to default
    document.querySelectorAll(".answer-button").forEach((button) => {
        button.classList.remove("correct-answer", "wrong-answer");
    });

    showQuestion(); // Restart the game by showing the first question
}

function hideAnswerButtons() {
    document.querySelectorAll(".answer-button").forEach((button) => {
        button.style.display = "none";
    });
}

function showAnswerButtons() {
    document.querySelectorAll(".answer-button").forEach((button) => {
        button.style.display = "block";
    });
}
