import  { React, useEffect } from 'react';
//import { useForm } from "react-hook-form";
//import { yupResolver } from '@hookform/resolvers/yup';
//import * as yup from 'yup';
//import { string } from 'yup/lib/locale';



const ProjectForm = ()=>{
const [projectData, setProjectData] = useState({
    title:'',
    creator:'',
    summary:'',
    body:'',
    selectedFile:'',
    likes:'',
    creationDate:'',
    tags:''

})

const handleSubmit = () =>{
    
}

    return (
     <form onSubmit = {handleSubmit} className = 'project-form'>
         <fieldset>
         <label>
             Creator:
             <input type='text' placeholder='Project creator'/>
         </label>
         <label>
             Title:
             <input type='text' placeholder='Project title'/>
         </label>
         <label>
             Project Summary:
             <input type='text' placeholder='Project summary'/>
             <label>
             Project body:
             <textarea type='text' placeholder='Project Body'/>
         </label>
         </label>
         </fieldset>
         
     </form>
    )
}




export default ProjectForm;