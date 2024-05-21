export const roleFormatting = (role) =>{
    const words = role.split(' ');
    if (words.length === 2) {
      // If the size is 2, uppercase the first letter of both strings
      return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    } else if (words.length === 1) {
      // If the size is 1, uppercase the first letter of the first string and concatenate " Developer"
      return words[0].charAt(0).toUpperCase() + words[0].slice(1) + " Developer";
    } else {
      // Handle any unexpected cases (though there shouldn't be any in your specified input)
      return role;
    }
}