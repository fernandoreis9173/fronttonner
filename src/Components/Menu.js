import React from 'react';

import '../styles.css';
import Listar from './Listar';
import Search from './Search';
// import Reprint from '../routes/Reprint';
// import InsertSpare from '../routes/InsertSpare';
// import UpdateSpare from '../routes/UpdateSpare';
// import Homepage from '../routes/Homepage';

export default function Menu() {
  return (
    <>
      <main class="container">
        <section id="options">
            {/* <a link={Homepage}><h2><i class="menu-button">Home</i></h2></a> */}
            <div class="option des-only">
              <button className="btn btn-secondary"> <a href="http://localhost:3000/"><h2><i class="menu-button">LISTAR</i></h2></a></button> 
            </div>

            <div class="option des-only">
              <button className="btn btn-secondary"> <a href="http://localhost:3000/Search"><h2><i class="menu-button">PROCURAR</i></h2></a></button> 
            </div>
            <div class="option des-only">
            <button className="btn btn-secondary"> <a href="http://localhost:3000/Insert"><h2><i class="menu-button">INSERIR</i></h2></a></button> 
            </div>
            {/* <div class="option des-only">
                <a href={InsertSpare}><h2><i class="menu-button isp">Insert Spare Parts</i></h2></a>

            </div>
            <div class="option des-only">
                <a href={UpdateSpare}><h2><i class="menu-button isp">Update Spare Parts</i></h2></a>

            </div>

            <div class="option des-only">
                <a href="#"><h2><i class="menu-button other">Records</i></h2></a>

            </div>
            <div class="option des-only">
                <a href="#"><h2><i class="menu-button other">Reports</i></h2></a>

            </div>
            <div class="dropdown mob-only">
                <button onclick="myFunction()" class="dropbtn"><i class="bi bi-grid-fill"></i></button>
                <div id="myDropdown" class="dropdown-content">
                  <a href="#">Insert Equipment</a>
                  <a href="#">Update Equipment</a>
                  <a href="#">Reprint Label</a>
                  <a href="#">Insert Spare Parts</a>
                  <a href="#">Update Spare Parts</a>
                  <a href="#">Records</a>
                  <a href="#">Reports</a>
                </div>
              </div> */}
            
           
        </section>

   </main>
    </>
  );
}