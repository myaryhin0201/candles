  window.addEventListener("load", function () {
        const config = {
            "palette": {
                "popup": {
                    "background": "rgba(0,0,0,0.5)"
                },
                "button": {
                    "background": "rgba(255,255,255,0.5)"
                }
            },
            "content": {
                "message": "Nasza strona korzysta z plików cookie w celu realizacji potrzeb użytkowników. W przeglądarce można zmienić ustawienia dotyczące cookies.",
                "dismiss": "Rozumiem",
                "link": "Więcej informacji",
                "href": "/html/views/polityka.html"
            }
        };

        window.cookieconsent.initialise(config);
    });
