export const people = [
    {
        id: 1,
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id: 2,
        name: "Juseong",
        age: 18,
        gender: "male"
    }
];


export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}