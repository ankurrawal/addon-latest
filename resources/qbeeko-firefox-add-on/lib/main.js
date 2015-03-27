var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var { viewFor } = require("sdk/view/core");
var window = viewFor(require("sdk/windows").browserWindows[0]);

var Style = require("sdk/stylesheet/style").Style;

var style = Style({
  source: "div { border: 4px solid gray }"
});

var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
  id: "my-button",
  label: "my button",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange
});

//var cs="document.getElementById('profile_a').href='https://www.qbeeko.com/addSharedURLExternal/?url='"+tabs.activeTab.url+"';";
//var cs='document.getElementById("profile_a").href="https://www.qbeeko.com/addSharedURLExternal/?url='+tabs.activeTab.url+'";';

var panel = panels.Panel({

  contentURL: self.data.url("frame1.html"),
  width:700,
  height:400,
  //contentScript:"var parentURL='"+tabs.activeTab.url+"';",
  //contentScript: "console.log(document.body.innerHTML);",
  //contentScript:"document.getElementById('profile_a').href='https://www.qbeeko.com/addSharedURLExternal/?url='"+tabs.activeTab.url+"';",
  contentScript:'document.getElementById("share_a").href="https://www.qbeeko.com/addSharedURLExternalAddon/?url='+require("sdk/tabs").activeTab.url+'";',
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
  	panel = panels.Panel({
  	width:750,
  height:400,
  //contentScript:"var parentURL='"+tabs.activeTab.url+"';",	
  //contentScript: "console.log(document.body.innerHTML);var parentURL ='http://www.google.com'; ",
  //contentScript:"document.getElementById('profile_a').href='https://www.qbeeko.com/addSharedURLExternal/?url='"+tabs.activeTab.url+"';",
  contentScript:'document.getElementById("share_a").href="https://www.qbeeko.com/addSharedURLExternalAddon/?url='+require("sdk/tabs").activeTab.url+'";',
  contentURL: self.data.url("frame1.html"),
  onHide: handleHide
});

    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}


/*
var menuitem = require("menuitems").Menuitem({
  id: "clickme",
  menuid: "menu_ToolsPopup",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  label: "Click Me!",
  onCommand: function() {
    console.log("clicked");
  },
});
*/


