const firebaseConfig = {
  apiKey: "AIzaSyD621D7FL73lLGMBR67sN3cL_e8uxdvRyg",
  authDomain: "lets-chat-web-app-f5495.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-f5495-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-f5495",
  storageBucket: "lets-chat-web-app-f5495.appspot.com",
  messagingSenderId: "897401265083",
  appId: "1:897401265083:web:e29295b70d94a45716c29e"
};

  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          massage:msg,
          like:0
    });

    document.getElementById("msg").value = "";
  }

  firebase.database().ref(room_name).push({
    name:user_name,
    massage:msg,
    like:0
  });

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       
    } });  }); }
getData();