import ExamplePluginWebInterface from "./ExamplePluginWeb.interface";

export default class ExamplePluginWeb implements ExamplePluginWebInterface {
    getData() : string {
        const data :string = "Web - example plugin"
        return data;
    }
}


 