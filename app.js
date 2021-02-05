document.getElementById('but-send').addEventListener('click', sendQuestion, false);
var stringIn = "";
var stringOut = "";


function sendQuestion() {
    var question = '';    
    console.log(question);
    question = document.getElementById('preguntas').value;

    
    if (question === 'Contame un poco de vos.'){
        document.getElementById('chat').innerHTML=`
        <div id="chat">
            <div id="msj_user" >
                Contame un poco de vos.
            </div>
            <div id="msj_bot">
                Tengo 24 años y vivo en Parque Patricios. Estoy estudiando la tecnicatura de Análisis de Sistemas y me encuentro constantemente realizando cursos de manera autodidacta. Me apasiona aprender y sentirme en constante evolución.
            </div>`;
    } else if(question === 'Que lenguajes de programación sabes?'){
        document.getElementById('chat').innerHTML=`
        <div id="chat">
            <div id="msj_user" >
                Que lenguajes de programación sabes?
            </div>
            <div id="msj_bot">
                Mi formación académica fue con VisualFox y SQL. Pero también realizamos algunos proyectos con Java, mas que nada la parte de backend.
                Ahora estoy aprendiendo a full JavaScript. Estoy realizando un curso pago en Udemy de desarrollador JavaScript FullStack en este momento (4/2/2021). El mismo es <a href="https://www.udemy.com/course/universidad-javascript-angular-react-vue-typescript-html-css-bootstrap/">IR AL CURSO</a>. 
                Ya terminé la parte de JavaScript del curso.
                 Ademas de los conocimientos que ya tengo en HTML y CSS y que sigo profundizando en este curso.
                 En la facultad he cursado bases de datos (de manera teorica y practica), así tambien la programación estructurada y la POO.
            </div>`;
    }else if(question === 'Qué esperás de tu primer trabajo IT?'){
        document.getElementById('chat').innerHTML=`
        <div id="chat">
            <div id="msj_user" >
                Qué esperás de tu primer trabajo IT?
            </div>
            <div id="msj_bot">
                Espero entrar en una empresa que me permita crecer en mi carrera como profesional IT, tanto en lo personal como dentro de la empresa. Quiero profundizar y aplicar todos mis conocimientos.
                Me gustaría crecer en el rubro y sé que tengo las condiciones para hacerlo.

            </div>`;
    }else if(question === 'En que instancia de carrera te encontrás?'){
        document.getElementById('chat').innerHTML=`
        <div id="chat">
            <div id="msj_user" >
                En que instancia de carrera te encontrás?
            </div>
            <div id="msj_bot">
                Me encuentro en el tercer y ultimo año de la tecnicatura.
            </div>`;
    }else if(question === 'Hablame de tus virtudes.'){
    document.getElementById('chat').innerHTML=`
    <div id="chat">
        <div id="msj_user" >
            Hablame de tus virtudes.
        </div>
        <div id="msj_bot">
            Soy una persona versátil que está en constante aprendizaje. Necesito sentirme productivo a diario. También me gusta ver que estoy avanzando en lo que esté haciendo, independientemente de la velocidad en que lo haga.
        </div>`;
    }else if(question === 'Cómo sería tu trabajo ideal?'){
        document.getElementById('chat').innerHTML=`
        <div id="chat">
            <div id="msj_user" >
                Cómo sería tu trabajo ideal?
            </div>
            <div id="msj_bot">
                Un trabajo ideal sería uno que me permita crecer dentro del mismo en base a objetivos. Con buenas compañías y gente con la que se disfrute trabajar en equipo. Una modalidad con varios días de home-office semanales sería muy práctico para mí.
            </div>`;
    }else if(question === 'Te cuesta relacionarte con la gente? Sos tímido?'){
        document.getElementById('chat').innerHTML=`
        <div id="chat">
            <div id="msj_user" >
                Te cuesta relacionarte con la gente? Sos tímido?
            </div>
            <div id="msj_bot">
                No me considero para nada tímido. Expreso mis pensamientos sin miedo al qué dirán. Suelo tener demasiado respeto hacia las personas muy mayores amí.
            </div>`;
    }else if(question === 'Me gustaria ver tu CV y tu vídeo presentación.'){
        document.getElementById('chat').innerHTML=`
        <div id="chat">
            <div id="msj_user" >
                Me gustaria ver tu CV y tu vídeo presentación.
            </div>
            <div id="msj_bot">
                Mi CV podes verlo en <a href="https://drive.google.com/file/d/1qHOLlpSIexR8IRMQVRAKRdVaMOln2ry-/view?usp=sharing"> Haciendo click aquí</a>
                El vídeo presentación (próximamente)
            </div>`;
    }else if(question === 'He finalizado. Hasta la próxima!!'){
        document.getElementById('chat').innerHTML=`
        <div id="chat">
            <div id="msj_user" >
                He finalizado. Hasta la próxima!!
            </div>
            <div id="msj_bot">
                Antes de que te vayas queria decirte que cualquier feedback me serviría mucho (como por ejemplo alguna pregunta para agregar, o profundizar una respuesta).
                Hasta la próxima!! No dudes escribirme a mi e-mail seba.sc@live.com.ar
                Exitos!!
            </div>`;
    }
}

sendQuestion();
