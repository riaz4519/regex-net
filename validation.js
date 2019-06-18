// validation script here

const inputs = document.querySelectorAll('input');
const patterns = {

    telephone:/^\d{11}$/,
    username:/^[a-z][a-z\d]{4,11}$/,
    password:/^[\w@-]{8,20}$/,
    slug:/^[a-z\d-]{8,20}$/,

};

function validate(field,regex){

    if (regex.test(field.value)){

        field.className = 'valid';
    }else{

        field.className = 'invalid';
    }

}

inputs.forEach((input) =>{

    input.addEventListener('keyup',(e)=>{

        /*console.log(e.target.attributes.name.value);*/

        validate(e.target,patterns[e.target.attributes.name.value]);
    })
});