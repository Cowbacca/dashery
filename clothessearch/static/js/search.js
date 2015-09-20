$(document).ready(function () {
    var engine = new Bloodhound({
        local: [
            {
                category: 'Colour',
                value: 'grey',
            },
            {
                category: 'Type',
                value: 'trousers',
            },
            {
                category: 'Material',
                value: 'wool',
            },
            {
                category: 'Origin',
                value: 'Made in England',
            },
        ],
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
    });

    engine.initialize();

    $('.tokenfield-search').tokenfield({
        typeahead: [null,
            {
                source: engine.ttAdapter(),
                name: 'clothes',
                display: 'value',
                templates: {
                    suggestion: Handlebars.compile('<div>{{category}}: {{value}}</div>')
                },
            }
        ]
    }).parent().on('keydown', this, function (event) {
        if (event.ctrlKey && event.keyCode == 13) {
           search();
        }
    });
});

function search() {
    window.location.pathname='results';
}