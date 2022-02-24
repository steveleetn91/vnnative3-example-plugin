// native
VnNativeExample vnos = new VnNativeOs(this, getPreferences(Context.MODE_PRIVATE), myWebView);
myWebView.addJavascriptInterface(vnos, "exampleplugin");