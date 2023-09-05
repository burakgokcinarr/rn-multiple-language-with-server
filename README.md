# React Native Multiple Language With Server Base
React Native ile Çoklu dil desteğinin sunucu üzerinde ( Node.JS ) hem dosya hemde MongoDB veritabanı üzerinden işlenmesi

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

  
## Kullanılan Teknolojiler 

***** Client *****
* Expo CLI
* React Native 
* i18n
  
***** Server *****
* Express
* MongoDB 

## Bilgisayarınızda Çalıştırın

* Projeyi klonlayın

```bash
  git clone https://github.com/burakgokcinarr/rn-multiple-language-with-server.git
```

* Proje dizinine gidin

```bash
  cd app-project
```

* Proje için gerekli bağımlılıkları yükleyin ( Hem Client hemde Server için )

```bash
  cd client
  npm install or yarn install
  and
  cd server
  npm install or yarn install
```

* MongoDB Bağlantısını düzenleyin ( USERNAME ve PASSWORD )
 ```bash
    const MONGODB_URI    = "mongodb+srv://<USERNAME>:<PASSWORD>@tbl-language.fyjgnj1.mongodb.net/";
```

* Sunucuyu Başlatın ( Server için )

```bash
  cd server
  npm start
```

* Eğer dosya sistemi üzerinden dil değerlerini getirmek iserseniz ( varsayılan MongoDB üzerindendir )
```bash
  [project-name] -> client -> languages -> i18n.js dosyası içerisinde "loadPath" değiştirin.
```

* Cihazlarda çalıştırın ( Client için )

```bash
  cd client
  npx expo start
```
```bash
  for iOS           => Press Keyboard (i)
  for Android       => Press Keyboard (a)
  or
  Your Real Device  => Expo App Scan QRCode
```

* MongoDB Collection Schema
  
<img src="https://github.com/burakgokcinarr/rn-multiple-language-with-server/blob/main/schema.png" alt="img" width="60%" height="400"> <img src="https://github.com/burakgokcinarr/rn-multiple-language-with-server/blob/main/schema2.png" alt="img" width="30%" height="400">

<img src="https://github.com/burakgokcinarr/rn-multiple-language-with-server/blob/main/demo.gif" alt="img" width="400" height="700" resizeMode="cover">
