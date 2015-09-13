$(document).ready(function () {
    $('#tokenfield')
        .on('tokenfield:createtoken', function (e) {
            e.attrs.label = e.attrs.value;
        })
        .tokenfield({
            autocomplete: {
                source: [
                    {label: 'Material: Wool', value: 'wool'},
                    {label: 'Colour: Blue', value: 'blue'},
                    {label: 'Category: Jacket', value: 'jacket'},
                    {label: 'Made in: England', value: 'made in England'}
                ],
                delay: 100
            },
            showAutocompleteOnFocus: true
        })
});