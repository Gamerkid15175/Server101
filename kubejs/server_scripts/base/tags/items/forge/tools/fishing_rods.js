onEvent('item.tags', (event) => {
    var items = [/fishing_rod$/];

    var exceptions = [];

    var tags = ['forge:tools', 'forge:tools/fishing_rods'];

    tags.forEach((tag) => {
        event.get(tag).add(items).remove(exceptions);
    });
});
