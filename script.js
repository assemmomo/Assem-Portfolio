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


// 1. إنشاء عنصر script لتحميل Supabase
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';

// 2. تنفيذ الكود بعد تحميل المكتبة
script.onload = function() {
    // 3. تهيئة Supabase بعد التأكد من تحميل المكتبة
    const supabaseUrl = 'https://zhbsltiiyiqjpkfwrrmy.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoYnNsdGlpeWlxanBrZndycm15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyODgyMjksImV4cCI6MjA1OTg2NDIyOX0.whyKXPtzjF_V_Dnu0sVT4gbm8v9HMRNXSQY87ufEM3A';
    window.supabase = supabase.createClient(supabaseUrl, supabaseKey);
    
    // 4. اختبار الاتصال
    window.supabase.from('projects').select('*')
        .then(response => {
            console.log(response.data);
            // Assuming the response contains an image URL in the first item

            // if (response.data && response.data.length > 0) {
            //     const imgUrl = response.data[0].id; // Replace 'image_url' with the actual field name
            //     document.querySelector('img').src = imgUrl;
            // }

            response.data.forEach((pro) => {
                const div = document.createElement('div');
                div.classList.add('project');
                div.setAttribute('link', pro.Project_Link);
                div.innerHTML = `<img src="${pro.Project_Image}" alt="Project Image">
                                <h2>${pro.Project_Name}</h2>
                                <p>${pro.Project_Description}</p>`;
                container.appendChild(div);
            });
        })
        .catch(error => console.error('Error:', error));
};

// 5. إضافة السكريبت إلى الصفحة
document.head.appendChild(script);


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


function projectMatch () {
    container.querySelectorAll('div').forEach(pro2 => {
        pro2.classList.remove('activePro');
    });
    container.firstElementChild.classList.add('activePro');

    proImg.src = container.firstElementChild.querySelector('img').src;
    proName.textContent = container.firstElementChild.querySelector('h2').textContent;
    proDis.textContent = container.firstElementChild.querySelector('p').textContent;
    proLink.href = container.firstElementChild.getAttribute('link');
}



document.querySelector('.next').addEventListener('click', function () {
    var firstDiv = container.firstElementChild;
    if (firstDiv) {
        firstDiv.classList.add('move');
        setTimeout(function () {
            firstDiv.classList.remove('move');
            container.appendChild(firstDiv);
            projectMatch();
        }, 500);
    }
});
document.querySelector('.prev').addEventListener('click', function () {
    var lastDiv = container.lastElementChild;
    if (lastDiv) {
        container.insertBefore(lastDiv, container.firstElementChild);
        lastDiv.classList.add('move-up');
        setTimeout(function () {
            lastDiv.classList.remove('move-up');
            projectMatch();
        }, 100);
    }
});
var firstDiv = container.firstElementChild;



window.scrollY=0;
window.scrollX=0;
