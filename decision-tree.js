const decisionTreeData = {
    "essentialJobsList": [
        "Set up and manage taxes",
        "Respond to guest messages",
        "View daily schedule/tasks",
        "Update calendar availability",
        "Check pending reservations",
        "Review guest reviews",
        "Update property info",
        "Manage payout details",
        "Explore analytics & reports",
        "Create promotions",
        "Read Partner Support content",
        "Contact Partner Support",
        "Simulate Payout",
        "Manage co-host access",
        "Explore Growth Opportunities",
        "Manage Channel Manager",
        "Explore connectivity options",
        "Manage extranet account settings",
        "Conduct price setup",
        "Onboard New Properties"
    ],
    "A": {
        "question": "Which Partner Stage is this Job Most Relevant For in Pulse?",
        "context": "Consider when this job is most crucial in the partner lifecycle...",
        "options": {
            "A": "Initial Setup", "B": "Listing & Bookings", "C": "Guest Arrival Prep", "D": "Guest Check-in", "E": "Guest Stay", "F": "Guest Check-out", "G": "Taxes & Compliance"
        },
        "nextQuestion": {
            "A": "B1", "B": "B1", "C": "B1", "D": "B1", "E": "B1", "F": "B1", "G": "B1"
        }
    },
    "B1": {
        "question": "URGENCY of Task Completion?",
        "context": "How time-sensitive is this task? Is immediate completion critical...",
        "options": {
            "A": "Yes, High Urgency is KEY.", "B": "Yes, Moderate Urgency.", "C": "No, Not Highly Urgent.", "D": "Urgency Not Relevant."
        },
        "nextQuestion": {
            "A": "B2", "B": "B2", "C": "D", "D": "D"
        }
    },
    "B2": {
        "question": "Habitual Mobile Use for this Job?",
        "context": "Are partners likely to use mobile devices for this task habitually?...",
        "options": {
            "A": "Yes, HIGH Habitual Mobile Use.", "B": "Yes, MODERATE Habitual Mobile Use.", "C": "No, LOW Habitual Mobile Use.", "D": "Desktop is PRIMARY; Mobile Use is UNLIKELY."
        },
        "nextQuestion": {
            "A": "C", "B": "C", "C": "C", "D": "D"
        }
    },
    "C": {
        "question": "Platform Suitability - Mobile or Larger Screen for Task Complexity AND Mobile Capabilities?",
        "context": "Consider the complexity of the task and the suitability of mobile vs. larger screens...",
        "options": {
            "A": "Larger Screen Device is Clearly More Suitable.", "B": "Larger Screen Device is Generally More Suitable.", "C": "Mobile and Larger Screen are Equally Suitable.", "D": "Mobile Device is Well-Suited.", "E": "Mobile Device is Ideal."
        },
        "nextQuestion": {
            "A": "RECOMMEND_DESKTOP_WEB_COMPLEXITY", "B": "RECOMMEND_DESKTOP_WEB_COMPLEXITY", "C": "D", "D": "D", "E": "D"
        }
    },
    "D": {
        "question": "Primarily for LISTING ATTRACTIVENESS & CONVERSION?",
        "context": "Is the main goal to improve listing appeal and increase bookings?...",
        "options": {
            "A": "Yes, Primarily.", "B": "Yes, Moderately.", "C": "No, Not Primarily.", "D": "Not Relevant."
        },
        "nextQuestion": {
            "A": "G", "B": "G", "C": "H", "D": "H"
        }
    },
    "G": {
        "question": "UX Attractiveness - How Critical is UX Attractiveness for Partner Job Completion Rate for this Attractiveness/Conversion Focused Job?",
        "context": "If for listing appeal (Question D), how much will UX quality impact...",
        "options": {
            "A": "Yes, DEFINITELY - Suboptimal UX WILL likely REDUCE Job Completion Rate.", "B": "Yes, PROBABLY -  Suboptimal UX MAY REDUCE Job Completion Rate.", "C": "No, PROBABLY NOT - UX Attractiveness is LIKELY SUFFICIENT for Good Job Completion Rate.", "D": "No, DEFINITELY NOT - UX Attractiveness will NOT Significantly Impact Job Completion Rate."
        },
        "nextQuestion": {
            "A": "RECONSIDER_NATIVE_UX", "B": "RECONSIDER_NATIVE_UX", "C": "RECOMMEND_WEBVIEW_BALANCED", "D": "RECOMMEND_WEBVIEW_BALANCED"
        }
    },
    "H": {
        "question": "Mobile Suitability - Is Pulse Mobile Ideal for Complexity?",
        "context": "If not primarily for listing appeal (Question D), reconsider mobile for task complexity...",
        "options": {
            "A": "No, Pulse Mobile is NOT Ideal for this Complexity.", "B": "No, Pulse Mobile is Less Ideal.", "C": "Pulse Mobile is Acceptable.", "D": "Pulse Mobile is Well-Suited.", "E": "Yes, Pulse Mobile is Ideal."
        },
        "nextQuestion": {
            "A": "RECOMMEND_DESKTOP_WEB_COMPLEXITY", "B": "RECOMMEND_DESKTOP_WEB_COMPLEXITY", "C": "I", "D": "I", "E": "I"
        }
    },
    "I": {
        "question": "Internal Product Team Release Cadence & Time to Market for this Job?",
        "context": "Final consideration: Product team's release speed and time-to-market...",
        "options": {
            "A": "Web is Preferred: Faster & Sufficient.", "B": "WebView for Mobile Presence: Acceptable Compromise.", "C": "Native Justified: Strategic Mobile UX Value.", "D": "Prioritize UX over Time: Evaluate Native vs. Web/WebView."
        },
        "nextQuestion": {
            "A": "RECOMMEND_DESKTOP_WEB_TIMETOMARKET", "B": "RECOMMEND_WEBVIEW_BALANCED", "C": "RECOMMEND_NATIVE_MOBILE_UX", "D": "RECONSIDER_NATIVE_UX"
        }
    },
    "RECOMMEND_DESKTOP_WEB_COMPLEXITY": {
        "recommendation": "Recommend Desktop Web UX - For Complexity",
        "rationale": "Due to the complexity of this job and/or limitations of mobile platform suitability for such tasks, a desktop web experience is recommended."
    },
    "RECOMMEND_DESKTOP_WEB_TIMETOMARKET": {
        "recommendation": "Recommend Desktop Web UX - For Time to Market",
        "rationale": "Prioritizing faster time to market and sufficient functionality, a desktop web UX is the recommended platform."
    },
    "RECOMMEND_WEBVIEW_BALANCED": {
        "recommendation": "Recommend WebView UX - Balanced Approach",
        "rationale": "To balance mobile presence with development efficiency and good UX, a WebView approach is recommended, offering a compromise between native and web."
    },
    "RECONSIDER_NATIVE_UX": {
        "recommendation": "Reconsider Native UX",
        "rationale": "Native UX should be reconsidered due to potential UX benefits, especially if UX attractiveness or mobile suitability for complexity are critical factors. Further evaluation is advised."
    },
    "RECOMMEND_NATIVE_MOBILE_UX": {
        "recommendation": "Recommend Native Mobile UX",
        "rationale": "For jobs requiring high urgency, habitual mobile use, and strategic mobile UX value, a Native Mobile UX is strongly recommended to provide the best user experience and platform capabilities."
    }
};

