const skills = [
    {id: 125223, skill: 'HTML', done: true},
    {id: 127904, skill: 'CSS', done: true},
    {id: 139608, skill: 'Javascript' , done: true}
  ];
  
  module.exports = {
    getAll: getAll,
    getOne: getOne,
    create,
    deleteOne,
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find((skill) => skill.id === parseInt(id));
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill)
  }

  function deleteOne(id) {
    const idx = skills.findIndex((skill) => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }
 