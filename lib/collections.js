Images = new Mongo.Collection("images");
Images.allow({
    insert: function(userId, doc) {
        console.log('Testing security on image insert');
        if (Meteor.user()) {
            console.log(doc);
            doc.createdBy = serId;
            if (userId != doc.createdBy) {
                return false;
            } else {
                return true;
            }
        }
        return true;
    },
    remove: function (userId, doc) {
        return true;
    }
});