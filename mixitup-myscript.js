let mixer = mixitup('#filter_items', {
    multifilter: { enable: true },
    callbacks: {
        onMixStart: function(state, futureState) {
            console.log(futureState.activeFilter.selector);
        },
        onMixFail: function(state) {
            $('.filter-fail').fadeIn(100);
        },
        onMixClick: function(state, originalEvent) {
            $('.filter-fail').fadeOut(0);
       }
    }
});

mixer.setFilterGroupSelectors('material', '.acrylic');
mixer.setFilterGroupSelectors('manufacturer', '.tristone');
mixer.parseFilterGroups();