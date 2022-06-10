const teamMembers = [
    {
        name: 'Merit Dike',
        image: 'img/Merit.jpg',
        age: 'Age: ' + 20,
        complexion: 'Complexion: ' + 'Fair',
        bestFood: 'Best Food: Pizza',
        bestMovie: 'Best Movie: The Greatest Showman',
        courses: 'Courses: HTML, CSS, JavaScript',
    }, {
        name: 'Comely Aniedi Daniel',
        image: 'img/Comely.jpg',
        age: 'Age: ' + 23,
        complexion: 'Complexion: ' + 'Fair',
        bestFood: 'Best Food: Ekpang Nkukwo',
        bestMovie: 'Best Movie: The witcher',
        courses: 'Courses: HTML, CSS, JavaScript',
    }, {
        name: 'Abdulsamad Raji',
        image: 'img/Abdulsamad.jpg',
        age: 'Age: ' + 28,
        complexion: 'Complexion: ' + 'Dark',
        bestFood: 'Best Food: Spaghetti',
        bestMovie: 'Best Movie: The Irishman',
        courses: 'Courses: HTML, CSS, JavaScript',
    }, {
        name: 'Emmanuel Stephen',
        image: 'img/Stephen.jpg',
        age: 'Age: ' + 21,
        complexion: 'Complexion: ' + 'Fair',
        bestFood: 'Best Food: Fried Rice',
        bestMovie: 'Best Movie: Gladiator',
        courses: 'Courses: HTML, CSS, JavaScript',
    }, {
        name: 'Ejeh Oche Daniel',
        image: 'img/Danny.png',
        age: 'Age: ' + 25,
        complexion: 'Complexion: ' + 'Dark',
        bestFood: 'Best Food: Chicken and Chips',
        bestMovie: 'Best Movie: The Godfather',
        courses: 'Courses: HTML, CSS, JavaScript',
    }, {
        name: 'Gabriel-Eta Ekpo',
        image: 'img/Gabrial.jpg',
        age: 'Age: ' + 26,
        complexion: 'Complexion: ' + 'Dark',
        bestFood: 'Best Food: French Fries',
        bestMovie: 'Best Movie: Money Heist',
        courses: 'Courses: HTML, CSS, JavaScript',
    }, {
        name: 'Ayobami Ogundiya',
        image: 'img/Ayobami.jpg',
        age: 'Age: ' + 29,
        complexion: 'Complexion: ' + 'Dark',
        bestFood: 'Best Food: Toast Bread and Jam',
        bestMovie: 'Best Movie: The Avengers',
        courses: 'Courses: HTML, CSS, JavaScript',
    }, {
        name: 'Ekpenyong Amah',
        image: 'img/Ekpenyong.jpg',
        age: 'Age: ' + 29,
        complexion: 'Complexion: ' + 'Dark',
        bestFood: 'Best Food: Yam and Eggs',
        bestMovie: 'Best Movie: Spiderman',
        courses: 'Courses: HTML, CSS, JavaScript',
    }
]

let detail = ``;


teamMembers.forEach((teamMember) => {
        //console.log(teamMember);

    detail += `<div class="col-lg-4 col-md-6 col-12">
                <div class="card border-0 mb-3">
                    <div class="slide slide1 d-flex justify-content-center align-items-center position-relative">
                        <div class="content">
                            <div class="icon position-absolute top-0 start-0" style="width: 100%; height: 100%;">
                                <img src=${teamMember.image} class="img-fluid">
                            </div>
                        </div>
                    </div>
                    
                    <div class="slide slide2 d-flex justify-content-start align-items-center position-relative p-3">
                        <div class="content2">
                            <h3 class="name text-center fw-bold">${teamMember.name}</h3>
                            <p class="age">${teamMember.age}</p>
                            <p class="complexion">${teamMember.complexion}</p>
                            <p class="best-food">${teamMember.bestFood}</p>
                            <p class="best-movie">${teamMember.bestMovie}</p>
                            <p class="courses">${teamMember.courses}</p>
                            <div class="text-center">
                                <button onclick="showAlert('${teamMember.name}')" type="button" class="btn btn-primary shadow-none">Click Me!</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>`;
});

document.querySelector('.row').innerHTML = detail;


function showAlert(teamMember) {
    alert(teamMember + ` is a member of the Team Arthemis`);
}
