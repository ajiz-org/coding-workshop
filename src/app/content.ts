const f = <K extends string>(x: Record<K, { name: string, pic: string, price: number, gamme?: never }>) => x
export const gammes = f({
    'anti-ride': {
        name: 'Anti Ride',
        pic: '10.jpg',
        price: 120
    },
    'brise-marine': {
        name: 'Brise Marine',
        pic: '4.jpg',
        price: 70
    },
    'eponge-bio': {
        name: 'Eponge BIO',
        pic: '8.jpg',
        price: 10
    }
})

export const products: { id: string, gamme: keyof typeof gammes, name: string, desc: string, price: number, pic: string, n?: number }[] = [{
    id: 'anti-pelliculaire',
    gamme: 'brise-marine',
    name: 'Après-shampooing Anti-pelliculaire',
    desc: `L'après-shampooing anti-pelliculaire est formulé pour compléter l'action du shampooing en nourrissant et hydratant les cheveux et le cuir chevelu. Enrichi en huile d'argan et en vitamine E, il apaise les irritations et revitalise les cheveux. Il laisse les cheveux doux, brillants et faciles à coiffer, tout en aidant à prévenir la réapparition des pellicules`,
    price: 25,
    pic: '6.jpg'
}, {
    id: 'creme-anti-ride',
    desc: `La crème anti-rides est formulée pour réduire visiblement les signes du vieillissement cutané. Enrichie en peptides et en acide hyaluronique, elle hydrate en profondeur pour lisser les rides et ridules, tout en améliorant l'élasticité et la fermeté de la peau.`,
    price: 75,
    gamme: 'anti-ride',
    name: 'Crème anti-rides',
    pic: '2.jpg'
}, {
    id: 'eponge-cosmetiques',
    desc: `Les éponges cosmétiques sont des outils essentiels pour une application de maquillage impeccable. Leur texture douce et non irritante est conçue pour estomper et mélanger le maquillage de manière homogène, laissant un fini naturel et sans traces. Leur conception permet une application précise, même dans les zones difficiles d'accès du visage. Faciles à nettoyer et durables, ces éponges peuvent être utilisées avec différents produits de maquillage pour une application professionnelle`,
    price: 6.5,
    gamme: 'eponge-bio',
    pic: '8.jpg',
    n: 4,
    name: 'Eponge Cosmétique'
}, {
    id: 'savon-anti-rides',
    gamme: 'anti-ride',
    desc: `Le savon anti-rides est un soin nettoyant innovant qui réduit l'apparence des rides et ridules. Enrichi en collagène et en huile d'argan, il hydrate et revitalise la peau pour une apparence plus jeune et ferme. Les propriétés exfoliantes douces aident à éliminer les cellules mortes, favorisant le renouvellement cellulaire et améliorant la texture de la peau.`,
    price: 30,
    name: 'Savon anti-rides',
    pic: '3.jpg'
}, {
    id: 'shampooing-anti-pelliculaire',
    desc: `Le shampooing anti-pelliculaire à base d'éponge est formulé avec des ingrédients actifs tels que le pyrithione de zinc et l'acide salicylique pour éliminer les pellicules tout en apaisant et en hydratant le cuir chevelu. L'éponge intégrée permet une application ciblée et en profondeur, offrant une sensation de fraîcheur et de propreté durable.`,
    price: 30,
    name: 'Shampooing Anti-pelliculaire',
    gamme: 'brise-marine',
    pic: '5.jpg'
}, {
    id: 'serum-anti-rides',
    desc: `Découvrez notre sérum anti-rides avancé, une solution puissante pour une peau visiblement plus jeune. Formulé avec des ingrédients naturels et des antioxydants, notre sérum réduit les rides et les ridules tout en hydratant profondément la peau. Léger et non gras, il convient à tous les types de peau pour un teint radieux et rajeuni.`,
    price: 20,
    gamme: 'anti-ride',
    name: 'Serum Anti Ride',
    pic: '1.jpg'
}, {
    id: 'gel-douche',
    name: 'Gel Douche',
    desc: `Le gel douche rafraîchissant nettoie en douceur tout en hydratant et revitalisant la peau. Enrichi en extraits de menthe poivrée et d'eucalyptus, sa formule apporte une sensation de fraîcheur revitalisante. Sa texture légère se transforme en une mousse onctueuse qui nettoie efficacement sans dessécher la peau.`,
    pic: '7.jpg',
    price: 20,
    gamme: 'brise-marine',
}]