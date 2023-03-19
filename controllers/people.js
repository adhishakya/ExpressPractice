let { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
}

const postPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    res.status(201).json({ success: true, person: name });
}

const postPersonPostman = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    res.status(201).json({ success: true, data: [...people, name] });
}

const putPerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res.status(404).json({ success: false, message: `No person with id ${id} found.` });
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    res.status(200).json({ success: true, data: newPeople });
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res.status(404).json({ success: false, message: `No person with id ${req.params.id} found` });
    }
    const newPeople = people.filter((person) => person.id != Number(req.params.id));
    return res.status(200).json({ success: true, data: newPeople });
}

module.exports = {
    getPeople, postPerson, postPersonPostman, putPerson, deletePerson
}