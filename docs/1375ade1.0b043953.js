(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{299:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||r;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),r=(n(0),n(299)),o={title:"Developer Guide",slug:"/enterprise/developer-guide"},l={unversionedId:"enterprise/developer-guide",id:"enterprise/developer-guide",isDocsHomePage:!1,title:"Developer Guide",description:"App Bundle Structure",source:"@site/docs/enterprise/developer-guide.md",slug:"/enterprise/developer-guide",permalink:"/wave/docs/enterprise/developer-guide",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/enterprise/developer-guide.md",version:"current",sidebar:"someSidebar",previous:{title:"Basic Concepts",permalink:"/wave/docs/enterprise/basic-concepts"},next:{title:"Gallery",permalink:"/wave/docs/examples"}},p=[{value:"App Bundle Structure",id:"app-bundle-structure",children:[{value:"app.toml",id:"apptoml",children:[]}]},{value:"Runtime Environment",id:"runtime-environment",children:[]},{value:"CLI",id:"cli",children:[{value:"Configuring the CLI",id:"configuring-the-cli",children:[]},{value:"Listing existing apps",id:"listing-existing-apps",children:[]},{value:"Launching existing apps",id:"launching-existing-apps",children:[]},{value:"Publishing an app for others to see and launch",id:"publishing-an-app-for-others-to-see-and-launch",children:[]},{value:"Running an app under development",id:"running-an-app-under-development",children:[]},{value:"Getting the logs of a running app instance",id:"getting-the-logs-of-a-running-app-instance",children:[]},{value:"Running the app in cloud-like environment locally",id:"running-the-app-in-cloud-like-environment-locally",children:[]},{value:"Updating App Visibility",id:"updating-app-visibility",children:[]},{value:"Updating Instance Visibility",id:"updating-instance-visibility",children:[]},{value:"Managing App Tags",id:"managing-app-tags",children:[]}]},{value:"How-To",id:"how-to",children:[{value:"Updating App To a Newer Version",id:"updating-app-to-a-newer-version",children:[]},{value:"Utilizing Secrets",id:"utilizing-secrets",children:[]},{value:"App Route",id:"app-route",children:[]}]}],c={rightToc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"app-bundle-structure"},"App Bundle Structure"),Object(r.b)("p",null,"Each app has to be bundled as a zip archive (commonly used with suffix ",Object(r.b)("inlineCode",{parentName:"p"},".wave"),")\nconsisting of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"app.toml")," - required; the platform configuration file"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"static/")," - static asset directory, including the app icon (a png file starting with ",Object(r.b)("inlineCode",{parentName:"li"},"icon"),")\nand screenshots (files starting with ",Object(r.b)("inlineCode",{parentName:"li"},"screenshot"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"requirements.txt")," - pip-managed dependencies of the app (can contain references to ",Object(r.b)("inlineCode",{parentName:"li"},".whl")," files\nincluded in the ",Object(r.b)("inlineCode",{parentName:"li"},".wave")," using paths relative to the archive root)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"packages.txt")," - OS-managed dependencies of the app"),Object(r.b)("li",{parentName:"ul"},"app source code")),Object(r.b)("p",null,"You can quickly create a ",Object(r.b)("inlineCode",{parentName:"p"},".wave")," archive by running ",Object(r.b)("inlineCode",{parentName:"p"},"h2o bundle")," in your app git repository\n(see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#cli"}),"CLI")," section)"),Object(r.b)("h3",{id:"apptoml"},"app.toml"),Object(r.b)("p",null,"Each app archive has to contain a ",Object(r.b)("inlineCode",{parentName:"p"},"app.toml")," configuration file in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://toml.io/en/"}),"TOML")," format,\nplaced in the root of the ",Object(r.b)("inlineCode",{parentName:"p"},".wave")," archive, example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'[App]\nName = "ai.h2o.wave.my-app"\nVersion = "0.0.1"\nTitle = "My awesome app"\nDescription = "This is my awesome app"\nLongDescription = "LongDescription.md"\nCategory = "Other"\nKeywords = ["awesome"]\n\n[Runtime]\nModule = "app.run"\nVolumeMount = "/data"\nVolumeSize = "1Gi"\nResourceVolumeSize = "2Gi"\nMemoryLimit = "500Mi"\nMemoryReservation = "400Mi"\n\n[[Env]]\nName = "ENVIRONMENT_VARIABLE_NAME"\nSecret = "SecretName"\nSecretKey = "SecretKeyName"\n\n[[Env]]\nName = "ANOTHER_ENVIRONMENT_VARIABLE_NAME"\nValue = "some value"\n\n[[File]]\nPath = "some/path.file"\nSecret = "FileSecretName"\nSecretKey = "FileSecretKeyName"\n\n[[File]]\nPath = "/another/path.file"\nValue = \'\'\'\nsome\nstring\n\'\'\'\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Required attributes"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"App"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Name")," - a machine-oriented unique identifier of the app (links different app versions together)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Version")," - a ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://semver.org"}),"https://semver.org")," version of the app"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Runtime"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Module")," - the name of the main Python module of the app, i.e., the app should be started\nvia ",Object(r.b)("inlineCode",{parentName:"li"},"python3 -m $module_name"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Optional attributes"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"App"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Title")," - a human-oriented name of the app for presentation in UI/CLI; string"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Description")," - a single-line description of the app for presentation in UI/CLI; string"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LongDescription")," - a path to a file, relative to the archive root, containing additional\nmulti-line markdown description of the app; string;\nalthough there is no actual restriction of the Markdown format, it is recommended to limit\nit to bullet-point lists (",Object(r.b)("inlineCode",{parentName:"li"},"*"),"), H3 headings (",Object(r.b)("inlineCode",{parentName:"li"},"###"),"), and hyperlinks (",Object(r.b)("inlineCode",{parentName:"li"},"[]()"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Category")," - category for organizing apps into groups, string\n(UI recognizes ",Object(r.b)("inlineCode",{parentName:"li"},"All"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Data Science"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Financial Services"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Healthcare"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Insurance"),",\n",Object(r.b)("inlineCode",{parentName:"li"},"Manufacturing"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Marketing"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Retail"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Sales"),", ",Object(r.b)("inlineCode",{parentName:"li"},"Telecommunications"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"Other"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Keywords")," - keywords for search in the UI/CLI, list of strings"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Runtime"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"VolumeMount")," and ",Object(r.b)("inlineCode",{parentName:"li"},"VolumeSize")," - request for a volume to persist app instance data across\nrestarts, ",Object(r.b)("inlineCode",{parentName:"li"},"VolumeMount")," has to be an absolute path, ",Object(r.b)("inlineCode",{parentName:"li"},"VolumeSize")," needs to conform to the\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/fabric8io/kansible/blob/master/vendor/k8s.io/kubernetes/docs/design/resources.md#resource-quantities"}),"k8s resource model"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ResourceVolumeSize")," - request for a volume to persist internal app resources (such as Python venv)\nacross restarts, only recommended for production-quality apps with sizeable resources due\nto cluster node limits, needs to conform to the\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/fabric8io/kansible/blob/master/vendor/k8s.io/kubernetes/docs/design/resources.md#resource-quantities"}),"k8s resource model"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MemoryLimit")," and ",Object(r.b)("inlineCode",{parentName:"li"},"MemoryReservation")," - memory requirements for an instance of the app\n(default to service-wide settings managed by Admins); be conservative with these limits;\n",Object(r.b)("inlineCode",{parentName:"li"},"MemoryLimit")," is a hard limit on the maximum amount of memory an instance can use before it is OOM-killed;\n",Object(r.b)("inlineCode",{parentName:"li"},"MemoryReservation")," is how much memory is required to schedule an instance of the app."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Env")," - request for a literal value/secret to be injected into an instance at startup-time as an Env variable;\nrepeated; see ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#utilizing-secrets"}),"Utilizing Secrets"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Name")," - name of the Env variable to the injected into the Python process;\nnames prefixed with ",Object(r.b)("inlineCode",{parentName:"li"},"H2O_CLOUD")," are disallowed."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Secret")," - name of the shared secret to use; each secret can contain multiple key-value pairs;\ncannot be used together with ",Object(r.b)("inlineCode",{parentName:"li"},"Value"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SecretKey")," - name of the key within the secret to use; cannot be used together with ",Object(r.b)("inlineCode",{parentName:"li"},"Value"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Value")," - the literal value of the Env variable; cannot be used together with ",Object(r.b)("inlineCode",{parentName:"li"},"Secret"),"/",Object(r.b)("inlineCode",{parentName:"li"},"SecretKey"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"File")," - request for a literal value/secret to be injected into an instance at startup-time as a file;\nrepeated; see ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#utilizing-secrets"}),"Utilizing Secrets"),".",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Path")," - path to inject the file to; relative path means relative to the directory with the app code\nas determined by the platform; path dir cannot be ",Object(r.b)("inlineCode",{parentName:"li"},"/")," or ",Object(r.b)("inlineCode",{parentName:"li"},".")," (only subdirs are allowed);\npath dir has to be unique across all other ",Object(r.b)("inlineCode",{parentName:"li"},"File")," configurations; path dir ",Object(r.b)("inlineCode",{parentName:"li"},"/resources")," is\ndisallowed."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Secret")," - name of the shared secret to use; each secret can contain multiple key-value pairs;\ncannot be used together with ",Object(r.b)("inlineCode",{parentName:"li"},"Value"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"SecretKey")," - name of the key within the secret to use; cannot be used together with ",Object(r.b)("inlineCode",{parentName:"li"},"Value"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Value")," - the literal value of the file; cannot be used together with ",Object(r.b)("inlineCode",{parentName:"li"},"Secret"),"/",Object(r.b)("inlineCode",{parentName:"li"},"SecretKey"),".")))),Object(r.b)("h2",{id:"runtime-environment"},"Runtime Environment"),Object(r.b)("p",null,"The platform sets the app instance runtime environment, i.e., OS, Wave/Python version, location of the app code/venv, etc."),Object(r.b)("p",null,"Developers can specify the pip-managed dependencies of the app via standard ",Object(r.b)("inlineCode",{parentName:"p"},"requirements.txt")," (can contain\nreferences to ",Object(r.b)("inlineCode",{parentName:"p"},".whl")," files included in the ",Object(r.b)("inlineCode",{parentName:"p"},".wave")," using paths relative to the archive root)"),Object(r.b)("p",null,"Developers can also specify the OS-managed dependencies of the app via ",Object(r.b)("inlineCode",{parentName:"p"},"packages.txt")," in a format\nsimilar to ",Object(r.b)("inlineCode",{parentName:"p"},"requirements.txt"),": one package name per line.\nThese will be installed as given using the native package manager of the platform OS\n(e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"apt-get install")," for Debian)."),Object(r.b)("p",null,"Developers can further customize the runtime environment by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#utilizing-secrets"}),"Utilizing Secrets"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"At this moment, the platform does not provide any provisions for developers to customize the OS,\nPython, or Wave versions."),Object(r.b)("p",{parentName:"div"},"We are actively working on improving this."))),Object(r.b)("h2",{id:"cli"},"CLI"),Object(r.b)("p",null,"As a developer, you will need the ",Object(r.b)("inlineCode",{parentName:"p"},"h2o")," binary to interact with the platform."),Object(r.b)("h3",{id:"configuring-the-cli"},"Configuring the CLI"),Object(r.b)("p",null,"First you need to configure the CLI by running ",Object(r.b)("inlineCode",{parentName:"p"},"h2o config setup")," so that it knows how to talk\nto a particular platform deployment."),Object(r.b)("p",null,"Be aware, currently the CLI launches a browser to complete the user authentication, and due to this\nwe currently unable to support remote use of the CLI over SSH without provisions for X forwarding."),Object(r.b)("h3",{id:"listing-existing-apps"},"Listing existing apps"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"h2o app list -a")," command will list all apps available for launch."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ h2o app list -a\nID                                    TITLE                        OWNER            CREATED CATEGORY      VISIBILITY    TAGS\nabc543210-0000-0000-0000-1234567890ab Peak 0.1.1                   user1@h2o.ai     18d     Healthcare    ALL_USERS     Beta\nbcd543210-1111-1111-1111-0123456789ab Tour 0.0.15-20200922162859   user2@h2o.ai     20d     Other         ALL_USERS\n...\n")),Object(r.b)("h3",{id:"launching-existing-apps"},"Launching existing apps"),Object(r.b)("p",null,"To launch an app, the ",Object(r.b)("inlineCode",{parentName:"p"},"h2o app run <appId>")," command can be used to launch a new instance of that app.\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"-v")," flag can be used with ",Object(r.b)("inlineCode",{parentName:"p"},"app run")," to specify app instance visibility settings."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ h2o app run bcd543210-1111-1111-1111-0123456789ab\nID  22222222-3333-4444-5555-666666666666\nURL https://22222222-3333-4444-5555-666666666666.wave.h2o.ai\n")),Object(r.b)("h3",{id:"publishing-an-app-for-others-to-see-and-launch"},"Publishing an app for others to see and launch"),Object(r.b)("p",null,"Just run ",Object(r.b)("inlineCode",{parentName:"p"},"h2o bundle import")," in your app git repository. This will automatically package your\ncurrent directory into a ",Object(r.b)("inlineCode",{parentName:"p"},".wave")," package and import it into the platform."),Object(r.b)("p",null,"If you set the visibility to ",Object(r.b)("inlineCode",{parentName:"p"},"ALL_USERS")," (via the ",Object(r.b)("inlineCode",{parentName:"p"},"-v")," flag), others will be able use ",Object(r.b)("inlineCode",{parentName:"p"},"h2o app run"),"\nor the UI to launch the app."),Object(r.b)("p",null,"Note: the name-version combination from your ",Object(r.b)("inlineCode",{parentName:"p"},"app.toml")," has to be unique and the platform will reject\nthe request if such combination already exists. Therefore, you need to update the version in ",Object(r.b)("inlineCode",{parentName:"p"},"app.toml"),"\nbefore each run."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ h2o bundle import -v ALL_USERS\nID              bcd543210-1111-1111-1111-0123456789ab\nTitle           Peak\nVersion         0.1.2\nCategory        Healthcare\nCreated At      2020-10-13 06:28:03.050226 +0000 UTC\nUpdated At      2020-10-13 06:28:03.050226 +0000 UTC\nOwner           user1@h2o.ai\nVisibility      ALL_USERS\nDescription     Forecast of COVID-19 spread\nTags\n")),Object(r.b)("h3",{id:"running-an-app-under-development"},"Running an app under development"),Object(r.b)("p",null,"Just run ",Object(r.b)("inlineCode",{parentName:"p"},"h2o bundle deploy")," in your app git repository. This will automatically package your\ncurrent directory into a ",Object(r.b)("inlineCode",{parentName:"p"},".wave")," package, import it into the platform, and run it."),Object(r.b)("p",null,'In the output you will be able to find a URL where you can reach the instance, or visit\nthe "My Instances" in the UI.'),Object(r.b)("p",null,"Note: the CLI will auto-generate the version so that you can keep executing this without worrying about\nversion conflicts, just don't forget to clean up old instances/versions."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ h2o bundle deploy\nID              bcd543210-1111-1111-1111-0123456789ab\nTitle           Peak\nVersion         0.1.2-20201013062803\nCategory        Healthcare\nCreated At      2020-10-13 06:28:03.050226 +0000 UTC\nUpdated At      2020-10-13 06:28:03.050226 +0000 UTC\nOwner           user1@h2o.ai\nVisibility      PRIVATE\nDescription     Forecast of COVID-19 spread\nTags\nID  22222222-3333-4444-5555-666666666666\nURL https://22222222-3333-4444-5555-666666666666.wave.h2o.ai\n")),Object(r.b)("h3",{id:"getting-the-logs-of-a-running-app-instance"},"Getting the logs of a running app instance"),Object(r.b)("p",null,"Just run ",Object(r.b)("inlineCode",{parentName:"p"},"h2o instance logs"),", use the flag ",Object(r.b)("inlineCode",{parentName:"p"},"-f")," (",Object(r.b)("inlineCode",{parentName:"p"},"--follow"),") to tail the log."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'$ h2o instance logs c22222222-3333-4444-5555-666666666666\n...\n2020/10/27 16:16:34 #\n2020/10/27 16:16:34 # \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n2020/10/27 16:16:34 # \u2502  \u250c    \u250c \u250c\u2500\u2500\u2510 \u250c  \u250c \u250c\u2500\u2500\u2510  \u2502 H2O Wave\n2020/10/27 16:16:34 # \u2502  \u2502 \u250c\u2500\u2500\u2518 \u2502\u2500\u2500\u2502 \u2502  \u2502 \u2514\u2510    \u2502 (version) (build)\n2020/10/27 16:16:34 # \u2502  \u2514\u2500\u2518    \u2518  \u2518 \u2514\u2500\u2500\u2518  \u2514\u2500\u2518  \u2502 \xa9 2020 H2O.ai, Inc.\n2020/10/27 16:16:34 # \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n2020/10/27 16:16:34 #\n2020/10/27 16:16:34 # {"address":":10101","t":"listen","webroot":"/wave/www"}\n2020/10/27 16:16:34 # {"host":"ws://127.0.0.1:10102","route":"/","t":"relay"}\n...\n')),Object(r.b)("h3",{id:"running-the-app-in-cloud-like-environment-locally"},"Running the app in cloud-like environment locally"),Object(r.b)("p",null,"Just run ",Object(r.b)("inlineCode",{parentName:"p"},"h2o exec"),". This will bundle the app in a temporary ",Object(r.b)("inlineCode",{parentName:"p"},".wave")," and launch it locally\nusing our platform docker image."),Object(r.b)("p",null,"Note that this requires that you have docker installed and that you have access to the docker image."),Object(r.b)("p",null,"Then navigate to ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:10101/<your main route>"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'$ h2o exec\n{"level":"info","log_level":"debug","url":"file:///wave_bundle/q-peak.0.1.2.wave","app_root":"/app","venv_root":"/resources","server_path":"/wave/wave","py_module":"peak","tmp":"/tmp","startup_server":true,"version":"latest-20200929","time":"2020-10-13T06:42:21Z","message":"configuration"}\n{"level":"info","port":":10101","time":"2020-10-13T06:42:21Z","message":"starting launcher server"}\n{"level":"info","executable":"/wave/wave","time":"2020-10-13T06:42:21Z","message":"wave executable found"}\n...\n')),Object(r.b)("h3",{id:"updating-app-visibility"},"Updating App Visibility"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"h2o app update <appId> -v <visbility>")," command can be used to modify an existing app's visibility."),Object(r.b)("p",null,"Authors who publish a new version of an app may want to de-list the old version.  It is not possible\nto remove an app if there are instances running, as the data may still need to be available.\nThe preferred method to de-list previous versions is to modify the visibility setting to ",Object(r.b)("inlineCode",{parentName:"p"},"PRIVATE"),"."),Object(r.b)("h3",{id:"updating-instance-visibility"},"Updating Instance Visibility"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"h2o instance update <instanceId> -v <visbility>")," command, much like the ",Object(r.b)("inlineCode",{parentName:"p"},"app")," version,\ncan be used to modify an existing running instance's visibility setting."),Object(r.b)("h3",{id:"managing-app-tags"},"Managing App Tags"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"h2o tag [assign, get, list, remove, update]")," commands let users see and, when authorized,\nmanage available app tags.\nApp tag configuration includes of name/title, RGB color, description, and ACLs\n(see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"basic-concepts#authorization"}),"Authorization")," for details on ACLs and semantics of the related\ntag attributes)."),Object(r.b)("h2",{id:"how-to"},"How-To"),Object(r.b)("h3",{id:"updating-app-to-a-newer-version"},"Updating App To a Newer Version"),Object(r.b)("p",null,'The "Catalog" page shows apps with visibility ',Object(r.b)("inlineCode",{parentName:"p"},"ALL_USERS"),", so rolling out a new app version is done by:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#publishing-an-app-for-others-to-see-and-launch"}),"importing a new version")," of the app as ",Object(r.b)("inlineCode",{parentName:"li"},"PRIVATE")),Object(r.b)("li",{parentName:"ol"},"testing the new version"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#updating-app-visibility"}),"changing the visibility")," of the new version to ",Object(r.b)("inlineCode",{parentName:"li"},"ALL USERS")),Object(r.b)("li",{parentName:"ol"},"(optional) ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#updating-app-visibility"}),"changing the visibility")," of the old version to ",Object(r.b)("inlineCode",{parentName:"li"},"PRIVATE"))),Object(r.b)("p",null,"This is based on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"basic-concepts#app"}),"Basic Concepts"),":"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Apps are mostly ",Object(r.b)("strong",{parentName:"p"},"immutable"),', meaning once uploaded, they cannot be changed (except for visibility).\nTo "update" an app, one has to upload a new version.')),Object(r.b)("p",null,"and:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Internally, H2O AI Cloud treats every app name/version combination as a separate entity.\nThe UI then uses the app name to link several versions together; however each can have different\ntitle, description, owner, instances, etc.")),Object(r.b)("p",null,"An important corollary is that ",Object(r.b)("strong",{parentName:"p"},"instances of the old app version are not affected by the update"),"\n(as they are completely separate from the new app version). The update only prevents users from\nstarting new instances of the old version."),Object(r.b)("h3",{id:"utilizing-secrets"},"Utilizing Secrets"),Object(r.b)("p",null,"Developers can pass secrets registered with the platform to apps, exposed as environment variables\nusing the ",Object(r.b)("inlineCode",{parentName:"p"},"[[Env]]")," section within the ",Object(r.b)("inlineCode",{parentName:"p"},"app.toml")," or as files using the ",Object(r.b)("inlineCode",{parentName:"p"},"[[File]]")," section."),Object(r.b)("p",null,"This allows developers to link their apps with external dependencies (e.g., S3, Driverless AI)\nsecurely, while allowing easy overrides for local development or deployments outside the platform."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"There is currently not a self-service option for developers to add their own secrets,\nnor is there an API for listing the available secrets.\nSecrets are currently managed by Admins.\nContact your admins for the available secrets or for adding a new one."),Object(r.b)("p",{parentName:"div"},"We are actively working on improving this."))),Object(r.b)("h3",{id:"app-route"},"App Route"),Object(r.b)("p",null,"While it is not a strict requirement, since the platform deploys each app with its own Wave server,\nwe advise that apps use ",Object(r.b)("inlineCode",{parentName:"p"},"/")," as their main route:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"@app('/')\nasync def serve(q: Q):\n    pass\n")))}s.isMDXComponent=!0}}]);