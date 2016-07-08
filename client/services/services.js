angular.module('getintouch.services', [])
  .factory('Contacts', function(){
    var contacts = [
      {
        id: 1,
        name: 'Elyse Greenarry',
        lastContacted: new moment("2016-07-01").hours(0).minutes(0).seconds(0).milliseconds(0),
        lastContactedLabel: new moment().hours(0).minutes(0).seconds(0).milliseconds(0).format('MMM D, YYYY'),
        contactFrequency: 1,
        contactNext: new moment("2016-07-02"),
        notes: 'Talk to her about my cool MVP.\n\nMarried on 5/14/16.\nBirthday 6/14/88',
        storiesDone: [2,3,4,5],
        message: ''
      },
      {
        id: 2,
        name: 'Chris Brenton',
        lastContacted: new moment("2016-06-30"),
        lastContactedLabel: new moment("2016-06-30").format('MMM D, YYYY'),
        contactFrequency: 14,
        contactNext: new moment("2016-07-13"),
        notes: "Python coder. Started the High Impact dodgeball league. Works a lot on improving/automating people's " +
          "workflows, e.g. deployment workflows.",
        storiesDone: [3,4],
        message: ''
      },
      {
        id: 3,
        name: 'Catrina Fuentes',
        lastContacted: new moment("2015-02-20"),
        lastContactedLabel: new moment("2015-02-20").format('MMM D, YYYY'),
        contactFrequency: 180,
        contactNext: new moment("2015-08-20"),
        notes: 'Recently (1/2015) started working at a cool company doing social media work for nonprofits.' +
          '\n\nInterned for me at Davis Dollars',
        storiesDone: [],
        message: ''
      },
      {
        id: 4,
        name: 'Nick Winter',
        lastContacted: new moment("2015-01-30"),
        lastContactedLabel: new moment("2015-01-30").format('MMM D, YYYY'),
        contactFrequency: 365,
        contactNext: new moment("2016-01-30"),
        notes: "Met through Cassie Winter, Nick's cousin. Nick started Code Combat, and now it mostly runs itself.",
        storiesDone: [],
        message: ''
      }
    ];

    var stories = [
      {
        id: 1,
        title: "MVP project",
        topic: 'MKS-detail',
        text: "I just spent a huge amount of time working on the 'Minimum Viable Product' project. It's the first project " +
          "we have worked on alone, and we had less than 24 hours to put together 'something that works'.\n\nI decided to " +
          "focus on a contacts reminder app that I've been thinking about for the past few months. ..."
      },
      {
        id: 4,
        title: "Started MKS",
        topic: "MKS-general",
        text: "Starting MKS has been a blast so far. I can't believe I'm almost half-way done."
      },
      {
        id: 2,
        title: "Got cats",
        topic: 'Miscellaneous',
        text: "We got a couple of really cute cats back in November. We named them Ari and Colvin. I'm sorry, but even if " +
        "you have cats, ours are better."
      },
      {
        id: 3,
        title: "Married!",
        topic: 'Miscellaneous',
        text: "We got MARRIED! OK, I'm excited, but things are pretty much the same as they were before.\n\nThe only change" +
          " is that I'm at MakerSquare the whole time, so Elyse keeps joking to people that all the myths are correct, and" +
          " she never sees me now that we're married."
      },
      {
        id: 5,
        title: "Angular rocks",
        topic: 'MKS-detail',
        text: "Angular rocks! Yes, it really does! This explains a lot: https://gfycat.com/JovialSimilarAnchovy"
      },
      {
        id: 6,
        title: 'Writing a blog',
        topic: 'MKS-general',
        text: "If you're curious about my progress at MakerSquare, check out my blog here: http://bithabit.tumblr.com"
      }
    ];

    var getContacts = function(){
      return contacts;
    };

    var getStories = function(){
      return stories;
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
      getStories: getStories,
      newContact: newContact,
      markAsNew: markAsNew
    };
  });