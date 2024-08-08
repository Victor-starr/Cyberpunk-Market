@echo off
setlocal

:: Check if node_modules exists, if not, run npm install
if not exist "node_modules" (
    echo node_modules folder not found. Running npm install...
    npm install
    start "" cmd /c "npm run start"
    cd server
    start "" cmd /c "node server.js"
    start http://localhost:3000

endlocal
)

:: Start the application and server in new command prompt windows
start "" cmd /c "npm run start"
cd server
start "" cmd /c "node server.js"

:: Open the web browser to the application URL
start http://localhost:3000

endlocal