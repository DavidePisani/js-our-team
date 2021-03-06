// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html.
// Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. 
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html,
// stampare dinamicamente una card per ogni membro del team.

// creo un arrey di oggetti con all'interno tutti i dati dei nuovi membri
const teamArrey = [
    {
        name:'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name:'Angela Caroll',
        role: 'Chief Editor',
        image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name:'Angela Lopez',
        role: 'Social Media Menager',
        image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name:'Scott Estrada',
        role: 'Developer',
        image: 'img/scott-estrada-developer.jpg',
    },
    {
        name:'Walter Gordon',
        role: 'Office Manager',
        image: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name:'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg',
    },
];

// scorro tutto l'arrey e poi inserisco nel dom le card create

const classesContainer = document.querySelector('.team-container');

// creo card tante quante è la lunghezza del arrey che contiene gli object
for(let i = 0; i < teamArrey.length; i++) {
    const thisMember = teamArrey[i];
    
    const classToDraw = `
    <div class="team-card">
        <div class="card-image">
            <img
                src="${thisMember.image}"
                alt="${thisMember.name}"
            />
        </div>

        <div class="card-text">
            <h3>${thisMember.name}</h3>
            <p>${thisMember.role}</p>
        </div>
    </div>
   `;

    // concatenarlo a classesContainer
    classesContainer.innerHTML += classToDraw;

}
