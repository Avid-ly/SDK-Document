function plugin (hook, vm) {
  hook.beforeEach(function(html) {

    var editHtml1 = '<div id="feedback" class="bootom_right" ><div>这个文档是否有帮助？</div><div class="feedbackdiv"><div class="feedbacktip" onclick="helpfulClick()">是</div><div class="feedbacktip" type="button" onclick="unhelpfulClick()">否</div></div></div>';
    
    var editHtml2 = '<div id="bootom_right_content"  class="bootom_right_content" style="visibility:hidden"><button class="FeedBack-close-button"  onclick="feedbackContentClose()">X</button><p>在文档使用中是否遇到以下问题</p><ul class="FeedBack--problemList--1UK4lss"><li><div><input type="checkbox" class="feedback_check" value="1"><span>内容错误</span></div></li><li><div><input type="checkbox" class="feedback_check" value="2"><span>更新不及时</span></div></li><li><div><input type="checkbox" class="feedback_check" value="4"><span>链接错误</span></div></li><li><div><input type="checkbox" class="feedback_check" value="8"><span>缺少代码/图片示例</span></div></li><li><div><input type="checkbox" class="feedback_check" value="16"><span>太简单/步骤待完善</span></div></li><li><div><input type="checkbox" class="feedback_check" value="32"><span>其他</span></div></li></ul><div><p>更多建议</p><textarea id="FeedBack--textArea" class="FeedBack--textArea--3EDq1XC" placeholder="请详细描述在文档使用中遇到的问题或改进建议"></textarea><button class="FeedBack--button" onclick="submitFeedbackContent()"><span>提交建议</span></button></div></div>';

    // var editHtml = editHtml1 + "<br>" + editHtml2;

    return (
      html + editHtml1 + "<br>" + editHtml2
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

  var feedback = document.getElementById('feedback');
  feedback.style.visibility = "hidden";

  var bootom_right_content = document.getElementById('bootom_right_content');
  bootom_right_content.style.visibility = "visible";

}

function feedbackContentClose() {
  var url = window.location.href;

  var feedback = document.getElementById('feedback');
  feedback.style.visibility = "visible";

  var bootom_right_content = document.getElementById('bootom_right_content');
  bootom_right_content.style.visibility = "hidden";

}

function submitFeedbackContent() {
  var url = window.location.href;

  var feedback = document.getElementById('feedback');
  feedback.style.visibility = "visible";

  var bootom_right_content = document.getElementById('bootom_right_content');
  bootom_right_content.style.visibility = "hidden";

  var checkboxList = document.getElementsByClassName('feedback_check');
  var checkboxStr = "";
  for (var i=0;i<checkboxList.length;i++)
  { 
      var input = checkboxList[i];
      if (input.checked) {
        checkboxStr = checkboxStr + "/" + input.value;
      }
  }

  var textAreaStr = document.getElementById('FeedBack--textArea').value;

  var str = checkboxStr + "/" + textAreaStr;

  _czc.push(["_trackEvent", "feedback-Detail", url, str]);

  alert("感谢您的反馈");
}

window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);