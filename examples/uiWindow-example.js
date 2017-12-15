//@include "UIWindow.jsx"

var view = new UIWindow({
  type: 'dialog',
  name: 'Dialog Title',
  bounds: undefined,
  properties: {
    preferredSize: [200, 200],
    alignChildren: ['fill', 'top'],
    closeButton: true
  },
  data: {
    'panelElement': {
      type: 'panel',
      parent: undefined,
      bounds: undefined,
      title: 'Panel Title',
      properties: {
        margins: 20,
        orientation: 'row'
      }
    },
    'panelElementEditText': {
      type: 'edittext',
      parent: 'panelElement',
      bounds: undefined,
      title: 'Editable textfield',
      properties: {
        readonly: true,
        enabled: false,
        characters: 25
      }
    },
    'panelElementButton': {
      type: 'button',
      parent: 'panelElement',
      bounds: undefined,
      title: 'Button Text'
    },

    'staticText': {
      type: 'statictext',
      parent: undefined,
      bounds: undefined,
      title: 'Static text goes here',
      properties: {
        readonly: true,
        preferredSize: [200, 40]
      }
    },
    'footerGroup': {
      type: 'group',
      parent: undefined,
      bounds: undefined,
      title: '',
      properties: {
        orientation: 'row',
        alignChildren: ['fill', 'top']
      }
    },
    'btnClose': {
      type: 'button',
      parent: 'footerGroup',
      bounds: undefined,
      title: 'Cancel'
    },
    'btnRun': {
      type: 'button',
      parent: 'footerGroup',
      bounds: undefined,
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

view.open();
