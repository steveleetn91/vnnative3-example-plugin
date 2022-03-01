import ExamplePluginWebInterface from "./ExamplePluginWeb.interface";

export default class ExamplePluginWeb implements ExamplePluginWebInterface {
    getData() : string {
        let win : any = window;
        let data :string = "Web - example plugin"
        if(win.exampleplugin) {
            data = win.exampleplugin.getData() ? win.exampleplugin.getData() : "";
        }
        return data;
    }
}


