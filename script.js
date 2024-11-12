const questions = [
    {
        question: "1) Qual é o tipo de dado para variáveis booleanas?",
        options: ["Texto", "Booleano", "Número", "Objeto"],
        answer: 1
    },
    {
        question: "2) Como você declara uma variável em JavaScript?",
        options: ["var", "let", "const", "Todas as anteriores"],
        answer: 3
    },
    {
        question: "3) Como se cria uma função em JavaScript?",
        options: ["function minhaFuncao()", "def minhaFuncao()", "fun minhaFuncao()", "criar minhaFuncao()"],
        answer: 0
    },
    {
        question: "4) Qual operador é usado para atribuir valor em JavaScript?",
        options: ["==", "=", "===", ":"],
        answer: 1
    },
    {
        question: "5) Como se declara uma variável constante?",
        options: ["let", "var", "const", "constant"],
        answer: 2
    },
    {
        question: "6) Qual é o valor inicial de uma variável não atribuída em JavaScript?",
        options: ["null", "undefined", "0", "NaN"],
        answer: 1
    },
    {
        question: "7) Qual desses é um tipo de dado em JavaScript?",
        options: ["Number", "String", "Boolean", "Todos os anteriores"],
        answer: 3
    },
    {
        question: "8) Qual declaração finaliza a execução de um loop?",
        options: ["break", "stop", "exit", "return"],
        answer: 0
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";

    questions.forEach((q, index) => {
        const questionElem = document.createElement("div");
        questionElem.classList.add("question");
        questionElem.innerHTML = `<p>${q.question}</p>`;

        const optionsList = document.createElement("ul");
        optionsList.classList.add("options");

        q.options.forEach((option, i) => {
            const optionItem = document.createElement("li");
            optionItem.innerHTML = `<input type="radio" name="question${index}" value="${i}"> ${option}`;
            optionsList.appendChild(optionItem);
        });

        questionElem.appendChild(optionsList);
        quizContainer.appendChild(questionElem);
    });
}

function submitQuiz() {
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.answer) {
            score++;
        }
    });

    const result = document.getElementById("result");
    result.innerText = `Você acertou ${score} de ${questions.length} questões.`;
}

loadQuiz();
