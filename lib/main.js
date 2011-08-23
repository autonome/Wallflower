// Wallflower
const pm = require('page-mod');
pm.PageMod({
  include: '*',
  contentScriptWhen: 'start',
  contentScriptFile: require('self').data.url('wallflower.js')
});

