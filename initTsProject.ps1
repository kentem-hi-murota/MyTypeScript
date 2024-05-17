if(-not(Test-Path .\index.html))
{
New-Item -Path . -Name "index.html" -ItemType "file" -Value @"
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <script src="main.js"></script>
</body>
</html>
"@
}
if(-not(Test-Path .\style.css)){
New-Item -Path . -Name "style.css" -ItemType "file" -Value '@charset "utf-8";'
}
if(-not(Test-Path .\main.ts)){
New-Item -Path . -Name "main.ts" -ItemType "file"
}

if(-not(Test-Path .\package.json)){
npm init -y
}
if(-not(Test-Path .\package-lock.json)){
npm install -D @types/node typescript
}
if(-not(Test-Path .\tscongif.json)){
npx tsc --init
}