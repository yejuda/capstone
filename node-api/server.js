const express = require('express');
const sharp = require('sharp');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const app = express();

const PORT = 3000;
var PythonShell = require('python-shell');
const spawn = require('child_process').spawn;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const uploadDir = path.join(__dirname, 'public', 'assets', 'uploads');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, 'uploaded_image.jpg');
  }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  const fileName = file.filename;
  const targetPath = path.join(uploadDir, fileName);

  sharp(file.path)
    .resize(224, 224)
    .jpeg({ quality: 90 })
    .toFile(targetPath.replace('.jpg', '-resized.jpg'), (err, info) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error occurred while processing image' });
      }

      res.json({ message: 'Image uploaded successfully' });
    });
});

app.get('/run-python', (req, res) => {
  const python = spawn('python', ['public/assets/model/example.py', 'arg1', 'arg2']);
  let result = '';
  let natureFound = false;
  let cherryblossomFound = false; //값이 발견되었는지 여부를 저장하는 변수
  let city_riverFound = false;
  let mapleFound = false;
  let picnicFound = false;
  let stone_wallFound = false;
  let towerFound = false;
  let amusement_parkFound = false;
  let aquariumFound = false;
  let buildingFound = false;
  let busy_streetFound = false;
  let cable_carFound = false;
  let castleFound = false;
  let cruise_shipFound = false;
  let ice_rinkFound = false;
  let night_viewFound = false;
  let railwayFound = false;
  let sunsetFound = false;
  let theaterFound = false;
  let traditional_cultureFound = false;
  let waterparkFound = false;

  python.stdout.on('data', function (chunk, error) {
    if (error) {
      console.log("에러발생 ::: ", error);
      res.send("에러발생 ::: " + error);
    } else {
      const textChunk = chunk.toString('utf8');
      console.log("return value ::: " + textChunk);
      result += textChunk; // 결과 데이터를 누적하여 저장

      if (textChunk.includes('nature')) {
        natureFound = true; //값을 발견하면 변수를 true로 설정
      }
      if (textChunk.includes('cherryblossom')) {
        cherryblossomFound = true;
      }
      if (textChunk.includes('city_river')) {
        city_riverFound = true;
      }
      if (textChunk.includes('maple')) {
        mapleFound = true;
      }
      if (textChunk.includes('picnic')) {
        picnicFound = true;
      }
      if (textChunk.includes('stone_wall')) {
        stone_wallFound = true;
      }
      if (textChunk.includes('tower')) {
        towerFound = true;
      }
      if (textChunk.includes('amusement_park')) {
        amusement_parkFound = true;
      }
      if (textChunk.includes('aquarium')) {
        aquariumFound = true;
      }
      if (textChunk.includes('building')) {
        buildingFound = true;
      }
      if (textChunk.includes('busy_street')) {
        busy_streetFound = true;
      }
      if (textChunk.includes('cable_car')) {
        cable_carFound = true;
      }
      if (textChunk.includes('cherryblossom')) {
        cherryblossomFound = true;
      }
      if (textChunk.includes('castle')) {
        castleFound = true;
      }
      if (textChunk.includes('cruise_ship')) {
        cruise_shipFound = true;
      }
      if (textChunk.includes('ice_rink')) {
        ice_rinkFound = true;
      }
      if (textChunk.includes('night_view')) {
        night_viewFound = true;
      }
      if (textChunk.includes('railway')) {
        railwayFound = true;
      }
      if (textChunk.includes('sunset')) {
        sunsetFound = true;
      }
      if (textChunk.includes('theater')) {
        theaterFound = true;
      }
      if (textChunk.includes('traditional_culture')) {
        traditional_cultureFound = true;
      }
      if (textChunk.includes('waterpark')) {
        waterparkFound = true;
      }
    }
  });

  python.stdout.on('end', function () {
    if (natureFound) {
      res.send(result); //값이 발견되었을 때 결과 데이터를 클라이언트에게 보냅니다.
    }
    if (cherryblossomFound) {
      res.send(result);
    }
    if (city_riverFound) {
      res.send(result);
    }
    if (mapleFound) {
      res.send(result);
    }
    if (picnicFound) {
      res.send(result);
    }
    if (stone_wallFound) {
      res.send(result);
    }
    if (towerFound) {
      res.send(result);
    }
    if (amusement_parkFound) {
      res.send(result);
    }
    if (aquariumFound) {
      res.send(result);
    }
    if (buildingFound) {
      res.send(result);
    }
    if (busy_streetFound) {
      res.send(result);
    }
    if (cable_carFound) {
      res.send(result);
    }
    if (castleFound) {
      res.send(result);
    }
    if (cruise_shipFound) {
      res.send(result);
    }
    if (ice_rinkFound) {
      res.send(result);
    }
    if (night_viewFound) {
      res.send(result);
    }
    if (cherryblossomFound) {
      res.send(result);
    }
    if (railwayFound) {
      res.send(result);
    }
    if (sunsetFound) {
      res.send(result);
    }
    if (theaterFound) {
      res.send(result);
    }
    if (traditional_cultureFound) {
      res.send(result);
    }
    if (waterparkFound) {
      res.send(result);
    }
  });
});




app.listen(3000, function () {
  console.log('Server is listening on port 3000');
});
