import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
      apiKey: "AIzaSyDB85yTmNvPCHASsJrse227oUUpmwaa6ZQ",
      authDomain: "kwitter2-f0c1c.firebaseapp.com",
      projectId: "kwitter2-f0c1c",
      storageBucket: "kwitter2-f0c1c.appspot.com",
      messagingSenderId: "563959667504",
      appId: "1:563959667504:web:9792611f8d8209f73f06f5",
      measurementId: "G-3YBQGPQKC7"
    };
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    
function addroom()
{
      Room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_name).updata({
         purpose : "adding room name"
      });

         localStorage.setItem("room_name" , Room_name);

         window.location = "kwitter_page.html"; 
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" oneclick='redirectToRoomName(This.id)' >#" + Room_names  +"</div><hr>";
      document.getElementById("outrput").innerHTML += row
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kiwitter_page.html";
}

function logout(name)
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html"
}

function send()
{
      msg= document.getElementById("msg").value;
      firebase.database().ref(Room_name).push({
        name:user_name,
        message:msg,
        like:0
       }); 

      document.getElementById("msg").value = "";
}

function updataLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_like = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(Room_name).child(message_id).update({
        like : updated_like   
      });
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html")
}