Option Explicit
Dim shell, files, project, nodePath, vitePath, command, attempt, noBrowser, ready, started
Set shell = CreateObject("WScript.Shell")
Set files = CreateObject("Scripting.FileSystemObject")
project = files.GetParentFolderName(WScript.ScriptFullName)
nodePath = shell.ExpandEnvironmentStrings("%ProgramFiles%") & "\nodejs\node.exe"
vitePath = project & "\node_modules\vite\bin\vite.js"
noBrowser = False
If WScript.Arguments.Count > 0 Then noBrowser = (WScript.Arguments(0) = "--no-browser")

ready = TrackerReady()
If Not ready Then
  If Not files.FileExists(nodePath) Or Not files.FileExists(vitePath) Then
    Fail "Node.js ou as dependencias do projeto nao foram encontrados. Abra a pasta do projeto e execute npm install."
  End If
  shell.CurrentDirectory = project
  command = Quote(nodePath) & " " & Quote(vitePath) & " --host 127.0.0.1 --port 5173 --strictPort"
  shell.Run command, 0, False
  started = Now
  For attempt = 1 To 80
    WScript.Sleep 250
    ready = TrackerReady()
    If ready Or DateDiff("s", started, Now) >= 30 Then Exit For
  Next
  If Not ready Then Fail "Nao foi possivel iniciar o tracker em http://127.0.0.1:5173/. A porta pode estar em uso por outro programa."
End If

If Not noBrowser Then shell.Run "http://127.0.0.1:5173/", 1, False
WScript.Quit 0

Function Quote(value)
  Quote = Chr(34) & value & Chr(34)
End Function

Function TrackerReady()
  Dim request
  TrackerReady = False
  On Error Resume Next
  Err.Clear
  Set request = CreateObject("WinHttp.WinHttpRequest.5.1")
  request.SetProxy 1
  request.SetTimeouts 1000, 1000, 1000, 3000
  request.Open "GET", "http://127.0.0.1:5173/", False
  request.Send
  If Err.Number = 0 Then
    If request.Status = 200 Then TrackerReady = (InStr(request.responseText, "Ars Nouveau Progress Tracker") > 0)
  End If
  On Error GoTo 0
End Function

Sub Fail(message)
  If noBrowser Then
    WScript.Echo message
  Else
    MsgBox message, 16, "Ars Nouveau Tracker"
  End If
  WScript.Quit 1
End Sub
