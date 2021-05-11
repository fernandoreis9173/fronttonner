import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './styles.css';
// import api from './api';

const url="http://localhost:8090/api/tonners/";
// const api = axios.create({
//   baseURL: 'http://localhost:8090/api/tonners'
// });

class App extends Component{

  state={
    data:[],
    modalInsert: false,
    modalEliminar: false,
    form:{
      id:'',
      serial:'',
      fabricante:'',
      modelo:'',
      local:'',
      quantidade:'',
      dt_atualizacao:'',
      tipoModal:''
    }
  }

  // async componentDidMount(){
  //   const response = await api.get('');

  //   this.setState({data: response.data});
  // }

  peticionGet=()=>{
    axios.get(url).then(response=>{
      this.setState({data: response.data});
    }).catch(error=>{
      console.log(error.message)
    })
  }
  
  peticionPost=async()=>{
    delete this.state.form.id;
  await  axios.post(url,this.state.form).then(response=>{
      this.modalInsert();
      this.peticionGet();
    }).catch(error=>{
      console.log(error.message);
    })
  }

  peticionPut=()=>{
    axios.patch(url+this.state.form.id, this.state.form).then(response=>{
      this.modalInsert();
      this.peticionGet();
    })
  }

  peticionDelete=()=>{
    axios.delete(url+this.state.form.id).then(response=>{
      this.setState({modalEliminar:false});
      this.peticionGet();
    })
  }

  modalInsert=()=>{
    this.setState({modalInsert: !this.state.modalInsert});
  }

  selecionaTonner=(tonner)=>{
    this.setState({
      tipoModal: 'atualizar',
      form: {
        id: tonner.id,
        serial: tonner.serial,
        fabricante: tonner.fabricante,
        modelo: tonner.modelo,
        local: tonner.local,
        quantidade: tonner.quantidade,
        dt_atualizacao: tonner.dt_atualizacao
      }
    })
  }

  handleChange=async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
  }

  componentDidMount(){
    this.peticionGet();
  }

  render(){
    // const { data } = this.state;
    const { form }=this.state;
  return(
<div class="container-xl">
	<div class="table-responsive">
		<div class="table-wrapper">
  <div class="table-title">
    <div class="row">
      <div class="col-sm-6">
        <br />
       <h3> Welcome To The Tonner System</h3>
        <br /><br />
      </div>
      <div class="col-sm-6">
      <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal:'inserir'}); this.modalInsert()}}>ADICIONAR TONNER</button>
			</div>
   </div>
  </div>
  <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>SERIAL</th>
            <th>FABRICANTE</th>
            <th>MODELO</th>
            <th>LOCAL</th>
            <th>QUANTIDADE</th>
            <th>EDITAR</th>
            <th>EXCLUIR</th>
          </tr>
        </thead>
        <tbody>
        {this.state.data.map(tonner=>{
          return(
            <tr>
              <td>{tonner.id}</td>
              <td>{tonner.serial}</td>
              <td>{tonner.fabricante}</td>
              <td>{tonner.modelo}</td>
              <td>{tonner.local}</td>
              <td>{tonner.quantidade}</td>
              <td><button className="btn btn-primary" onClick={()=>{this.selecionaTonner(tonner); this.modalInsert()}}><FontAwesomeIcon icon={faEdit}/></button></td>
              <td><button className="btn btn-danger" onClick={()=>{this.selecionaTonner(tonner); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button></td>
             
            </tr>
          )
        })}
        </tbody>
      </table>
      <div class="clearfix">
				<div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
				<ul class="pagination">
					<li class="page-item disabled"><a href="#">Previous</a></li>
					<li class="page-item"><a href="#" class="page-link">1</a></li>
					<li class="page-item"><a href="#" class="page-link">2</a></li>
					<li class="page-item active"><a href="#" class="page-link">3</a></li>
					<li class="page-item"><a href="#" class="page-link">4</a></li>
					<li class="page-item"><a href="#" class="page-link">5</a></li>
					<li class="page-item"><a href="#" class="page-link">Next</a></li>
				</ul>
			</div>
  </div>
</div>

        <Modal isOpen={this.state.modalInsert}>
          <ModalHeader style={{display: 'block'}}>
            <span style={{float:'right'}} onClick={()=>this.modalInsert()}>X</span>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
              <br />
              <label htmlFor="serial">SERIAL</label>
              <input className="form-control" type="text" name="serial" id="serial" onChange={this.handleChange} value={form?form.serial: ''}/>
              <br />
              <label htmlFor="fabricante">FABRICANTE</label>
              <input className="form-control" type="text" name="fabricante" id="fabricante" onChange={this.handleChange} value={form?form.fabricante:''}/>
              <br />
              <label htmlFor="modelo">MODELO</label>
              <input className="form-control" type="text" name="modelo" id="modelo" onChange={this.handleChange} value={form?form.modelo:''}/>
              <br />
              <label htmlFor="local">LOCAL</label>
              <input className="form-control" type="text" name="local" id="local" onChange={this.handleChange} value={form?form.local:''}/>
              <br />
              <label htmlFor="local">QUANTIDADE</label>
              <input className="form-control" type="text" name="quantidade" id="quantidade" onChange={this.handleChange} value={form?form.quantidade:''}/>
            </div>
          </ModalBody>
          <ModalFooter>
            {this.state.tipoModal==='inserir'?
            <button className="btn btn-success" onClick={()=>this.peticionPost()}>INSERIR</button>:
            <button className="btn btn-primary" onClick={()=>this.peticionPut()}>ATUALIZAR</button>
            }
            
            <button className="btn btn-danger" onClick={()=>this.modalInsert()}>CANCELAR</button>
          </ModalFooter>

        </Modal>

        <Modal isOpen={this.state.modalEliminar}>
          <ModalBody>
            Você Deseja Excluir o Tonner do ID: {form && form.id}?
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>SIM</button>
            <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>NÃO</button>
          </ModalFooter>
        </Modal>
    </div>

  );
}
}
export default App;