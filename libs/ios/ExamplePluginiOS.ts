import ExamplePluginiOSInterface from "./ExamplePluginiOS.interface";

export default class ExamplePluginiOS implements ExamplePluginiOSInterface {
    getData() : string {
        let win : any = window;
        let data :string = ""
        if(win.exampleplugin) {
            data = win.exampleplugin.getData() ? win.exampleplugin.getData() : "";
        }
        return data;
    }
}