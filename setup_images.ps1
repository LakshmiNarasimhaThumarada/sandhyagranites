$srcDir = "C:\Users\Dell\.gemini\antigravity\brain\878f2d73-019c-4e72-a67a-979ac804a3c9"
$destDir = "C:\Users\Dell\OneDrive\Desktop\Sandhya_Granite\public"

$images = @{
    "granite_countertops_1774368617701.png" = "app_countertops.png"
    "granite_flooring_1774368639569.png"    = "app_flooring.png"
    "granite_wall_cladding_1774368662575.png" = "app_wall_cladding.png"
    "granite_fireplaces_1774368687056.png"  = "app_fireplaces.png"
}

foreach ($src in $images.Keys) {
    $dest = $images[$src]
    $srcPath = Join-Path $srcDir $src
    $destPath = Join-Path $destDir $dest
    if (Test-Path $srcPath) {
        Copy-Item -Path $srcPath -Destination $destPath -Force
        Write-Output "Copied $src to $dest"
    } else {
        Write-Error "Source not found: $srcPath"
    }
}
