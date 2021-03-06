import React, {useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input'
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import api from '../../services/api';

import './styles.css'
import { listenerCount } from 'process';


function TeacherForm () {
  const history = useHistory();

  const [name,setName] = useState('')
  const [avatar,setAvatar] = useState('')
  const [whatsapp,setWhatspp] = useState('')
  const [bio,setBio] = useState('')

  const[subject,setSubject] = useState('')
  const[cost,setCost] = useState('')



  const [scheduleItems, setScheduleItems] = useState(
    [
      { week_day: 0, from: '', to: '' }
    ]);
  
    function addNewScheduleItem(){
      setScheduleItems([
        ...scheduleItems,
        { week_day: 0, from: '', to: '' }
      ])
    }

      function setScheduleItemValue(postion: number, field: string, value: string){
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
          if(postion === index){
            return {...scheduleItem, [field]: value}
          }
          return scheduleItem
        })
        setScheduleItems(updateScheduleItems)
      }


      function handleCreateClasse(e: FormEvent){
        e.preventDefault();

        api.post('classes',{
             name,
             avatar,
             whatsapp,
             bio,
             subject,
             cost: Number(cost),
             schedule: scheduleItems
        }).then(() => {
             alert('Cadastro efetuado com Sucesso')
             history.push("/")
        }).catch(() => {
             alert("Erro no cadastro")
        })
      }

    return (
      <div id="page-teacher-form" className="container">
        <PageHeader 
        title="Que incrivel que você quer dar aulas"
        description="O primeiro passo, é preencher esse formulário de inscrição">
        </PageHeader>

        <main>
        <form onSubmit={handleCreateClasse}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input 
               name="name" 
               label="Nome Completo" 
               value={name} 
               onChange={(e) => { setName(e.target.value)}}
            />
            <Input
               name="avatar" 
               label="Avatar"
               value={avatar}
               onChange={(e) => {setAvatar(e.target.value)}}
            />
            <Input 
               name="whatsapp" 
               label="WhatsApp"
               value={whatsapp}
               onChange={(e) => setWhatspp(e.target.value)}
            />
            <Textarea 
               name="bio" 
               label="Biografia"
               value={bio}
               onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select 
              name="subject" 
              label="Matéria"
              value={subject}
              onChange={(e) => {setSubject(e.target.value)}}
              options={[
                {value:'Artes', label:'Artes' },
                {value:'Biologia', label:'Biologia' },
                {value:'Física', label:'Física' },
                {value:'Geografia', label:'Geografia' },
                {value:'História', label:'História' },
                {value:'Matemática', label:'Matemática' },
                {value:'Português', label:'Português' },
                {value:'Química', label:'Química' },
            ]}
            />
            <Input 
               name="cost" 
               label="Custa da sua Hora por aula"
               value={cost}
               onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>
           
          <fieldset>
              <legend>Horários disponíveis
                <button type="button" onClick={addNewScheduleItem}> 
                  + Novo Horário
                </button> 
              </legend>
              
              {scheduleItems.map((scheduleItem, index)=> {
                return (
                  <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                      name="week_day" 
                      label="Dia da semana"
                      value={scheduleItem.week_day}
                      onChange={e => setScheduleItemValue(index, 'week_day', e.target.value )}
                      options={[
                        {value:'0', label:'Domingo' },
                        {value:'1', label:'Segunda-feira' },
                        {value:'2', label:'Terça-feira' },
                        {value:'3', label:'Quarta-feira' },
                        {value:'4', label:'Quinta-feira' },
                        {value:'5', label:'Sexta-feira' },
                        {value:'6', label:'Sabado' },
                      ]}
                  />
                    <Input 
                      name="from" 
                      label="Das"
                      type="time"
                      value={scheduleItem.from}
                      onChange={e => setScheduleItemValue(index, 'from', e.target.value )}       
                     />

                    <Input 
                      name="to"   
                      label="Até"
                      type="time"
                      value={scheduleItem.to}
                      onChange={e => setScheduleItemValue(index, 'to', e.target.value )}
                    />
                </div>
                  )}
                  )}
            </fieldset>
          
          <footer>
              <p>
              <img src={warningIcon} alt="Importante"></img>
               Importante! <br />
               Preencha todos os dados
              </p>
              <button type="submit">Salvar Cadastro</button>
          </footer>
          </form>
        </main>
      </div>
    )
}

export default TeacherForm;