import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  session: service(),
  beforeModel: function () {
    return this.get("session")
      .fetch()
      .catch(function () {});
  },
  actions: {
    signIn: function (provider) {
      this.get("session")
        .open("firebase", { provider: provider })
        .then(function (data) {
          console.log(data.currentUser);
        });
    },
    signOut: function () {
      this.get("session").close();
    },
    saveIt: function () {
      var article = this.store.createRecord("article", {
        title: "Hello this is my title",
      });
      debugger;
      article.save();
    },
  },
});
