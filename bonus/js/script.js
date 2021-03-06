// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html.
//  Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
//  Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, 
// stampare dinamicamente una card per ogni membro del team.
// BONUS:// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team:
//  cliccando sul pulsante "add" viene creato un nuovo oggetto, 
// il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.


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

// funzione per aggiungere un nuovo elemento nell'arrey
const addBtn = document.getElementById("addMemberButton");
addBtn.addEventListener('click', addMember);

function addMember(){
    const nameUser = document.getElementById('name').value
    const roleUser = document.getElementById('role').value
    const imgUser = document.getElementById('image').value

    const newMember = {
        name: nameUser,
        role: roleUser,
        image: imgUser,
    };

    // richiamo la funzione per stampare la card del nuovo membro
    drawSingleTeamElement(newMember)
}

// funzione per scorrere tuti gli elementi dell'arrey
drawAllTeams(teamArrey)
function drawAllTeams(teamsObjectsArray) {
        for(let i = 0; i < teamsObjectsArray.length; i++) {
            const thisClass = teamsObjectsArray[i];
            // richiamo la funzione per stampare in pagina
            drawSingleTeamElement(thisClass);
        }
    }

    // funzione per creare la card e stamparla in pagina 
    function drawSingleTeamElement(teamObject) {
            const teamsContainer = document.querySelector('.team-container');
            const teamToDraw = `
            <div class="team-card">
                <div class="card-image">
                    <img
                        src="${teamObject.image}"
                        alt="${teamObject.name}"
                    />
                </div>
        
                <div class="card-text">
                    <h3>${teamObject.name}</h3>
                    <p>${teamObject.role}</p>
                </div>
            </div>
           `;
            teamsContainer.innerHTML += teamToDraw;
        }