$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8123/")
$listener.Start()
$root = "."
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $path = $root + "/" + $ctx.Request.Url.AbsolutePath.TrimStart("/")
  if ($path -match "/$") { $path += "index.html" }
  if (Test-Path $path) {
    $ext = [IO.Path]::GetExtension($path).ToLower()
    $mime = @{".html"="text/html; charset=utf-8"; ".css"="text/css; charset=utf-8"; ".js"="text/javascript; charset=utf-8"; ".svg"="image/svg+xml"}[$ext]
    $body = [IO.File]::ReadAllBytes($path)
    $ctx.Response.ContentType = $mime
    $ctx.Response.ContentLength64 = $body.Length
    $ctx.Response.OutputStream.Write($body, 0, $body.Length)
  } else { $ctx.Response.StatusCode = 404 }
  $ctx.Response.Close()
}
