var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
var VERWENDUNG = ''
var NOTWENDIGE = ''
var ANALYTICS = ''
var SOZIALMEDIA = ''
var INFOS = ''


// obtain cookieconsent plugin
var cc = initCookieConsent();

// run plugin with config object
cc.run({
    current_lang: 'de',
    autoclear_cookies: true, // default: false
    cookie_name: 'cc_cookie_muster_ag', // default: 'cc_cookie'
    cookie_expiration: 1, // default: 182
    page_scripts: true, // default: false
    force_consent: true, // default: false

    // auto_language: null,                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    // hide_from_bots: false,                   // default: false
    // remove_cookie_tables: false              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: '/',                        // default: root
    // cookie_same_site: 'Lax',
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
        consent_modal: {
            layout: 'cloud', // box,cloud,bar
            position: 'bottom center', // bottom,middle,top + left,right,center
            transition: 'slide' // zoom,slide
        },
        settings_modal: {
            layout: 'bar', // box,bar
            position: 'left', // right,left (available only if bar layout selected)
            transition: 'slide' // zoom,slide
        }
    },

    onFirstAction: function() {
        console.log('onFirstAction fired');
    },

    onAccept: function(cookie) {
        console.log('onAccept fired!')
    },

    onChange: function(cookie, changed_preferences) {
        console.log('onChange fired!');

        // If analytics category is disabled => disable google analytics
        if (!cc.allowedCategory('analytics')) {
            typeof gtag === 'function' && gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
    },

    languages: {
        'de': {
            consent_modal: {
                title: 'Hallo Besucher, es gibt ein paar Cookies',
                description: 'Unsere Website verwendet essentielle Cookies, um den ordnungsgemäßen Betrieb zu gewährleisten, und Tracking/Analytics-Cookies, um zu verstehen, wie Sie damit interagieren. Letztere werden erst nach Zustimmung gesetzt. <a href="../site/datenschutzerklaerung.html" class="cc-link">Datenschutzerklärung</a>',
                primary_btn: {
                    text: 'Alle Akzeptieren',
                    role: 'accept_all' //'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Einstellungen',
                    role: 'settings' //'settings' or 'accept_necessary'
                },
                revision_message: '<br><br> Geehrter User die Cookies haben sich seit Ihrem letzten Besuch geändert.'
            },
            settings_modal: {
                title: 'Cookie Einstellungen',
                save_settings_btn: 'Speichern',
                accept_all_btn: 'Alle Akzeptieren',
                reject_all_btn: 'Alle Ablehnen',
                close_btn_label: 'Schliessen',
                cookie_table_headers: [
                    { col1: 'Name' },
                    { col2: 'Domain' },
                    { col3: 'Expiration' }
                ],
                blocks: [{
                        title: 'Cookie Verwendung',
                        description: VERWENDUNG + ' <a href="../site/datenschutzerklaerung.html" class="cc-link">Datenschutzerklärung</a>.'
                    }, {
                        title: 'technisch erforderliche Cookies',
                        description: NOTWENDIGE,
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true //cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Analyse- und Leistungs-Cookies',
                        description: ANALYTICS,
                        toggle: {
                            value: 'analytics',
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [{
                                col1: 'Google Analytics',
                                col2: 'https://analytics.google.com',
                                col3: 'Zeigt das Nutzerverhalten der User auf (wieviel Zeit sie auf welchem Teil der Website verbringen, etc)',
                                is_regex: true
                            },
                            {
                                col1: 'Google reCaptcha',
                                col2: 'https://developers.google.com/recaptcha',
                                col3: 'Software zur Zertifizierung von Menschen und dem blockieren von Bots.',
                            }
                        ]
                    }, {
                        title: 'Soziale Medien',
                        description: SOZIALMEDIA,
                        toggle: {
                            value: 'socialmedia',
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [{
                            col1: 'Facebook',
                            col2: 'https://facebook.com',
                            col3: 'Zum Teilen und zur Verbeitung von Neuigkeiten und Events, etc.',
                            is_regex: true
                        }]
                    },
                    /*{
                                       title: 'Targeting & Advertising cookies',
                                       description: 'If this category is deselected, <b>the page will reload when preferences are saved</b>... <br><br>(demo example with reload option enabled, for scripts like microsoft clarity which will re-set cookies and send beacons even after the cookies have been cleared by the cookieconsent\'s autoclear function)',
                                       toggle: {
                                           value: 'targeting',
                                           enabled: false,
                                           readonly: false,
                                           reload: 'on_disable' // New option in v2.4, check readme.md
                                       },
                                       cookie_table: [{
                                           col1: '^_cl', // New option in v2.4: regex (microsoft clarity cookies)
                                           col2: 'yourdomain.com',
                                           col3: 'These cookies are set by microsoft clarity',
                                           // path: '/',               // New option in v2.4
                                           is_regex: true // New option in v2.4
                                       }]
                                   },*/
                    {
                        title: 'More information',
                        description: INFOS + ' <a class="cc-link" href="mailto:muster@ag.ch?subject=Frage%20Cookies">Kontaktieren Sie mich</a>.',
                    }
                ]
            }
        }
    }
});