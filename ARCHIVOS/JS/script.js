/* let alert = document.getElementByClassName('reservar');
alert = addEventListener( 'click', function(){
 this.alert('reservando la habitacion');
});
 */
/* chat bot js  */
// chatbot.js
// script.js
// script.js

// Función para agregar un mensaje al chat
// Función para agregar un mensaje al chat
// Función para agregar un mensaje al chat
// Función para agregar un mensaje al chat
// script.js



// Función para agregar un mensaje al chat
function addMessageToChat(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Desplazar al final del chat
  }
    addMessageToChat('¡Hola! ¿En qué puedo ayudarte hoy?', 'bot')
  // Función para generar una respuesta del bot usando un switch
  function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
  
    // Usamos el switch para comparar la entrada del usuario
    switch (true) {
      case /hola|hey|buenas/i.test(lowerMessage): // Detectar saludos
        return '¡Hola! ¿Cómo puedo ayudarte hoy en nuestro hotel? 😊\nPuedo ayudarte con reservas, precios, servicios o cualquier otra consulta que tengas.';
        
      case /adiós|chao|hasta luego/i.test(lowerMessage): // Detectar despedidas
        return '¡Adiós! ¡Nos encantará recibirte de nuevo pronto! 😄\nSi tienes más preguntas, ¡estamos siempre disponibles!';
  
      case /reservar|reservas|habitaciones/i.test(lowerMessage): // Detectar preguntas sobre reservas
        return '¡Claro! Para realizar una reserva, por favor, dime las fechas en las que te gustaría hospedarte y el tipo de habitación que prefieres.';
  
      case /precio|cuánto cuesta/i.test(lowerMessage): // Detectar preguntas sobre precios
        return 'Nuestros precios varían según la temporada y el tipo de habitación. Una habitación estándar puede costar desde $100 USD por noche.\n¿En qué fechas estás interesado para darte una cotización exacta?';
  
      case /servicios|ofrecen|comodidades/i.test(lowerMessage): // Detectar preguntas sobre servicios
        return 'En nuestro hotel ofrecemos Wi-Fi gratuito, desayuno buffet, gimnasio, piscina, y transporte al aeropuerto. ¡Tenemos todo lo que necesitas para que tu estancia sea cómoda y agradable!';
  
      case /actividades|qué hacer/i.test(lowerMessage): // Detectar preguntas sobre actividades
        return 'Ofrecemos varias actividades divertidas: clases de yoga, paseos por la ciudad, deportes acuáticos y muchas más. ¿Te gustaría saber más sobre alguna actividad en particular?';
  
      case /ubicación|dirección/i.test(lowerMessage): // Detectar preguntas sobre ubicación
        return 'Nuestro hotel está ubicado en el centro de la ciudad, a solo 10 minutos del aeropuerto y cerca de los principales puntos turísticos. ¡Es el lugar perfecto para explorar la ciudad!';
  
      case /política|cancelación/i.test(lowerMessage): // Detectar preguntas sobre políticas
        return 'Nuestra política de cancelación es flexible. Si cancelas al menos 24 horas antes de tu llegada, recibirás un reembolso completo.\nPuedes revisar más detalles en nuestra página web o preguntarnos en cualquier momento.';
  
      default: // Si no se detecta ninguna coincidencia
        return 'Lo siento, no entiendo esa pregunta. ¿Puedes reformularla o preguntarme sobre algo relacionado con el hotel? 😊';
    }
  }
  
  // Enviar mensaje cuando se hace clic en el botón
  document.getElementById('send-btn').addEventListener('click', function() {
    let userMessage = document.getElementById('user-input').value;
    
    if (userMessage.trim() !== '') {
      addMessageToChat(userMessage, 'user');
      document.getElementById('user-input').value = ''; // Limpiar el campo de entrada
  
      // Respuesta del bot con un retraso
      setTimeout(function() {
        let botResponse = getBotResponse(userMessage);
        addMessageToChat(botResponse, 'bot');
      }, 1000); // El bot responde después de 1 segundo
    }
  });
  
  // Enviar mensaje cuando se presiona la tecla Enter
  document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('send-btn').click(); // Simula el clic del botón de enviar
    }
  });
  
  // Restablecer el chat
  document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('chat-box').innerHTML = ''; // Limpiar el área del chat
    document.getElementById('user-input').value = ''; // Limpiar el campo de entrada
    addMessageToChat('¡Hola! ¿En qué puedo ayudarte hoy?', 'bot'); // Mensaje inicial
  });
  