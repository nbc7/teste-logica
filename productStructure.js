const products = [
  'preto-PP',
  'preto-M',
  'preto-G',
  'preto-GG',
  'preto-GG',
  'branco-PP',
  'branco-G',
  'vermelho-M',
  'azul-XG',
  'azul-XG',
  'azul-XG',
  'azul-P',
];

module.exports = () => {
  const productVariants = {};

  products.forEach((product) => {
    const [color, size] = product.split('-');

    if (!productVariants[color]) {
      productVariants[color] = {};
    }

    if (!productVariants[color][size]) {
      productVariants[color][size] = 1;
    } else {
      productVariants[color][size]++;
    }
  });

  return productVariants;
};
