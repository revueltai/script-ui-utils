# ScriptUI Utils
Some utils to easier work with Script UI on Adobe products.

##UIWindow.jsx
This script should make creating a UI Window easier and more descriptive.

Example:

Traditional approach:
```
var window   = new Window('dialog', 'My Dialog', [100, 100, 480, 245]);
window.panel = window.add('panel', [15, 50, 365, 115], 'Panel');
window.panel.add('button', [235, 15, 335, 45], 'Cancel', {name:'cancel'});
window.show();
```

With UIWindow.jsx:
```
var myWindow = new UIWindow({
  type: 'dialog',
  name: 'My Dialog',
  bounds: [100, 100, 480, 245],
  properties: {
    closeButton: true
  },
  data: {
    'panelElement': {
      type: 'panel',
      parent: undefined,
      bounds: [15, 50, 365, 115],
      title: 'Panel',
      properties: {
        orientation: 'row'
      }
    },
    'btnClose': {
      type: 'button',
      parent: 'panelElement',
      bounds: [235, 15, 335, 45],
      title: 'Cancel'
    }
  }
});
```
