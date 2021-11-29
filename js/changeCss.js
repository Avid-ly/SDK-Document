function plugin (hook, vm) {
  hook.beforeEach(function(html) {
    var js = document.getElementsByTagName('nav');
    // js[0].style.color = "red";
    js[0].style.position = "fixed";
    // js[0].style.width = "100%";
    // js[0].style.backgroundColor = "red";
    console.log("ssss")
    console.log(js)
  });
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);