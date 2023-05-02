/**
 *  BasicShapeDictionary defines the shape of the built-in basic shapes \
 *
 * @returns { string }      BasicShapeDictionary defines the shape of the built-in basic shapes .\
 * @param {string} shape - provide the element value.
 *
 * @private
 */
export function getBasicShape(shape) {
    return basicShapes[shape.toString()];
}
// eslint-disable-next-line prefer-const
var basicShapes = {
    //Rectangle,
    'Rectangle': 'M0,0 L50,0 L50,50 L0,50 z',
    //Ellipse,
    'Ellipse': 'M80.5,12.5 C80.5,19.127417 62.59139,24.5 40.5,24.5 C18.40861,24.5 0.5,19.127417 0.5,12.5' +
        'C0.5,5.872583 18.40861,0.5 40.5,0.5 C62.59139,0.5 80.5,5.872583 80.5,12.5 z',
    //Hexagon,
    'Hexagon': 'M30,0 L60,0 L90,30 L60,60 L30,60 L0,30 L30,0 z',
    //Parallelogram,
    'Parallelogram': 'M30,0 L60,0 L45,30 L15,30 z',
    //Triangle,
    'Triangle': 'M45,0 L90,45 L0,45 L45,0 z',
    //Plus,
    'Plus': 'M696.6084,158.2656 L674.8074,158.2656 L674.8074,136.4656 L658.4084,136.4656 L658.4084,158.2656 L636.6084,158.2656' +
        'L636.6084,174.6646 L658.4084,174.6646 L658.4084,196.4656 L674.8074,196.4656 L674.8074,174.6646 L696.6084,174.6646' +
        'L696.6084,158.2656 z',
    //Star,
    'Star': 'M540.3643,137.9336 L546.7973,159.7016 L570.3633,159.7296 L550.7723,171.9366 L558.9053,194.9966 L540.3643,179.4996' +
        'L521.8223,194.9966 L529.9553,171.9366 L510.3633,159.7296 L533.9313,159.7016 L540.3643,137.9336 z',
    //Pentagon,
    'Pentagon': 'M30,0 L60,30 L50,70 L10,70 L0,30 L30,0 z',
    //Heptagon,
    'Heptagon': 'M223.7783,195.7134 L207.1303,174.8364 L213.0713,148.8034 L237.1303,137.2174 L261.1883,148.8034 L267.1303,174.8364' +
        'L250.4813,195.7134 L223.7783,195.7134 z',
    //Octagon,
    'Octagon': 'M98.7319,196.4653 L81.1579,178.8923 L81.1579,154.0393 L98.7319,136.4653 L123.5849,136.4653' +
        'L141.1579,154.0393 L141.1579,178.8923 L123.5849,196.4653 L98.7319,196.4653 z',
    //Trapezoid,
    'Trapezoid': 'M127.2842,291.4492 L95.0322,291.4492 L81.1582,256.3152 L141.1582,256.3152 L127.2842,291.4492 z',
    //Decagon,
    'Decagon': 'M657.3379,302.4141 L642.3369,291.5161 L636.6089,273.8821 L642.3369,256.2481 L657.3379,245.3511 L675.8789,245.3511' +
        'L690.8789,256.2481 L696.6089,273.8821' +
        'L690.8789,291.5161 L675.8789,302.4141 L657.3379,302.4141 z',
    //RightTriangle,
    'RightTriangle': 'M836.293,292.9238 L776.293,292.9238 L776.293,254.8408 L836.293,292.9238 z',
    //Cylinder,
    'Cylinder': 'M 542.802,362.009C 542.802,368.452 525.341,373.676 503.802,373.676C 482.263,373.676 464.802,368.452 464.802,362.009' +
        'L 464.802,466.484C 464.802,472.928 482.263,478.151 503.802,478.151' +
        'C 525.341,478.151 542.802,472.928 542.802,466.484L 542.802,362.016C 542.802,368.459 525.341,373.534 503.802,373.534' +
        'C 482.263,373.534 464.802,368.31 464.802,361.867' +
        'L 464.802,362.016C 464.802,355.572 482.263,350.349 503.802,350.349C 525.341,350.349 542.802,355.572 542.802,362.016',
    //Diamond,
    'Diamond': 'M397.784,287.875 L369.5,316.159 L341.216,287.875 L369.5,259.591 L397.784,287.875 z'
};
