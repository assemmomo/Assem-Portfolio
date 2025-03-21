// if (typeof supabase !== 'undefined') {
//     const supabaseUrl = 'https://yqtfsqlgatsgucacopfj.supabase.co';
//     const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdGZzcWxnYXRzZ3VjYWNvcGZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwODA5MjAsImV4cCI6MjA1NzY1NjkyMH0.kU8dG5zNsg5fijztOveKnAJXmUdQ7jCclo19izjq0ww';
//     const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

//     async function fetchProjects() {
//         const { data, error } = await supabaseClient.from('projects').select('*');
//         if (error) {
//             console.error('Error fetching projects:', error);
//         } else {
//             console.log('Projects:', data);
//         }
//         const projectsList = document.getElementById('projects-list');
//         projectsList.innerHTML = ''; // مسح أي بيانات قديمة

//         // إضافة المشاريع للقائمة
//         data.forEach(project => {
//             const listItem = document.createElement('li');
//             listItem.textContent = project.title; // استبدل بالحقول المناسبة في قاعدة بياناتك
//             projectsList.appendChild(listItem);
//         });
//     }

//     fetchProjects();

// } else {
//     console.error('Supabase library not loaded');
// }

const imgHolder = document.querySelector('.imgHolder');
const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');
const sec2Position = sec2.getBoundingClientRect().top + 300;
const screenPosition = window.innerHeight / 1.5;
var container = document.querySelector('.prosHolder');
const proImg = document.querySelector('.proImg');
const proName = document.querySelector('.proName');
const proDis = document.querySelector('.proDis');
const proLink = document.querySelector('.proLink');
const skillsLine = document.querySelectorAll('.skillsLine div');
const skillsNum = document.querySelectorAll('.skillsNum');


const skillsData = {
    html: 90,
    css: 90,
    js: 80,
    react: 25,
    figma: 60,
    bootstrap: 75,
}

skillsLine[0].style.width = `${skillsData.html}%`;
skillsNum[0].textContent = `${skillsData.html}%`;
skillsLine[1].style.width = `${skillsData.css}%`;
skillsNum[1].textContent = `${skillsData.css}%`;
skillsLine[2].style.width = `${skillsData.js}%`;
skillsNum[2].textContent = `${skillsData.js}%`;
skillsLine[3].style.width = `${skillsData.bootstrap}%`;
skillsNum[3].textContent = `${skillsData.bootstrap}%`;
skillsLine[4].style.width = `${skillsData.react}%`;
skillsNum[4].textContent = `${skillsData.react}%`;
skillsLine[5].style.width = `${skillsData.figma}%`;
skillsNum[5].textContent = `${skillsData.figma}%`;












document.querySelector('.next').addEventListener('click', function () {
    var firstDiv = container.firstElementChild;
    if (firstDiv) {
        firstDiv.classList.add('move');
        setTimeout(function () {
            firstDiv.classList.remove('move');
            container.appendChild(firstDiv);
        }, 500);
    }
});
document.querySelector('.prev').addEventListener('click', function () {
    var lastDiv = container.lastElementChild;
    if (lastDiv) {
        lastDiv.classList.add('move-up');
        setTimeout(function () {
            lastDiv.classList.remove('move-up');
            container.insertBefore(lastDiv, container.firstElementChild);
        }, 500);
    }
});
var firstDiv = container.firstElementChild;
setInterval(function () {
    container.querySelectorAll('div').forEach(pro => {
        pro.classList.remove('activePro');
    });
    container.firstElementChild.classList.add('activePro');

    proImg.src = container.firstElementChild.querySelector('img').src;
    proName.textContent = container.firstElementChild.querySelector('h2').textContent;
    proDis.textContent = container.firstElementChild.querySelector('p').textContent;
    proLink.href = container.firstElementChild.getAttribute('link');
}, 100);

window.scrollY=0;
window.scrollX=0;