const recommendationHistory = [];
let selectedJob = "";
let jobNuance = ""; // Variable to store job nuance
let currentQuestionKey = null;
const historyStack = [];

const jobSelectElement = document.getElementById("job-select");
const jobNuanceElement = document.getElementById("job-nuance"); // Get the nuance textarea element
const startEvaluationButton = document.getElementById("start-evaluation-button");
const jobSelectionContainerElement = document.getElementById("job-selection-container");
const questionContainerElement = document.getElementById("question-container");
const selectedJobNameElement = document.getElementById("selected-job-name");
const questionTextElement = document.getElementById("question-text");
const questionContextTextElement = document.getElementById("question-context-text");
const optionsContainerElement = document.getElementById("options-container");
const recommendationContainerElement = document.getElementById("recommendation-container");
const recommendationTextElement = document.getElementById("recommendation-text");
const recommendedJobElement = document.getElementById("recommended-job-name");
const backButtonElement = document.getElementById("back-button");
const startOverButtonElement = document.getElementById("start-over-button");
const viewHistoryButtonJobSelectElement = document.getElementById("view-history-button-job-select");
const viewHistoryButtonRecommendationElement = document.getElementById("view-history-button-recommendation");


function populateJobList() {
    console.log("populateJobList() function is running!");
    if (decisionTreeData && decisionTreeData.essentialJobsList) {
        decisionTreeData.essentialJobsList.forEach(job => {
            const option = document.createElement("option");
            option.value = job;
            option.text = job;
            jobSelectElement.appendChild(option);
        });
        console.log("decisionTreeData.essentialJobsList:", decisionTreeData.essentialJobsList);
    } else {
        console.error("Error: decisionTreeData or decisionTreeData.essentialJobsList is not defined.");
    }
}

