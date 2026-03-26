@echo off
set "BRAIN_DIR=%~dp0..\..\..\.gemini\antigravity\brain\878f2d73-019c-4e72-a67a-979ac804a3c9"
set "PUBLIC_DIR=%~dp0public"

copy /Y "%BRAIN_DIR%\granite_countertops_1774368617701.png" "%PUBLIC_DIR%\app_countertops.png"
copy /Y "%BRAIN_DIR%\granite_flooring_1774368639569.png" "%PUBLIC_DIR%\app_flooring.png"
copy /Y "%BRAIN_DIR%\granite_wall_cladding_1774368662575.png" "%PUBLIC_DIR%\app_wall_cladding.png"
copy /Y "%BRAIN_DIR%\granite_fireplaces_1774368687056.png" "%PUBLIC_DIR%\app_fireplaces.png"

echo DEPLOY_COMPLETE
