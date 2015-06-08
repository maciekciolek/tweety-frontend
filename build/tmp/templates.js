(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/events/addComment/addComment.html",
    "<div>\n" +
    "    <div class=\"modal-header\">\n" +
    "        <button type=\"button\" class=\"close pull-right\" ng-click=\"$dismiss()\" aria-hidden=\"true\">&times;</button>\n" +
    "        <h4 class=\"modal-title\">{{'events.show.addComment' | translate}}</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <form name=\"form\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"large-12 columns\">\n" +
    "                    <label>{{'events.show.text' | translate}}\n" +
    "                        <textarea rows=\"6\" ng-model=\"text\"></textarea>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button class=\"button small\" ng-click=\"$dismiss()\">Cancel</button>\n" +
    "        <button type=\"button\" class=\"button small\" ng-click=\"addComment()\">{{'events.show.addComment' | translate}}</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/auth/partial/login/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"large-12 columns\">\n" +
    "        <h1>{{'auth.login' | translate}}</h1>\n" +
    "\n" +
    "        <div class=\"text-center\" ng-show=\"!vm.success\">\n" +
    "            <a ng-click=\"vm.login()\" class=\"button\">{{'auth.login.button' | translate}}</a>\n" +
    "        </div>\n" +
    "        <div class=\"alert-box success\" ng-show=\"vm.success\">{{'auth.login.success' | translate}}</div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/auth/partial/register/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"large-12 columns\">\n" +
    "        <h1>{{'auth.register' | translate}}</h1>\n" +
    "\n" +
    "        <div class=\"alert-box success\" ng-show=\"vm.success\">{{'auth.register.success' | translate}}</div>\n" +
    "        <div class=\"alert-box alert\" ng-repeat=\"(key, value) in vm.errors\">{{key}} {{value[0]}}</div>\n" +
    "\n" +
    "        <form name=\"form\" ng-show=\"!vm.success\" novalidate>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"large-12 columns\">\n" +
    "                    <label>{{'auth.register.login' | translate}}\n" +
    "                        <input type=\"text\" placeholder=\"{{'auth.register.login' | translate}}\"\n" +
    "                               ng-model=\"vm.registerData.login\" required=\"\"/>\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "                <div class=\"large-12 columns\">\n" +
    "                    <label>{{'auth.register.type' | translate}}</label>\n" +
    "                    <select ng-options=\"t.type as t.translation for t in vm.types\" ng-model=\"vm.registerData.type\" required=\"\"></select>\n" +
    "                </div>\n" +
    "                <div class=\"text-center\">\n" +
    "                    <button type=\"submit\" ng-click=\"vm.register()\" class=\"button\" ng-disabled=\"form.$invalid\">{{'auth.register' | translate}}</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/events/partial/eventList/eventList.html",
    "<div class=\"row\">\n" +
    "    <div class=\"large-12 columns\">\n" +
    "        <h1>{{'events.list' | translate}}</h1>\n" +
    "\n" +
    "        <div class=\"panel\" ng-repeat=\"event in vm.events\">\n" +
    "            <h2>{{event.name}}</h2>\n" +
    "\n" +
    "            <p>{{event.description}}</p>\n" +
    "\n" +
    "            <div class=\"text-right\">\n" +
    "                <a ui-sref=\"events.show({eventId: event.id})\" class=\"button\">{{'events.show' | translate}}</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/events/partial/eventCreate/eventCreate.html",
    "<div class=\"row\">\n" +
    "    <div class=\"large-12 columns\">\n" +
    "        <h1>{{'events.create' | translate}}</h1>\n" +
    "\n" +
    "        <div class=\"alert-box success\" ng-show=\"vm.success\">{{'events.create.success' | translate}}</div>\n" +
    "        <div class=\"alert-box alert\" ng-show=\"vm.error !== false\">{{vm.error}}</div>\n" +
    "\n" +
    "        <form name=\"form\" ng-show=\"!vm.success\" novalidate>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"large-12 columns\" ng-class=\"{error: !form.meetup.$pristine && form.meetup.$invalid}\">\n" +
    "                    <label>{{'events.create.meetup' | translate}}\n" +
    "                        <input type=\"text\" ng-model=\"vm.event.meetup_link\" name=\"meetup\" required/>\n" +
    "                    </label>\n" +
    "                    <small class=\"error\" ng-show=\"!form.meetup.$pristine && form.meetup.$invalid\">{{'events.create.required' | translate}}</small>\n" +
    "                </div>\n" +
    "                </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"large-12 columns\" ng-class=\"{error: !form.twitter.$pristine && form.twitter.$invalid}\">\n" +
    "                    <label>{{'events.create.twitter' | translate}}\n" +
    "                        <input type=\"text\" ng-model=\"vm.event.twitter_tag\" name=\"twitter\" required/>\n" +
    "                    </label>\n" +
    "                    <small class=\"error\" ng-show=\"!form.twitter.$pristine && form.twitter.$invalid\">{{'events.create.required' | translate}}</small>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row text-center\">\n" +
    "                <button type=\"button\" class=\"button small\" ng-disabled=\"form.$invalid\" ng-click=\"vm.createEvent()\">{{'events.create' | translate}}</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("modules/events/partial/eventShow/eventShow.html",
    "<div class=\"row\" id=\"event-show\">\n" +
    "    <div class=\"large-12 columns\">\n" +
    "        <h1>{{vm.event.name}}</h1>\n" +
    "\n" +
    "        <div class=\"panel\">\n" +
    "            <p>{{vm.event.description}}</p>\n" +
    "        </div>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"large-6 columns\">\n" +
    "                <h3>Comments</h3>\n" +
    "            </div>\n" +
    "            <div class=\"large-6 columns text-right\">\n" +
    "                <button class=\"button\" ng-click=\"vm.addComment()\" show-authenticated>{{'events.show.addComment' | translate}}</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"comments\">\n" +
    "            <div class=\"comment\" ng-repeat=\"c in vm.event.comments\">\n" +
    "                <div class=\"panel\">\n" +
    "                    <p>{{c.content}}</p>\n" +
    "\n" +
    "                    <div class=\"author\"><strong>{{c.author_name}}</strong>, {{c.created_at | date :'medium'}}</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
})();
