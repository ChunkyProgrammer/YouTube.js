export = PlaylistSidebarPrimaryInfo;
declare class PlaylistSidebarPrimaryInfo {
    constructor(item: any);
    type: string;
    stats: any;
    thumbnail_renderer: any;
    title: Text;
    menu: any;
    endpoint: NavigationEndpoint;
    description: Text;
}
import Text = require("./Text");
import NavigationEndpoint = require("./NavigationEndpoint");
