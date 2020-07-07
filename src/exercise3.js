const students = [
    {
        name: 'Pato'
    },
    {
        name: 'Ruben'
    },
    {
        name: 'Yesica'
    }
];

const studentsWithAge = students.map(student => {
    let studentWithAge = {
        ...student,
        age: 0
    };

    switch (studentWithAge.name) {
        case 'Pato':
        case 'Ruben':
            studentWithAge.age = 28;
            break;
        case 'Yesica':
            studentWithAge.age = 30;
            break;
        default:
            studentWithAge.age = 0;
            break;
    }

    return studentWithAge;
});

console.table(students)
console.table(studentsWithAge);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map