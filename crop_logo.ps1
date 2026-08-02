Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\PC\.gemini\antigravity\brain\2faa49aa-ceb0-4544-b200-7d2c80bc0a79\media__1785008770255.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

$minX = $bmp.Width
$minY = $bmp.Height
$maxX = 0
$maxY = 0

for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.R -lt 245 -or $pixel.G -lt 245 -or $pixel.B -lt 245) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$cropX = $minX
$cropY = $minY
$cropW = ($maxX - $minX)
$cropH = ($maxY - $minY)

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$symbolOnly = $bmp.Clone($rect, $bmp.PixelFormat)
$bmp.Dispose()

$size = 512
$circleBmp = New-Object System.Drawing.Bitmap($size, $size)
$g = [System.Drawing.Graphics]::FromImage($circleBmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

$g.Clear([System.Drawing.Color]::Transparent)

# Dark circle background for max contrast
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 12, 12, 12))
$g.FillEllipse($brush, 0, 0, $size, $size)

# Zoom SD symbol to fill 88% of emblem
$targetW = [int]($size * 0.86)
$targetH = [int]($targetW * ($cropH / $cropW))
if ($targetH -gt ($size * 0.86)) {
    $targetH = [int]($size * 0.86)
    $targetW = [int]($targetH * ($cropW / $cropH))
}

$posX = [int](($size - $targetW) / 2)
$posY = [int](($size - $targetH) / 2)

$g.DrawImage($symbolOnly, $posX, $posY, $targetW, $targetH)
$g.Dispose()
$symbolOnly.Dispose()

# Circular mask clipping
$finalBmp = New-Object System.Drawing.Bitmap($size, $size)
$g2 = [System.Drawing.Graphics]::FromImage($finalBmp)
$g2.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(0, 0, $size, $size)
$g2.SetClip($path)
$g2.DrawImage($circleBmp, 0, 0)
$g2.Dispose()
$circleBmp.Dispose()

$outPng = "d:\dev\prisma-landing\public\saim-dev-logo.png"
$outJpg = "d:\dev\prisma-landing\public\saim-dev-logo.jpg"
$outFavicon = "d:\dev\prisma-landing\public\favicon.png"
$outArtifact = "C:\Users\PC\.gemini\antigravity\brain\2faa49aa-ceb0-4544-b200-7d2c80bc0a79\saim_dev_cropped_favicon.png"

$finalBmp.Save($outPng, [System.Drawing.Imaging.ImageFormat]::Png)
$finalBmp.Save($outJpg, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$finalBmp.Save($outFavicon, [System.Drawing.Imaging.ImageFormat]::Png)
$finalBmp.Save($outArtifact, [System.Drawing.Imaging.ImageFormat]::Png)
$finalBmp.Dispose()

Write-Host "Created circular zoomed emblem favicon successfully!"
