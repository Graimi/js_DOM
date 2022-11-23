const technologies = [
  'Javascript',
  'HTML',
  'CSS',
  'React',
  'Vite',
  'Typescript',
];

const setupTechnologiesList = () => {
  const listElement = document.createElement('ul');
  listElement.className = 'technologies';

  for (let i = 0; i < technologies.length; i++) {
    const technology = technologies[i];

    const liElement = document.createElement('li');
    liElement.innerText = technology;

    const buttonElement = document.createElement('button');
    buttonElement.innerText = 'X';
    buttonElement.className = 'delete-button';

    liElement.append(buttonElement);
    listElement.append(liElement);
  }
  document.body.append(listElement);
};

const handleDelete = (event) => {

  const liElement = event.target.parentElement
  console.log(liElement);
  liElement.remove();
};

const addDeleteButtonListeners = () => {
  const deleteButtons = document.querySelectorAll('.delete-button');

  for (let n = 0; n < deleteButtons.length; n++) {
    const deleteButton = deleteButtons[n];
    deleteButton.addEventListener('click', handleDelete);
  }
};

setupTechnologiesList();
addDeleteButtonListeners();
