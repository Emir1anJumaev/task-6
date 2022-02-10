//    --------------------------  DOM  --------------------------------------
let body = document.body;
//    --------------------------  DOM  --------------------------------------

//  --------------------  CREATE ELEMENT  ---------------------------------------
let wrapper = document.createElement('div');
let imgWrapper = document.createElement('img');
let h3 = document.createElement('h3');
let p = document.createElement('p');
let row = document.createElement('div');
let eth = document.createElement('h4')
let author = document.createElement('div');
let ago = document.createElement('span')
let authorImg = document.createElement('img');
let name = document.createElement('span')
let sp = document.createElement('span')
//  --------------------  CREATE ELEMENT  ---------------------------------------


// ---------------------- ADD CLASS OR ID -----------------------------------------
wrapper.id = 'wrapper';
imgWrapper.src = 'http://www.websovet.com/wp-content/uploads/2017/09/javascript.jpg';
h3.textContent = 'Equliubrium#3429';
p.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
eth.textContent = '0.041 ETH'
ago = document.textContent = '3 days left'
authorImg.src = 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg';
sp.textContent = 'Creation of';
name.textContent = ` Emirlan Jumaev`;

// ---------------------- ADD CLASS OR ID -----------------------------------------

//  ----------------------  ADD STYLE ------------------------------------------
body.style.cssText = 'background: #22224a; display: flex;min-height: 100vh;margin: 0;box-sizing:border-box;justify-content: center;align-items:center;';
wrapper.style.cssText = `
width: 350px;
background: rgb(40 64 142);
padding: 15px 20px;
border-radius: 10px;
color: white;
`
row.style.cssText = 'display: flex; align-items: center; justify-content: space-between;'
p.style.cssText = 'font-size: 18px; font-weight: 500;'
h3.style.cssText = `color: white; font-size: 30px;`
imgWrapper.style.cssText = `width: 100%;  height: 250px;object-fit:cover;`
eth.style.cssText = 'color: aqua;';
author.style.cssText = 'border-top: 1px solid gray; padding-top: 10px; display:flex;align-items: center;gap: 0 10px'
authorImg.style.cssText = 'border-radius: 50%; width: 40px;';
name.style.cssText = `color: white;`
sp.style.cssText = `color: gray;`
//  ----------------------  ADD STYLE ------------------------------------------

body.append(wrapper)
wrapper.append(imgWrapper, h3, p, row, author)
row.append(eth, ago)
author.append(authorImg, name)
name.prepend(sp)