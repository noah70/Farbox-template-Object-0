var disqus = {
  load : function disqus(){
      var disqus_shortname = 'disqus_shortname_here';
      if(typeof DISQUS !== 'object') {
        (function () {
        var s = document.createElement('script'); s.async = true;
        s.type = 'text/javascript';
        s.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
        }());
        $('#load-disqus').remove();
      }
  }
}