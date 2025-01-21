
async function getUsers(){
  document.querySelector('.home').classList.add('selected');
document.querySelector('.contact').classList.remove('selected');
document.querySelector('.work').classList.remove('selected');
  const response=await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users=await response.json();

  const result=users.map(function(user){
    return `
    <div class="user_data">
   <div class="row">
    <i class="fa-solid fa-user"></i>
    <p>${user.name}  - <span>${user.username}</span></p>
    </div>

    <div class="row">
    <i class="fa-solid fa-city"></i>
    <address>${user.address.street} - ${user.address.suite} - ${user.address.city} </address>
    </div>

    <div class="row">
    <i class="fa-solid fa-location-dot"></i>
    <address>${user.address.zipcode} ,  [ ${user.address.geo.lat} , ${user.address.geo.lng} ]</address>
    </div>

    
    </div>`
  }).join('');

  
  document.querySelector('.users_section .container').innerHTML=result;
}


async function getUsersContact(){
  document.querySelector('.home').classList.remove('selected');
document.querySelector('.contact').classList.add('selected');
document.querySelector('.work').classList.remove('selected');
  const response=await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users=await response.json();


  const contact=users.map(function(user){
    return `
    <div class="user_data">
   <div class="row">
    <i class="fa-solid fa-user"></i>
    <p>${user.name}  - <span>${user.username}</span></p>
    </div>

    <div class="row">
    <i class="fa-solid fa-phone"></i>
    <p>${user.phone} </p>
    </div>

    <div class="row">
    <i class="fa-solid fa-envelope"></i>
    <p>${user.email} </p>
    </div>

    <div class="row">
    <i class="fa-solid fa-globe"></i>
    <p>${user.website} </p>
    </div>

    
    </div>`
  }).join('');
  

  document.querySelector('.users_section .container').innerHTML=contact;
}

async function getWorkInfo(){
document.querySelector('.home').classList.remove('selected');
document.querySelector('.contact').classList.remove('selected');
document.querySelector('.work').classList.add('selected');

  const response=await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users=await response.json();


  const workInfo=users.map(function(user){
    return `
    <div class="user_data">
   <div class="row">
    <i class="fa-solid fa-user"></i>
    <p>${user.name}  - <span>${user.username}</span></p>
    </div>

    <div class="row">
    <i class="fa-solid fa-briefcase"></i>
    <p>${user.company.name} </p>
    </div>

    <div class="row">
    <i class="fa-solid fa-thumbs-up"></i>
    <p>${user.company.catchPhrase} </p>
    </div>

    <div class="row">
    <i class="fa-solid fa-certificate"></i>
    <p>${user.company.bs} </p>
    </div>

    
    </div>`
  }).join('');
  

  document.querySelector('.users_section .container').innerHTML=workInfo;
}
getUsers();

document.querySelector('.home').onclick=getUsers;

document.querySelector('.contact').onclick=getUsersContact;

document.querySelector('.work').onclick=getWorkInfo;



// async function getUsers(){
//   const response=await fetch(`https://jsonplaceholder.typicode.com/users`);
//   const users=await response.json();

//   const result=users.map(function(user){
//     return `
//     <tr>
//     <td>${user.id}</td>
//     <td>${user.name}</td>
//     <td>${user.username}</td>
//     <td>${user.email}</td>
//     <td>${user.address.street}</td>
//     <td>${user.phone}</td>
//     <td>${user.website}</td>
//     <td>${user.company}</td>

//     </tr>`
//   }).join('');
  
//   document.querySelector('tbody').innerHTML=result;
// }

//  getUsers()

