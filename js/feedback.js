function plugin (hook, vm) {
  hook.beforeEach(function(html) {

    url = window.location.href;
    // var editHtml = '<div class="ssssxxx"><span>以上内容是否对您有帮助？</span><button type="button" onclick="helpfulClick()">是</button><button type="button" onclick="unhelpfulClick()">否</button></div>';

    // var editHtml = '<div class="feebbackdiv"><span>以上内容是否对您有帮助？</span><span class="tip" onclick="helpfulClick()">是</span><span class="tip" type="button" onclick="unhelpfulClick()">否</span></div>';

    // var editHtml = '<div class="bootom_right">以上内容是否有帮助？<span class="tip" onclick="helpfulClick()">是</span><span class="tip" type="button" onclick="unhelpfulClick()">否</span></div>';

    var editHtml = '<div class="bootom_right"><div>这个文档是否有帮助？</div><div class="feebbackdiv"><div class="feebbacktip" onclick="helpfulClick()">是</div><div class="feebbacktip" type="button" onclick="unhelpfulClick()">否</div></div></div>';

    return (
      html + editHtml
    );
  });
}

function helpfulClick() {
  var url = window.location.href;
	_czc.push(["_trackEvent", "feedback-helpful", url, "xx"]);
  alert("感谢您的反馈");
}

function unhelpfulClick() {
  var url = window.location.href;
  _czc.push(['_trackEvent','feedback-unhelpful', url, 'xx']);
  alert("感谢您的反馈");
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);