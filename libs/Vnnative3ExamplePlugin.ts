import Vnnative3ExamplePluginInteface from "./Vnnative3ExamplePlugin.interface";
import VnnativeOsIndex from "vnnative-3-os/dist/index";
import ExamplePluginAndroid from "./android/ExamplePluginAndroid";
import ExamplePluginiOS from "./ios/ExamplePluginiOS";
import ExamplePluginSoftware from "./software/ExamplePluginSoftware";
import ExamplePluginWeb from "./web/ExamplePluginWeb";
export default class Vnnative3ExamplePlugin implements Vnnative3ExamplePluginInteface {
    getData(): string {
        let data : string = ""
        let os : VnnativeOsIndex = new VnnativeOsIndex;
        switch(os.isOs()) {
            case "android" :
                data = (new ExamplePluginAndroid).getData();
                break;
            case "iOS" :
                data = (new ExamplePluginiOS).getData();
                break;
            case "software" : 
                data = (new ExamplePluginSoftware).getData();
                break;
            default :
                data = (new ExamplePluginWeb).getData();
                break;            
        }
        return data;
    }
}