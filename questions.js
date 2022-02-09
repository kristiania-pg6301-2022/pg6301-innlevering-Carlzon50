
export function randomQuestion() {
    return Questions[Math.trunc(Math.random()*Questions.length)];
}

export function isCorrectAnswer(question, answer) {
    return question.correct_answers[answer + "_correct"] === "true";
}

export const Questions =
    [{
        "id": 974,
        "question": "Where is Dennis Brenna from?",
        "description": null,
        "answers": {
            "answer_a": "Dublin",
            "answer_b": "Beijing",
            "answer_c": "Kongsvinger",
            "answer_d": "Moscow",
            "answer_e": "Chicago",
            "answer_f": "Lusaka"
        },
        "multiple_correct_answers": "true",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "City"}],
        "category": "Geography",
        "difficulty": "Easy"
    }, {
        "id": 976,
        "question": "Who has the best shirt?",
        "description": null,
        "answers": {
            "answer_a": "Gard",
            "answer_b": "Veljko",
            "answer_c": "Gard again",
            "answer_d": "Johannes",
            "answer_e": "Dennis",
            "answer_f": "Wuhu duden"
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "Clothes"}],
        "category": "Fashion",
        "difficulty": "Easy"
    }, {
        "id": 995,
        "question": "What is Dennis favorite brand?",
        "description": null,
        "answers": {
            "answer_a": "Gant",
            "answer_b": "Raffe",
            "answer_c": "Vans",
            "answer_d": "HM",
            "answer_e": "Billabong",
            "answer_f": "Adidas"
        },
        "multiple_correct_answers": "true",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "Fashion"}],
        "category": "Fashion",
        "difficulty": "Easy"
    }, {
        "id": 986,
        "question": "Who is most fjortis when he is drunk?",
        "description": null,
        "answers": {
            "answer_a": "Gard",
            "answer_b": "Groggen",
            "answer_c": "Veljko",
            "answer_d": "Dennis",
            "answer_e": "Skjalg",
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "true",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "Brudar"}],
        "category": "Party",
        "difficulty": "Easy"
    }, {
        "id": 988,
        "question": "Who has the best gym talk?",
        "description": null,
        "answers": {
            "answer_a": "Veljko",
            "answer_b": "Pål",
            "answer_c": "Dennis",
            "answer_d": "Skjalg",
            "answer_e": "Gard",
            "answer_f": "Zidane"
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "Gym"}],
        "category": "Gym",
        "difficulty": "Easy"
    }, {
        "id": 989,
        "question": "Who is Dennis idol?",
        "description": null,
        "answers": {
            "answer_a": "Zidane",
            "answer_b": "Bursdag",
            "answer_c": "Skjalg",
            "answer_d": "Veljko",
            "answer_e": "Gard",
            "answer_f": "Tomas"
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "true"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "Idols"}],
        "category": "Legends",
        "difficulty": "Easy"
    }, {
        "id": 981,
        "question": "What is Dennis moto?",
        "description": null,
        "answers": {
            "answer_a": "Work hard play hard",
            "answer_b": "Go to school everyday",
            "answer_c": "I know everything",
            "answer_d": "I will do it at home",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "true",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }, {
        "id": 984,
        "question": "Who is the biggest nerd?",
        "description": null,
        "answers": {
            "answer_a": "Wuhu guy",
            "answer_b": "Harry",
            "answer_c": "Skjalg",
            "answer_d": "Tomas",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }, {
        "id": 983,
        "question": "Fest hos?",
        "description": null,
        "answers": {
            "answer_a": "Dennis",
            "answer_b": "Groggen",
            "answer_c": "Igor",
            "answer_d": "Mange",
            "answer_e": "Pål",
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }, {
        "id": 987,
        "question": "What is Dennis favorite food?",
        "description": null,
        "answers": {
            "answer_a": "McD",
            "answer_b": "Peppes",
            "answer_c": "Fish",
            "answer_d": "Sandwiches",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "Food"}],
        "category": "Food",
        "difficulty": "Easy"
    }];
