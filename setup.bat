@echo off
if not exist public mkdir public
echo PUBLIC_DIR_CREATED
copy /Y "%~dp0..\..\.gemini\antigravity\brain\76407b4d-26a6-4b95-81df-6fec5f4b63bb\granite_kitchen_1773981148194.png" "%~dp0public\granite-1.png"
copy /Y "%~dp0..\..\.gemini\antigravity\brain\76407b4d-26a6-4b95-81df-6fec5f4b63bb\granite_bathroom_1773981167359.png" "%~dp0public\granite-2.png"
copy /Y "%~dp0..\..\.gemini\antigravity\brain\76407b4d-26a6-4b95-81df-6fec5f4b63bb\granite_floor_1773981182925.png" "%~dp0public\granite-3.png"
echo IMAGES_COPIED
call npm install
echo NPM_INSTALL_DONE