function startEvaluation() {
    console.log("startEvaluation() function is CALLED!");
    selectedJob = jobSelectElement.value;
    jobNuance = jobNuanceElement.value; // Capture the nuance from the textarea
    if (selectedJob) {
        jobSelectionContainerElement.style.display = "none";
        selectedJobNameElement.textContent = "Evaluating Job/Task: " + selectedJob;
        questionContainerElement.style.display = "block";
        recommendationContainerElement.style.display = "none";
        currentQuestionKey = "A";
        historyStack.length = 0;
        backButtonElement.style.display = 'none';
        displayQuestion(currentQuestionKey);
    } else {
        alert("Please select an Essential Job/Task to evaluate.");
    }
}

function startOver() {
    console.log("startOver() function is CALLED!");
    selectedJob = "";
    jobNuance = ""; // Clear job nuance on start over
    jobSelectElement.value = "";
    jobNuanceElement.value = ""; // Clear the textarea as well
    jobSelectionContainerElement.style.display = "block";
    questionContainerElement.style.display = "none";
    recommendationContainerElement.style.display = "none";
    currentQuestionKey = "A";
    historyStack.length = 0;
    backButtonElement.style.display = 'none';
    startOverButtonElement.style.display = 'none';
    viewHistoryButtonJobSelectElement.style.display = 'block';
    displayRecommendationHistoryTable('recommendation-history-job-picker-container');
}


function displayQuestion(questionKey) {
    currentQuestionKey = questionKey;
    const questionData = decisionTreeData[questionKey];
    console.log("displayQuestion: questionTextElement before line 209:", questionTextElement); // <-- DEBUG LINE
    questionTextElement.textContent = questionData.question; // Line 209 - Error is here
    questionContextTextElement.textContent = questionData.context;
    optionsContainerElement.innerHTML = "";
    recommendationContainerElement.style.display = "none";
    startOverButtonElement.style.display = 'none';
    viewHistoryButtonRecommendationElement.style.display = 'none';

    if (historyStack.length > 0) {
        backButtonElement.style.display = 'block';
    } else {
        backButtonElement.style.display = 'none';
    }


    for (const optionKey in questionData.options) {
        const optionText = questionData.options[optionKey];
        const optionButton = document.createElement("button");
        optionButton.textContent = `${optionKey}) ${optionText}`;
        optionButton.onclick = () => handleOptionSelect(currentQuestionKey, optionKey, questionData.question, optionText);
        optionsContainerElement.appendChild(optionButton);
    }
}

function handleOptionSelect(currentQuestionKey, optionKey, questionText, optionText) {
    console.log("handleOptionSelect called!");
    console.log("currentQuestionKey:", currentQuestionKey);
    console.log("optionKey:", optionKey);

    historyStack.push({
        questionKey: currentQuestionKey,
        optionKey: optionKey,
        questionText: questionText,
        optionText: optionText
    });

    const nextStepKey = decisionTreeData[currentQuestionKey].nextQuestion[optionKey];
    console.log("nextStepKey:", nextStepKey);

    if (decisionTreeData[nextStepKey].question) {
        console.log("Calling displayQuestion with key:", nextStepKey);
        displayQuestion(nextStepKey);
    } else {
        console.log("Calling displayRecommendation with key:", nextStepKey);
        displayRecommendation(nextStepKey);
    }
}

