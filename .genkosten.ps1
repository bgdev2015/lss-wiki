$ErrorActionPreference = 'Stop'
[Console]::OutputEncoding = [Text.Encoding]::UTF8
$enc = New-Object System.Text.UTF8Encoding $false
$dir = 'C:\Users\alexa\AppData\Local\Temp\lss'

function Fmt($n) {
  if ($n -lt 0) { return '&'ndash;' }
  if ($n -eq 0) { return 'gratis' }
  return ('{0:N0}' -f $n).Replace(',', '.')
}

# ---------- Gebäude ----------
$buildings = Get-Content (Join-Path $dir 'buildings.json') -Raw -Encoding UTF8 | ConvertFrom-Json
$levelByCaption = @{}
foreach ($p in $buildings.PSObject.Properties) {
  $v = $p.Value
  $lp = $v.levelPrices
  if ($lp -and $lp.credits) {
    $runs = @(); $prev = $null
    foreach ($n in $lp.credits) { if ($null -eq $prev -or $n -ne $prev) { $runs += $n }; $prev = $n }
    $txt = ($runs | Select-Object -First 3 | ForEach-Object { Fmt $_ }) -join ' → '
    if ($runs.Count -gt 3) {
      $txt += ' → dann je ' + (Fmt $runs[-1])
    }
    $levelByCaption[$v.caption] = $txt
  } else {
    $levelByCaption[$v.caption] = '–'
  }
}

$buildingRows = New-Object System.Collections.Generic.List[string]
$order = 0
foreach ($line in (Get-Content (Join-Path $dir 'blist.txt') -Encoding UTF8)) {
  $line = $line -replace '^==\s*', ''
  if (-not $line.Trim()) { continue }
  $parts = $line.Split('|')
  $name = $parts[0].Trim()
  $cost = $parts[1].Trim()
  # cost like "100.000 Cr / 30 Coins" oder "0 Cr / 0 Coins" oder "-1 Cr / -1 Coins"
  $cr = 0; $co = 0
  if ($cost -match '^\s*(-?\d[\d\.]*)\s*Cr\s*/\s*(-?\d+)\s*Coins') {
    $cr = [int]($Matches[1].Replace('.', ''))
    $co = [int]$Matches[2]
  }
  $lvl = $levelByCaption[$name]
  if (-not $lvl) { $lvl = '–' }
  $crTxt = if ($cr -eq -1) { '–' } else { (Fmt $cr) + ' Cr.' }
  $coTxt = if ($co -eq -1) { '–' } else { (Fmt $co) + ' Coins' }
  $buildingRows.Add("        ${tr([\"$name\", \"$crTxt\", \"$coTxt\", \"$lvl\"])}")
}

# ---------- Ausbauten ----------
$extRows = New-Object System.Collections.Generic.List[string]
foreach ($line in (Get-Content (Join-Path $dir 'blist.txt') -Encoding UTF8)) {
  $line = $line -replace '^==\s*', ''
  if (-not $line.Trim()) { continue }
  $parts = $line.Split('|')
  $bname = $parts[0].Trim()
  if ($parts.Count -lt 3) { continue }
  $extPart = $parts[2]
  $extPart = $extPart -replace '^Ausbauten:\s*', ''
  foreach ($chunk in ($extPart -split ';;')) {
    $chunk = $chunk.Trim()
    if (-not $chunk) { continue }
    if ($chunk -match '^([^\(]+)\(([^)]+)\)') {
      $en = $Matches[1].Trim()
      $meta = $Matches[2].Split(',')
      $ec = $meta[0].Trim()
      $et = if ($meta.Count -gt 1) { $meta[1].Trim() } else { '' }
      $el = if ($meta.Count -gt 2) { $meta[2].Trim() -replace 'Stellplaetze', 'Stellplätze' } else { '–' }
      $extRows.Add("        ${tr([\"<strong>$bname</strong>\", \"$en\", \"$ec\", \"$et\", \"$el\"])}")
    }
  }
}

# ---------- Fahrzeuge ----------
$vehRows = New-Object System.Collections.Generic.List[string]
$vehicles = New-Object System.Collections.Generic.List[object]
foreach ($line in (Get-Content (Join-Path $dir 'vlist2.txt') -Encoding UTF8)) {
  $line = $line.Trim()
  if (-not $line) { continue }
  $p = $line.Split('|')
  $vn = $p[0].Trim()
  if ($vn -match '^\s*(\d[\d\.]*)\s*Cr\s*\|\s*(\d+)\s*Coins') { }
  if ($p.Count -ge 3 -and $p[1] -match '^\s*(-?\d[\d\.]*)\s*Cr') {
    $vc = [int]($Matches[0] -replace 'Cr', '').Trim().Replace('.', '')
    $vcoins = 0
    if ($p[2] -match '(\d+)') { $vcoins = [int]$Matches[1] }
    if ($vc -gt 0 -or $vcoins -gt 0) {
      $vehicles.Add([pscustomobject]@{ N = $vn; C = $vc; O = $vcoins })
    }
  }
}
$sorted = $vehicles | Sort-Object { $_.C }, N
foreach ($v in $sorted) {
  $vehRows.Add("        ${tr([\"$($v.N)\", \"$(Fmt $v.C) Cr.\", \"$(Fmt $v.O) Coins\"])}}")
}

$rowsB = $buildingRows -join "`r`n"
$rowsE = $extRows -join "`r`n"
$rowsV = $vehRows -join "`r`n"

$html = @"
  add("kosten", "🧾", "Baukosten", ``
  <section class="card glass">
    <h2>Baukosten im Überblick</h2>
    <p>Alle Bau- und Anschaffungskosten dieser Wiki-Version (Datenstand: November 2026, LSS-Manager-API &amp; offizielles Wiki). Preisnachlässe durch Premium-Kauflimits siehe <a href="#premium">Premium</a>.</p>

    <h3>🏗️ Gebäudeneubau (inkl. Kosten je Ausbaustufe)</h3>
    <div class="tbl-wrap"><table>
      <thead>${th(["Gebäude", "Neubau Cr.", "Coins", "Kosten je Stufe"])}</thead>
      <tbody>
$rowsB
      </tbody>
    </table></div>
    <div class="hint">ℹ️ „Kosten je Stufe“ zeigt die Credits-Sequenz der Ausbaustufen – gleichbleibende Werte sind zusammengefasst. Die beste Stufe lohnt sich meist erst später im Spiel.</div>

    <h3>➕ Erweiterungen &amp; Ausbauten</h3>
    <div class="tbl-wrap"><table>
      <thead>${th(["Gebäude", "Ausbaustufe", "Kosten", "Bauzeit", "Stellplätze"])}</thead>
      <tbody>
$rowsE
      </tbody>
    </table></div>

    <h3>🚒 Fahrzeuge (Anschaffung)</h3>
    <div class="tbl-wrap"><table>
      <thead>${th(["Fahrzeug", "Credits", "Coins"])}</thead>
      <tbody>
$rowsV
      </tbody>
    </table></div>
    <div class="hint">🎓 Schulen (Feuerwehr-/Rettungs-/Polizei-/THW-Schule): Neubau 500.000 Cr. / 50 Coins, jeder weitere Klassenraum 400.000 Cr. / 40 Coins – Details unter <a href="#personal">Personal &amp; Lehrgänge</a>.</div>
  </section>
  ``);

"@.Replace('``','`')

[IO.File]::WriteAllText('C:\Users\alexa\AppData\Local\Temp\lss\kosten-section.txt', $html, $enc)
Write-Host 'kosten-section.txt geschrieben. Gebäuderows:' $buildingRows.Count 'Ausbaurows:' $extRows.Count 'Fahrzeugrows:' $vehRows.Count
