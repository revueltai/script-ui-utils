# ScriptUI Utils
Some util scripts to work faster with Script UI + Adobe products.

### Console.jsx
Creates a log file.

```
...
...
Console.log(value1, value2, ...);
...
```

### UIWindow.jsx
Makes the process of creating a UI Window more descriptive and easier than using the traditional approach.

Example:

Traditional approach:
```
var window   = new Window('dialog', 'My Dialog', [100, 100, 480, 245]);
window.panel = window.add('panel', [15, 50, 365, 115], 'Panel');
window.panel.add('button', [235, 15, 335, 45], 'Cancel', {name:'btnCancel'});
window.panel.add('button', [235, 15, 335, 45], 'Run', {name:'btnRun'});
window.show();
window.addEventListener('click', function(event) {
  alert('Callback for button RUN');
});
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
    'btnCancel': {
      type: 'button',
      parent: 'panelElement',
      bounds: [235, 15, 335, 45],
      title: 'Cancel'
    },
    'btnCancel': {
      type: 'button',
      parent: 'panelElement',
      bounds: [235, 15, 335, 45],
      title: 'Run',
      event: {
        type: 'click',
        callback: function() {
          alert('Callback for button RUN');
        }
      }
    }
  }
});
```
