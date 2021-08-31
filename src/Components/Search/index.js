import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './styles.css';

function Search (){
    const [initialRepos, seInitialRepos] = useState([]);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try{
                const response = await fetch(
                    "http://localhost:8090/api/tonners/"
                );
                const data = await response.json();
                seInitialRepos(data);
                setRepos(data)
            }
            catch (error){
                console.log(error);
            }
        };
        fetchRepos();
    }, []);

    const handleChage = ({ target }) => {
        if (!target.value) {
            setRepos(initialRepos)
            return;
        }
        const filterRepos = repos.filter(({ fabricante }) => fabricante.toLowerCase().includes(target.value));

        setRepos(filterRepos);
    };

    return (
        <div class="container-xl">
	<div class="table-responsive">
		<div class="table-wrapper">
            <div className="container-input">
                <input type="text" onChange={handleChage} />
            </div>

            <div className="container-List">
             
            <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th class="ident">ID</th>
            <th>FABRICANTE</th>
            <th>MODELO</th>
            <th>LOCAL</th>
            <th>QUANTIDADE</th>
          </tr>
        </thead>
        <tbody>
        {repos.map(repo=>{
          return(
            <tr>
              <td class="ident">{repo.id}</td>
              <td>{repo.fabricante}</td>
              <td>{repo.modelo}</td>
              <td>{repo.local}</td>
              <td>{repo.quantidade}</td>
              {/* <td><button className="btn btn-primary" name="edit" onClick={()=>{this.selecionaTonner(tonner); this.modalInsert()}}><FontAwesomeIcon icon={faEdit}/></button></td>
              <td><button className="btn btn-danger" name="exclui" onClick={()=>{this.selecionaTonner(tonner); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button></td> */}
             
            </tr>
          )
        })}
        </tbody>
      </table>
                   

{/* {repos.map(repo=>{
          return(
            <tr>
              <td class="ident">{repo.id}</td>
              <td>{repo.fabricante}</td>
              <td>{repo.modelo}</td>
              <td>{repo.local}</td>
              <td>{repo.quantidade}</td>
              <td><button className="btn btn-primary" name="edit" onClick={()=>{this.selecionaTonner(repo); this.modalInsert()}}><FontAwesomeIcon icon={faEdit}/></button></td>
              <td><button className="btn btn-danger" name="exclui" onClick={()=>{this.selecionaTonner(repo); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button></td>
             
            </tr>
          )
        })} */}
            </div>
        </div>
        </div>
        </div>
        
    );
}

export default Search
