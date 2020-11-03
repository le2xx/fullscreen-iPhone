# Simple Frontend Starter Kit

This app for frontend development.

## Start project

### 1 Clone repository

```
git clone https://github.com/le2xx/simple-frontend-starter-kit-with-ts.git new-project
cd new-project
```

### 2 Install modules

```
npm install
```

### 3 Start template

```
npm run start
http://localhost:2020 
```

### Building project

```
npm run build
```

### Deploy building project in GitHub Pages

```
npm run github:deploy
```

### Building and deploy project in GitHub Pages

```
npm run github:build:deploy
```

## File and folder structure

```
├── src/                                    #
│   ├── assets/                             # 
│   │   ├── icons/                          # Directory for icons files
│   │   ├── fonts/                          # Directory for font files
│   │   └── images/                         # Directory for image files
│   ├── scss/                               #
│   │   ├── fonts.scss                      # Stylus file for include fonts  
│   │   └── variables.scss                  # Stylus file for making variables
|   ├── index.html                          # Index html template
|   ├── main.scss                           # Main scss file
│   └── app.ts                              # Main app JS file
├── .gitignore                              #
├── package.json                            #
├── README.md                               #
└── webpack.conf.js                         # Webpack config file

```

## Todo

* Add css autoprefixer

## Links
https://developer.apple.com/documentation/webkit/safari_tools_and_features/delivering_video_content_for_safari

https://developer.apple.com/documentation/webkitjs/htmlvideoelement/1633500-webkitenterfullscreen