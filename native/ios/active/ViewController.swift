// native
let scriptSource = "window.exampleplugin = { getData : () => { return `Example - iOS` } }  "
let script = WKUserScript(source: scriptSource, injectionTime: .atDocumentStart, forMainFrameOnly: true)
contentController.addUserScript(script)