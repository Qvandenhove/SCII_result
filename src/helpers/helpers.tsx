// Firebase
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBQxQO1R-hCLQkk01oDyrEDmbACIdh9DtM",
  authDomain: "scii-result.firebaseapp.com",
  databaseURL: "https://scii-result.firebaseio.com",
  projectId: "scii-result",
  storageBucket: "scii-result.appspot.com",
  messagingSenderId: "915524802435",
  appId: "1:915524802435:web:294a1574a6c147ca2188b6"
};
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default {
    async getMatchs() {
        const matchs = await db.collection('Match').get()
        let matchList : any = []
        matchs.forEach(match => {
            matchList.push({'data': match.data(), id: match.id})
        })
        let dayMatchs = await Promise.all(matchList.map(async (match : any) => {
            return {'player1': match.data.Player1, 'player2': match.data.Player2, 'result': match.data.Result, 'id':match.id, }
        })) 
        return dayMatchs;
    }
}