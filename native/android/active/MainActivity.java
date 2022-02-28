// native
ExamplePluginAndroid exampleplugin = new ExamplePluginAndroid(this, getPreferences(Context.MODE_PRIVATE), myWebView);
myWebView.addJavascriptInterface(exampleplugin, "exampleplugin");