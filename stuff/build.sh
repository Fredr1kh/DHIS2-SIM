# before running this, you should have run 'npm install'

alias npm-exec='PATH=$(npm .bin):$PATH'

npm-exec babel -o build/main.js src/main.jsx
npm-exec browserify -o dist/main.js build/main.js