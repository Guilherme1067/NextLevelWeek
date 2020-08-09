import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

function TeacherForm () {
    return (
      <div id="page-teacher-form" className="container">
        <PageHeader 
        title="Que incrivel que você quer dar aulas"
        description="O primeiro passo, é preencher esse formulário de inscrição">
        </PageHeader>

        <main>
          <fieldset>
            <legend>Seus Dados</legend>

            <Input name="name" label="Nome Completo"/>
            <Input name="avatar" label="Avatar"/>
            <Input name="whatsapp" label="WhatsApp"/>
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Input name="subject" label="Matéria"/>
            <Input name="cost" label="Custa da sua Hora por aula"/>
          </fieldset>
          <footer>
              <p>
              <img src={warningIcon} alt="Importante"></img>
               Importante! <br />
               Preencha todos os dados
              </p>
              <button type="button">Salvar Cadastro</button>
          </footer>
        </main>
      </div>
    )
}

export default TeacherForm;