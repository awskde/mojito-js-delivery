
Mojito.addTest({
    id: 'ex1',
    name:'Google message straight JS',
    sampleRate: 1,
    state: 'live',
    trigger:function(test){
        // Only activate and bucket users into the experiment if they come from Google
        // (Runs as soon as Mojito.addTest is called)
        if (document.referrer.indexOf('google.com') > -1) test.activate();
    },
    recipes:{
        '0': {
            name: 'Control'
        },
        '1':{
            name: 'Treatment',
            js: function() {
                // This code will run once the test activates & the user is bucketed
                alert('Hi Google user!');
            }
        }
    }
});
