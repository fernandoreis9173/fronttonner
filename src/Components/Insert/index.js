import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="http://localhost:3333/fabricante";

class Insert extends Component{

    state={
      data:[],
      modalInsert: false,
      modalEliminar: false,
      form:{
        id:'',
        fabricante:'',
        modelo:'',
        local:'',
        quantidade:'',
        dt_atualizacao:'',
        tipoModal:''
      }
    }

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
    
    //   peticionPut=()=>{
    //     axios.patch(url+this.state.form.id, this.state.form).then(response=>{
    //       this.modalInsert();
    //       this.peticionGet();
    //     })
    //   }
    
    //   peticionDelete=()=>{
    //     axios.delete(url+this.state.form.id).then(response=>{
    //       this.setState({modalEliminar:false});
    //       this.peticionGet();
    //     })
    //   }
    
      modalInsert=()=>{
        this.setState({modalInsert: !this.state.modalInsert});
      }
    
      selecionaTonner=(tonner)=>{
        this.setState({
          tipoModal: 'atualizar',
          form: {
            id: tonner.id,
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
    
      pesquisar=(tonner)=>{
        this.setState({
          form: {
            id: tonner.id,
            fabricante: tonner.fabricante,
            modelo: tonner.modelo,
            local: tonner.local,
          }
        })
      }
    
    
    
      render(){
        const { form }=this.state;  

        return(
<div class="container-xl">
	<div class="table-responsive">
		<div class="table-wrapper">

{/* <div class="col-sm-6">
      <button className="btn btn-success" name="addtonner" onClick={()=>{this.setState({form: null, tipoModal:'inserir'}); this.modalInsert()}}>ADICIONAR TONNER</button>
</div> */}

<div className="form-group">
              
              <label htmlFor="id">ID</label>
              <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: ''}/>
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
              
              <button type="submit" name="inseretonner" className="btn btn-success" onClick={()=>this.peticionPost()}>INSERIR</button>
              
              {/* {this.state.tipoModal==='inserir'?
            <button type="submit" name="inseretonner" className="btn btn-success" onClick={()=>this.peticionPost()}>INSERIR</button>:
            <button className="btn btn-primary" onClick={()=>this.peticionPut()}>ATUALIZAR</button>
            } */}
            
            <button className="btn btn-danger" onClick={()=>this.modalInsert()}>CANCELAR</button>
               </div>

              {/* <Modal isOpen={this.state.modalInsert}>
          <ModalHeader style={{display: 'block'}}>
            <span style={{float:'right'}} onClick={()=>this.modalInsert()}>X</span>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              
              <label htmlFor="id">ID</label>
              <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: ''}/>
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
            <button type="submit" name="inseretonner" className="btn btn-success" onClick={()=>this.peticionPost()}>INSERIR</button>:
            <button className="btn btn-primary" onClick={()=>this.peticionPut()}>ATUALIZAR</button>
            }
            
            <button className="btn btn-danger" onClick={()=>this.modalInsert()}>CANCELAR</button>
          </ModalFooter>
        </Modal>
        
        <Modal isOpen={this.state.modalEliminar}>
          <ModalBody>
            Você Deseja Excluir o Tonner do ID: {form && form.id}?
            <div className="form-group">
            <label htmlFor="serial">SERIAL</label>
              <input className="form-control" type="text" name="serial" id="serial" disabled="" onChange={this.handleChange} value={form?form.serial: ''} />
              <br />
              </div>

          </ModalBody>
          <ModalFooter>
            <button type="submit" name="deletetonner" className="btn btn-danger" onClick={()=>this.peticionDelete()}>SIM</button>
            <button className="btn btn-secundary" name="naoexlui" onClick={()=>this.setState({modalEliminar: false})}>NÃO</button>
          </ModalFooter>
        </Modal> */}
        </div>
        </div>
        </div>
        )
        
}

}
export default Insert;