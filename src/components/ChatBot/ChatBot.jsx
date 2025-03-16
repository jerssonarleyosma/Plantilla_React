import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import imgChat from './assets/logoChat.jpg';
import { IconPlay } from '../..//IconPlay';
import { IconWindow } from '../..//IconWindow';
import { IconMinus } from '../..//IconMinus';
import { IconReload } from '../..//IconReload';
import DB from './BASES/DB_CHAT.json';
import './styles/ChatBot.scss';

function ChatBot() {
    const inputRef = useRef(null);  // ref del input
    const endOfMessagesRef = useRef(null); // ref del final de los mensajes para el scroll
    const [showThinking, setShowThinking] = useState(false); // variable para mostrar o ocultar el thinking del chat
    const [showChat, setShowChat] = useState(false); // variable para mostrar o ocultar el chat va de la mano con los estilos
    const [chatHistory, setChatHistory] = useState([{ type: 'bot', text: 'Hola, bienvenido. \n\nSelecciona a continuación las opciones para filtrar tu duda o escribe tu pregunta lo más puntual y con mayor contexto posible para poder ayudarte.' }]); // array de objetos que guarda el chat
    const [isPortalActiveChat, setIsPortalActiveChat] = useState(false); //activar o desactivar portal
    const [contentPortalChat, setContentPortalChat] = useState(null); //contenido del portal aca van etiquetas html

    // console.log(chatHistory)  

    const portalRefChat = useRef() // ref del contenedor del portal para hacer que si no se le clickea a el se cierre

    const exceptions = [
        "a", "al", "algo", "algún", "alguna", "algunas", "alguno", "algunos", "ante", "antes",
        "bajo", "bastante", "bien", "cabe", "cada", "casi", "como", "con", "contra", "cual", "cuales",
        "cualquier", "cualquiera", "cuando", "cuanto", "de", "del", "desde", "donde", "durante", "e",
        "el", "ella", "ellas", "ello", "ellos", "en", "entre", "era", "erais", "eran", "eras", "eres",
        "es", "esa", "esas", "ese", "eso", "esos", "esta", "estaba", "estabais", "estaban", "estabas",
        "estad", "estada", "estadas", "estado", "estados", "estamos", "estando", "estar", "estaremos",
        "estará", "estarán", "estarás", "estaré", "estaréis", "estaría", "estaríais", "estaríamos",
        "estarían", "estarías", "estas", "este", "estemos", "esto", "estos", "estoy", "estuve", "estuviera",
        "estuvierais", "estuvieran", "estuvieras", "estuvieron", "estuviese", "estuvieseis", "estuviesen",
        "estuvieses", "estuvimos", "estuviste", "estuvisteis", "estuvo", "ex", "excepto", "fuera",
        "fuerais", "fueran", "fueras", "fueron", "fuese", "fueseis", "fuesen", "fueses", "fui", "fuimos",
        "fuiste", "fuisteis", "habéis", "haber", "había", "habíais", "habíamos", "habían", "habías",
        "habida", "habidas", "habido", "habidos", "habiendo", "habremos", "habrá", "habrán", "habrás",
        "habré", "habréis", "habría", "habríais", "habríamos", "habrían", "habrías", "hace", "haceis",
        "hacemos", "hacen", "hacer", "hacerlo", "haces", "hacia", "haciendo", "hago", "han", "has", "hasta",
        "hay", "haya", "hayamos", "hayan", "hayas", "hayáis", "he", "hecho", "hemos", "hiciera", "hicierais",
        "hicieran", "hicieras", "hicieron", "hiciese", "hicieseis", "hiciesen", "hicieses", "hicieste",
        "hiciesteis", "hizo", "la", "las", "le", "les", "lo", "los", "me", "mi", "mis", "mucho", "muchos",
        "muy", "más", "mí", "mía", "mías", "mío", "míos", "nada", "ni", "nos", "nosotras", "nosotros",
        "nuestra", "nuestras", "nuestro", "nuestros", "o", "os", "otra", "otras", "otro", "otros", "para",
        "pero", "poco", "por", "porque", "que", "quien", "quienes", "qué", "se", "sea", "seamos", "sean",
        "seas", "seremos", "será", "serán", "serás", "seré", "seréis", "sería", "seríais", "seríamos",
        "serían", "serías", "seáis", "si", "sido", "siempre", "siendo", "sin", "sobre", "sois", "solamente",
        "solo", "somos", "son", "soy", "su", "sus", "suya", "suyas", "suyo", "suyos", "sí", "también",
        "tanto", "te", "tendremos", "tendrá", "tendrán", "tendrás", "tendré", "tendréis", "tendría", "tendríais",
        "tendríamos", "tendrían", "tendrías", "tened", "tenemos", "tenga", "tengamos", "tengan", "tengas",
        "tengo", "tenida", "tenidas", "tenido", "tenidos", "teniendo", "tenéis", "ti", "tiene", "tienen",
        "tienes", "todo", "todos", "tu", "tus", "tuve", "tuviera", "tuvierais", "tuvieran", "tuvieras", "tuvieron",
        "tuviese", "tuvieseis", "tuviesen", "tuvieses", "tuvimos", "tuviste", "tuvisteis", "tuvo", "tuya",
        "tuyas", "tuyo", "tuyos", "tú", "un", "una", "uno", "unos", "vosotras", "vosotros", "vuestra", "vuestras",
        "vuestro", "vuestros", "y", "ya", "yo", "él", "éramos"
    ]; // Lista de palabras de excepción

    //palabras clave que dan un mayor puntaje y por ende una mejor respuesta
    const keywordImportance = { 
        "tarjeta": 5, 
        "credito": 5, 
        "reexpedicion": 5,
        "reposicion": 5, 
        "renovacion": 5, 
        "cancelacion": 5,
        "simulacion": 5,
        "rediferido": 5,
        "unificacion": 5,
        "diferido": 5,
        "redencion": 5,
        "cupo": 5,
        "corte": 5,
        "claves": 5,
        "saldos": 5,
        "movimientos": 5,
        "aclaracion": 5,
        "bloqueo": 5,
        "bloqueos": 5,
        "subbloqueos": 5,
        "no": 5,
        "sujeta": 5,
        "card": 5,
        "retencion": 5,
        "open" : 5,
        "jersson": 99,
    };


    // carga la primera tanda de opciones y carga 2 eventos para cerrar el portal ya sea por el click por fuera o el Escape
    useEffect(() => {
        cargarOptionsInicio(DB);

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsPortalActiveChat(false);
            }
        };
  
        const handleClickOutside = (event) => {

            if (portalRefChat.current && !portalRefChat.current.contains(event.target)) {
                setIsPortalActiveChat(false);
            }
        };
  
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);
  
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []); 


    // cada vez que abrimos el chat y focuseamos el input
    useEffect(() => {
        if (showChat) {
            
            inputRef.current.focus();

        }
    }, [showChat]);

    // agregamos el scroll al final de los mensajes
    useEffect(() => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatHistory]);


    //se le añade o quita la clase active a portal general dependiendo si el hook isPortalActive es true o false
    useEffect(() => {
        const portalElement = document.getElementById('portalGeneral');

        if (isPortalActiveChat) {
            portalElement.classList.add('active');
        } else {
            portalElement.classList.remove('active');
        }
    }, [isPortalActiveChat]);



    // funcion para agregar el bot message // jersson aca se agrega la estructuras de datos para mostrar las funcionalidades y despues en el componente ver como se itera
    const addBotMessage = (obj, bottype) => {

        if(bottype === "user"){

            setChatHistory(
                chatHistory => [
                    ...chatHistory, 
                    { 
                        type: bottype, 
                        text: obj.RESPUESTA? obj.RESPUESTA : null
                        
                    }
                ]
            );

        } else if (bottype === "bot"){

            setShowThinking(true);

            setTimeout(() => {

                setShowThinking(false);

                setChatHistory(
                    chatHistory => [
                        ...chatHistory, 
                        { 
                            type: bottype, 
                            text: obj.RESPUESTA ? obj.RESPUESTA : null,
                            option: obj.OPTION ? {titulo: obj.OPTION.titulo, options: obj.OPTION.options, indice: obj.OPTION.indice, arrai: obj.OPTION.arrai} : null,
                            image: obj.IMAGEN ? {nombreimagen: obj.IMAGEN, formato: obj['FORMATO IMAGEN']}: null
                        }
                    ]
                );
                

            }, 1500);
        }

    }


    // funcion que hace un array palabra por palabra ignorando las excepciones en minuscula y si simbolos o acentos
    //split true retorna un array de strings de cada palabra
    //split false retorna un string con muchas palabras
    const normalizeText = (text, split = true) => {
        let normalized = text
            .normalize("NFD") //separamos los caracteres asi [á,é,ó,í,ú].normalize("NFD") ==>> [a+', e+', o+', i+', u+']
            .replace(/[\u0300-\u036f]/g, "") //se borran los acentos
            .replace(/[^\w\s]/g, "") // este simbolo ^ no indica al inicio indica que todo lo que no este a continuacion se descarta en este caso \w todo lo que no sea alfanumericos y raya al piso y \s todos los espacios como salto de linea tabular etc
            .replace(/\n/g, "") //los saltos de linea se reemplazan por espacio para que este una sola linea
            .replace(/_/g, " ") //como mas arriba gracias a \w admite raya al piso aca se la borro
            .toLowerCase() //minusculas
            .trim(); // borra espacios al inicio y al final

        if (split) {
            return normalized.split(/\s+/).filter(word => !exceptions.includes(word)); // retorna las palabras que no esten en la lista de excepciones
        } else {
            return normalized;
        }
    }

    // funcion que da mas puntaje y mas a palabras clave para mejorar las respuestas
    const searchInDB = (normalizedWords) => {

        //se itera sobre la base de datos para con cada palabra del array normalizedWords se le de un puntaje a la mejor objeto de la base de datos
        //retorna un array de objetos con su puntaje
        const scores = DB.map(entry => {

            let score = 0;

            normalizedWords.forEach(word => {

                Object.values(entry).forEach(value => {
                    let normalizeWord = normalizeText(value, false);
                    // console.log(normalizeWord)

                    //la clase RegExp recive 2 parametros el segundo parametro (i) es para que no distinga entre mayusculas y minusculas 
                    if (new RegExp("\\b" + word + "\\b", "i").test(normalizeWord)) {
                        score += keywordImportance[word] || 1;
                    }
                });

            });

            return { entry, score };

        });

        //esta constante es importante porque descarta las que tienen puntaje 0 en caso de no encontrar coincidencias nos muestre un mensaje de no encontrar nada y no todas las respuestas
        const filteredEntries = scores.filter(item => item.score > 0);

        // se ordena de mayor a menor puntaje en el array    
        filteredEntries.sort((a, b) => b.score - a.score);

        //se valida si filteredEntries tiene algo y de ser asi toma el valor numero del primer score del array de objetos y si no retorna 0
        const maxScore = filteredEntries.length > 0 ? filteredEntries[0].score : 0;

        //por ultimo lo que retorna son las coincidencias que tengan el puntaje maximo y solo retorna las respuestas de ese objeto si el valor es 0 no retorna nada porque antes se quito los que tenian 0  
        return filteredEntries.filter(item => item.score === maxScore).map(item => item.entry);
    }

    
    // funcion que maneja el input y muestra las respuestas del bot
    const handleInput = (event) => {
        event.preventDefault();
        const userInput = inputRef.current.value; // no uso even.target.value o guardo en una variable porque no quiero renderizar todo sin nesesidad
        if (!userInput.trim()) return; // este return lo que hace es que si no hay nada en el chat haga un corto en la funcion 

        //si hay algo agrega el chat al historial  // jerssson aca se puede usar la funcion de mensajeria
        addBotMessage({RESPUESTA: userInput}, "user");

        //retorna las palabras del input en un array con cada palabra
        const normalizedWords = normalizeText(userInput);

        //retorna las respuestas de la base de datos con mejores coincidencias (mayor puntaje)
        const responses = searchInDB(normalizedWords);

        //este condicional agrega el mensaje del bot al historial
        if (responses.length > 0) {
            responses.forEach(response => addBotMessage(response, "bot"));  
        } else {
            addBotMessage({RESPUESTA: "No pude encontrar una respuesta adecuada a tu pregunta."}, "bot");
        }

        //limpia el input para poder usarlo de nuevo y mejora performance
        inputRef.current.value = '';
    }

    // funcion para resetear el chat y mostrar la bienvenida y las opciones
    const resetChat = (event) => {
        event.preventDefault();
        setChatHistory([]);
        setShowThinking(true);
        setTimeout(() => {

            setShowThinking(false);
            
            inputRef.current.focus();
            console.log(DB[0]["TITULO 1"])
            const allOptions = [...new Set(DB.map((obj) => obj["1"]))];
            const title = DB[0]["TITULO 1"] || "Selecciona alguna de las siguientes opciones para empezar:";

            setChatHistory([{ type: 'bot', text: 'Hola, bienvenido. \n\nSelecciona a continuación las opciones para filtrar tu duda o escribe tu pregunta lo más puntual y con mayor contexto posible para poder ayudarte.' }, {"type": 'bot', option: {"titulo": title, "options": allOptions, "indice": 1, "arrai": DB}}]);
    
        }, 1500)
    
    }

    //cargar opciones de inicio
    const cargarOptionsInicio = (data) => {
        
        const allOptions = [...new Set(data.map((obj) => obj["1"]))];
        const title = data[0]["TITULO 1"] || "Selecciona alguna de las siguientes opciones para empezar:";
    
        //se le pasa el indice y el array para despues seguir iterando con otra funcion esta se hace asi porque si uso el bot renderiza 2 veces en cambio aca sobre escribe 2 veces el inicio del chat y sus opciones
        setChatHistory([...chatHistory, {"type": 'bot', option: {"titulo": title, "options": allOptions, "indice": 1, "arrai": DB}}]);
    
    };
    

    //carga las demas opciones en cadena en donde recive un array para filtrar y enviar como ogjeto y sea iterable y funcional y un titulo para saber que opcion se selecciono
    const cargarOpciones = (data, titulo) => {

        //se suma uno al indice para que en la otra iteracion tenga sus opciones basado en nivel este 
        const indice  = data.indice + 1

        //se quitan las que no tengan que ver con la seleccion en su nivel y com oya recibe otro array filtrado del anteriorr este ya esta mas que descartado los anteriores niveles
        const arrayfiltrado = data.arrai.filter((element) => {
            
            if (element[data.indice] == titulo) {
                return element
            }
        })

        //se valida si en el array que recibe esta funcion  no existe el siguiente nivel si existe  carga las opciones con su array filtrado y su nuevo indice para otra iteradcion y si no muestra la respuesta DESDE EL ARRAY YA FILTRADO!!!!
        if (arrayfiltrado.length == 1 && !arrayfiltrado["0"][indice]) {
            //jersson aca si agregar manualmente segun el json la respuesta directa del input ya esta con el json pero este no
            addBotMessage(
                {
                    "RESPUESTA": arrayfiltrado["0"]["RESPUESTA"], 
                    "IMAGEN": arrayfiltrado["0"]["IMAGEN"], 
                    "FORMATO IMAGEN": arrayfiltrado["0"]["FORMATO IMAGEN"]
                }, 
                "bot"
            )
        } else {
            const opciones = [...new Set(arrayfiltrado.map((ele, ind) => {
                if (ele[indice]) {
                    return ele[indice]  
                }
            }))]

            const title = arrayfiltrado[0]["TITULO " + indice] || titulo;
    
            addBotMessage({"OPTION": {"titulo": title, "options": opciones, "indice": indice, "arrai": arrayfiltrado}}, "bot")
        }

        
    }

    // jersson esta funcion recibe datos para que el portal los cargue 
    const cargarcontenidoportal = (arra, typeConten) => {

        if(typeConten == "image") {
           
            setContentPortalChat(<img src={`noTocar/imagenes/chatbot/${arra.nombre}.${arra.formato}`} alt={arra.nombre} />)
            
        } else {

            setContentPortalChat(null)
        }

    }


    return (
        <div className={`Chatbot ${showChat ? 'Chatbot--open' : ''}`}>
            
            <div className='Chatbot__header' onClick={!showChat ?  () => setShowChat(!showChat) : null}>
                <figure><img src={imgChat} alt="logo del chat" /></figure>
                <h2>Chatbot</h2>
                <span className='Chatbot__chat-reset' onClick={(e) => {
                    resetChat(e);
                }}>
                    <IconReload />
                </span>
                <span onClick={() => setShowChat(!showChat)}>
                    {showChat ? <IconMinus /> : <IconWindow />}
                </span>
                <div className='Chatbot__header-welcome'>
                    <div>
                        <div>¡Hola!</div>
                    </div>
                    <div>¿En qué puedo ayudarte?</div>
                </div>
            </div>
            <div className='Chatbot__chat'>
                {chatHistory.map((msg, index) => (
                    <div key={index} className={`Chatbot__chat-message ${msg.type}`}>
                        {
                            msg.text &&
                            <p  className={'Chatbot__chat-message-text'}>
                                {msg.text}
                            </p>
                            
                        }
                        {
                            msg.option &&
                            <div className={'Chatbot__chat-message-options'}>
                                <h3>{msg.option.titulo}</h3>
                                <ol>
                                    {msg.option.options.map((item, index) => (
                                        
                                        <li key={index} onClick={() => {

                                            addBotMessage({"RESPUESTA": item}, "user")
                                            cargarOpciones(msg.option, item)
            
                                        }}>

                                            {item}

                                        </li>
                                    ))}
                                </ol>
                            </div>
                        }
                        {
                            msg.image &&
                            <div 
                                className={'Chatbot__chat-message-image'} 
                                onClick={() => {
                                    setIsPortalActiveChat(true)
                                    cargarcontenidoportal({"nombre": msg.image.nombreimagen, "formato": msg.image.formato}, "image")

                                }}
                            >
                                <img src={`noTocar/imagenes/chatbot/${msg.image.nombreimagen}.${msg.image.formato}`} alt={msg.image.nombreimagen} />
                            </div>
                        }
                    </div>
                ))}
                {showThinking && 
                    <div className="Chatbot__chat-thinking">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                }
                <div ref={endOfMessagesRef} />
            </div>
            <div className='Chatbot__input'>
                <input type="text" placeholder="Escribe algo..." ref={inputRef} onKeyDown={event => event.key === 'Enter' && handleInput(event)} />
                <span onClick={event => handleInput(event)}>
                    <IconPlay />
                </span>
            </div>

            {isPortalActiveChat && ReactDOM.createPortal(
                <div className='portal-chat' ref={portalRefChat}>
                    {contentPortalChat}
                </div>,
                document.querySelector('#portalGeneral')
            )}
        </div>
    );
}

export { ChatBot };
