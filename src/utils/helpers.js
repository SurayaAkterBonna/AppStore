export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num;
};

export const calculateAverageRating = (ratings) => {
  if (!ratings || ratings.length === 0) return 0;
  
  const totalStars = ratings.reduce((acc, rating, index) => {
   
    return acc + rating.count * (index + 1);
  }, 0);
  
  const totalReviews = ratings.reduce((acc, rating) => acc + rating.count, 0);

  if (totalReviews === 0) return 0;

  return (totalStars / totalReviews).toFixed(1);
}