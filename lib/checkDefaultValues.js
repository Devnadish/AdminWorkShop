// export const requireTags = ["رواتب"];

// export const checkDefalutValue = (array) => {
//     const tags = array.map(item => item.tag);
 
//   if (tags.includes(requireTags)) {
//     return true;
//   } else {
//     return false;
//   }
// };


export const requireTags = ["المهندسين", "الرواتب"];

export const checkRequireTags = (array) => {
    const tags = array.map(item => item.tag);
    
    const missingTags = requireTags.filter(tag => !tags.includes(tag));
    
    console.log(missingTags);
    
    if (missingTags.length > 0) {
        return missingTags;
    } else {
        return true;
    }
};