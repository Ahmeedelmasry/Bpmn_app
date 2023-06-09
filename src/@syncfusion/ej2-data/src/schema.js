/* tslint:disable:typedef */
// tslint:disable-next-line:missing-jsdoc
export var schema = 
// tslint:disable-next-line:no-multiline-string
"input Sort {\n    name: String!\n    direction: String!\n}\n\ninput Aggregate {\n    field: String!\n    type: String!\n}\n\ninput DataManager {\n    skip: Int\n    take: Int\n    sorted: [Sort]\n    group: [String]\n    table: String\n    select: [String]\n    where: String\n    search: String\n    requiresCounts: Boolean,\n    aggregates: [Aggregate],\n    params: String\n}";
