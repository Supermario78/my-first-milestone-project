var _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//www.w3.org/analytics/piwik/";
  _paq.push(['setTrackerUrl', u+'matomo.php']);
  _paq.push(['setSiteId', '444']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();

(function () {

    "use strict";

    var w3c_include = document.getElementById("w3c-include"),
        style;

    w3c_include.setAttribute("lang", "en");
    w3c_include.setAttribute("dir", "ltr");

    function addDonationProgram() {

        var program_div, script, sponsor;

        program_div = document.createElement("div");
        program_div.setAttribute("class", "w3c-include");
        program_div.setAttribute("id", "w3c-include-validator-donation");

        w3c_include.appendChild(program_div);

        // http://developers.flattr.net/button/
        (function () {
            var s = document.createElement('script'),
                t = document.getElementsByTagName('script')[0];

            s.type = 'text/javascript';
            s.async = true;
            s.src = '//api.flattr.com/js/0.6/load.js?mode=auto';

            t.parentNode.insertBefore(s, t);
        }());

        function chooseSponsor() {

            var sponsors = {},
                rand_no;

            sponsors.w3cx = {};
            sponsors.w3cx.name = "W3Cx";
            sponsors.w3cx.image = 'https://www.w3.org/2018/12/w3cx-fewd.png';
          sponsors.w3cx.node = document.createElement('span');
          sponsors.w3cx.node.appendChild(document.createTextNode('Interested in “developing” your developer skills? In W3Cx’s hands-on Professional Certificate Program, learn how to code the right way by creating Web sites and apps that use the latest Web standards. '));
          var w3cxLink = document.createElement('a');
          w3cxLink.href = "https://www.edx.org/professional-certificate/front-end-web-developer-9";
          w3cxLink.textContent = "Find out more!";
          sponsors.w3cx.node.appendChild(w3cxLink);
            sponsors.w3cx.height = 99;
            sponsors.w3cx.link = 'https://www.edx.org/professional-certificate/front-end-web-developer-9';

            sponsors.w3cdevs = {};
            sponsors.w3cdevs.name = "W3Cdevs";
            sponsors.w3cdevs.image = 'https://www.w3.org/developers/img/W3C-Developers-Dark.svg';
          sponsors.w3cdevs.node = document.createElement('span');
          sponsors.w3cdevs.node.appendChild(document.createTextNode('Interested in understanding what new technologies are coming out of W3C? Follow '));
          var w3cdevsLink = document.createElement('a');
          w3cdevsLink.href = "https://twitter.com/w3cdevs";
          w3cdevsLink.textContent = "@w3cdevs on Twitter";
          sponsors.w3cdevs.node.appendChild(w3cdevsLink);
          sponsors.w3cdevs.node.appendChild(document.createTextNode(' to keep track of what the future looks like!'));
          sponsors.w3cdevs.height = 50;
          sponsors.w3cdevs.link = 'https://twitter.com/w3cdevs';

            sponsors.Donate = {};
            sponsors.Donate.name = "Validators Donation Program";
            sponsors.Donate.image = '//www.w3.org/QA/Tools/I_heart_validator_lg';
          sponsors.Donate.node = document.createTextNode('The W3C validators rely on community support for hosting and development.');
            sponsors.Donate.height = 46;
            sponsors.Donate.link = '//www.w3.org/QA/Tools/Donate';

            rand_no = Math.random();
            rand_no = rand_no * 100;
            rand_no = Math.ceil(rand_no);
            if (rand_no <= 50) {
                return sponsors.w3cx;
             } else if (rand_no <= 75) {
                return sponsors.w3cdevs;
             } else {
                return sponsors.Donate;
             }
        }

        sponsor = chooseSponsor();

        program_div.innerHTML =
            '<p>' +
                '<a href="' + sponsor.link + '" title="' + sponsor.name + '" class="w3c-include-validator-donation-img">' +
                    '<img src="' + sponsor.image + '" alt="' + sponsor.name + ' logo" height="' + sponsor.height + '" class="w3c-include-sponsor-img">' +
                '</a>' +
            '</p>' +
            '<p>' +
                '<span class="insert"></span>' +
        '<br />' +
                        '<br />' +
                '<span><a href="//www.w3.org/QA/Tools/Donate">Donate</a> and help us build better tools for a better web.</span>' +
        '</p>';
      program_div.querySelector('.insert').appendChild(sponsor.node);
    }

    style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.textContent = [
        '#w3c-include { display: table; width: 100%; box-sizing: border-box; margin: 1em 0 0 0; padding: 0; }',
        '.w3c-include { display: table-row; padding-bottom: 1em; }',
        '.w3c-include > p { display: table-cell; vertical-align: middle; text-align: center; padding-bottom: 1em; }',
        '.w3c-include > p:first-of-type { padding-right: 1em; width: 20%; padding-left: 2em; }',
        '.w3c-include > p:last-of-type { padding-right: 2em;}',
        '.w3c-include-sponsor-img { margin-left: 1em; }',
        '.FlattrButton { float: right; margin-right: 1em }'
    ].join('\n');

    document.getElementsByTagName("head")[0].appendChild(style);

    addDonationProgram();

}());