function displayRecommendation(recommendationKey) {
    const recommendationData = decisionTreeData[recommendationKey];
    questionContainerElement.style.display = "none";

    const historyEntry = {
        job: selectedJob,
        jobNuance: jobNuance, // Save the job nuance here
        questionsAndAnswers: [],
        recommendation: recommendationData.recommendation
    };

    const orderedQuestionKeys = ["A", "B1", "B2", "C", "D", "G", "H", "I"];

    orderedQuestionKeys.forEach(questionKey => {
        const historyItemForQuestion = historyStack.find(item => item.questionKey === questionKey);
        if (historyItemForQuestion) {
            historyEntry.questionsAndAnswers.push({
                question: historyItemForQuestion.questionText,
                answer: historyItemForQuestion.optionText
            });
        } else {
            historyEntry.questionsAndAnswers.push({
                question: decisionTreeData[questionKey].question,
                answer: ""
            });
        }
    });

    console.log("Recommendation History before push:", recommendationHistory);
    recommendationHistory.push(historyEntry);
    console.log("Recommendation History after push:", recommendationHistory);
    console.log("Recommendation History Entry pushed:", historyEntry);


    while (recommendationTextElement.firstChild) {
        recommendationTextElement.removeChild(recommendationTextElement.firstChild);
    }

    recommendedJobElement.innerHTML = `<b>For Job/Task:</b> ${selectedJob}`;

    const recommendationParagraph = document.createElement('p');
    recommendationParagraph.innerHTML = `<b>${recommendationData.recommendation}</b>`;
    recommendationTextElement.appendChild(recommendationParagraph);

    const rationaleHeader = document.createElement('h4');
    rationaleHeader.textContent = "Rationale:";
    recommendationTextElement.appendChild(rationaleHeader);

    const rationaleParagraph = document.createElement('p');
    rationaleParagraph.textContent = `For the job "${selectedJob}", the recommendation is based on the following rationale: ${recommendationData.rationale}`;
    recommendationTextElement.appendChild(rationaleParagraph);

    recommendationContainerElement.style.display = "block";
    backButtonElement.style.display = 'none';
    startOverButtonElement.style.display = 'block';
    viewHistoryButtonRecommendationElement.style.display = 'none';

    displayRecommendationHistoryTable('recommendation-history-job-picker-container'); // Update table after recommendation
}

