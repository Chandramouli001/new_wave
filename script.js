// script.js

document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz-container');

    const questions = [
        { question: "Do you prefer working with numbers?", options: ["Yes", "No"] },
        { question: "Are you interested in creative arts?", options: ["Yes", "No"] },
        { question: "Do you enjoy problem-solving activities?", options: ["Yes", "No"] },
        { question: "Are you detail-oriented?", options: ["Yes", "No"] }
        // Add more questions as needed
    ];

    // Create and append question elements
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = q.question;

        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options');

        q.options.forEach(option => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = option;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            optionsContainer.appendChild(label);
        });

        questionElement.appendChild(questionText);
        questionElement.appendChild(optionsContainer);
        quizContainer.appendChild(questionElement);
    });

    // Add a submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.classList.add('btn');
    submitButton.addEventListener('click', function() {
        showResults();
    });

    quizContainer.appendChild(submitButton);
});

function showResults() {
    const responses = document.querySelectorAll('#quiz-container input[type="radio"]:checked');
    const counts = {
        numbers: 0,
        arts: 0,
        problemSolving: 0,
        detailOriented: 0
    };

    responses.forEach(response => {
        switch (response.name) {
            case 'question0':
                counts.numbers += response.value === 'Yes' ? 1 : 0;
                break;
            case 'question1':
                counts.arts += response.value === 'Yes' ? 1 : 0;
                break;
            case 'question2':
                counts.problemSolving += response.value === 'Yes' ? 1 : 0;
                break;
            case 'question3':
                counts.detailOriented += response.value === 'Yes' ? 1 : 0;
                break;
        }
    });

    const ctx = document.getElementById('resultsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Numbers', 'Arts', 'Problem Solving', 'Detail Oriented'],
            datasets: [{
                label: 'Your Aptitude Results',
                data: [
                    counts.numbers,
                    counts.arts,
                    counts.problemSolving,
                    counts.detailOriented
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const slidingDivs = document.querySelectorAll('.sliding-div');
    const windowHeight = window.innerHeight;

    function checkSlidingDivs() {
        slidingDivs.forEach(div => {
            const rect = div.getBoundingClientRect();
            if (rect.top < windowHeight - 100) {
                div.style.opacity = '1';
                div.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', checkSlidingDivs);
    checkSlidingDivs(); // Initial check
});
