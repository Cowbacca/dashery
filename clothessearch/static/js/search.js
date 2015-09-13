$(document).ready(function () {
    var engine = new Bloodhound({
        local: [
            {
                category: 'Colour',
                value: 'blue',
            },
            {
                category: 'Type',
                value: 'jacket',
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

    $('#tokenfield').tokenfield({
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
    });
});