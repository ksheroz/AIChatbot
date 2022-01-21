const hostname = "http://localhost:8080/";
const API = {
  GetChatbotResponse: async message => {
    const resp = await (await fetch(`${hostname}send_message/${message}`)).text()
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (resp === "hi") resolve("Welcome to chatbot!");
        else resolve(resp);
      },0);
    });
  }
};

export default API;
