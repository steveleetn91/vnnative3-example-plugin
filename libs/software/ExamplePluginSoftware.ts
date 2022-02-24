import ExamplePluginSoftwareInterface from "./ExamplePluginSoftware.interface";

export default class ExamplePluginSoftware implements ExamplePluginSoftwareInterface {
    getData() : string {
        let win : any = window;
        let data :string = ""
        if(win.exampleplugin) {
            data = win.exampleplugin.getData() ? win.exampleplugin.getData() : "";
        }
        return data;
    }
}