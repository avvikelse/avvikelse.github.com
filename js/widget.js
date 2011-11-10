(function() {

    // Localize jQuery variable
    var jQuery;
    var remoteJquery = 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js';
    var localJquery = 'http://dev.av.vikel.se/js/jquery-1.6.4.min.js';

    /**
     * Load jQuery if not present
     *
     */
    if (window.jQuery === undefined || window.jQuery.fn.jquery >= '1.6.4') {
        appendJqueryScriptTag(remoteJquery, localJquery);
    }
    else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        init();
    }

    /**
     * Append jQuery script tag
     *
     * @param string url
     * @param string fallbackUrl
     *
     */
    function appendJqueryScriptTag(url, fallbackUrl)
    {
        var scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'text/javascript');
        scriptTag.setAttribute('src', url);
        scriptTag.onload = scriptLoadHandler;
        scriptTag.onreadystatechange = scriptReadyStateChangeHandler;

        if(fallbackUrl) {
            scriptTag.onerror = function()
            {
                appendJqueryScriptTag(fallbackUrl);
            };
        }

        (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(scriptTag);
    }

    /**
     * Script ready state change handler
     *
     * Same thing but for IE
     *
     */
    function scriptReadyStateChangeHandler()
    {
        if(this.readyState == 'complete' || this.readyState == 'loaded') {
            scriptLoadHandler();
        }
    }

    /**
     * Script load handler
     *
     * Called once jQuery has loaded
     *
     */
    function scriptLoadHandler()
    {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);

        // Call widgets init function
        init(); 
    }

    /**
     * Init widgets
     *
     */
    function init()
    {
        jQuery(document).ready(function($) {
            var selector = '.avvikelse-widget';
            var endpoint = 'http://api.av.vikel.se/v1/deviations/';

            /**
             * Style
             *
             */
            var cssLink = $('<link>', {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'http://dev.av.vikel.se/css/widget.css'
            });
            cssLink.appendTo('head');

            /**
             * Controller
             *
             */
            $.each($(selector), function(i, e) {
                var element = $(this);

                element.html(renderWidget(element));
            });

            /**
             * Bind events
             *
             */
            $(selector+' button').live('click', createDeviation);

            /**
             * Render widget
             *
             * @param object element
             *
             * @return string html
             */
            function renderWidget(element)
            {
                var html = '<button>Rapportera</button>';

                return html;
            }

            /**
             * Create deviation
             *
             * @param object element ?
             * @param string name
             * @param string content
             *
             * @return string html
             */
            function createDeviation()
            {
                var element = $(this).parent();
                var data = {
                    'latitude': element.attr('data-lat'),
                    'longitude': element.attr('data-lng'),
                    'source': element.attr('data-source'),
                    'transport': element.attr('data-transport'),
                    'vehicle': element.attr('data-vehicle'),
                    'comment': element.attr('data-comment'),
                };

                $.post(endpoint, data);
            }

        });
    }

})(); // We call our anonymous function immediately