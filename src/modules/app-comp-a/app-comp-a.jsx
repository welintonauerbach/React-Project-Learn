import './app-comp-a.css'
import React, { Component } from "react";

import TxtControl from '../app-element/AppElement'
import AppControlFrame from '../app-comp-frame/app-control-frame';

export default class ModuleData extends Component {

    // criação de variáveis dentro de state
    state = {
        id: this.props.id,
        name: this.props.name,
        document: this.props.document,
        pass: this.props.pass,
    }

    // contrutor
    constructor(props) {
        super(props)

        this.setName = this.setName.bind(this)
        this.setDocument = this.setDocument.bind(this)
        this.setPass = this.setPass.bind(this)
    }

    setName(e) {
        e.preventDefault()
        this.setState({ name: e.target.value })
    }

    setDocument(e) {
        e.preventDefault()
        this.setState({ document: e.target.value })
    }

    setPass(e) {
        e.preventDefault()
        this.setState({ pass: e.target.value })
    }


    componentDidMount(){
        console.log('Componente foi montado')
    }

    // Será renderizado
    render() {

        const { name, document, pass } = this.state

        return (
            <div  >
                <div>
                    <TxtControl textValue={this.props.name} label={"Nome"} func={this.setName}></TxtControl>
                    <TxtControl textValue={this.props.document} label={"Documento"} func={this.setDocument}></TxtControl>
                    <TxtControl textValue={this.props.pass} label={"Password"} func={this.setPass}></TxtControl>
                </div>
                <div>
                    <h2>Seu Nome: <el-a> {name} </el-a></h2>
                    <h3>Seu Documento: <el-b> {document}</el-b></h3>
                    <h3>Sua Senha: <el-b> {pass}</el-b></h3>
                </div>

            </div>
        )
    }
}




//export default 