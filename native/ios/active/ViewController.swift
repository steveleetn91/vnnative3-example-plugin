// native
let examplePlugin = "window.exampleplugin = { getData : () => { return `Example - iOS` } }  "
let examplePluginscript = WKUserScript(source: examplePlugin, injectionTime: .atDocumentStart, forMainFrameOnly: true)
contentController.addUserScript(examplePluginscript)