function displayRecommendationHistoryTable(containerId) {
    console.log("displayRecommendationHistoryTable CALLED with containerId:", containerId);
    console.log("Current recommendationHistory:", recommendationHistory);

    const targetContainer = containerId ? document.getElementById(containerId) : document.getElementById('history-table-container'); // Default container
    if (!targetContainer) {
        console.error("Error: Target container not found:", containerId || "history-table-container (default)");
        return; // Exit if target container is not found
    }

    targetContainer.innerHTML = ''; // Clear existing content in the container

    if (!recommendationHistory || recommendationHistory.length === 0) {
        const messagePara = document.createElement('p');
        messagePara.textContent = "No history available yet.";
        targetContainer.appendChild(messagePara);
        return; // Exit function after displaying message if no history
    }


    const tableContainerDiv = document.createElement('div');
    tableContainerDiv.className = 'table-scroll-container';

    const table = document.createElement('table');
    table.className = 'recommendation-history-table transposed-table'; // Added 'transposed-table' class for CSS


    // --- Transposed Table Structure ---
    const tableBody = document.createElement('tbody'); // Use tbody for transposed table

    // Headers (now on the side as rows)
    const headers = [
        "Job Evaluated",
        "Job Nuance", // ADDED: Job Nuance Header
        "Q1: " + decisionTreeData["A"].question, "A1",
        "Q2: " + decisionTreeData["B1"].question, "A2",
        "Q3: " + decisionTreeData["B2"].question, "A3",
        "Q4: " + decisionTreeData["C"].question, "A4",
        "Q5: " + decisionTreeData["D"].question, "A5",
        "Q6: " + decisionTreeData["G"].question, "A6",
        "Q7: " + decisionTreeData["H"].question, "A7",
        "Q8: " + decisionTreeData["I"].question, "A8",
        "Recommendation"
    ];

    headers.forEach(headerText => {
        const headerRow = tableBody.insertRow();
        const headerCell = document.createElement('th'); // TH for header rows in transposed table
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);

        recommendationHistory.forEach((historyEntry, entryIndex) => { // Pass entryIndex to inner loop
            const dataCell = headerRow.insertCell();
            dataCell.style.position = 'relative'; // Tooltip positioning

            if (headerText === "Job Evaluated") {
                dataCell.textContent = historyEntry.job;
            } else if (headerText === "Job Nuance") { // ADDED: Job Nuance Data
                dataCell.textContent = historyEntry.jobNuance;
                if (historyEntry.jobNuance) {
                    const nuanceTooltipSpan = document.createElement('span');
                    nuanceTooltipSpan.className = 'tooltip';
                    nuanceTooltipSpan.textContent = historyEntry.jobNuance;
                    dataCell.appendChild(nuanceTooltipSpan);
                }
            } else if (headerText === "Recommendation") {
                dataCell.textContent = historyEntry.recommendation;
            } else {
                let questionIndex = -1;
                let answerIndex = -1;

                if (headerText.startsWith("Q")) {
                    questionIndex = parseInt(headerText.split(":")[0].substring(1), 10) - 1; // Extract question index (0-based)
                    if (historyEntry.questionsAndAnswers[questionIndex]) {
                        dataCell.textContent = historyEntry.questionsAndAnswers[questionIndex].question.substring(0, 50) + "...";

                        const tooltipSpan = document.createElement('span');
                        tooltipSpan.className = 'tooltip';
                        tooltipSpan.textContent = historyEntry.questionsAndAnswers[questionIndex].question;
                        dataCell.appendChild(tooltipSpan);
                    }
                } else if (headerText.startsWith("A")) {
                    answerIndex = parseInt(headerText.substring(1), 10) - 1; // Extract answer index (0-based)
                    if (historyEntry.questionsAndAnswers[answerIndex]) {
                        dataCell.textContent = historyEntry.questionsAndAnswers[answerIndex].answer;

                        const answerTooltipSpan = document.createElement('span');
                        answerTooltipSpan.className = 'tooltip';
                        answerTooltipSpan.textContent = historyEntry.questionsAndAnswers[answerIndex].answer;
                        dataCell.appendChild(answerTooltipSpan);
                    }
                }
            }
        });
    });


    table.appendChild(tableBody); // Append tbody to table
    tableContainerDiv.appendChild(table);
    targetContainer.appendChild(tableContainerDiv); // Append the table content to the target container

    return tableContainerDiv;
}


function handleBackButtonClick() {
    if (historyStack.length > 0) {
        historyStack.pop();
        const previousHistoryItem = historyStack[historyStack.length - 1];
        if (previousHistoryItem) {
            const previousQuestionKey = previousHistoryItem.questionKey;
            console.log("Back button clicked. Going back to question:", previousQuestionKey);
            displayQuestion(previousQuestionKey);
        } else {
            startOver();
        }
    } else {
        startOver();
        console.log("No history to go back to. Back to Job Selection via startOver().");
    }
}


// Conditional initialization to avoid errors on history.html (no longer relevant but kept for safety)
if (jobSelectElement) {
    populateJobList();

    startEvaluationButton.addEventListener("click", startEvaluation);
    jobSelectElement.addEventListener("change", function() {
        startEvaluationButton.disabled = !jobSelectElement.value;
    });
    backButtonElement.addEventListener("click", handleBackButtonClick);
    startOverButtonElement.addEventListener("click", startOver);
    // viewHistoryButtonJobSelectElement.addEventListener("click", viewHistory); // REMOVED
    // viewHistoryButtonRecommendationElement.addEventListener("click", viewHistory); // REMOVED

    displayRecommendationHistoryTable('recommendation-history-job-picker-container'); // Call it here to display on initial load
}
