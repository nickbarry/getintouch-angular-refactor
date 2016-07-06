angular.module('getintouch.services', [])
  .factory('Contacts', function(){
    var contacts = [
      { name: 'Elyse Green',
        lastContacted: new moment().hours(0).minutes(0).seconds(0).milliseconds(0),
        lastContactedLabel: new moment().hours(0).minutes(0).seconds(0).milliseconds(0).format('MMM D, YYYY'),
        contactFrequency: 1,
        contactNext: new moment("2016-07-06")
      },{
        name: 'Chris Brenton',
        lastContacted: new moment("2016-06-30"),
        lastContactedLabel: new moment("2016-06-30").format('MMM D, YYYY'),
        contactFrequency: 14,
        contactNext: new moment("2016-07-13")
      },{
        name: 'Catrina Fuentes',
        lastContacted: new moment("2015-02-20"),
        lastContactedLabel: new moment("2015-02-20").format('MMM D, YYYY'),
        contactFrequency: 180,
        contactNext: new moment("2015-08-20")
      },{
        name: 'Nick Winter',
        lastContacted: new moment("2015-01-30"),
        lastContactedLabel: new moment("2015-01-30").format('MMM D, YYYY'),
        contactFrequency: 365,
        contactNext: new moment("2016-01-30")
      }];

    var getContacts = function(){
      return contacts;
    };

    var newContact = function(newC){
      if(newC.name === ''){
        // TODO: Create some error conditions
        return;
      }

      newC.contactFrequency = newC.contactFrequency || '180';
      newC.lastContacted = newC.lastContacted ?
        new moment(newC.lastContacted) :
        new moment().hours(0).minutes(0).seconds(0).milliseconds(0).subtract(+newC.contactFrequency,'days');
      newC.lastContactedLabel = newC.lastContacted.format('MMM D, YYYY');
      newC.contactNext = newC.lastContacted.add(+newC.contactFrequency,'days');

      contacts.push(newC);
    };

    var markAsNew = function(contact){
      contact.lastContacted = new moment().hours(0).minutes(0).seconds(0).milliseconds(0); // Record today's contact
      contact.lastContactedLabel = contact.lastContacted.format('MMM D, YYYY');
      contact.contactNext = moment(contact.lastContacted).add(contact.contactFrequency, 'days'); // update .contactNext property
    };

    return {
      getContacts: getContacts,
      newContact: newContact,
      markAsNew: markAsNew
    };
  });