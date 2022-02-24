export default class ExamplePluginAndroidInterface implements ExamplePluginAndroidInterface {
    getData() : string {
        let win : any = window;
        let data :string = ""
        if(win.exampleplugin) {
            data = win.exampleplugin.getData() ? win.exampleplugin.getData() : "";
        }
        return data;
    }
}