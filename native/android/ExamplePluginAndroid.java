package com.example.myapplication;

import android.content.Context;
import android.content.SharedPreferences;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

public class ExamplePluginAndroid {

    private static final String DATA = "ExamplePlugin - Android";

    SharedPreferences sharedPref;
    Context context;
    WebView webView;

    public VnNativeOs(Context ctx, SharedPreferences preferences, WebView myWebView) {
        sharedPref = preferences;
        context = ctx;
        webView = myWebView;
    }

    @JavascriptInterface
    public String getData() {
        return DATA;
    }
}

