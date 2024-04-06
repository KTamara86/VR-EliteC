const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const serviceAccount = require('./elitecarpetsv2-firebase-adminsdk-drvpe-67e933af6e.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://elitecarpetsv2-default-rtdb.europe-west1.firebasedatabase.app"
});

const app = express();

app.use(cors({
  origin: '*'
}));

app.use(bodyParser.json());

const verifyToken = (req, res, next) => {
  const idToken = req.headers.authorization;

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      console.error('Hiba történt a token ellenőrzésekor:', error);
      res.sendStatus(401);
    });
};

app.post('/setCustomClaims', verifyToken, (req, res) => {
  const { uid, claims } = req.body;
  admin
    .auth()
    .setCustomUserClaims(uid, claims)
    .then(() => {
      console.log('Felhasználó claimsek sikeresen beállítva.');
      res.json({ message: 'OK' });
    })
    .catch((error) => {
      console.error('Hiba történt a felhasználó claimsek beállításakor:', error);
      res.sendStatus(500);
    });
});

app.post('/setAddress', verifyToken, (req, res) => {
  const { address } = req.body;

  if (!req.user || !req.user.uid) {
    res.status(401).json({ error: 'Felhasználó nincs bejelentkezve.' });
    return;
  }

  const uid = req.user.uid;

  // Frissítsd a címet a claims objektumban
  const currentClaims = req.user.claims || {};
  currentClaims.address = address;

  // Felhasználó claimsek frissítése
  admin.auth().setCustomUserClaims(uid, currentClaims)
    .then(() => {
      console.log('Felhasználó címe sikeresen frissítve.');
      res.json({ message: 'OK' });
    })
    .catch((error) => {
      console.error('Hiba történt a felhasználó címének frissítésekor:', error);
      res.status(500).json({ error: 'A cím frissítése sikertelen.' });
    });
});

app.get('/users', verifyToken, (req, res) => {
  admin
    .auth()
    .listUsers()
    .then((userRecords) => {
      const users = userRecords.users.map((user) => ({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        claims: user.customClaims,
        photoURL: user.photoURL
        // Egyéb felhasználói adatok ......
      }));
      res.json(users);
    })
    .catch((error) => {
      console.error('Hiba történt a felhasználók lekérésekor:', error);
      res.sendStatus(500);
    });
});

app.get('/users/:uid/claims', verifyToken, (req, res) => {
  const { uid } = req.params;
  admin
    .auth()
    .getUser(uid)
    .then((userRecord) => {
      res.json(userRecord.customClaims);
    })
    .catch((error) => {
      console.error('Hiba történt a felhasználó lekérdezésekor:', error);
      res.sendStatus(500);
    });
});

app.post('/setDisplayName', verifyToken, (req, res) => {
  const { uid, displayName } = req.body;

  // Ellenőrizd, hogy a felhasználó bejelentkezett-e
  if (!req.user || !req.user.uid) {
    res.status(401).json({ error: 'Felhasználó nincs bejelentkezve.' });
    return;
  }

  // Ellenőrizd, hogy csak a saját display nevét próbálja-e módosítani a felhasználó
  if (req.user.uid !== uid) {
    res.status(403).json({ error: 'Nincs jogosultság a módosításra.' });
    return;
  }

  // Felhasználó display névének módosítása
  admin.auth().updateUser(uid, { displayName })
    .then(() => {
      console.log('Felhasználó display neve sikeresen frissítve.');
      res.json({ message: 'OK' });
    })
    .catch((error) => {
      console.error('Hiba történt a felhasználó display nevének frissítésekor:', error);
      res.status(500).json({ error: 'A display név frissítése sikertelen.' });
    });
});

exports.api = functions.https.onRequest(app);