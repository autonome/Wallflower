(function killIframes() {
  var defaultURL = 'about:blank';
  if (inIframe() && (
    window.location.href.indexOf('facebook.com/extern/login_status') != -1 ||
    window.location.href.indexOf('plusone.google.com/u/0/_/+1/fastbutton') != -1 ||
    window.location.href.indexOf('plusone.google.com/_/+1/hover') != -1 ||
    window.location.href.indexOf('facebook.com/plugins/like.php') != -1 ||
    window.location.href.indexOf('fbcdn.net/connect') != -1)) {
    window.location.href = defaultURL;
  }
})()

function inIframe() {
  return window.location != window.parent.location ? true : false;
}
