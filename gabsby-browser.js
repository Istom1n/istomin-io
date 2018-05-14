import React from 'react'
import Helmet from 'react-helmet'

exports.onInitialClientRender = () => {
    const pasteYMetrkaSnippet = ({ children }) => (
        <Helmet key="yaMetrika">
            <script type="text/javascript"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter48754313 = new Ya.Metrika({ id:48754313, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/48754313" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        </Helmet>    
    )

    return pasteYMetrkaSnippet
}