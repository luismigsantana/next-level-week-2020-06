import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Select from '../../components/Select';
import api from '../../services/api';

import './style.css'


function TeacherList() {

    const [teachers, setTeachers] = useState([]);

    const [ subject, setSubject ] = useState('')
    const [ week_day, setWeekDay ] = useState('')
    const [ time, setTime ] = useState('')

    async function searchTeacher(e: FormEvent){
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data);

    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponiveis">
                <form id="search-teachers" onSubmit={searchTeacher}>

                    <Select 
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={e => {setSubject(e.target.value)}}
                        options={[
                            {value: "Artes" , label: "Artes"},
                            {value: "Biologia" , label: "Biologia"},
                            {value: "Matemática" , label: "Matemática"},
                            {value: "História" , label: "História"},
                            {value: "Ciências" , label: "Ciências"},
                            {value: "Geografia" , label: "Geografia"},
                            {value: "Educação Fisica" , label: "Educação Fisica"},
                            {value: "Fisica" , label: "Fisica"},
                            {value: "Quimica" , label: "Quimica"},
                            {value: "Português" , label: "Português"}
                        ]}
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da Semana"
                        value={week_day}
                        onChange={e => {setWeekDay(e.target.value)}}
                        options={[
                            {value: "0" , label: "Domingo"},
                            {value: "1" , label: "Segunda"},
                            {value: "2" , label: "Terça"},
                            {value: "3" , label: "Quarta"},
                            {value: "4" , label: "Quinta"},
                            {value: "5" , label: "Sexta"},
                            {value: "6" , label: "Sábado"},
                        ]}
                    /> 
                    
                    <Input 
                        name="time" 
                        type="time" 
                        label="Hora"
                        value={time}
                        onChange={e => {setTime(e.target.value)}}
                    />

                    <button type="submit">
                        Buscar
                    </button>

                </form>
            </PageHeader>

            <main>
                {teachers.map( (teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })} 
            </main>
        </div>
    )
}

export default TeacherList;